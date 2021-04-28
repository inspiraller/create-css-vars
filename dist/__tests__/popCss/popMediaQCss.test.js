'use strict';var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{'default':mod};};Object.defineProperty(exports,'__esModule',{value:true});const popMediaQCss_1=__importDefault(require('..\\..\\src\\popCss\\popMediaQCss'));const crop_1=__importDefault(require('..\\..\\src\\util\\crop'));const clearCssComents_1=__importDefault(require('..\\..\\src\\util\\clearCssComents'));describe('popWMediaQCss',()=>{describe('success',()=>{it('should construct - MediaQuery - of single',()=>{const objCss={'@media()':{single:{'.link':['color: red;']}}};const strSingleSelector='.link';const actual=popMediaQCss_1.default({strSingleSelector,objCss});const expected=`
        @media() {
          color: red;
        }
      `;expect(crop_1.default(actual)).toBe(crop_1.default(expected));});it('should construct - MediaQuery - of combined',()=>{const objCss={'@media ()':{combined:{'.link,elem':['color: red;']}}};const strSingleSelector='.link';const actual=clearCssComents_1.default(popMediaQCss_1.default({strSingleSelector,objCss}));const expected=`
        @media () {
          color: red;
        }
      `;expect(crop_1.default(actual)).toBe(crop_1.default(expected));});it('should render multiple combined',()=>{const objCss={'@media (max-width:1427px)':{combined:{'.btn--link,.btn--link path,.btn--link circle':['color: blue;\n']}}};const strSingleSelector='.btn--link';const actual=clearCssComents_1.default(popMediaQCss_1.default({strSingleSelector,objCss}));const expected=`
        @media (max-width:1427px) {
          color: blue;
          & path {
            color: blue;
          }
          & circle {
            color: blue;
          }
        }
      `;expect(crop_1.default(actual)).toBe(crop_1.default(expected));});});describe('fail',()=>{it('should NOT construct - MediaQuery - of unmatching single',()=>{const objCss={'@media()':{combined:{'.link,elem':['color: red;']}}};const strSingleSelector='.somethingelse';const actual=clearCssComents_1.default(popMediaQCss_1.default({strSingleSelector,objCss}));const expected='';expect(crop_1.default(actual)).toBe(crop_1.default(expected));});});});