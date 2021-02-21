import fs from 'fs';
import getSafMarkers from './getSafeMarkers';
import clearCssComments from './clearCssComents';
import execReg from './execReg';
import {
  regTruncate,
  regCombined,
  regSingle,
  regWithChild,
  regPseudoOrAttr,
  regBeginNonSingle
} from './regCss';

export interface KeyStringArr {
  [key: string]: string[];
}

export interface ObjCssAllNonMediaQuery {
  combined: KeyStringArr;
  single: KeyStringArr;
  withchild: KeyStringArr;
  pseudo: KeyStringArr;
  beginNonSingle: KeyStringArr; // * or [] or -root or @ etc...
}

export interface ObjCssAll extends ObjCssAllNonMediaQuery {
  mediaq: ObjCssAllNonMediaQuery;
}

type TconcatCombinedSelectors = (strSelectors: string) => string[];
const concatCombinedSelectors: TconcatCombinedSelectors = strSelectors =>
  strSelectors.split(',').map(sel => sel.replace(regTruncate, ''));

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

type TpopulateObjCssPerFile = (file: string, objCssAll: ObjCssAll) => ObjCssAll;
const populateObjCssPerFile: TpopulateObjCssPerFile = (file, objCssAll) => {
  const read = fs.readFileSync(file);
  let str = read.toString();

  const {
    objM: { m1 }
  } = getSafMarkers(str);
  str = clearCssComments(str, m1);

  objCssAll.combined = iteratePopObjCss({
    objCss: objCssAll.combined,
    str,
    reg: regCombined,
    constructCssObj: constructCombinedObjCss
  });

  objCssAll.single = iteratePopObjCss({
    objCss: objCssAll.single,
    str,
    reg: regSingle,
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
    reg: regPseudoOrAttr,
    constructCssObj: constructAnyObjCss
  });

  objCssAll.beginNonSingle = iteratePopObjCss({
    objCss: objCssAll.beginNonSingle,
    str,
    reg: regBeginNonSingle,
    constructCssObj: constructAnyObjCss
  });

  return objCssAll;
};

export default populateObjCssPerFile;
