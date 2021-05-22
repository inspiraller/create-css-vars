import execReg from 'src/util/execReg';
import { KeyStringArr, Tconstruct } from 'src/types';
import {
  replaceRelativeAssetsApos,
  replaceRelativeAssetsQuot,
  replaceRelativeTheme
} from 'src/util/replaceRelative';

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
      // console.log('£££££££££££££££££££££££££££££££££££££££££££ execReg()');
      let strCss = arrM[4]; // hack: regWithChild. would be group 3, not 4.
      const strSelectors = arrM[2];
      strCss = replaceRelativeTheme(strCss);
      strCss = replaceRelativeAssetsApos(strCss);
      strCss = replaceRelativeAssetsQuot(strCss);
      // console.log('strSelectors = ', strSelectors, 'strCss = ', strCss);
      objCss = constructCssObj({ objCss, strSelectors, strCss });
    }
  });
  return objCss;
};

export default execConstructObjCss;
