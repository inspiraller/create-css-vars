'use strict';var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{'default':mod};};Object.defineProperty(exports,'__esModule',{value:true});const constructObjCssPerFile_1=__importDefault(require('../../constructObjCss/constructObjCssPerFile'));const _utils_1=require('../_utils');describe('constructObjCssPerFile()',()=>{fdescribe('success',()=>{it('should match - combination, single, withchild',()=>{const strReadFile=`
        header, section {
          width: 100px;
        }
        header {
          color: red;
        }
        header .child {
          background: red;
        }
      `;const objCssAll={combined:{},single:{},withchild:{},pseudo:{},mediaq:{}};const actual=_utils_1.cropObjCssChildren(constructObjCssPerFile_1.default(strReadFile,objCssAll));const expected={combined:{',header,section,':['width: 100px;']},single:{header:['color: red;'],section:[]},withchild:{'header .child':['background: red;']},pseudo:{},mediaq:{}};expect(actual).toEqual(expected);});it('should match - combination, pseudo',()=>{const strReadFile=`
        header, section {
          width: 100px;
        }
        header:hover  {
          background: red;
        }
      `;const objCssAll={combined:{},single:{},withchild:{},pseudo:{},mediaq:{}};const actual=_utils_1.cropObjCssChildren(constructObjCssPerFile_1.default(strReadFile,objCssAll));const expected={combined:{',header,section,':['width: 100px;']},single:{header:[],section:[]},withchild:{},pseudo:{'header:hover':['background: red;']},mediaq:{}};expect(actual).toEqual(expected);});it('should match - add to existing - combination, pseudo',()=>{const strReadFile=`
        header, section {
          width: 100px;
        }
        header:hover  {
          background: red;
        }
      `;const objCssAll={combined:{',header,section,':['position: fixed;']},single:{header:[],section:[]},withchild:{},pseudo:{},mediaq:{}};const actual=_utils_1.cropObjCssChildren(constructObjCssPerFile_1.default(strReadFile,objCssAll));const expected={combined:{',header,section,':['position: fixed;','width: 100px;']},single:{header:[],section:[]},withchild:{},pseudo:{'header:hover':['background: red;']},mediaq:{}};expect(actual).toEqual(expected);});});});