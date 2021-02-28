
import { Selectors } from 'src/types';

type TconvertObjStrToStr = (selectors: Selectors) => string;
export const convertObjStrToStr: TconvertObjStrToStr = selectors =>
  Object.keys(selectors).reduce((accum, cur) => `${accum}  '${cur}': getTheme => \`${selectors[cur]}\`,\n`, '');

type TconvertSelectorsToStr = (selectors: Selectors) => string;
const convertSelectorsToStr: TconvertSelectorsToStr = selectors => {
  return `
    export type TFuncStr = (str: string, str2?: string, str3?: string) => string;
    export interface Selectors {
      [key: string]: (prop: TFuncStr) => string;
    }
    const selectors: Selectors = {\n${convertObjStrToStr(selectors)}\n};
    export default selectors;
  `;
};

export default convertSelectorsToStr;
