'use strict';var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{'default':mod};};Object.defineProperty(exports,'__esModule',{value:true});const popAllSelectors_1=__importDefault(require('./popCss/popAllSelectors'));const createSelectorsFromObjCss=objCssAll=>Object.keys(objCssAll.single).reduce((accum,cur)=>Object.assign(Object.assign({},accum),{[cur]:popAllSelectors_1.default({strSingleSelector:cur,objCssAll})}),{});exports.default=createSelectorsFromObjCss;