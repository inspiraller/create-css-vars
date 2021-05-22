import execConstructObjCss from 'src/constructObjCss/execConstructObjCss';
import constructAnyObjCss from 'src/constructObjCss/constructAnyObjCss';
import { KeyStringArr } from 'src/types';
import { regSingle } from 'src/util/regCss';
import { cropObjCss } from '../_utils';
import {
  replaceRelativeAssetsApos,
  replaceRelativeAssetsQuot,
  replaceRelativeTheme
} from 'src/util/replaceRelative';

const varCssInput = 'color: var(--lg);';
const varCssOutput = "color: ${getTheme('--lg')};";

const assetCssInput1 = 'background-image: url("./internal/file.svg");';
const assetCssInput2 = "background-image: url('./internal/file.svg');";

const assetCssOutput1 = 'background-image: url("${getAsset(\'./internal/file.svg\')}");';
const assetCssOutput2 = "background-image: url('${getAsset('./internal/file.svg')}');";

describe('execConstructObjCss - all ', () => {
  describe('replaceTheme()', () => {
    it('should replace vars with getTheme', () => {
      const strCss = varCssInput;
      const expected = varCssOutput;
      expect(replaceRelativeTheme(strCss)).toEqual(expected);
    });
  });
  describe('replaceRelativeAssets()', () => {
    it('should replace assets with assets path', () => {
      const expected = assetCssOutput1;
      let strCss = assetCssInput1;
      strCss = replaceRelativeAssetsApos(strCss);
      strCss = replaceRelativeAssetsQuot(strCss);
      expect(strCss).toEqual(expected);
    });
    it('should replace assets with assets path', () => {
      let strCss = assetCssInput2;
      const expected = assetCssOutput2;
      strCss = replaceRelativeAssetsApos(strCss);
      strCss = replaceRelativeAssetsQuot(strCss);
      expect(strCss).toEqual(expected);
    });
  });
  describe('execConstructObjCss()', () => {
    describe('success', () => {
      it('should match - basic example - 2 single selectors', () => {
        const arrSelectors = ['.elem1', '.elem2'];
        const strSelector1 = arrSelectors[0];
        const strSelector2 = arrSelectors[1];

        const strCss1 = `position: absolute;`;
        const strCss2 = `position: fixed;`;

        const str = `
          ${strSelector1} {
            ${strCss1}
          }
          ${strSelector2} {
            ${strCss2}
          }
        `;
        const objCss: KeyStringArr = {};
        const reg = regSingle;
        const constructCssObj = constructAnyObjCss;
        const actual = execConstructObjCss({ objCss, str, reg, constructCssObj });

        const expected: KeyStringArr = {
          [strSelector1]: [strCss1],
          [strSelector2]: [strCss2]
        };

        expect(cropObjCss(actual)).toEqual(expected);
      });
      it('should match - and replace vars with method ', () => {
        const arrSelectors = ['.elem1'];
        const strSelector1 = arrSelectors[0];

        const strCss1 = varCssInput;

        const str = `
          ${strSelector1} {
            ${strCss1}
          }
        `;
        const objCss: KeyStringArr = {};
        const reg = regSingle;
        const constructCssObj = constructAnyObjCss;
        const actual = execConstructObjCss({ objCss, str, reg, constructCssObj });

        const expected: KeyStringArr = {
          [strSelector1]: [varCssOutput]
        };
        expect(cropObjCss(actual)).toEqual(expected);
      });
      it('should match - and replace background image path with assets path ', () => {
        const arrSelectors = ['.elem1'];
        const strSelector1 = arrSelectors[0];

        const strCss1 = assetCssInput1;

        const str = `
          ${strSelector1} {
            ${strCss1}
          }
        `;
        const objCss: KeyStringArr = {};
        const reg = regSingle;
        const constructCssObj = constructAnyObjCss;
        const actual = execConstructObjCss({ objCss, str, reg, constructCssObj });

        const expected: KeyStringArr = {
          [strSelector1]: [assetCssOutput1]
        };
        expect(cropObjCss(actual)).toEqual(expected);
      });
    });
  });
});
