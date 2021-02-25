'use strict';var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{'default':mod};};Object.defineProperty(exports,'__esModule',{value:true});const getSafeMarkers_1=__importDefault(require('..\\getSafeMarkers'));const clearCssComents_1=__importDefault(require('..\\clearCssComents'));const regCss_1=require('..\\regCss');const execConstructObjCss_1=__importDefault(require('./execConstructObjCss'));const constructCombinedObjCss_1=__importDefault(require('./constructCombinedObjCss'));const constructAnyObjCss_1=__importDefault(require('./constructAnyObjCss'));const iterateConstructMediaQObjCss_1=__importDefault(require('./iterateConstructMediaQObjCss'));const constructObjCssPerFile=(strReadFile,objCssAll)=>{let str=strReadFile;const {objM:{m1}}=getSafeMarkers_1.default(str);str=clearCssComents_1.default(str,m1);objCssAll.combined=execConstructObjCss_1.default({objCss:objCssAll.combined||{},str,reg:regCss_1.regCombined,constructCssObj:constructCombinedObjCss_1.default});objCssAll.single=execConstructObjCss_1.default({objCss:objCssAll.single||{},str,reg:regCss_1.regSingle,constructCssObj:constructAnyObjCss_1.default});objCssAll.withchild=execConstructObjCss_1.default({objCss:objCssAll.withchild||{},str,reg:regCss_1.regWithChild,constructCssObj:constructAnyObjCss_1.default});objCssAll.pseudo=execConstructObjCss_1.default({objCss:objCssAll.pseudo||{},str,reg:regCss_1.regPseudoOrAttr,constructCssObj:constructAnyObjCss_1.default});if(objCssAll.mediaq){objCssAll.mediaq=iterateConstructMediaQObjCss_1.default({objCssMediaQ:objCssAll.mediaq,str,m1});}objCssAll.beginNonSingle=execConstructObjCss_1.default({objCss:objCssAll.beginNonSingle||{},str,reg:regCss_1.regBeginNonSingle,constructCssObj:constructAnyObjCss_1.default});return objCssAll;};exports.default=constructObjCssPerFile;