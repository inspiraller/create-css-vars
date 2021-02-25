import getSafMarkers from 'src/lib/getSafeMarkers';
import clearCssComments from 'src/lib/clearCssComents';

import {
  regCombined,
  regSingle,
  regWithChild,
  regPseudoOrAttr,
  regBeginNonSingle
} from 'src/lib/regCss';

import execConstructObjCss from './execConstructObjCss';
import constructCombinedObjCss from './constructCombinedObjCss';
import constructAnyObjCss from './constructAnyObjCss';
import iterateConstructMediaQObjCss from './iterateConstructMediaQObjCss';

import { ObjCssAll, MediaQ, KeyStringArr } from 'src/types';

type TconstructObjCssPerFile = (strReadFile: string, objCssAll: ObjCssAll | MediaQ) => ObjCssAll | MediaQ;
const constructObjCssPerFile: TconstructObjCssPerFile = (strReadFile, objCssAll) => {
  let str = strReadFile;
  const {
    objM: { m1 }
  } = getSafMarkers(str);
  str = clearCssComments(str, m1);

  objCssAll.combined = execConstructObjCss({
    objCss: objCssAll.combined as KeyStringArr || {} as KeyStringArr,
    str,
    reg: regCombined,
    constructCssObj: constructCombinedObjCss
  });

  objCssAll.single = execConstructObjCss({
    objCss: objCssAll.single as KeyStringArr || {} as KeyStringArr,
    str,
    reg: regSingle,
    constructCssObj: constructAnyObjCss
  });

  objCssAll.withchild = execConstructObjCss({
    objCss: objCssAll.withchild as KeyStringArr || {} as KeyStringArr,
    str,
    reg: regWithChild,
    constructCssObj: constructAnyObjCss
  });

  objCssAll.pseudo = execConstructObjCss({
    objCss: objCssAll.pseudo as KeyStringArr || {} as KeyStringArr,
    str,
    reg: regPseudoOrAttr,
    constructCssObj: constructAnyObjCss
  });

  if (objCssAll.mediaq) {
    objCssAll.mediaq = iterateConstructMediaQObjCss({
      objCssMediaQ: objCssAll.mediaq as MediaQ,
      str,
      m1
    });
  }

  objCssAll.beginNonSingle = execConstructObjCss({
    objCss: objCssAll.beginNonSingle as KeyStringArr || {} as KeyStringArr,
    str,
    reg: regBeginNonSingle,
    constructCssObj: constructAnyObjCss
  });

  return objCssAll;
};

export default constructObjCssPerFile;
