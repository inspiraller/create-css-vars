import { KeyStringArr } from 'src/types';
import constructCombinedObjCss from 'src/constructObjCss/constructCombinedObjCss';

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
    // it('should NOT mess up multiple pseudo', () => {
    //   const strCss = `
    //     /* 298px */
    //     .search__form {
    //       margin: 13px 0;
    //     }
    //     .search__form:hover input {
    //       color: var(--primary-green);
    //     }
    //     .search__form:hover {
    //       color: var(--primary-green);
    //     }
    //     .search__button path,
    //     .search__button circle {
    //       transition: stroke 0.2s;
    //     }
    //
    //     .search__form:hover svg path,
    //     .search__form:hover svg circle {
    //       stroke: var(--primary-green);
    //     }
    //   `;
    //   const objCss: KeyStringArr = {};
    //   const strSelectors = '.search__form';
    //   const actual = constructCombinedObjCss({ objCss, strSelectors, strCss });
    //   const expected: KeyStringArr = {};
    //   expect(actual).toEqual(expected);
    // });
  });
});
