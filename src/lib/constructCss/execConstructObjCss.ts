

import execReg from 'src/lib/execReg';
import { KeyStringArr, TFuncStr, Tconstruct } from 'src/types';

export const replaceVars: TFuncStr = str => str.replace(/var\((--[^\)]*)\)/g, '${getTheme(\'$1\')}');

type TexecConstructObjCss = (pros: {
  objCss: KeyStringArr;
  str: string;
  reg: RegExp;
  constructCssObj: Tconstruct;
}) => KeyStringArr;
const execConstructObjCss: TexecConstructObjCss = ({
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

export default execConstructObjCss;
