'use strict';var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{'default':mod};};Object.defineProperty(exports,'__esModule',{value:true});const popAllSelectors_1=__importDefault(require('./popAllSelectors'));const createMediaQ=(strMediaQ,css)=>`
 ${strMediaQ} {
  ${css}
 }
`;const popMediaQCss=({strSingleSelector,objCss})=>Object.keys(objCss).map(strMediaQ=>{const css=popAllSelectors_1.default({strSingleSelector,objCssAll:objCss[strMediaQ]});return css!==''?createMediaQ(strMediaQ,css):'';}).join('\n');exports.default=popMediaQCss;