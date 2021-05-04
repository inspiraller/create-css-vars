'use strict';var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{'default':mod};};Object.defineProperty(exports,'__esModule',{value:true});const popPseudoCss_1=__importDefault(require('../../popCss/popSeparateCombined/popPseudoCss'));const crop_1=__importDefault(require('../../util/crop'));describe('popPseudoCss',()=>{describe('success',()=>{it('should construct 1 pseudo',()=>{const objCss={'.link:hover':['color: red;']};const strSingleSelector='.link';const actual=popPseudoCss_1.default({strSingleSelector,objCss});const expected=`
          &:hover {
            color: red;
          }
        `;expect(crop_1.default(actual)).toBe(crop_1.default(expected));});it('should construct 1 attribute',()=>{const objCss={'.link[x]':['color: blue;']};const strSingleSelector='.link';const actual=popPseudoCss_1.default({strSingleSelector,objCss});const expected=`
          &[x] {
            color: blue;
          }
        `;expect(crop_1.default(actual)).toBe(crop_1.default(expected));});it('should construct 2 mixed items',()=>{const objCss={'.link:hover':['color: red;'],'.link[x]':['color: blue;']};const strSingleSelector='.link';const actual=popPseudoCss_1.default({strSingleSelector,objCss});const expected=`
          &:hover {
            color: red;
          }
          &[x] {
            color: blue;
          }
        `;expect(crop_1.default(actual)).toBe(crop_1.default(expected));});it('should construct 2 mixed items with multiple css',()=>{const objCss={'.link:hover':['color: red;','background: blue;'],'.link[x]':['color: blue;']};const strSingleSelector='.link';const actual=popPseudoCss_1.default({strSingleSelector,objCss});const expected=`
          &:hover {
            color: red;
            background: blue;
          }
          &[x] {
            color: blue;
          }
        `;expect(crop_1.default(actual)).toBe(crop_1.default(expected));});it('should construct 1 pseudo - with child',()=>{const objCss={'.link:hover elem':['color: red;']};const strSingleSelector='.link';const actual=popPseudoCss_1.default({strSingleSelector,objCss});const expected=`
          &:hover elem {
            color: red;
          }
        `;expect(crop_1.default(actual)).toBe(crop_1.default(expected));});it('should construct 1 attr - with child',()=>{const objCss={'.link[x] elem':['color: red;']};const strSingleSelector='.link';const actual=popPseudoCss_1.default({strSingleSelector,objCss});const expected=`
          &[x] elem {
            color: red;
          }
        `;expect(crop_1.default(actual)).toBe(crop_1.default(expected));});});describe('fail',()=>{it('should NOT construct non pseudo - with child',()=>{const objCss={'.link .child':['color: red;']};expect(popPseudoCss_1.default({strSingleSelector:'.link',objCss})).toBe('');});it('should NOT construct non pseudo - combined',()=>{const objCss={'.link, .child':['color: red;']};expect(popPseudoCss_1.default({strSingleSelector:'.link',objCss})).toBe('');});it('should NOT construct - starts with pseudo',()=>{const objCss={':hover':['color: red;']};expect(popPseudoCss_1.default({strSingleSelector:'.link',objCss})).toBe('');});it('should NOT construct - starts with attr',()=>{const objCss={':hover':['color: red;']};expect(popPseudoCss_1.default({strSingleSelector:'.link',objCss})).toBe('');});it('should NOT construct - child is pseudo',()=>{const objCss={'a :hover':['color: red;']};expect(popPseudoCss_1.default({strSingleSelector:'.link',objCss})).toBe('');});it('should NOT construct - child is attr',()=>{const objCss={'a [x]':['color: red;']};expect(popPseudoCss_1.default({strSingleSelector:'.link',objCss})).toBe('');});it('should NOT construct - parent is pseudo and child is pseudo',()=>{const objCss={':hover :hover':['color: red;']};expect(popPseudoCss_1.default({strSingleSelector:'.link',objCss})).toBe('');});it('should NOT construct - parent is pseudo and child is attr',()=>{const objCss={':hover [x]':['color: red;']};expect(popPseudoCss_1.default({strSingleSelector:'.link',objCss})).toBe('');});it('should NOT construct - parent is attr and child is attr',()=>{const objCss={'[y] [x]':['color: red;']};expect(popPseudoCss_1.default({strSingleSelector:'.link',objCss})).toBe('');});it('should NOT construct - parent is attr and child is pseudo',()=>{const objCss={'[y] :hover':['color: red;']};expect(popPseudoCss_1.default({strSingleSelector:'.link',objCss})).toBe('');});});});