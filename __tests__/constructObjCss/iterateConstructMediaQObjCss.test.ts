import { MediaQ } from 'src/types';
import { cropMediaQ } from '../_utils';

import iterateConstructMediaQObjCss from 'src/constructObjCss/iterateConstructMediaQObjCss';

const m1 = '¬';
const m2 = '£';

describe('iterateConstructMediaQObjCss', () => {
  describe('success', () => {
    it('should - add to empty mediaQ - single ', () => {
      let objMediaQ: MediaQ = {};
      const str = `
        @media (max-width:1427px){
          .link {
            font-family: "sans";
          }
        }
      `;
      // console.log('}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}');
      const actual = cropMediaQ(iterateConstructMediaQObjCss({ objMediaQ, str, m1, m2 }));
      expect(actual).toEqual({
        '@media ( max-width : 1427px )': {
          single: {
            '.link': ['font-family: "sans";']
          }
        }
      });
    });
    it('should - append to existing mediaQ - single', () => {
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
      const actual = cropMediaQ(iterateConstructMediaQObjCss({ objMediaQ, str, m1, m2 }));
      expect(actual).toEqual({
        '@media ( max-width : 1427px )': {
          single: {
            '.btn': ['color: red;'],
            '.link': ['background: red;', 'font-family: "sans";']
          }
        }
      });
    });
    it('should - append to existing mediaQ - different types', () => {
      let objMediaQ: MediaQ = {
        '@media ( max-width : 1427px )': {
          single: {
            '.btn': ['color: red;'],
            '.link': ['background: red;']
          }
        },
        '@media ( min-width : 100px )': {
          pseudo: {
            'h1:hover': ['color: red;']
          }
        }
      };
      const str = `
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
      `;
      const actual = cropMediaQ(iterateConstructMediaQObjCss({ objMediaQ, str, m1, m2 }));
      expect(actual).toEqual({
        '@media ( max-width : 1427px )': {
          single: {
            '.btn': ['color: red;'],
            '.link': ['background: red;', 'font-family: "sans";']
          }
        },
        '@media ( min-width : 100px )': {
          pseudo: {
            'h1:hover': ['color: red;']
          }
        },
        '@media ( min-width : 1428px )': {
          single: {
            '.btn': ['background: blue;']
          }
        }
      });
    });
  });
});
