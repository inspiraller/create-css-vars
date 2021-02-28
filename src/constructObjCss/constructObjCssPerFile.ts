import getSafMarkers from 'src/util/getSafeMarkers';
import clearCssComments from 'src/util/clearCssComents';

import {
  regCombined,
  regSingle,
  regWithChild,
  regPseudoOrAttr,
  regBeginNonSingle,
  regMatchAnySingle
} from 'src/util/regCss';
import markEndCurly from 'src/util/markEndCurly';
import execConstructObjCss from './execConstructObjCss';
import constructCombinedObjCss from './constructCombinedObjCss';
import constructAnyObjCss from './constructAnyObjCss';
import constructAnySingles from './constructAnySingles';

import iterateConstructMediaQObjCss from './iterateConstructMediaQObjCss';

import { ObjCssAll, ObjCssAllOptional, MediaQ, KeyStringArr, TFuncStr} from 'src/types';

const replaceMediaQ: TFuncStr = (str, m1, m2) => {
  str = markEndCurly(str, m1, m2);
  str = str.replace(RegExp(`\\@media[^\\${m2}]*\\${m2}`, 'g'), '');
  str = str.replace(RegExp(`\\${m2}`, 'g'), '');
  return str;
};

type TconstructObjCssPerFile = (strReadFile: string, objCssAll: ObjCssAll | ObjCssAllOptional, isMediaQ?: boolean) => ObjCssAll | ObjCssAllOptional;
const constructObjCssPerFile: TconstructObjCssPerFile = (strReadFile, objCssAll, isMediaQ = false) => {
  let str = ` ${strReadFile}` ; // add space, so regex can multiple find - avoid using ^|
  const {
    objM: { m1, m2 }
  } = getSafMarkers(str);
  str = clearCssComments(str, m1);


  // console.log('##################################################################################')
  // console.log('constructObjCssPerFile() --- constructAnySingles()   ###########################', regMatchAnySingle);
  // console.log(`str="${str}"`);
  objCssAll.single = execConstructObjCss({
    objCss: objCssAll.single as KeyStringArr || {} as KeyStringArr,
    str: str,
    reg: regMatchAnySingle,
    constructCssObj: constructAnySingles
  });
  //console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$');

  const strExcludeMediaQ = !isMediaQ ? replaceMediaQ(str, m1, m2) : str;
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

  // console.log('strExcludeMediaQ = ', strExcludeMediaQ);
  // console.log('regWithChild = ', regWithChild);
  // console.log('strExcludeMediaQ.search(regWithChild)', strExcludeMediaQ.search(regWithChild));
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

  const objCssWithMediaQ: ObjCssAll = objCssAll as ObjCssAll;
  if (objCssWithMediaQ.mediaq) {
    objCssWithMediaQ.mediaq = iterateConstructMediaQObjCss({
      objMediaQ: objCssWithMediaQ.mediaq as MediaQ,
      str,
      m1,
      m2
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
