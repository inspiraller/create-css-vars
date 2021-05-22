import fs from 'fs-extra';
import path from 'path';

import getArgs from './util/getArgs';

import constructObjCssFromDir from './constructObjCss/constructObjCssFromDir';
import createSelectorsFromObjCss from './popCss/createSelectorsFromObjCss';
import convertSelectorsToStr from './convertSelectors/convertSelectorsToStr';
import { Theme } from 'src/types';
import createGlobalStyles from './constructObjCss/createGlobalStyles';

const pathExists = (to: string) => {
  const cwd = process.cwd();
  const strPath = to && (to.indexOf('./') === 0 || to.indexOf('/') === 0) ? path.join(cwd, to) : to;
  return {
    strPath,
    isExist: fs.existsSync(strPath) ? true : false
  };
};

const getRelPath = (to: string, label: string, isCreateDir?: boolean): string => {
  const cwd = process.cwd();
  const objExist = pathExists(to);
  const { strPath, isExist } = objExist;
  let strPathTemp = strPath;

  if (!isExist) {
    if (isCreateDir && strPathTemp) {
      fs.ensureDirSync(strPathTemp);
    } else {
      console.warn(`! Warning: path "${label}" not found.!!!!!!!!!!!!!!!!!!`);
      strPathTemp = path.resolve(cwd);
    }
  }
  return strPathTemp;
};

type Tcli = (args: string[]) => void;
const cli: Tcli = args => {
  const objArgs = getArgs(args);
  const from = objArgs.from;
  const to = objArgs.to;
  const js = objArgs.js;
  const assets_from = objArgs.assets_from;
  const assets_to = objArgs.assets_to;
  const global_styles = objArgs.global_styles;

  const pathFromDir = getRelPath(from, 'from');
  const pathToDir = getRelPath(to, 'to', true);

  const objCssAll = constructObjCssFromDir(pathFromDir);

  const ext = js ? 'js' : 'ts';

  // console.log('objCssAll.theme = ', objCssAll.theme);
  // console.log('objCssAll.mediaq = ', objCssAll.mediaq);
  // console.log('objCssAll.single = ', objCssAll.single);
  // console.log('cli.ts - objCssAll = ', objCssAll);
  // console.log('objCssAll.pseudo = ', objCssAll.pseudo);
  // console.log('objCssAll.combined = ', objCssAll.combined);

  const selectors = createSelectorsFromObjCss(objCssAll);

  const strSelectors = convertSelectorsToStr(selectors, !!js);

  if (!strSelectors) {
    console.log('! Warning: There is no css!!');
    return;
  }
  const outFile = `css-vars.${ext}`;

  fs.writeFile(path.resolve(pathToDir, outFile), strSelectors, err => {
    if (err) {
      throw err;
    }
    console.log(`File: "${pathToDir}/${outFile}" created successfully.`);
  });

  if (assets_from) {
    console.log('get assets_from', assets_from);
    const pathAssetsFrom = getRelPath(assets_from, 'assets_from');
    const pathAssetsTo = assets_to ? getRelPath(assets_to, 'assets_to', true) : pathToDir;
    if (pathAssetsTo !== pathAssetsFrom) {
      fs.copySync(pathAssetsFrom, pathAssetsTo, { overwrite: true });
    }
  }

  if (objCssAll.theme) {
    const outThemeFile = `theme.${ext}`;
    const strThemeVars = Object.keys(objCssAll.theme)
      .map(
        key => `  '${key}': '${(objCssAll.theme as Theme)[key as keyof typeof objCssAll.theme]}'`
      )
      .join(',\n');
    const strTheme = `
const theme = {\n${strThemeVars}\n};
export default theme;
    `;

    fs.writeFile(path.resolve(pathToDir, outThemeFile), strTheme, err => {
      if (err) {
        throw err;
      }
      console.log(`File: "${pathToDir}/${outThemeFile}" created successfully.`);
    });
  }

  if (global_styles) {
    const { isExist, strPath } = pathExists(global_styles);
    if (isExist) {
      const strGlobalStyles = createGlobalStyles(strPath, !!js);
      const outGlobalStylesPath = `globalStyles.${ext}`;
      fs.writeFile(path.resolve(pathToDir, outGlobalStylesPath), strGlobalStyles, err => {
        if (err) {
          throw err;
        }
        console.log(`File: "${pathToDir}/${outGlobalStylesPath}" created successfully.`);
      });
    }
  }
};

export { cli };
