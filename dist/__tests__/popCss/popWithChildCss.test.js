'use strict';var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{'default':mod};};Object.defineProperty(exports,'__esModule',{value:true});const popWithChildCss_1=__importDefault(require('../../popCss/popSeparateCombined/popWithChildCss'));const crop_1=__importDefault(require('../../util/crop'));describe('popWithChildCss',()=>{describe('success',()=>{it('should construct - 1 child',()=>{const objCss={'.link elem':['color: red;']};const strSingleSelector='.link';const actual=popWithChildCss_1.default({strSingleSelector,objCss});const expected=`
        & elem {
          color: red;
        }
      `;expect(crop_1.default(actual)).toBe(crop_1.default(expected));});it('should construct - 2 descendants',()=>{const objCss={'.link elem elem2':['color: red;']};const strSingleSelector='.link';const actual=popWithChildCss_1.default({strSingleSelector,objCss});const expected=`
        & elem elem2 {
          color: red;
        }
      `;expect(crop_1.default(actual)).toBe(crop_1.default(expected));});it('should construct - 2 descendants has pseudo',()=>{const objCss={'.link elem elem2:hover':['color: red;']};const strSingleSelector='.link';const actual=popWithChildCss_1.default({strSingleSelector,objCss});const expected=`
        & elem elem2:hover {
          color: red;
        }
      `;expect(crop_1.default(actual)).toBe(crop_1.default(expected));});it('should construct - 2 descendants has attr',()=>{const objCss={'.link elem elem2[x]':['color: red;']};const strSingleSelector='.link';const actual=popWithChildCss_1.default({strSingleSelector,objCss});const expected=`
        & elem elem2[x] {
          color: red;
        }
      `;expect(crop_1.default(actual)).toBe(crop_1.default(expected));});it('should construct - has combinator +',()=>{const objCss={'.link + elem':['color: red;']};const strSingleSelector='.link';const actual=popWithChildCss_1.default({strSingleSelector,objCss});const expected=`
        & + elem {
          color: red;
        }
      `;expect(crop_1.default(actual)).toBe(crop_1.default(expected));});it('should construct - has extra space',()=>{const objCss={'.link    +    elem':['color: red;']};const strSingleSelector='.link';const actual=popWithChildCss_1.default({strSingleSelector,objCss});const expected=`
        & + elem {
          color: red;
        }
      `;expect(crop_1.default(actual)).toBe(crop_1.default(expected));});it('should construct - no spaces for combinators = +',()=>{const objCss={'.link+elem':['color: red;']};const strSingleSelector='.link';const actual=popWithChildCss_1.default({strSingleSelector,objCss});const expected=`
        & + elem {
          color: red;
        }
      `;expect(crop_1.default(actual)).toBe(crop_1.default(expected));});it('should construct - no spaces for combinators = >',()=>{const objCss={'.link>elem':['color: red;']};const strSingleSelector='.link';const actual=popWithChildCss_1.default({strSingleSelector,objCss});const expected=`
        & > elem {
          color: red;
        }
      `;expect(crop_1.default(actual)).toBe(crop_1.default(expected));});it('should construct - no spaces for combinators = ~',()=>{const objCss={'.link~elem':['color: red;']};const strSingleSelector='.link';const actual=popWithChildCss_1.default({strSingleSelector,objCss});const expected=`
        & ~ elem {
          color: red;
        }
      `;expect(crop_1.default(actual)).toBe(crop_1.default(expected));});});});