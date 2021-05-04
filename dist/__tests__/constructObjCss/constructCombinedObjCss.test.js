'use strict';var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{'default':mod};};Object.defineProperty(exports,'__esModule',{value:true});const constructCombinedObjCss_1=__importDefault(require('../../constructObjCss/constructCombinedObjCss'));describe('constructCombinedObjCss() - ,header,section,aside .child,',()=>{describe('success',()=>{it('should match 1 combined selector',()=>{const strCss='position: absolute';const objCss={};const strSelectors='header,section,aside .child';const actual=constructCombinedObjCss_1.default({objCss,strSelectors,strCss});const expected={',header,section,aside .child,':[strCss]};expect(actual).toEqual(expected);});it('should push onto existing same selector name - ,header,section,aside .child,',()=>{const strCss='margin: 0;';const objCss={',header,section,aside .child,':[strCss]};const strSelectors='header,section,aside .child';const actual=constructCombinedObjCss_1.default({objCss,strSelectors,strCss});const expected={',header,section,aside .child,':[objCss[',header,section,aside .child,'][0],strCss]};expect(actual).toEqual(expected);});});describe('fail',()=>{it('should NOT match single selector - header',()=>{const strCss='position: absolute';const objCss={};const strSelectors='header';const actual=constructCombinedObjCss_1.default({objCss,strSelectors,strCss});const expected={};expect(actual).toEqual(expected);});});});