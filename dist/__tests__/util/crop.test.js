'use strict';var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{'default':mod};};Object.defineProperty(exports,'__esModule',{value:true});const crop_1=__importDefault(require('..\\..\\src\\util\\crop'));describe('crop',()=>{describe('success',()=>{it('should clean - single line whitespace',()=>{const actual=crop_1.default('   ');const result='';expect(actual).toBe(result);});it('should replace - end whitespace',()=>{const actual=crop_1.default(`a

 `);const result='a';expect(actual).toBe(result);});it('should replace - start whitespace',()=>{const actual=crop_1.default(`

 a`);const result='a';expect(actual).toBe(result);});it('should replace - multiple new line to 1 new line',()=>{const actual=crop_1.default(`a

b


 c`);const result='a\nb\nc';expect(actual).toBe(result);});});});