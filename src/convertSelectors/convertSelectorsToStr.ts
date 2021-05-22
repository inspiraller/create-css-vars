import { Selectors } from 'src/types';

type TconvertObjStrToStr = (selectors: Selectors) => string;
export const convertObjStrToStr: TconvertObjStrToStr = selectors =>
  Object.keys(selectors).reduce(
    (accum, cur) => `${accum}  '${cur}': (getTheme, getAsset) => \`${selectors[cur]}\`,\n`,
    ''
  );

type TconvertSelectorsToStr = (selectors: Selectors, js?: boolean) => string;
const convertSelectorsToStr: TconvertSelectorsToStr = (selectors, js) => {
  const strTFuncStr = !js
    ? 'export type TFuncStr = (str: string, str2?: string, str3?: string) => string;'
    : '';
  const strSelectors = !js
    ? `export interface CssVars {
  [key: string]: (getTheme: TFuncStr, getAsset: TFuncStr) => string;
}`
    : '';

  const strDecSelectors = !js ? ': CssVars' : '';

  let strAll = `${strTFuncStr}
${strSelectors}
const cssVars${strDecSelectors} = {\n${convertObjStrToStr(selectors)}\n};
export default cssVars;
  `;
  strAll = strAll.replace(/\,\s*(\}[^\{\}]*)$/, '$1'); // remove last comma
  return strAll;
};

export default convertSelectorsToStr;
