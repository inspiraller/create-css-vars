import fs from 'fs';
import path from 'path';

import getArgs from './lib/getArgs';

import { Selectors } from 'src/types';

import populateObjCssFromDir from './lib/populateObjCssFromDir';
import createSelectorsFromPopCss from './lib/createSelectorsFromPopCss';

type TconvertObjStrToStr = (selectors: Selectors) => string;
const convertObjStrToStr: TconvertObjStrToStr = selectors =>
  Object.keys(selectors).reduce((accum, cur) => `${accum}  '${cur}': getTheme => \`${selectors[cur]}\`,\n`, '');

type TconvertSelectorsToStr = (selectors: Selectors) => string;
const convertSelectorsToStr: TconvertSelectorsToStr = selectors => {
  return `
    export type TFuncStr = (str: string, str2?: string, str3?: string) => string;
    export interface Selectors {
      [key: string]: (prop: TFuncStr) => string;
    }
    const selectors: Selectors = {\n${convertObjStrToStr(selectors)}\n};
    export default selectors;
  `;
};

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

  const objCssAll = populateObjCssFromDir(pathIn);
  const selectors = createSelectorsFromPopCss(objCssAll);

  // console.log('objCssAll.pseudo = ', objCssAll.pseudo);
  // console.log('objCssAll.combined = ', objCssAll.combined);
  // console.log('selectors = ', selectors);

  const strSelectors = convertSelectorsToStr(selectors);

  if (!strSelectors) {
    console.log('! Warning: There is no css!!');
    return
  }
  //console.log('strSelectors = ', strSelectors);

  const outFile = 'css-vars.ts';

  fs.writeFile(path.resolve(pathOut, outFile), strSelectors, err => {
    if (err) {
      throw err;
    }
    console.log(`File: "${pathOut}\\${outFile}" created successfully.`);
  });
};

export { cli };
