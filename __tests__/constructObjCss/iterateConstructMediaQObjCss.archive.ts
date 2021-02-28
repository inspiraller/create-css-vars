import { MediaQ } from 'src/types'
import {cropMediaQ} from '../_utils';

import iterateConstructMediaQObjCss from 'src/constructObjCss/iterateConstructMediaQObjCss';

describe('constructMediaQ - two methods', () => {
  // describe('appendToMediaQChild', () => {
  //   describe('success', ()=> {
  //     it ('should append - same mediaquery  - single', () => {
  //       let objCss: ObjCssAllOptional = {
  //         single: {
  //           '.btn': ['color: red;'],
  //           '.link': ['background: red;']
  //         }
  //       };
  //       const objGet: ObjCssAllOptional = {
  //         single: {
  //           '.link': ['font-family: "sans";']
  //         }
  //       };
  //       objCss = appendToMediaQChild({objBuild: objCss, objGet, strChild: 'single'});
  //       expect(objCss.single).toEqual({
  //         '.btn': ['color: red;'],
  //         '.link': ['background: red;', 'font-family: "sans";']
  //       });
  //     });
  //     it ('should append - same mediaquery  - single - reverse order', () => {
  //       let objCss: ObjCssAllOptional = {
  //         single: {
  //           '.link': ['background: red;']
  //         }
  //       };
  //       const objGet: ObjCssAllOptional = {
  //         single: {
  //           '.btn': ['color: red;'],
  //           '.link': ['font-family: "sans";']
  //         }
  //       };
  //       objCss = appendToMediaQChild({objBuild: objCss, objGet, strChild: 'single'});
  //       expect(objCss.single).toEqual({
  //         '.link': ['background: red;', 'font-family: "sans";'],
  //         '.btn': ['color: red;']
  //       });
  //     });
  //     it ('should append -to objCss - single empty', () => {
  //       let objCss: ObjCssAllOptional = {
  //         single: {}
  //       };
  //       const objGet: ObjCssAllOptional = {
  //         single: {
  //           '.btn': ['color: red;'],
  //           '.link': ['font-family: "sans";']
  //         }
  //       };
  //       objCss = appendToMediaQChild({objBuild: objCss, objGet, strChild: 'single'});
  //       expect(objCss.single).toEqual({
  //         '.link': ['font-family: "sans";'],
  //         '.btn': ['color: red;']
  //       });
  //     });
  //     it ('should append -to objCss - empty', () => {
  //       let objCss: ObjCssAllOptional = {};
  //       const objGet: ObjCssAllOptional = {
  //         single: {
  //           '.btn': ['color: red;'],
  //           '.link': ['font-family: "sans";']
  //         }
  //       };
  //       objCss = appendToMediaQChild({objBuild: objCss, objGet, strChild: 'single'});
  //       expect(objCss.single).toEqual({
  //         '.link': ['font-family: "sans";'],
  //         '.btn': ['color: red;']
  //       });
  //     });
  //   });
  //   describe('fail', ()=> {
  //     it ('should Not - get - single empty', () => {
  //       let objCss: ObjCssAllOptional = {
  //         single: {
  //           '.btn': ['color: red;'],
  //           '.link': ['background: red;']
  //         }
  //       };
  //       const objGet: ObjCssAllOptional = {
  //         single: {}
  //       };
  //       objCss = appendToMediaQChild({objBuild: objCss, objGet, strChild: 'single'});
  //       expect(objCss.single).toEqual({
  //         '.btn': ['color: red;'],
  //         '.link': ['background: red;']
  //       });
  //     });
  //     it ('should Not - get - single - selector empty', () => {
  //       let objCss: ObjCssAllOptional = {
  //         single: {
  //           '.btn': ['color: red;'],
  //           '.link': ['background: red;']
  //         }
  //       };
  //       const objGet: ObjCssAllOptional = {
  //         single: {
  //           '.btn': []
  //         }
  //       };
  //       objCss = appendToMediaQChild({objBuild: objCss, objGet, strChild: 'single'});
  //       expect(objCss.single).toEqual({
  //         '.btn': ['color: red;'],
  //         '.link': ['background: red;']
  //       });
  //     });
  //     it ('should Not get - get - empty', () => {
  //       let objCss: ObjCssAllOptional = {
  //         single: {
  //           '.btn': ['color: red;'],
  //           '.link': ['background: red;']
  //         }
  //       };
  //       const objGet: ObjCssAllOptional = {};
  //       objCss = appendToMediaQChild({objBuild: objCss, objGet, strChild: 'single'});
  //       expect(objCss.single).toEqual({
  //         '.btn': ['color: red;'],
  //         '.link': ['background: red;']
  //       });
  //     });
  //   });
  // });
  describe('iterateConstructMediaQObjCss', () => {
    describe('success', () => {
      it('should append to existing mediaQ - objCss', () => {
        let objMediaQ: MediaQ = {
          '@media ( max-width : 1427px )': {
            single: {
              '.btn': ['color: red;'],
              '.link': ['background: red;']
            }
          }
        };
        const str = `
          @media (max-width:1427px){
            .link {
              font-family: "sans";
            }
          }
        `;
        const m1 = '¬';
        const m2 = '£';
        const actual = cropMediaQ(iterateConstructMediaQObjCss({ objMediaQ, str, m1, m2 }));

        expect(actual).toEqual({
          '@media ( max-width : 1427px )': {
            single: {
              '.btn': ['color: red;'],
              '.link': ['background: red;', 'font-family: "sans";']
            },
            combined: {},
            withchild: {},
            pseudo: {},
            beginNonSingle: {}
          }
        });
      });
    });
  });
});
