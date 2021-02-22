import popAllVars from 'src/lib/popCss/popAllVars';
import { ObjCssAll } from 'src/lib/populateObjCssPerFile';
import { crop } from '../_utils';

/*
 [
            `
            .item {
              width: 100px;
            }
            .item:hover {
              background: blue;
            }
            .item, .x {
              top: 100px;
            }
            .item['x'] {
              border: 1px;
            }
            .item> .child {
              height:300px;
            }
          `
          ]

                    '@media (max-width:1427px)': {
            combined: {
              '.item,x': ['margin: left;']
            },
            single: {
              '.item': ['margin: right']
            },
            pseudo: {
              '.item:hover': ['background: blue']
            },
            withchild: {
              '.item a': ['text-decoration: underline']
            },
            beginNonSingle: {
              '*': ['box-sizing: border-box;'],
              '[y]': ['left: 29px'],
              '* .item, [z]': ['right: 2px']
            },
          }

        beginNonSingle: {
          '*': ['box-sizing: border-box;'],
          '[y]': ['left: 29px'],
          '* .item, [z]': ['right: 2px']
        },
*/

describe('popAllVars', () => {
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

      const actual = popAllVars({ strSingleSelector, objCssAll });
      const expected = `
        \$\{separateCombined('${strSingleSelector}', '${strCombinedKey}')\}
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
