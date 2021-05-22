import fs from 'fs-extra';
import path from 'path';

import getArgs from './util/getArgs';

import constructObjCssFromDir from './constructObjCss/constructObjCssFromDir';
import createSelectorsFromObjCss from './popCss/createSelectorsFromObjCss';
import convertSelectorsToStr from './convertSelectors/convertSelectorsToStr';

const getRelPath = (to: string, label: string, isCreateDir?: boolean): string => {
  let pathTo = '';
  const cwd = process.cwd();
  if (to) {
    pathTo = fs.existsSync(to) ? to : path.join(cwd, to);
  }
  if (!fs.existsSync(pathTo)) {
    if (isCreateDir && pathTo) {
      fs.ensureDirSync(pathTo);
    } else {
      console.log(`! Warning: path "${label}" not found. Will load css from ${cwd}`);
      pathTo = path.resolve(cwd);
    }
  }
  return pathTo;
};

type Tcli = (args: string[]) => void;
const cli: Tcli = args => {
  const objArgs = getArgs(args);
  const from = objArgs.from;
  const to = objArgs.to;
  const js = objArgs.js;
  const assets_from = objArgs.assets_from;
  const assets_to = objArgs.assets_to;

  const pathFrom = getRelPath(from, 'from');
  const pathTo = getRelPath(to, 'to', true);

  const objCssAll = constructObjCssFromDir(pathFrom);

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
  const outFile = !js ? 'css-vars.ts' : 'css-vars.js';

  fs.writeFile(path.resolve(pathTo, outFile), strSelectors, err => {
    if (err) {
      throw err;
    }
    console.log(`File: "${pathTo}\\${outFile}" created successfully.`);
  });

  if (assets_from) {
    const pathAssetsFrom = getRelPath(assets_from, 'assets_from');
    const pathAssetsTo = assets_to ? getRelPath(assets_to, 'assets_to', true) : pathTo;
    if (pathAssetsTo !== pathAssetsFrom) {
      fs.copySync(pathAssetsFrom, pathAssetsTo, { overwrite: true });
    }
  }
};

export { cli };
