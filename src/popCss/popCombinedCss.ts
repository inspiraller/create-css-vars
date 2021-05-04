import { KeyStringArr, TarrCss } from 'src/types';
import { popSeparateCombined } from './popSeparateCombined/popSeparateCombined';

export type TpopCss = (props: { strSingleSelector: string; objCss: KeyStringArr }) => string;

type TgetReg = (str: string) => RegExp;

const sreg_special = '[^\\w\\_\\$-]';
const getRegSingleInCombined: TgetReg = strSingleSelector =>
  RegExp(`(^|[\\,\\s])${strSingleSelector}(${sreg_special}|$)`);

type TseparateCombined = (props: {
  strSingleSelector: string;
  strCombinedSelector: string;
  objCss: KeyStringArr;
}) => string;
export const separateCombined: TseparateCombined = ({
  strSingleSelector,
  strCombinedSelector,
  objCss
}) => {
  const regInCombined = getRegSingleInCombined(strSingleSelector);
  return popSeparateCombined({
    strObjCssSelectorKey: strCombinedSelector,
    objCss,
    regInCombined
  });
};

// ##############################################################################################

const popCombinedCss: TpopCss = ({ strSingleSelector, objCss }) => {
  const arrCss: TarrCss = [];
  const arrKeys = Object.keys(objCss);
  // console.log('strSingleSelector = ', strSingleSelector);
  const regInCombined = getRegSingleInCombined(strSingleSelector);

  arrKeys.forEach(strCombinedSelector => {
    if (strCombinedSelector.search(regInCombined) !== -1) {
      // arrCss.push(
      //   `\$\{separateCombined({strSingleSelector: '${strSingleSelector}', strCombinedSelector: '${strCombinedSelector}', combined})\}\n`
      // );

      // console.log('popCombinedCss() match = ', strCombinedSelector, strSingleSelector);
      arrCss.push(
        popSeparateCombined({
          strObjCssSelectorKey: strCombinedSelector,
          objCss,
          regInCombined
        })
      );
    }
  });

  return arrCss.join('');
};

export default popCombinedCss;
