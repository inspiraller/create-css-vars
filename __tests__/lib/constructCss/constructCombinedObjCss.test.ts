import { KeyStringArr } from 'src/types';
import constructCombinedObjCss from 'src/lib/constructCss/constructCombinedObjCss';

describe('constructCombinedObjCss() - ,header,section,aside .child,', () => {
  describe('success', () => {
    it('should match 1 combined selector', () => {
      const strCss = 'position: absolute';
      const objCss: KeyStringArr = {};
      const strSelectors = 'header,section,aside .child';
      const actual = constructCombinedObjCss({ objCss, strSelectors, strCss });

      const expected: KeyStringArr = {
        ',header,section,aside .child,': [strCss]
      };
      expect(actual).toEqual(expected);
    });
    it('should push onto existing same selector name - ,header,section,aside .child,', () => {
      const strCss = 'margin: 0;';
      const objCss: KeyStringArr = {
        ',header,section,aside .child,': [strCss]
      };
      const strSelectors = 'header,section,aside .child';
      const actual = constructCombinedObjCss({ objCss, strSelectors, strCss });
      const expected: KeyStringArr = {
        ',header,section,aside .child,': [objCss[',header,section,aside .child,'][0], strCss]
      };
      expect(actual).toEqual(expected);
    });
  });
  describe('fail', () => {
    it('should NOT match single selector - header', () => {
      const strCss = 'position: absolute';
      const objCss: KeyStringArr = {};
      const strSelectors = 'header';
      const actual = constructCombinedObjCss({ objCss, strSelectors, strCss });
      const expected: KeyStringArr = {};
      expect(actual).toEqual(expected);
    });
  });
});
