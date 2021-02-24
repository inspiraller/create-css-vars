import { regTruncate } from '../regCss';
import { KeyStringArr } from 'src/types';
import constructAnyObjCss from './constructAnyObjCss';

export type Tconstruct = (props: {
  objCss: KeyStringArr;
  strSelectors: string;
  strCss: string;
}) => KeyStringArr;

type TconcatCombinedSelectors = (strSelectors: string) => string[];
const concatCombinedSelectors: TconcatCombinedSelectors = strSelectors =>
  strSelectors.split(',').map(sel => sel.replace(regTruncate, ''));

const constructCombinedObjCss: Tconstruct = ({ objCss, strSelectors, strCss }) => {
  // console.log(`constructCombinedObjCss() strSelectors =#"${strSelectors}"#`);
  const arrSelectors = concatCombinedSelectors(strSelectors);
  if (arrSelectors.length > 1) {
    const strCombineSelector = ',' + arrSelectors.join(',') + ',';
    objCss = constructAnyObjCss({
      objCss,
      strSelectors: strCombineSelector,
      strCss
    });
  }
  return objCss;
};

export default constructCombinedObjCss;
