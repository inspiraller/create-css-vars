'use strict';Object.defineProperty(exports,'__esModule',{value:true});exports.regMatchAnySingle=exports.regBeginNonSingle=exports.regPseudoOrAttr=exports.regWithChild=exports.regSingle=exports.regCombined=exports.sregWithChild=exports.sregCombinator=exports.sregSingleOr=exports.sregPseudoOrAttr=exports.regTruncate=void 0;const sregSingle='a-zA-Z\\#\\.';const sregAny=`[${sregSingle}\\[\\]\\=\\-\\'\\"\\|\\*\\(\\)\\:>\\+\\~\\$]`;const sregCombinedOr=`${sregAny}+[^\\{\\,\\}]*\\,\\s*${sregAny}+`;const sregNotCurly='^\\{\\}';const sregNotCurlyOr=`[${sregNotCurly}]*`;exports.regTruncate=/^\s*|\s*$/g;exports.sregPseudoOrAttr='[\\:\\[]';exports.sregSingleOr=`[${sregSingle}][\\w\\-]*`;exports.sregCombinator='\\+\\~\\>';exports.sregWithChild=`([${exports.sregCombinator}]|\\s+${sregAny}+)[${sregNotCurly}\\,]*`;exports.regCombined=RegExp(`(^|\\n)\\s*(${sregCombinedOr}${sregNotCurlyOr})()\\{(${sregNotCurlyOr})\\}`,'ig');exports.regSingle=RegExp(`(^|\\n)\\s*(${exports.sregSingleOr})\\s*()\\{(${sregNotCurlyOr})\\}`,'ig');exports.regWithChild=RegExp(`(^|\\n)\\s*(${exports.sregSingleOr}${exports.sregWithChild})\\s*\\{(${sregNotCurlyOr})\\}`,'ig');exports.regPseudoOrAttr=RegExp(`(^|\\n)\\s*(${exports.sregSingleOr}${exports.sregPseudoOrAttr}[${sregNotCurly}\\,]*)\\s*()\\{(${sregNotCurlyOr})\\}`,'ig');exports.regBeginNonSingle=RegExp(`(^|\\n)\\s*([\\*\\[][${sregNotCurly}\\,]*)()\\{(${sregNotCurlyOr})\\}`,'ig');exports.regMatchAnySingle=RegExp(`(^|\\n)\\s*(${exports.sregSingleOr})\\s${sregNotCurlyOr}()\\{(${sregNotCurlyOr})\\}`,'ig');