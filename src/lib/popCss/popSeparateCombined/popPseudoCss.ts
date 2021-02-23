import { TFuncStr, TarrCss } from 'src/types';
import { sregPseudoOrAttr } from 'src/lib/regCss';
import { TpopCss } from 'src/lib/popCss/popCombinedCss';

const regPseudo = RegExp(sregPseudoOrAttr);

export const createCssPseudo: TFuncStr = (strPseudoSelector, css) => `&${strPseudoSelector} {
    ${css}
  }\n`;

export const getPseudoSelector: TFuncStr = strObjCssSelectorKey => {
  const indPseudo = strObjCssSelectorKey.search(regPseudo);
  return indPseudo !== -1 ? (strObjCssSelectorKey as string).substr(indPseudo) : '';
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

export default popPseudoCss;
