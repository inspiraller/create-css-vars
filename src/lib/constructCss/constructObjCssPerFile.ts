import getSafMarkers from 'src/lib/getSafeMarkers';
import clearCssComments from 'src/lib/clearCssComents';
import execReg from 'src/lib/execReg';
import {
  regCombined,
  regSingle,
  regWithChild,
  regPseudoOrAttr,
  regBeginNonSingle
} from 'src/lib/regCss';
import constructCombinedObjCss, { Tconstruct } from './constructCombinedObjCss';
import constructAnyObjCss from './constructAnyObjCss';

import { KeyStringArr, ObjCssAll , TFuncStr} from 'src/types';

export const replaceVars: TFuncStr = str => str.replace(/var\((--[^\)]*)\)/g, '${getTheme(\'$1\')}');

type TiterateConstructObjCss = (pros: {
  objCss: KeyStringArr;
  str: string;
  reg: RegExp;
  constructCssObj: Tconstruct;
}) => KeyStringArr;
const iterateConstructObjCss: TiterateConstructObjCss = ({
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
      let strCss = arrM[4]; // hack: regWithChild. would be group 3, not 4.
      const strSelectors = arrM[2];
      strCss = replaceVars(strCss);
      objCss = constructCssObj({ objCss, strSelectors, strCss });
    }
  });
  return objCss;
};

type TconstructObjCssPerFile = (strReadFile: string, objCssAll: ObjCssAll) => ObjCssAll;
const constructObjCssPerFile: TconstructObjCssPerFile = (strReadFile, objCssAll) => {
  let str = strReadFile;
  const {
    objM: { m1 }
  } = getSafMarkers(str);
  str = clearCssComments(str, m1);

  objCssAll.combined = iterateConstructObjCss({
    objCss: objCssAll.combined,
    str,
    reg: regCombined,
    constructCssObj: constructCombinedObjCss
  });

  objCssAll.single = iterateConstructObjCss({
    objCss: objCssAll.single,
    str,
    reg: regSingle,
    constructCssObj: constructAnyObjCss
  });

  objCssAll.withchild = iterateConstructObjCss({
    objCss: objCssAll.withchild,
    str,
    reg: regWithChild,
    constructCssObj: constructAnyObjCss
  });

  objCssAll.pseudo = iterateConstructObjCss({
    objCss: objCssAll.pseudo,
    str,
    reg: regPseudoOrAttr,
    constructCssObj: constructAnyObjCss
  });

  objCssAll.beginNonSingle = iterateConstructObjCss({
    objCss: objCssAll.beginNonSingle,
    str,
    reg: regBeginNonSingle,
    constructCssObj: constructAnyObjCss
  });

  return objCssAll;
};

export default constructObjCssPerFile;
