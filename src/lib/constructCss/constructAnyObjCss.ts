import { Tconstruct } from 'src/types';

export const constructAnyObjCss: Tconstruct = ({ objCss, strSelectors, strCss }) => {
  let strSelector = strSelectors;
  strSelector = strSelector.replace(/\s*$/, '');
  if (!objCss[strSelector]) {
    objCss[strSelector] = [];
  }
  objCss[strSelector].push(strCss);
  return objCss;
};

export default constructAnyObjCss;
