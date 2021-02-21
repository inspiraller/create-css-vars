import { TFuncStr } from 'src/types';
import { KeyStringArr, ObjCssAll } from './populateObjCssPerFile';
import { sregPseudoOrAttr, sregSingleOr } from './regCss';

interface Vars {
  [key: string]: string;
}

type TarrCss = string[];

const regPseudo = RegExp(sregPseudoOrAttr);
const regSingle = RegExp(sregSingleOr);

const comment: TFuncStr = str => `/* ${str} */ \n`;

const extractChild: TFuncStr = strObjCssSelectorKey =>
  strObjCssSelectorKey.substr(strObjCssSelectorKey.indexOf(' ') + 1);

const createCssPseudo: TFuncStr = (strPseudoSelector, css) => `&${strPseudoSelector} {
    ${css}
  }\n`;

const getPseudoSelector: TFuncStr = strObjCssSelectorKey => {
  const indPseudo = strObjCssSelectorKey.search(regPseudo);
  return indPseudo ? (strObjCssSelectorKey as string).substr(indPseudo) : '';
};

type TpopSeparate = (props: {
  strSelector: string;
  strObjCssSelectorKey: string;
  objCss: KeyStringArr;
}) => string;

const popSeparate: TpopSeparate = ({ strSelector, strObjCssSelectorKey, objCss }) => {
  const arrCss: TarrCss = [];
  const css = objCss[strObjCssSelectorKey].join();
  const strPseudoSelector = getPseudoSelector(strSelector, strObjCssSelectorKey);
  console.log('strSelector = ', strSelector);
  console.log('strObjCssSelectorKey = ', strObjCssSelectorKey);
  console.log('css = ', css);

  if (strPseudoSelector !== '') {
    arrCss.push(createCssPseudo(strPseudoSelector, css));
  } else if (strSelector.search(regSingle) !== -1) {
    arrCss.push(css);
  } else {
    // child or combinator...
    const child = extractChild(strSelector);
    arrCss.push(`& ${child} {
      ${css}
    }`);
  }
  return arrCss.join('\n');
};

// type TpopSeparateCombined = (props: {
//   strObjCssSelectorKey: string;
//   objCss: KeyStringArr;
//   regInCombined: RegExp;
// }) => string;

// const cropComma: TFuncStr = str => str.substring(1, str.length - 1);

// const popSeparateCombined: TpopSeparateCombined = ({
//   strObjCssSelectorKey,
//   objCss,
//   regInCombined
// }) => {
//   const strCombinedCropComma = cropComma(strObjCssSelectorKey);
//   const arrSelectors = strCombinedCropComma.split(',');
//   const arrCss: TarrCss = [];
//   arrCss.push(comment(strCombinedCropComma));
//   return arrCss
//     .concat(
//       arrSelectors.map(strSelector =>
//         strSelector.search(regInCombined) !== -1
//           ? popSeparate({
//               strObjCssSelectorKey,
//               strSelector,
//               objCss
//             })
//           : ''
//       )
//     )
//     .join('');
// };

type TpopCss = (props: { strSingleSelector: string; objCssAll: ObjCssAll }) => string;
const popCombined: TpopCss = ({ strSingleSelector, objCssAll }) => {
  const arrCss: TarrCss = [];
  const arrKeys = Object.keys(objCssAll.combined);
  const regInCombined = RegExp(`(^|\\,)${strSingleSelector}([\\W]|$)`);

  arrKeys.forEach(strCombinedSelector => {
    if (strCombinedSelector.search(regInCombined) !== -1) {
      arrCss.push(`\$\{separateCombined('${strSingleSelector}', '${strCombinedSelector}')\}`);

      // arrCss.push(
      //   popSeparateCombined({
      //     strObjCssSelectorKey: strCombinedSelector,
      //     objCss: objCssAll.combined,
      //     regInCombined
      //   })
      // );
    }
  });

  return arrCss.join('');
};

const popSingle: TpopCss = ({ strSingleSelector, objCssAll }) =>
  objCssAll.single[strSingleSelector].join('\n\n');

const popPseudo: TpopCss = ({ strSingleSelector, objCssAll }) => {
  const arrCss: TarrCss = [];
  const regInside = RegExp(`${strSingleSelector}${sregPseudoOrAttr}`);
  const arrKeys = Object.keys(objCssAll.pseudo);
  arrKeys.forEach(strPseudoEachSelector => {
    if (strPseudoEachSelector.search(regInside) !== -1) {
      const strPseudoSelector = getPseudoSelector(strPseudoEachSelector);
      const css = objCssAll.pseudo[strPseudoEachSelector].join('');
      arrCss.push(createCssPseudo(strPseudoSelector, css));
    }
  });
  return arrCss.join('');
}

const popVarCss: TpopCss = ({ strSingleSelector, objCssAll }) => {
  const arrCss: TarrCss = [];
  arrCss.push(popCombined({ strSingleSelector, objCssAll }));
  arrCss.push(popSingle({ strSingleSelector, objCssAll }));
  arrCss.push(popPseudo({ strSingleSelector, objCssAll }));
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
