import getSafMarkers from 'src/lib/getSafeMarkers';
import clearCssComments from 'src/lib/clearCssComents';

import {
  regCombined,
  regSingle,
  regWithChild,
  regPseudoOrAttr,
  regBeginNonSingle,
  regMatchAnySingle
} from 'src/lib/regCss';
import markEndCurly from 'src/lib/markEndCurly';
import execConstructObjCss from './execConstructObjCss';
import constructCombinedObjCss from './constructCombinedObjCss';
import constructAnyObjCss from './constructAnyObjCss';
import constructAnySingles from './constructAnySingles';

import iterateConstructMediaQObjCss from './iterateConstructMediaQObjCss';

import { ObjCssAll, ObjCssAllOptional, MediaQ, KeyStringArr, TFuncStr} from 'src/types';

const replaceMediaQ: TFuncStr = (str, m1) => {
  str = markEndCurly(str, m1);
  str = str.replace(RegExp(`\\@media[^\\${m1}]*\\${m1}`, 'g'), '');
  str = str.replace(RegExp(`\\${m1}`, 'g'), '');
  return str;
};

type TconstructObjCssPerFile = (strReadFile: string, objCssAll: ObjCssAll | ObjCssAllOptional, isMediaQ?: boolean) => ObjCssAll | ObjCssAllOptional;
const constructObjCssPerFile: TconstructObjCssPerFile = (strReadFile, objCssAll, isMediaQ = false) => {
  let str = strReadFile;
  const {
    objM: { m1 }
  } = getSafMarkers(str);
  str = clearCssComments(str, m1);

  objCssAll.single = execConstructObjCss({
    objCss: objCssAll.single as KeyStringArr || {} as KeyStringArr,
    str: str,
    reg: regMatchAnySingle,
    constructCssObj: constructAnySingles
  });

  const strExcludeMediaQ = !isMediaQ ? replaceMediaQ(str, m1) : str;
  objCssAll.combined = execConstructObjCss({
    objCss: objCssAll.combined as KeyStringArr || {} as KeyStringArr,
    str: strExcludeMediaQ,
    reg: regCombined,
    constructCssObj: constructCombinedObjCss
  });

  objCssAll.single = execConstructObjCss({
    objCss: objCssAll.single as KeyStringArr || {} as KeyStringArr,
    str: strExcludeMediaQ,
    reg: regSingle,
    constructCssObj: constructAnyObjCss
  });

  objCssAll.withchild = execConstructObjCss({
    objCss: objCssAll.withchild as KeyStringArr || {} as KeyStringArr,
    str: strExcludeMediaQ,
    reg: regWithChild,
    constructCssObj: constructAnyObjCss
  });

  objCssAll.pseudo = execConstructObjCss({
    objCss: objCssAll.pseudo as KeyStringArr || {} as KeyStringArr,
    str: strExcludeMediaQ,
    reg: regPseudoOrAttr,
    constructCssObj: constructAnyObjCss
  });

  const objCssAllMediaQ: ObjCssAll = objCssAll as ObjCssAll;
  if (objCssAllMediaQ.mediaq) {
    objCssAllMediaQ.mediaq = iterateConstructMediaQObjCss({
      objCssMediaQ: objCssAllMediaQ.mediaq as MediaQ,
      str,
      m1
    });
  }

  objCssAll.beginNonSingle = execConstructObjCss({
    objCss: objCssAll.beginNonSingle as KeyStringArr || {} as KeyStringArr,
    str: strExcludeMediaQ,
    reg: regBeginNonSingle,
    constructCssObj: constructAnyObjCss
  });

  return objCssAll;
};

export default constructObjCssPerFile;
