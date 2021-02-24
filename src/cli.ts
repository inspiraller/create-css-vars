import fs from 'fs';
import path from 'path';

import getArgs from './lib/getArgs';

import { Vars } from 'src/types';

import populateObjCssFromDir from './lib/populateObjCssFromDir';
import createVarsFromPopCss from './lib/createVarsFromPopCss';

type TconvertObjStrToStr = (vars: Vars) => string;
const convertObjStrToStr: TconvertObjStrToStr = vars =>
  Object.keys(vars).reduce((accum, cur) => `${accum}  '${cur}': \`${vars[cur]}\`,\n`, '');

type TconvertVarsToStr = (vars: Vars) => string;
const convertVarsToStr: TconvertVarsToStr = vars => {
  return `
    interface Vars {
      [key: string]: string;
    }
    const vars: Vars = {\n${convertObjStrToStr(vars)}\n};
    export default vars;
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
  const vars = createVarsFromPopCss(objCssAll);

  // console.log('objCssAll.pseudo = ', objCssAll.pseudo);
  // console.log('objCssAll.combined = ', objCssAll.combined);
  // console.log('vars = ', vars);

  const strVars = convertVarsToStr(vars);

  if (!strVars) {
    console.log('! Warning: There is no css!!');
    return
  }
  //console.log('strVars = ', strVars);

  const outFile = 'css-vars.ts';

  fs.writeFile(path.resolve(pathOut, outFile), strVars, err => {
    if (err) {
      throw err;
    }
    console.log(`File: "${pathOut}\\${outFile}" created successfully.`);
  });
};

export { cli };
