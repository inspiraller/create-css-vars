import popMediaQCss from 'src/popCss/popMediaQCss';
import { MediaQ } from 'src/types';
import crop from 'src/util/crop';
import clearCssComments from 'src/util/clearCssComents';

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
        '@media ()': {
          combined: {
            '.link,elem': ['color: red;']
          }
        }
      };
      const strSingleSelector = '.link';
      const actual = clearCssComments(popMediaQCss({ strSingleSelector, objCss }));
      const expected = `
        @media () {
          color: red;
        }
      `;
      expect(crop(actual)).toBe(crop(expected));
    });
    it ('should render multiple combined', () => {
      const objCss: MediaQ = {
        '@media (max-width:1427px)': {
          combined: {
            '.btn--link,.btn--link path,.btn--link circle': ['color: blue;\n']
          }
        }
      };
      const strSingleSelector = '.btn--link';
      const actual = clearCssComments(popMediaQCss({ strSingleSelector, objCss }));
      const expected = `
        @media (max-width:1427px) {
          color: blue;
          & path {
            color: blue;
          }
          & circle {
            color: blue;
          }
        }
      `;
      // console.log(`actual ###="${actual}"###`);
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
