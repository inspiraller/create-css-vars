'use strict';Object.defineProperty(exports,'__esModule',{value:true});exports.convertObjStrToStr=void 0;const convertObjStrToStr=selectors=>Object.keys(selectors).reduce((accum,cur)=>`${accum}  '${cur}': (getTheme, getAsset) => \`${selectors[cur]}\`,\n`,'');exports.convertObjStrToStr=convertObjStrToStr;const convertSelectorsToStr=selectors=>{return`
    export type TFuncStr = (str: string, str2?: string, str3?: string) => string;
    export interface Selectors {
      [key: string]: (getTheme: TFuncStr, getAsset: TFuncStr) => string;
    }
    const selectors: Selectors = {\n${exports.convertObjStrToStr(selectors)}\n};
    export default selectors;
  `;};exports.default=convertSelectorsToStr;