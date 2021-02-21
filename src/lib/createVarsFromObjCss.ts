import { TFuncStr } from 'src/types';
import { KeyStringArr, ObjCssAll } from './populateObjCssPerFile';
import { sregPseudoOrAttr, sregWithChild, sregCombinator } from './regCss';
// import { sregPseudoOrAttr, sregSingleOr } from './regCss';

interface Vars {
  [key: string]: string;
}

type TarrCss = string[];

const regPseudo = RegExp(sregPseudoOrAttr);
// const regSingle = RegExp(sregSingleOr);

// const comment: TFuncStr = str => `/* ${str} */ \n`;

const createCssPseudo: TFuncStr = (strPseudoSelector, css) => `&${strPseudoSelector} {
    ${css}
  }\n`;

const createCssWithChild: TFuncStr = (strChildSelector, css) => `& ${strChildSelector} {
  ${css}
}\n`;

const getPseudoSelector: TFuncStr = strObjCssSelectorKey => {
  const indPseudo = strObjCssSelectorKey.search(regPseudo);
  return indPseudo ? (strObjCssSelectorKey as string).substr(indPseudo) : '';
};

const regSpaceInAttr = /(\[[^\[\]\s]*)\s+/g;
const removeSpaceInAttr: TFuncStr = str => {
  while (str.search(regSpaceInAttr) !== -1) {
    str = str.replace(regSpaceInAttr, '$1');
  }
  return str;
};
const multipleSpaceTo1Space: TFuncStr = str => str.replace(/ {2,}/g, ' ');

const regNoSpaceCombinator = RegExp(`(\\S)([${sregCombinator}])`);
const addSpaceForProximityCombinator: TFuncStr = str => str.replace(regNoSpaceCombinator, '$1 $2 ');

const getChildSelector: TFuncStr = strObjCssSelectorKey => {
  let str = strObjCssSelectorKey;
  str = removeSpaceInAttr(str);
  str = addSpaceForProximityCombinator(str);
  str = multipleSpaceTo1Space(str);

  return str.substr(str.indexOf(' ') + 1);
};

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

type TpopCss = (props: { strSingleSelector: string; objCss: KeyStringArr }) => string;
export const popCombinedCss: TpopCss = ({ strSingleSelector, objCss }) => {
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

export const popSingleCss: TpopCss = ({ strSingleSelector, objCss }) => {
  const arrCss = objCss[strSingleSelector];
  return arrCss && arrCss.length ? arrCss.join('\n\n') : '';
};

export const popPseudoCss: TpopCss = ({ strSingleSelector, objCss }) => {
  const arrCss: TarrCss = [];
  const regInside = RegExp(`${strSingleSelector}${sregPseudoOrAttr}`);
  Object.keys(objCss).forEach(strPseudoEachSelector => {
    if (strPseudoEachSelector.search(regInside) !== -1) {
      const strPseudoSelector = getPseudoSelector(strPseudoEachSelector);
      const css = objCss[strPseudoEachSelector].join('\n');
      arrCss.push(createCssPseudo(strPseudoSelector, css));
    }
  });
  return arrCss.join('');
};

export const popWithChildCss: TpopCss = ({ strSingleSelector, objCss }) => {
  const arrCss: TarrCss = [];
  const regInside = RegExp(`${strSingleSelector}${sregWithChild}`);
  Object.keys(objCss).forEach(strEachSelector => {
    if (strEachSelector.search(regInside) !== -1) {
      const strChildSelector = getChildSelector(strEachSelector);
      const css = objCss[strEachSelector].join('\n');
      const cssWithChild = createCssWithChild(strChildSelector, css);
      arrCss.push(cssWithChild);
    }
  });
  return arrCss.join('');
};

type TpopAllVarCss = (props: { strSingleSelector: string; objCssAll: ObjCssAll }) => string;

const popAllVarCss: TpopAllVarCss = ({ strSingleSelector, objCssAll }) => {
  const arrCss: TarrCss = [];
  arrCss.push(popCombinedCss({ strSingleSelector, objCss: objCssAll.combined }));
  arrCss.push(popSingleCss({ strSingleSelector, objCss: objCssAll.single }));
  arrCss.push(popPseudoCss({ strSingleSelector, objCss: objCssAll.pseudo }));
  arrCss.push(popWithChildCss({ strSingleSelector, objCss: objCssAll.withchild }));
  return arrCss.join('');
};

type TcreateVarsFromObjCss = (objCssAll: ObjCssAll) => Vars;
const createVarsFromObjCss: TcreateVarsFromObjCss = objCssAll =>
  Object.keys(objCssAll.single).reduce(
    (accum, cur) => ({
      ...accum,
      ...{
        [cur]: popAllVarCss({
          strSingleSelector: cur,
          objCssAll
        })
      }
    }),
    {} as Vars
  );

export default createVarsFromObjCss;
