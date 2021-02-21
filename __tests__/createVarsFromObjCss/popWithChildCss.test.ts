import { popWithChildCss } from 'src/lib/createVarsFromObjCss';
import { KeyStringArr } from 'src/lib/populateObjCssPerFile';
import { crop } from '../_utils';

describe('popWithChildCss', () => {
  describe('success', () => {
    it('should construct - 1 child', () => {
      const objCss: KeyStringArr = {
        '.link elem': ['color: red;']
      };
      const strSingleSelector = '.link';
      const actual = popWithChildCss({ strSingleSelector, objCss });
      const expected = `
        & elem {
          color: red;
        }
      `;
      expect(crop(actual)).toBe(crop(expected));
    });
    it('should construct - 2 descendants', () => {
      const objCss: KeyStringArr = {
        '.link elem elem2': ['color: red;']
      };
      const strSingleSelector = '.link';
      const actual = popWithChildCss({ strSingleSelector, objCss });
      const expected = `
        & elem elem2 {
          color: red;
        }
      `;
      expect(crop(actual)).toBe(crop(expected));
    });
    it('should construct - 2 descendants has pseudo', () => {
      const objCss: KeyStringArr = {
        '.link elem elem2:hover': ['color: red;']
      };
      const strSingleSelector = '.link';
      const actual = popWithChildCss({ strSingleSelector, objCss });
      const expected = `
        & elem elem2:hover {
          color: red;
        }
      `;
      expect(crop(actual)).toBe(crop(expected));
    });
    it('should construct - 2 descendants has attr', () => {
      const objCss: KeyStringArr = {
        '.link elem elem2[x]': ['color: red;']
      };
      const strSingleSelector = '.link';
      const actual = popWithChildCss({ strSingleSelector, objCss });

      const expected = `
        & elem elem2[x] {
          color: red;
        }
      `;
      expect(crop(actual)).toBe(crop(expected));
    });
    it('should construct - has combinator +', () => {
      const objCss: KeyStringArr = {
        '.link + elem': ['color: red;']
      };
      const strSingleSelector = '.link';
      const actual = popWithChildCss({ strSingleSelector, objCss });
      const expected = `
        & + elem {
          color: red;
        }
      `;
      expect(crop(actual)).toBe(crop(expected));
    });
    it('should construct - has extra space', () => {
      const objCss: KeyStringArr = {
        '.link    +    elem': ['color: red;']
      };
      const strSingleSelector = '.link';
      const actual = popWithChildCss({ strSingleSelector, objCss });
      const expected = `
        & + elem {
          color: red;
        }
      `;
      expect(crop(actual)).toBe(crop(expected));
    });
    it('should construct - no spaces for combinators = +', () => {
      const objCss: KeyStringArr = {
        '.link+elem': ['color: red;']
      };
      const strSingleSelector = '.link';
      const actual = popWithChildCss({ strSingleSelector, objCss });
      const expected = `
        & + elem {
          color: red;
        }
      `;
      expect(crop(actual)).toBe(crop(expected));
    });
    it('should construct - no spaces for combinators = >', () => {
      const objCss: KeyStringArr = {
        '.link>elem': ['color: red;']
      };
      const strSingleSelector = '.link';
      const actual = popWithChildCss({ strSingleSelector, objCss });
      const expected = `
        & > elem {
          color: red;
        }
      `;
      expect(crop(actual)).toBe(crop(expected));
    });
    it('should construct - no spaces for combinators = ~', () => {
      const objCss: KeyStringArr = {
        '.link~elem': ['color: red;']
      };
      const strSingleSelector = '.link';
      const actual = popWithChildCss({ strSingleSelector, objCss });
      const expected = `
        & ~ elem {
          color: red;
        }
      `;
      expect(crop(actual)).toBe(crop(expected));
    });
  });
});
