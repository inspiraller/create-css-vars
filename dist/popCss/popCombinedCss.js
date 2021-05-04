'use strict';Object.defineProperty(exports,'__esModule',{value:true});exports.separateCombined=void 0;const popSeparateCombined_1=require('./popSeparateCombined/popSeparateCombined');const sreg_special='[^/w/_/$-]';const getRegSingleInCombined=strSingleSelector=>RegExp(`(^|[/,/s])${strSingleSelector}(${sreg_special}|$)`);const separateCombined=({strSingleSelector,strCombinedSelector,objCss})=>{const regInCombined=getRegSingleInCombined(strSingleSelector);return popSeparateCombined_1.popSeparateCombined({strObjCssSelectorKey:strCombinedSelector,objCss,regInCombined});};exports.separateCombined=separateCombined;const popCombinedCss=({strSingleSelector,objCss})=>{const arrCss=[];const arrKeys=Object.keys(objCss);const regInCombined=getRegSingleInCombined(strSingleSelector);arrKeys.forEach(strCombinedSelector=>{if(strCombinedSelector.search(regInCombined)!==-1){arrCss.push(popSeparateCombined_1.popSeparateCombined({strObjCssSelectorKey:strCombinedSelector,objCss,regInCombined}));}});return arrCss.join('');};exports.default=popCombinedCss;