import popCombinedCss from 'src/lib/popCss/popCombinedCss';
import { KeyStringArr } from 'src/types';
import crop from 'src/lib/crop';
import clearCssComments from 'src/lib/clearCssComents';

describe('popCombinedCss', () => {
  describe('success', () => {
    it('should construct 1 combined', () => {
      const strCombinedSelector = '.link,.x';
      const objCss: KeyStringArr = {
        [strCombinedSelector]: ['color: red;']
      };
      const strSingleSelector = '.link';
      const actual = clearCssComments(popCombinedCss({ strSingleSelector, objCss }), '¬');
      // const expected = `\$\{separateCombined('${strSingleSelector}', '${strCombinedSelector}')\}\n`;
      const expected = `
        color: red;
      `;
      expect(crop(actual)).toBe(crop(expected));
    });
    it('should construct 2 combined', () => {
      const strCombinedSelector1 = '.link,.x';
      const strCombinedSelector2 = '.y,#item,.link';
      const objCss: KeyStringArr = {
        [strCombinedSelector1]: ['color: red;'],
        [strCombinedSelector2]: ['color: blue;']
      };
      const strSingleSelector = '.link';
      const actual = clearCssComments(popCombinedCss({ strSingleSelector, objCss }), '¬');
      // const expected = `
      //     \$\{separateCombined('${strSingleSelector}', '${strCombinedSelector1}')\}\n
      //     \$\{separateCombined('${strSingleSelector}', '${strCombinedSelector2}')\}\n
      //   `;
      const expected = `
        color: red;
        color: blue;
      `;
      expect(crop(actual)).toBe(crop(expected));
    });
    describe('fail', () => {
      it('should NOT construct combined - with non matching selector', () => {
        const objCss: KeyStringArr = {
          '.somethingx, .link21': ['color: red;']
        };
        expect(popCombinedCss({ strSingleSelector: '.link', objCss })).toBe('');
      });
    });
  });
});
