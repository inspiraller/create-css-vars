import fs from 'fs';
import getSafMarkers from './getSafeMarkers';
import clearCssComments from './clearCssComents';

export interface KeyStringArr {
  [key: string]: string[];
}

export interface ObjCssAllNonMediaQuery {
  combined: KeyStringArr;
  single: KeyStringArr;
  withchild: KeyStringArr;
  pseudo: KeyStringArr;
}

export interface ObjCssAll extends ObjCssAllNonMediaQuery {
  mediaq: ObjCssAllNonMediaQuery;
}

const regCleanSel = /^\s*|\s*$/g;
const sregSelOr = 'a-zA-Z\\#\\.\\[\\]\\*';

const sregSel = `[${sregSelOr}]`;

// const replColon: TFuncStr = (str, m1) => str.replace(/\:/g, m1 as string);
const replColon: TFuncStr = str => str; // TODO:

type TcleanSelectors = (strSelectors: string) => string[];
const cleanSelectors: TcleanSelectors = strSelectors =>
  strSelectors.split(',').map(sel => sel.replace(regCleanSel, ''));

type TconstructObjCss = (props: {
  objCss: KeyStringArr;
  arrSelectors: string[];
  strCss: string;
}) => KeyStringArr;
export const constructCombinedObjCss: TconstructObjCss = ({ objCss, arrSelectors, strCss }) => {
  if (arrSelectors.length > 1) {
    const strCombineSelector = ',' + arrSelectors.join(',') + ',';
    if (!objCss[strCombineSelector]) {
      objCss[strCombineSelector] = [];
    }
    objCss[strCombineSelector].push(strCss);
  }
  return objCss;
};

type Titerate = (props: {
  objCss: KeyStringArr;
  str: string;
  sregNotCurly: string;
}) => KeyStringArr;

const iterateGetCombined: Titerate = ({ objCss, str, sregNotCurly }) => {
  const reg = RegExp(
    `(^|\\n)\\s*(${sregSel}[^\\{\\,]*\\,\\s*${sregSel}${sregNotCurly})\\{(${sregNotCurly})\\}`,
    'ig'
  );

  const marker = '$$';
  let arrM;

  while ((arrM = reg.exec(str))) {
    const strCss = arrM[3];
    let strSelectors = arrM[2];

    strSelectors = replColon(strSelectors, marker);
    const arrSelectors = cleanSelectors(strSelectors);
    objCss = constructCombinedObjCss({ objCss, arrSelectors, strCss });
  }

  return objCss;
};

export const constructSingleNonPseudoObjCss: TconstructObjCss = ({
  objCss,
  arrSelectors,
  strCss
}) => {
  const strSelector = arrSelectors[0];
  if (!objCss[strSelector]) {
    objCss[strSelector] = [];
  }
  objCss[strSelector].push(strCss);
  return objCss;
};

const iterateGetSingle: Titerate = ({ objCss, str, sregNotCurly }) => {
  const reg = RegExp(`(^|\\n)\\s*(${sregSel}[^\\s\\{\\:]*)\\s*\\{(${sregNotCurly})\\}`, 'ig');

  const marker = '$$';
  let arrM;

  while ((arrM = reg.exec(str))) {
    const strCss = arrM[3];
    let strSelectors = arrM[2];

    strSelectors = replColon(strSelectors, marker);
    const arrSelectors = cleanSelectors(strSelectors);
    objCss = constructSingleNonPseudoObjCss({ objCss, arrSelectors, strCss });
  }

  return objCss;
};

export const constructAnyObjCss: TconstructObjCss = ({ objCss, arrSelectors, strCss }) => {
  const strSelector = arrSelectors[0];
  if (!objCss[strSelector]) {
    objCss[strSelector] = [];
  }
  objCss[strSelector].push(strCss);
  return objCss;
};

const iterateGetWithChild: Titerate = ({ objCss, str, sregNotCurly }) => {
  const reg = RegExp(
    `(^|\\n)\\s*(${sregSel}[^\\s\\{\\,]*\\s[${sregSelOr}\\>\\+\\~\\|]${sregNotCurly})\\s*\\{(${sregNotCurly})\\}`,
    'ig'
  );

  const marker = '$$';
  let arrM;

  while ((arrM = reg.exec(str))) {
    const strCss = arrM[3];
    let strSelectors = arrM[2];

    strSelectors = replColon(strSelectors, marker);
    const arrSelectors = cleanSelectors(strSelectors);
    objCss = constructAnyObjCss({ objCss, arrSelectors, strCss });
  }

  return objCss;
};

const iteratePseudo: Titerate = ({ objCss, str, sregNotCurly }) => {
  const reg = RegExp(
    `(^|\\n)\\s*(${sregSel}[^\\s\\{\\,\\:]*\\:${sregNotCurly})\\s*\\{(${sregNotCurly})\\}`,
    'ig'
  );

  const marker = '$$';
  let arrM;

  while ((arrM = reg.exec(str))) {
    const strCss = arrM[3];
    let strSelectors = arrM[2];

    strSelectors = replColon(strSelectors, marker);
    const arrSelectors = cleanSelectors(strSelectors);
    objCss = constructAnyObjCss({ objCss, arrSelectors, strCss });
  }

  return objCss;
};

type TpopObjCss = (objCssAll: ObjCssAll, str: string, m1: string) => ObjCssAll;
const popObjCss: TpopObjCss = (objCssAll, str, m1) => {
  const sregNotCurly = `[^\\{\\}\\${m1}]*`;

  objCssAll.combined = iterateGetCombined({
    objCss: objCssAll.combined,
    str,
    sregNotCurly
  });

  objCssAll.single = iterateGetSingle({
    objCss: objCssAll.single,
    str,
    sregNotCurly
  });

  objCssAll.withchild = iterateGetWithChild({
    objCss: objCssAll.withchild,
    str,
    sregNotCurly
  });

  objCssAll.pseudo = iteratePseudo({
    objCss: objCssAll.pseudo,
    str,
    sregNotCurly
  });

  return objCssAll;
};

type TupdateVars = (file: string, objCssAll: ObjCssAll) => ObjCssAll;
const updateVars: TupdateVars = (file, objCssAll) => {
  const read = fs.readFileSync(file);
  let str = read.toString();

  const {
    objM: { m1 }
  } = getSafMarkers(str);
  str = clearCssComments(str, m1);

  return popObjCss(objCssAll, str, m1);
};

export default updateVars;
