'use strict';Object.defineProperty(exports,'__esModule',{value:true});exports.constructSinglesWithOnlyMediaQ=void 0;const constructSinglesWithOnlyMediaQ=({objCss,strSelectors})=>{let strSelector=strSelectors;strSelector=strSelector.replace(/\s*$/,'');if(!objCss[strSelector]){objCss[strSelector]=[];}return objCss;};exports.constructSinglesWithOnlyMediaQ=constructSinglesWithOnlyMediaQ;exports.default=exports.constructSinglesWithOnlyMediaQ;