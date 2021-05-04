'use strict';var __awaiter=this&&this.__awaiter||function(thisArg,_arguments,P,generator){function adopt(value){return value instanceof P?value:new P(function(resolve){resolve(value);});}return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value));}catch(e){reject(e);}}function rejected(value){try{step(generator['throw'](value));}catch(e){reject(e);}}function step(result){result.done?resolve(result.value):adopt(result.value).then(fulfilled,rejected);}step((generator=generator.apply(thisArg,_arguments||[])).next());});};Object.defineProperty(exports,'__esModule',{value:true});const regCss_1=require('../../util/regCss');describe('regCss',()=>{describe('regTruncate',()=>{it('should clean  ',()=>__awaiter(void 0,void 0,void 0,function*(){const str=' john  ';const actual=str.replace(regCss_1.regTruncate,'');const result='john';expect(actual).toBe(result);}));});describe('regCombined',()=>{describe('success',()=>{it('should match 2 combined selectors  ',()=>__awaiter(void 0,void 0,void 0,function*(){const strSelector=`selector1,selector2 {
          position: absolute;
        } `;const actual=strSelector.search(regCss_1.regCombined)!==-1;expect(actual).toBe(true);}));it('should match 2 combined selectors on separate lines  ',()=>__awaiter(void 0,void 0,void 0,function*(){const strSelector=`
        selector1,
        selector2 {
          position: absolute;
        } `;const actual=strSelector.search(regCss_1.regCombined)!==-1;expect(actual).toBe(true);}));it('should match 3 combined selectors on separate lines  ',()=>__awaiter(void 0,void 0,void 0,function*(){const strSelector=`
        selector1,
        selector2, selector3 {
          position: absolute;
        } `;const actual=strSelector.search(regCss_1.regCombined)!==-1;expect(actual).toBe(true);}));it('should match combined = .selector 1, *  ',()=>__awaiter(void 0,void 0,void 0,function*(){const strSelector=`
        .selector1,
        * {
          position: absolute;
        } `;const actual=strSelector.search(regCss_1.regCombined)!==-1;expect(actual).toBe(true);}));it('should match combined = *, [s]  ',()=>__awaiter(void 0,void 0,void 0,function*(){const strSelector=`
        * ,
        [s] {
          position: absolute;
        } `;const actual=strSelector.search(regCss_1.regCombined)!==-1;expect(actual).toBe(true);}));it('should match combined = * > d , [s=""]  ',()=>__awaiter(void 0,void 0,void 0,function*(){const strSelector=`
        * > d ,
        [s=""] {
          position: absolute;
        } `;const actual=strSelector.search(regCss_1.regCombined)!==-1;expect(actual).toBe(true);}));});describe('fail',()=>{it('should NOT match without comma - * > d .x:hover link [d|=""] #d > d ',()=>__awaiter(void 0,void 0,void 0,function*(){const strSelector=`
        * > d .x:hover link [d|=""] #d > d  {
          position: absolute;
        } `;const actual=strSelector.search(regCss_1.regCombined)!==-1;expect(actual).toBe(false);}));});});describe('regSingle',()=>{describe('success',()=>{it('should match = a ',()=>__awaiter(void 0,void 0,void 0,function*(){const strSelector=`
        a {}`;const actual=strSelector.search(regCss_1.regSingle)!==-1;expect(actual).toBe(true);}));it('should match = div ',()=>__awaiter(void 0,void 0,void 0,function*(){const strSelector=`
        div {}`;const actual=strSelector.search(regCss_1.regSingle)!==-1;expect(actual).toBe(true);}));it('should match = .class ',()=>__awaiter(void 0,void 0,void 0,function*(){const strSelector=`
        .class {}`;const actual=strSelector.search(regCss_1.regSingle)!==-1;expect(actual).toBe(true);}));it('should match = #item ',()=>__awaiter(void 0,void 0,void 0,function*(){const strSelector=`
        #item {}`;const actual=strSelector.search(regCss_1.regSingle)!==-1;expect(actual).toBe(true);}));it('should match = .item- ',()=>__awaiter(void 0,void 0,void 0,function*(){const strSelector=`
        .item- {}`;const actual=strSelector.search(regCss_1.regSingle)!==-1;expect(actual).toBe(true);}));it('should match = .item-x ',()=>__awaiter(void 0,void 0,void 0,function*(){const strSelector=`
        .item-x {}`;const actual=strSelector.search(regCss_1.regSingle)!==-1;expect(actual).toBe(true);}));it('should match = .item--x ',()=>__awaiter(void 0,void 0,void 0,function*(){const strSelector=`
        .item--x {}`;const actual=strSelector.search(regCss_1.regSingle)!==-1;expect(actual).toBe(true);}));it('should match = .item__d--x ',()=>__awaiter(void 0,void 0,void 0,function*(){const strSelector=`
        .item__d--x {}`;const actual=strSelector.search(regCss_1.regSingle)!==-1;expect(actual).toBe(true);}));it('should match = .item_ ',()=>__awaiter(void 0,void 0,void 0,function*(){const strSelector=`
        .item_ {}`;const actual=strSelector.search(regCss_1.regSingle)!==-1;expect(actual).toBe(true);}));});describe('fail',()=>{it('should NOT match = div[d="something"] ',()=>__awaiter(void 0,void 0,void 0,function*(){const strSelector=`
        div[d="something"] {}`;const actual=strSelector.search(regCss_1.regSingle)!==-1;expect(actual).toBe(false);}));it('should NOT match = * ',()=>__awaiter(void 0,void 0,void 0,function*(){const strSelector=`
          * {}`;const actual=strSelector.search(regCss_1.regSingle)!==-1;expect(actual).toBe(false);}));it('should NOT match = d:hover ',()=>__awaiter(void 0,void 0,void 0,function*(){const strSelector=`
          div:hover {}`;const actual=strSelector.search(regCss_1.regSingle)!==-1;expect(actual).toBe(false);}));it('should NOT match = div p ',()=>__awaiter(void 0,void 0,void 0,function*(){const strSelector=`
          div p {}`;const actual=strSelector.search(regCss_1.regSingle)!==-1;expect(actual).toBe(false);}));it('should NOT match = div,p ',()=>__awaiter(void 0,void 0,void 0,function*(){const strSelector=`
          div,p {}`;const actual=strSelector.search(regCss_1.regSingle)!==-1;expect(actual).toBe(false);}));it('should NOT match = div>p ',()=>__awaiter(void 0,void 0,void 0,function*(){const strSelector=`
          div>p {}`;const actual=strSelector.search(regCss_1.regSingle)!==-1;expect(actual).toBe(false);}));it('should NOT match = div+p ',()=>__awaiter(void 0,void 0,void 0,function*(){const strSelector=`
          div+p {}`;const actual=strSelector.search(regCss_1.regSingle)!==-1;expect(actual).toBe(false);}));it('should NOT match = div~p ',()=>__awaiter(void 0,void 0,void 0,function*(){const strSelector=`
          div~p {}`;const actual=strSelector.search(regCss_1.regSingle)!==-1;expect(actual).toBe(false);}));});describe('regPseudoOrAttr',()=>{describe('success',()=>{it('should match = a:hover ',()=>__awaiter(void 0,void 0,void 0,function*(){const strSelector=`
          a:hover {}`;const actual=strSelector.search(regCss_1.regPseudoOrAttr)!==-1;expect(actual).toBe(true);}));it('should match = a[x] ',()=>__awaiter(void 0,void 0,void 0,function*(){const strSelector=`
          a[x] {}`;const actual=strSelector.search(regCss_1.regPseudoOrAttr)!==-1;expect(actual).toBe(true);}));it('should match = a[x=3] ',()=>__awaiter(void 0,void 0,void 0,function*(){const strSelector=`
          a[x=3] {}`;const actual=strSelector.search(regCss_1.regPseudoOrAttr)!==-1;expect(actual).toBe(true);}));it('should match = a[ x = 3] ',()=>__awaiter(void 0,void 0,void 0,function*(){const strSelector=`
          a[ x = 3] {}`;const actual=strSelector.search(regCss_1.regPseudoOrAttr)!==-1;expect(actual).toBe(true);}));it('should match = a[ x |= 3] ',()=>__awaiter(void 0,void 0,void 0,function*(){const strSelector=`
          a[ x |= 3] {}`;const actual=strSelector.search(regCss_1.regPseudoOrAttr)!==-1;expect(actual).toBe(true);}));it('should match = a[ x ~= 3] ',()=>__awaiter(void 0,void 0,void 0,function*(){const strSelector=`
          a[ x ~= 3] {}`;const actual=strSelector.search(regCss_1.regPseudoOrAttr)!==-1;expect(actual).toBe(true);}));it('should match = a[ x *= 3] ',()=>__awaiter(void 0,void 0,void 0,function*(){const strSelector=`
          a[ x *= 3] {}`;const actual=strSelector.search(regCss_1.regPseudoOrAttr)!==-1;expect(actual).toBe(true);}));it('should match = a:hover[ x *= 3] ',()=>__awaiter(void 0,void 0,void 0,function*(){const strSelector=`
          a:hover[ x *= 3] {}`;const actual=strSelector.search(regCss_1.regPseudoOrAttr)!==-1;expect(actual).toBe(true);}));it('should match = a::p ',()=>__awaiter(void 0,void 0,void 0,function*(){const strSelector=`
          a::p {}`;const actual=strSelector.search(regCss_1.regPseudoOrAttr)!==-1;expect(actual).toBe(true);}));it('should match = a::p child ',()=>__awaiter(void 0,void 0,void 0,function*(){const strSelector=`
          a::p child {}`;const actual=strSelector.search(regCss_1.regPseudoOrAttr)!==-1;expect(actual).toBe(true);}));});describe('fail',()=>{it('should NOT match combined = a::p,child',()=>__awaiter(void 0,void 0,void 0,function*(){const strSelector=`
          a::p,child {}`;const actual=strSelector.search(regCss_1.regPseudoOrAttr)!==-1;expect(actual).toBe(false);}));});});describe('regWithChild',()=>{describe('success',()=>{it('should match with child - header .child',()=>{const strSelector=`
            header .child {}
          `;const actual=strSelector.search(regCss_1.regWithChild)!==-1;expect(actual).toBe(true);});});describe('fail',()=>{it('should NOT match combinator - header, header .child',()=>{const strSelector=`header, header .child{}`;const actual=strSelector.search(regCss_1.regWithChild)!==-1;expect(actual).toBe(false);});});});});});