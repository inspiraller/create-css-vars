import { TFuncStr, KeyStringArr } from 'src/types';
import { getPseudoSelector, createCssPseudo } from './popPseudoCss';
import { getChildSelector, createCssWithChild } from './popWithChildCss';

import { sregSingleOr } from 'src/lib/regCss';

export type TpopCss = (props: { strSingleSelector: string; objCss: KeyStringArr }) => string;
export type TarrCss = string[];

const regSingle = RegExp(sregSingleOr);

const comment: TFuncStr = str => `/* ${str} */\n`;

type TpopSeparate = (props: {
  strSelector: string;
  strObjCssSelectorKey: string;
  objCss: KeyStringArr;
}) => string;

const popSeparate: TpopSeparate = ({ strSelector, strObjCssSelectorKey, objCss }) => {
  // console.log('popSeparate() strSelector = ', strSelector, 'strObjCssSelectorKey - ', strObjCssSelectorKey);
  const arrCss: TarrCss = [];
  // console.log('###########################################')
  // console.log(`popSeparate() - strSelector - "${strSelector}"`);

  const css = objCss[strObjCssSelectorKey].join();
  const strPseudoSelector = getPseudoSelector(strSelector);
  const child = getChildSelector(strSelector);

  if (strPseudoSelector !== '') {
    // console.log('is strPseudoSelector = ', strPseudoSelector);
    arrCss.push(createCssPseudo(strPseudoSelector, css));
  } else if (child !== '') {
    // console.log('is child = ', child);
    arrCss.push(createCssWithChild(child, css));
  } else if (strSelector.search(regSingle) !== -1) {
    // console.log(' is single = ', strSelector);
    arrCss.push(css);
  }
  return arrCss.join('\n');
};

const cropComma: TFuncStr = str => str.substring(1, str.length - 1);

type TpopSeparateCombined = (props: {
  strObjCssSelectorKey: string;
  objCss: KeyStringArr;
  regInCombined: RegExp;
}) => string;

export const popSeparateCombined: TpopSeparateCombined = ({
  strObjCssSelectorKey,
  objCss,
  regInCombined
}) => {
  // console.log('!!! popSeparateCombined()  - strObjCssSelectorKey = ', strObjCssSelectorKey);

  const strCombinedCropComma = cropComma(strObjCssSelectorKey);
  const arrSelectors = strObjCssSelectorKey.split(',');

  // console.log('popSeparateCombined() - arrSelectors = ', arrSelectors);
  let arrCss: TarrCss = [];
  arrCss.push('\n' + comment(`***************************************************`));
  arrCss.push(comment(`start - ${strCombinedCropComma}`));
  arrCss = arrCss.concat(
    arrSelectors.map(strSelector =>
      strSelector.search(regInCombined) !== -1
        ? popSeparate({
            strObjCssSelectorKey,
            strSelector,
            objCss
          })
        : ''
    )
  );
  arrCss.push('\n' + comment(`end - ${strCombinedCropComma}`));
  arrCss.push(comment(`***************************************************`));
  return arrCss.join('');
};

type TgetReg = (str: string) => RegExp;

const getRegSingleInCombined: TgetReg = strSingleSelector =>
  RegExp(`(^|\\,)${strSingleSelector}([\\W]|$)`);

type TseparateCombined = (props: {
  strSingleSelector: string;
  strCombinedSelector: string;
  objCss: KeyStringArr;
}) => string;

const separateCombined: TseparateCombined = ({
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

export default separateCombined;
