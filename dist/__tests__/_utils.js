'use strict';var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{'default':mod};};Object.defineProperty(exports,'__esModule',{value:true});exports.cropMediaQ=exports.cropObjCssChildren=exports.cropObjCss=void 0;const crop_1=__importDefault(require('../util/crop'));const cropArrStr=arr=>arr.map(item=>crop_1.default(item));const cropObjCss=obj=>Object.keys(obj).reduce((accum,cur)=>Object.assign(Object.assign({},accum),{[cur]:cropArrStr(obj[cur])}),{});exports.cropObjCss=cropObjCss;const cropObjCssChildren=objCssAll=>Object.keys(objCssAll).reduce((accum,cur)=>{if(cur==='mediaq'){return Object.assign(Object.assign({},accum),{mediaq:exports.cropObjCssChildren(objCssAll.mediaq)});}return Object.assign(Object.assign({},accum),{[cur]:exports.cropObjCss(objCssAll[cur])});},{});exports.cropObjCssChildren=cropObjCssChildren;const cropMediaQ=objMediaQ=>Object.keys(objMediaQ).reduce((accum,cur)=>{return Object.assign(Object.assign({},accum),{[cur]:Object.keys(objMediaQ[cur]).reduce((accumObjCss,keyObjCss)=>{const objMedaQProp=objMediaQ[cur];return Object.assign(Object.assign({},accumObjCss),{[keyObjCss]:exports.cropObjCss(objMedaQProp[keyObjCss])});},{})});},{});exports.cropMediaQ=cropMediaQ;