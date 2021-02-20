import fs from 'fs';
import getSafMarkers from './getSafeMarkers';
import clearCssComments from './clearCssComents';
import execReg from './execReg';

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
const sregNotCurly = `[^\\{\\}]*`;
const sregSel = `[${sregSelOr}]`;

const regCombined = RegExp(
  `(^|\\n)\\s*(${sregSel}[^\\{\\,]*\\,\\s*${sregSel}${sregNotCurly})\\{(${sregNotCurly})\\}`,
  'ig'
);
const regSingleNonPseudo = RegExp(
  `(^|\\n)\\s*(${sregSel}[^\\s\\{\\:]*)\\s*\\{(${sregNotCurly})\\}`,
  'ig'
);

const regWithChild = RegExp(
  `(^|\\n)\\s*(${sregSel}[^\\s\\{\\,]*\\s[${sregSelOr}\\>\\+\\~\\|]${sregNotCurly})\\s*\\{(${sregNotCurly})\\}`,
  'ig'
);

const regPseudo = RegExp(
  `(^|\\n)\\s*(${sregSel}[^\\s\\{\\,\\:]*\\:${sregNotCurly})\\s*\\{(${sregNotCurly})\\}`,
  'ig'
);

type TconcatCombinedSelectors = (strSelectors: string) => string[];
const concatCombinedSelectors: TconcatCombinedSelectors = strSelectors =>
  strSelectors.split(',').map(sel => sel.replace(regCleanSel, ''));

type Tconstruct = (props: {
  objCss: KeyStringArr;
  strSelectors: string;
  strCss: string;
}) => KeyStringArr;

export const constructCombinedObjCss: Tconstruct = ({ objCss, strSelectors, strCss }) => {
  const arrSelectors = concatCombinedSelectors(strSelectors);
  if (arrSelectors.length > 1) {
    const strCombineSelector = ',' + arrSelectors.join(',') + ',';
    if (!objCss[strCombineSelector]) {
      objCss[strCombineSelector] = [];
    }
    objCss[strCombineSelector].push(strCss);
  }
  return objCss;
};

export const constructSingleNonPseudoObjCss: Tconstruct = ({ objCss, strSelectors, strCss }) => {
  const strSelector = strSelectors;
  if (!objCss[strSelector]) {
    objCss[strSelector] = [];
  }
  objCss[strSelector].push(strCss);
  return objCss;
};

export const constructAnyObjCss: Tconstruct = ({ objCss, strSelectors, strCss }) => {
  const strSelector = strSelectors;
  if (!objCss[strSelector]) {
    objCss[strSelector] = [];
  }
  objCss[strSelector].push(strCss);
  return objCss;
};

type TiteratePopObjCss = (pros: {
  objCss: KeyStringArr;
  str: string;
  reg: RegExp;
  constructCssObj: Tconstruct;
}) => KeyStringArr;
const iteratePopObjCss: TiteratePopObjCss = ({
  objCss: objCssByRef,
  str,
  reg,
  constructCssObj
}) => {
  let objCss = { ...objCssByRef };
  execReg({
    str,
    reg,
    callback: arrM => {
      const strCss = arrM[3];
      const strSelectors = arrM[2];
      objCss = constructCssObj({ objCss, strSelectors, strCss });
    }
  });
  return objCss;
};

type TpopObjCss = (objCssAll: ObjCssAll, str: string) => ObjCssAll;
const popObjCss: TpopObjCss = (objCssAll, str) => {
  objCssAll.combined = iteratePopObjCss({
    objCss: objCssAll.combined,
    str,
    reg: regCombined,
    constructCssObj: constructCombinedObjCss
  });

  objCssAll.single = iteratePopObjCss({
    objCss: objCssAll.single,
    str,
    reg: regSingleNonPseudo,
    constructCssObj: constructSingleNonPseudoObjCss
  });

  objCssAll.withchild = iteratePopObjCss({
    objCss: objCssAll.withchild,
    str,
    reg: regWithChild,
    constructCssObj: constructAnyObjCss
  });

  objCssAll.pseudo = iteratePopObjCss({
    objCss: objCssAll.pseudo,
    str,
    reg: regPseudo,
    constructCssObj: constructAnyObjCss
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

  return popObjCss(objCssAll, str);
};

export default updateVars;
