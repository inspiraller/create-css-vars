import popAllSelectors from 'src/popCss/popAllSelectors';
import { ObjCssAll } from 'src/types';
import crop from 'src/util/crop';
import clearCssComments from 'src/util/clearCssComents';

describe('popAllSelectors', () => {
  describe('success', () => {
    it('should construct 1 pseudo', () => {
      const strSingleSelector = '.item';
      const strCombinedKey = '.item,x';
      const objCssAll: ObjCssAll = {
        combined: {
          [strCombinedKey]: ['margin: left;']
        },
        single: {
          '.item': ['margin: right;']
        },
        pseudo: {
          '.item:hover': ['background: blue;']
        },
        withchild: {
          '.item a': ['text-decoration: underline;']
        },
        beginNonSingle: {},
        mediaq: {}
      };

      const actual = clearCssComments(popAllSelectors({ strSingleSelector, objCssAll }), '¬');

      //  \$\{separateCombined('${strSingleSelector}', '${strCombinedKey}')\}
      const expected = `
        margin: left;
        margin: right;
        &:hover {
          background: blue;
        }
        & a {
          text-decoration: underline;
        }
      `;
      expect(crop(actual)).toBe(crop(expected));
    });
  });
});
