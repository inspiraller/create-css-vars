import { TFuncStr } from 'src/types';
import { KeyStringArr, ObjCssAll } from './populateObjCssPerFile';
import { sregPseudoOrAttr, sregSingleOr } from './regCss';

interface Vars {
  [key: string]: string;
}

type TarrCss = string[];

const comment: TFuncStr = str => `/* ${str} */ \n`;

const extractChild: TFuncStr = strObjCssSelectorKey =>
  strObjCssSelectorKey.substr(strObjCssSelectorKey.indexOf(' ') + 1);

type TpopSeparate = (props: {
  strSelector: string;
  strObjCssSelectorKey: string;
  objCss: KeyStringArr;
}) => string;

const regPseudo = RegExp(sregPseudoOrAttr);
const regSingle = RegExp(sregSingleOr);

const popSeparate: TpopSeparate = ({ strSelector, strObjCssSelectorKey, objCss }) => {
  const arrCss: TarrCss = [];
  const indPseudo = strSelector.search(regPseudo);
  const css = objCss[strObjCssSelectorKey].join();

  console.log('strSelector = ', strSelector);
  console.log('strObjCssSelectorKey = ', strObjCssSelectorKey);
  console.log('css = ', css);

  if (indPseudo !== -1) {
    const child = strSelector.substr(indPseudo);
    arrCss.push(`&${child} {
      ${css}
    }`);
  } else if (strSelector.search(regSingle) !== -1) {
    arrCss.push(css);
  } else {
    // child or combinator...
    const child = extractChild(strSelector);
    arrCss.push(`& ${child} {
      ${css}
    }`);
  }
  return arrCss.join('');
};

type TpopSeparateCombined = (props: {
  strObjCssSelectorKey: string;
  objCss: KeyStringArr;
  regInCombined: RegExp;
}) => string;

const cropComma: TFuncStr = str => str.substring(1, str.length - 1);

const popSeparateCombined: TpopSeparateCombined = ({
  strObjCssSelectorKey,
  objCss,
  regInCombined
}) => {
  const strCombinedCropComma = cropComma(strObjCssSelectorKey);
  const arrSelectors = strCombinedCropComma.split(',');
  return arrSelectors
    .map(strSelector =>
      strSelector.search(regInCombined) !== -1
        ? popSeparate({
            strObjCssSelectorKey,
            strSelector,
            objCss
          })
        : ''
    )
    .join('');
};

type TpopCss = (props: { strSingleSelector: string; objCssAll: ObjCssAll }) => string;
const popCombined: TpopCss = ({ strSingleSelector, objCssAll }) => {
  const arrCss: TarrCss = [];
  const arrKeys = Object.keys(objCssAll.combined);
  const regInCombined = RegExp(`(^|\\,)${strSingleSelector}([\\W]|$)`);

  arrKeys.forEach(strCombinedSelector => {
    const strCombinedCropComma = cropComma(strCombinedSelector);
    if (strCombinedSelector.search(regInCombined) !== -1) {
      arrCss.push(comment(strCombinedCropComma));
      arrCss.push(
        popSeparateCombined({
          strObjCssSelectorKey: strCombinedSelector,
          objCss: objCssAll.combined,
          regInCombined
        })
      );
    }
  });

  return arrCss.join('');
};

const popVarCss: TpopCss = ({ strSingleSelector, objCssAll }) => {
  const arrCss: TarrCss = [];
  arrCss.push(popCombined({ strSingleSelector, objCssAll }));
  return arrCss.join('');
};

type TcreateVarsFromObjCss = (objCssAll: ObjCssAll) => Vars;
const createVarsFromObjCss: TcreateVarsFromObjCss = objCssAll =>
  Object.keys(objCssAll.single).reduce(
    (accum, cur) => ({
      ...accum,
      ...{
        [cur]: popVarCss({
          strSingleSelector: cur,
          objCssAll
        })
      }
    }),
    {} as Vars
  );

export default createVarsFromObjCss;
