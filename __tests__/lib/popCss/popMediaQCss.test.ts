import popMediaQCss from 'src/lib/popCss/popMediaQCss';
import { MediaQ } from 'src/types';
import crop from 'src/lib/crop';
import clearCssComments from 'src/lib/clearCssComents';

describe('popWMediaQCss', () => {
  describe('success', () => {
    it('should construct - MediaQuery - of single', () => {
      const objCss: MediaQ = {
        '@media()': {
          single: {
            '.link': ['color: red;']
          }
        }
      };
      const strSingleSelector = '.link';
      const actual = popMediaQCss({ strSingleSelector, objCss });
      const expected = `
        @media() {
          color: red;
        }
      `;
      expect(crop(actual)).toBe(crop(expected));
    });
    it('should construct - MediaQuery - of combined', () => {
      const objCss: MediaQ = {
        '@media()': {
          combined: {
            '.link,elem': ['color: red;']
          }
        }
      };
      const strSingleSelector = '.link';
      const actual = clearCssComments(popMediaQCss({ strSingleSelector, objCss }));
      const expected = `
        @media() {
          color: red;
        }
      `;
      expect(crop(actual)).toBe(crop(expected));
    });
  });
  describe('fail', () => {
    it('should NOT construct - MediaQuery - of unmatching single', () => {
      const objCss: MediaQ = {
        '@media()': {
          combined: {
            '.link,elem': ['color: red;']
          }
        }
      };
      const strSingleSelector = '.somethingelse';
      const actual = clearCssComments(popMediaQCss({ strSingleSelector, objCss }));
      const expected = '';
      expect(crop(actual)).toBe(crop(expected));
    });
  });
});
