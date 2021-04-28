'use strict';var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{'default':mod};};Object.defineProperty(exports,'__esModule',{value:true});const _utils_1=require('../_utils');const iterateConstructMediaQObjCss_1=__importDefault(require('..\\..\\src\\constructObjCss\\iterateConstructMediaQObjCss'));describe('constructMediaQ - two methods',()=>{describe('iterateConstructMediaQObjCss',()=>{describe('success',()=>{it('should append to existing mediaQ - objCss',()=>{let objMediaQ={'@media ( max-width : 1427px )':{single:{'.btn':['color: red;'],'.link':['background: red;']}}};const str=`
          @media (max-width:1427px){
            .link {
              font-family: "sans";
            }
          }
        `;const m1='\xAC';const m2='\xA3';const actual=_utils_1.cropMediaQ(iterateConstructMediaQObjCss_1.default({objMediaQ,str,m1,m2}));expect(actual).toEqual({'@media ( max-width : 1427px )':{single:{'.btn':['color: red;'],'.link':['background: red;','font-family: "sans";']},combined:{},withchild:{},pseudo:{}}});});});});});