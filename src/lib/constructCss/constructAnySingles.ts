import { Tconstruct } from 'src/types';

export const constructAnySingles: Tconstruct = ({ objCss, strSelectors }) => {
  let strSelector = strSelectors;
  strSelector = strSelector.replace(/\s*$/, '');
  if (!objCss[strSelector]) {
    objCss[strSelector] = [];
  }
  return objCss;
};

export default constructAnySingles;
