'use strict';Object.defineProperty(exports,'__esModule',{value:true});exports.constructAnySingles=void 0;const constructAnySingles=({objCss,strSelectors})=>{let strSelector=strSelectors;strSelector=strSelector.replace(/\s*$/,'');if(!objCss[strSelector]){objCss[strSelector]=[];}return objCss;};exports.constructAnySingles=constructAnySingles;exports.default=exports.constructAnySingles;