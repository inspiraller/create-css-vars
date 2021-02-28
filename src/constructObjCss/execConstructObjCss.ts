

import execReg from 'src/util/execReg';
import { KeyStringArr, TFuncStr, Tconstruct } from 'src/types';

export const replaceVars: TFuncStr = str => str.replace(/var\((--[^\)]*)\)/g, '${getTheme(\'$1\')}');

export const replaceRelativeAssets: TFuncStr = str => str.replace(/url\(([\'\"])([^\1]*)\1/g, 'url($1${getAsset(\'$2\')}$1');
// str.replace(/url\(\'(\.\/)?/, `url('${assets}`);

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
      strCss = replaceRelativeAssets(strCss);
      objCss = constructCssObj({ objCss, strSelectors, strCss });
    }
  });
  return objCss;
};

export default execConstructObjCss;
