import { KeyStringArr } from '../populateObjCssPerFile';

export type TpopCss = (props: { strSingleSelector: string; objCss: KeyStringArr }) => string;
export type TarrCss = string[];

// type TpopSeparate = (props: {
//   strSelector: string;
//   strObjCssSelectorKey: string;
//   objCss: KeyStringArr;
// }) => string;

// const popSeparate: TpopSeparate = ({ strSelector, strObjCssSelectorKey, objCss }) => {
//   const arrCss: TarrCss = [];
//   const css = objCss[strObjCssSelectorKey].join();
//   const strPseudoSelector = getPseudoSelector(strSelector, strObjCssSelectorKey);
//   console.log('strSelector = ', strSelector);
//   console.log('strObjCssSelectorKey = ', strObjCssSelectorKey);
//   console.log('css = ', css);

//   if (strPseudoSelector !== '') {
//     arrCss.push(createCssPseudo(strPseudoSelector, css));
//   } else if (strSelector.search(regSingle) !== -1) {
//     arrCss.push(css);
//   } else {
//     // child or combinator...
//     const child = getChildSelector(strSelector);
//     arrCss.push(`& ${child} {
//       ${css}
//     }`);
//   }
//   return arrCss.join('\n');
// };

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

const popCombinedCss: TpopCss = ({ strSingleSelector, objCss }) => {
  const arrCss: TarrCss = [];
  const arrKeys = Object.keys(objCss);
  const regInCombined = RegExp(`(^|\\,)${strSingleSelector}([\\W]|$)`);

  arrKeys.forEach(strCombinedSelector => {
    if (strCombinedSelector.search(regInCombined) !== -1) {
      arrCss.push(`\$\{separateCombined('${strSingleSelector}', '${strCombinedSelector}')\}\n`);

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

export default popCombinedCss;
