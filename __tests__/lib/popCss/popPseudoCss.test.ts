import popPseudoCss from 'src/lib/popCss/popSeparateCombined/popPseudoCss';
import { KeyStringArr } from 'src/types';
import crop from 'src/lib/crop';

describe('popPseudoCss', () => {
  describe('success', () => {
    it('should construct 1 pseudo', () => {
      const objCss: KeyStringArr = {
        '.link:hover': ['color: red;']
      };
      const strSingleSelector = '.link';
      const actual = popPseudoCss({ strSingleSelector, objCss });
      const expected = `
          &:hover {
            color: red;
          }
        `;
      expect(crop(actual)).toBe(crop(expected));
    });
    it('should construct 1 attribute', () => {
      const objCss: KeyStringArr = {
        '.link[x]': ['color: blue;']
      };
      const strSingleSelector = '.link';
      const actual = popPseudoCss({ strSingleSelector, objCss });
      const expected = `
          &[x] {
            color: blue;
          }
        `;
      expect(crop(actual)).toBe(crop(expected));
    });
    it('should construct 2 mixed items', () => {
      const objCss: KeyStringArr = {
        '.link:hover': ['color: red;'],
        '.link[x]': ['color: blue;']
      };
      const strSingleSelector = '.link';
      const actual = popPseudoCss({ strSingleSelector, objCss });
      const expected = `
          &:hover {
            color: red;
          }
          &[x] {
            color: blue;
          }
        `;
      expect(crop(actual)).toBe(crop(expected));
    });
    it('should construct 2 mixed items with multiple css', () => {
      const objCss: KeyStringArr = {
        '.link:hover': ['color: red;', 'background: blue;'],
        '.link[x]': ['color: blue;']
      };
      const strSingleSelector = '.link';
      const actual = popPseudoCss({ strSingleSelector, objCss });
      const expected = `
          &:hover {
            color: red;
            background: blue;
          }
          &[x] {
            color: blue;
          }
        `;
      expect(crop(actual)).toBe(crop(expected));
    });
    it('should construct 1 pseudo - with child', () => {
      const objCss: KeyStringArr = {
        '.link:hover elem': ['color: red;']
      };
      const strSingleSelector = '.link';
      const actual = popPseudoCss({ strSingleSelector, objCss });
      const expected = `
          &:hover elem {
            color: red;
          }
        `;
      expect(crop(actual)).toBe(crop(expected));
    });
    it('should construct 1 attr - with child', () => {
      const objCss: KeyStringArr = {
        '.link[x] elem': ['color: red;']
      };
      const strSingleSelector = '.link';
      const actual = popPseudoCss({ strSingleSelector, objCss });
      const expected = `
          &[x] elem {
            color: red;
          }
        `;
      expect(crop(actual)).toBe(crop(expected));
    });
  });
  describe('fail', () => {
    it('should NOT construct non pseudo - with child', () => {
      const objCss: KeyStringArr = {
        '.link .child': ['color: red;']
      };
      expect(popPseudoCss({ strSingleSelector: '.link', objCss })).toBe('');
    });
    it('should NOT construct non pseudo - combined', () => {
      const objCss: KeyStringArr = {
        '.link, .child': ['color: red;']
      };
      expect(popPseudoCss({ strSingleSelector: '.link', objCss })).toBe('');
    });
    it('should NOT construct - starts with pseudo', () => {
      const objCss: KeyStringArr = {
        ':hover': ['color: red;']
      };
      expect(popPseudoCss({ strSingleSelector: '.link', objCss })).toBe('');
    });
    it('should NOT construct - starts with attr', () => {
      const objCss: KeyStringArr = {
        ':hover': ['color: red;']
      };
      expect(popPseudoCss({ strSingleSelector: '.link', objCss })).toBe('');
    });
    it('should NOT construct - child is pseudo', () => {
      const objCss: KeyStringArr = {
        'a :hover': ['color: red;']
      };
      expect(popPseudoCss({ strSingleSelector: '.link', objCss })).toBe('');
    });
    it('should NOT construct - child is attr', () => {
      const objCss: KeyStringArr = {
        'a [x]': ['color: red;']
      };
      expect(popPseudoCss({ strSingleSelector: '.link', objCss })).toBe('');
    });
    it('should NOT construct - parent is pseudo and child is pseudo', () => {
      const objCss: KeyStringArr = {
        ':hover :hover': ['color: red;']
      };
      expect(popPseudoCss({ strSingleSelector: '.link', objCss })).toBe('');
    });
    it('should NOT construct - parent is pseudo and child is attr', () => {
      const objCss: KeyStringArr = {
        ':hover [x]': ['color: red;']
      };
      expect(popPseudoCss({ strSingleSelector: '.link', objCss })).toBe('');
    });

    it('should NOT construct - parent is attr and child is attr', () => {
      const objCss: KeyStringArr = {
        '[y] [x]': ['color: red;']
      };
      expect(popPseudoCss({ strSingleSelector: '.link', objCss })).toBe('');
    });
    it('should NOT construct - parent is attr and child is pseudo', () => {
      const objCss: KeyStringArr = {
        '[y] :hover': ['color: red;']
      };
      expect(popPseudoCss({ strSingleSelector: '.link', objCss })).toBe('');
    });
  });
});
