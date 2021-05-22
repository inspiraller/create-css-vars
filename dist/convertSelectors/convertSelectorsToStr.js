'use strict';Object.defineProperty(exports,'__esModule',{value:true});exports.convertObjStrToStr=void 0;const convertObjStrToStr=selectors=>Object.keys(selectors).reduce((accum,cur)=>`${accum}  '${cur}': (getTheme, getAsset) => \`${selectors[cur]}\`,\n`,'');exports.convertObjStrToStr=convertObjStrToStr;const convertSelectorsToStr=(selectors,js)=>{const strTFuncStr=!js?'export type TFuncStr = (str: string, str2?: string, str3?: string) => string;':'';const strSelectors=!js?`export interface CssVars {
  [key: string]: (getTheme: TFuncStr, getAsset: TFuncStr) => string;
}`:'';const strDecSelectors=!js?': CssVars':'';let strAll=`${strTFuncStr}
${strSelectors}
const cssVars${strDecSelectors} = {\n${exports.convertObjStrToStr(selectors)}\n};
export default cssVars;
  `;strAll=strAll.replace(/\,\s*(\}[^\{\}]*)$/,'$1');return strAll;};exports.default=convertSelectorsToStr;