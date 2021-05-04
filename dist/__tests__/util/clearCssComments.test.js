'use strict';var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{'default':mod};};Object.defineProperty(exports,'__esModule',{value:true});const clearCssComents_1=__importDefault(require('../../util/clearCssComents'));const crop_1=__importDefault(require('../../util/crop'));describe('updateSelectors()',()=>{describe('clearCssComments()',()=>{it('remove comments from this string',()=>{const str=`
      /*
      
      */
      .file {
        position: absolute;
        /*
          .x {

          }
        */ color: red;
      }`;const actual=crop_1.default(clearCssComents_1.default(str,'\xAC'));const expected=crop_1.default(`
      .file {
        position: absolute;
        color: red;
      }`);expect(actual).toBe(expected);});});});