'use strict';var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{'default':mod};};Object.defineProperty(exports,'__esModule',{value:true});const popAllSelectors_1=__importDefault(require('..\\..\\src\\popCss\\popAllSelectors'));const crop_1=__importDefault(require('..\\..\\src\\util\\crop'));const clearCssComents_1=__importDefault(require('..\\..\\src\\util\\clearCssComents'));describe('popAllSelectors',()=>{describe('success',()=>{it('should construct 1 pseudo',()=>{const strSingleSelector='.item';const strCombinedKey='.item,x';const objCssAll={combined:{[strCombinedKey]:['margin: left;']},single:{'.item':['margin: right;']},pseudo:{'.item:hover':['background: blue;']},withchild:{'.item a':['text-decoration: underline;']},mediaq:{}};const actual=clearCssComents_1.default(popAllSelectors_1.default({strSingleSelector,objCssAll}),'\xAC');const expected=`
        margin: left;
        margin: right;
        &:hover {
          background: blue;
        }
        & a {
          text-decoration: underline;
        }
      `;expect(crop_1.default(actual)).toBe(crop_1.default(expected));});});});