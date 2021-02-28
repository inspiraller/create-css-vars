import { KeyStringArr } from 'src/types';
import constructAnyObjCss from 'src/constructObjCss/constructAnyObjCss';

describe('constructAnyObjCss()', () => {
  describe('success', () => {
    it('should match - 1 selector with child', () => {
      const strCss = 'position: absolute';
      const objCss: KeyStringArr = {};
      const strSelectors = '.header .child';
      const actual = constructAnyObjCss({ objCss, strSelectors, strCss });

      const expected: KeyStringArr = {
        [strSelectors]: [strCss]
      };
      expect(actual).toEqual(expected);
    });
    it('should match - 1 selector with pseudo', () => {
      const strCss = 'position: absolute';
      const objCss: KeyStringArr = {};
      const strSelectors = '.header:hover';
      const actual = constructAnyObjCss({ objCss, strSelectors, strCss });

      const expected: KeyStringArr = {
        [strSelectors]: [strCss]
      };
      expect(actual).toEqual(expected);
    });
    it('should match - 1 selector with combinator', () => {
      const strCss = 'position: absolute';
      const objCss: KeyStringArr = {};
      const strSelectors = '.header > child';
      const actual = constructAnyObjCss({ objCss, strSelectors, strCss });

      const expected: KeyStringArr = {
        [strSelectors]: [strCss]
      };
      expect(actual).toEqual(expected);
    });

    it('should push onto existing objCss - selector', () => {
      const strCss = 'position: absolute';
      const strSelectors = '.header:hover';
      const objCss: KeyStringArr = {
        [strSelectors]: ['color: red;']
      };
      const actual = constructAnyObjCss({ objCss, strSelectors, strCss });

      const expected: KeyStringArr = {
        [strSelectors]: ['color: red;', strCss]
      };
      expect(actual).toEqual(expected);
    });
    it('should only push onto existing objCss with matching selector', () => {
      const strCss = 'position: absolute';
      const strSelectors = '.item>.x';
      const objCss: KeyStringArr = {
        header: ['color: red;'],
        [strSelectors]: ['color: blue;']
      };
      const actual = constructAnyObjCss({ objCss, strSelectors, strCss });

      const expected: KeyStringArr = {
        header: ['color: red;'],
        [strSelectors]: ['color: blue;', strCss]
      };
      expect(actual).toEqual(expected);
    });
  });
});
