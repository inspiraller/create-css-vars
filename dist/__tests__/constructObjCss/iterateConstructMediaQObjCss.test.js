'use strict';var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{'default':mod};};Object.defineProperty(exports,'__esModule',{value:true});const _utils_1=require('../_utils');const iterateConstructMediaQObjCss_1=__importDefault(require('..\\..\\src\\constructObjCss\\iterateConstructMediaQObjCss'));const m1='\xAC';const m2='\xA3';describe('iterateConstructMediaQObjCss',()=>{describe('success',()=>{it('should - add to empty mediaQ - single ',()=>{let objMediaQ={};const str=`
        @media (max-width:1427px){
          .link {
            font-family: "sans";
          }
        }
      `;const actual=_utils_1.cropMediaQ(iterateConstructMediaQObjCss_1.default({objMediaQ,str,m1,m2}));expect(actual).toEqual({'@media ( max-width : 1427px )':{single:{'.link':['font-family: "sans";']}}});});it('should - append to existing mediaQ - single',()=>{let objMediaQ={'@media ( max-width : 1427px )':{single:{'.btn':['color: red;'],'.link':['background: red;']}}};const str=`
        @media (max-width:1427px){
          .link {
            font-family: "sans";
          }
        }
      `;const actual=_utils_1.cropMediaQ(iterateConstructMediaQObjCss_1.default({objMediaQ,str,m1,m2}));expect(actual).toEqual({'@media ( max-width : 1427px )':{single:{'.btn':['color: red;'],'.link':['background: red;','font-family: "sans";']}}});});it('should - append to existing mediaQ - different types',()=>{let objMediaQ={'@media ( max-width : 1427px )':{single:{'.btn':['color: red;'],'.link':['background: red;']}},'@media ( min-width : 100px )':{pseudo:{'h1:hover':['color: red;']}}};const str=`
        @media (max-width:1427px){
          .link {
            font-family: "sans";
          }
        }
        @media (min-width:1428px){
          .btn {
            background: blue;
          }
        }
      `;const actual=_utils_1.cropMediaQ(iterateConstructMediaQObjCss_1.default({objMediaQ,str,m1,m2}));expect(actual).toEqual({'@media ( max-width : 1427px )':{single:{'.btn':['color: red;'],'.link':['background: red;','font-family: "sans";']}},'@media ( min-width : 100px )':{pseudo:{'h1:hover':['color: red;']}},'@media ( min-width : 1428px )':{single:{'.btn':['background: blue;']}}});});});});