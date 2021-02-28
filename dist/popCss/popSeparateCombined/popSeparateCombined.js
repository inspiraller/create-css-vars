'use strict';Object.defineProperty(exports,'__esModule',{value:true});exports.popSeparateCombined=void 0;const popPseudoCss_1=require('./popPseudoCss');const popWithChildCss_1=require('./popWithChildCss');const regCss_1=require('..\\..\\util\\regCss');const regSingle=RegExp(regCss_1.sregSingleOr);const comment=str=>`/* ${str} */\n`;const popSeparate=({strSelector,strObjCssSelectorKey,objCss})=>{const arrCss=[];const css=objCss[strObjCssSelectorKey].join();const strPseudoSelector=popPseudoCss_1.getPseudoSelector(strSelector);const child=popWithChildCss_1.getChildSelector(strSelector);if(strPseudoSelector!==''){arrCss.push(popPseudoCss_1.createCssPseudo(strPseudoSelector,css));}else if(child!==''){arrCss.push(popWithChildCss_1.createCssWithChild(child,css));}else if(strSelector.search(regSingle)!==-1){arrCss.push(css);}return arrCss.join('\n');};const cropComma=str=>str.substring(1,str.length-1);const popSeparateCombined=({strObjCssSelectorKey,objCss,regInCombined})=>{const strCombinedCropComma=cropComma(strObjCssSelectorKey);const arrSelectors=strObjCssSelectorKey.split(',');let arrCss=[];arrCss.push('\n'+comment(`***************************************************`));arrCss.push(comment(`start - ${strCombinedCropComma}`));arrCss=arrCss.concat(arrSelectors.map(strSelector=>strSelector.search(regInCombined)!==-1?popSeparate({strObjCssSelectorKey,strSelector,objCss}):''));arrCss.push('\n'+comment(`end - ${strCombinedCropComma}`));arrCss.push(comment(`***************************************************`));return arrCss.join('');};exports.popSeparateCombined=popSeparateCombined;const getRegSingleInCombined=strSingleSelector=>RegExp(`(^|\\,)${strSingleSelector}([\\W]|$)`);const separateCombined=({strSingleSelector,strCombinedSelector,objCss})=>{const regInCombined=getRegSingleInCombined(strSingleSelector);return exports.popSeparateCombined({strObjCssSelectorKey:strCombinedSelector,objCss,regInCombined});};exports.default=separateCombined;