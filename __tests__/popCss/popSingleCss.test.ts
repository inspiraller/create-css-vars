import popSingleCss from 'src/lib/popCss/popSingleCss';
import { KeyStringArr } from 'src/lib/populateObjCssPerFile';
import { crop } from '../_utils';

describe('popSingleCss', () => {
  describe('success', () => {
    it('should construct 1 matching single', () => {
      const objCss: KeyStringArr = {
        '.link': ['color: red;']
      };
      const strSingleSelector = '.link';
      const actual = popSingleCss({ strSingleSelector, objCss });
      const expected = `
        color: red;
      `;
      expect(crop(actual)).toBe(crop(expected));
    });
  });
  describe('fail', () => {
    it('should NOT match - none matching selector', () => {
      const objCss: KeyStringArr = {
        '.somethingelse': ['color: red;']
      };
      expect(popSingleCss({ strSingleSelector: '.link', objCss })).toBe('');
    });
  });
});