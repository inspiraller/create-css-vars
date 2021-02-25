import { TFuncStr, TarrCss } from 'src/types';
import { sregWithChild, sregCombinator } from 'src/lib/regCss';
import { TpopCss } from 'src/lib/popCss/popCombinedCss';

export const createCssWithChild: TFuncStr = (strChildSelector, css) => `& ${strChildSelector} {
  ${css}
}\n`;

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

export const getChildSelector: TFuncStr = strObjCssSelectorKey => {
  let str = strObjCssSelectorKey;
  str = removeSpaceInAttr(str);
  str = addSpaceForProximityCombinator(str);
  str = multipleSpaceTo1Space(str);

  if (str.indexOf(' ') !== -1) {
    return str.substr(str.indexOf(' ') + 1);
  }
  return '';
};

export const popWithChildCss: TpopCss = ({ strSingleSelector, objCss }) => {
  const arrCss: TarrCss = [];
  const regInside = RegExp(`${strSingleSelector}${sregWithChild}`);
  // console.log('####################################### popWithChildCss()');
  // console.log('strSingleSelector = ', strSingleSelector);
  Object.keys(objCss).forEach(strEachSelector => {
    if (strEachSelector.search(regInside) !== -1) {
      const strChildSelector = getChildSelector(strEachSelector);
      // console.log('strChildSelector = ', strChildSelector);
      const css = objCss[strEachSelector].join('\n');
      const cssWithChild = createCssWithChild(strChildSelector, css);
      arrCss.push(cssWithChild);
    }
  });

  return arrCss.join('');
};

export default popWithChildCss;
