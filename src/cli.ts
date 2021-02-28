import fs from 'fs';
import path from 'path';

import getArgs from './util/getArgs';

import constructObjCssFromDir from './constructObjCss/constructObjCssFromDir';
import createSelectorsFromObjCss from './popCss/createSelectorsFromObjCss';
import convertSelectorsToStr from './convertSelectors/convertSelectorsToStr';

type Tcli = (args: string[]) => void;
const cli: Tcli = args => {
  const objArgs = getArgs(args);
  const from = objArgs.from;
  const to = objArgs.to;

  const cwd = process.cwd();

  let pathIn = '';
  if (from) {
    pathIn = fs.existsSync(from) ? from : path.resolve(cwd, from);
  }
  if (!fs.existsSync(pathIn)) {
    console.log(`! Warning: --from path "${from}" not found. Will load css from ${cwd}`);
    pathIn = path.resolve(cwd);
  }

  let pathOut = '';
  if (to) {
    pathOut = fs.existsSync(to) ? to : path.resolve(cwd, to);
  }
  if (!fs.existsSync(pathOut)) {
    console.log(`! Warning: --to path "${to}" not found. Will create here: ${cwd}/css-vars.ts`);
    pathOut = path.resolve(cwd);
  }

  const objCssAll = constructObjCssFromDir(pathIn);

  // console.log('objCssAll.mediaq = ', objCssAll.mediaq);
  // console.log('objCssAll.single = ', objCssAll.single);
  // console.log('cli.ts - objCssAll = ', objCssAll);
  // console.log('objCssAll.pseudo = ', objCssAll.pseudo);
  // console.log('objCssAll.combined = ', objCssAll.combined);

  const selectors = createSelectorsFromObjCss(objCssAll);
  const strSelectors = convertSelectorsToStr(selectors);

  if (!strSelectors) {
    console.log('! Warning: There is no css!!');
    return
  }
  const outFile = 'css-vars.ts';

  fs.writeFile(path.resolve(pathOut, outFile), strSelectors, err => {
    if (err) {
      throw err;
    }
    console.log(`File: "${pathOut}\\${outFile}" created successfully.`);
  });
};

export { cli };
