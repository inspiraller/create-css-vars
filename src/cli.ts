import fs from 'fs';
import path from 'path';

import getArgs from './lib/getArgs';

import { KeyStringArr, Vars } from 'src/types';

import populateObjCssFromDir from './lib/populateObjCssFromDir';
import createVarsFromPopCss from './lib/createVarsFromPopCss';
// import crop from 'src/lib/crop';

type TconvertObjStrToStr = (vars: Vars) => string;
const convertObjStrToStr: TconvertObjStrToStr = vars =>
  Object.keys(vars).reduce((accum, cur) => `${accum}  '${cur}': \`${vars[cur]}\`,\n`, '');

// type TconvertObjArrToStr = (obj: KeyStringArr) => string;
// const convertObjArrToStr: TconvertObjArrToStr = obj =>
//   Object.keys(obj).reduce((accum, cur) => {
//     const css = obj[cur].join('\n');
//     return `${accum}  ['${cur}']: \`${css}\`\n`;
//   }, '');

type TconvertVarsToStr = (vars: Vars, combined: KeyStringArr) => string;
// const convertVarsToStr: TconvertVarsToStr = (vars, combined) => {
//   return `
//     interface Vars {
//       [key: string]: string;
//     }
//     interface KeyStringArr {
//       [key: string]: string[];
//     }

//     type TgetReg = (str: string) => RegExp;

//     const getRegSingleInCombined: TgetReg = strSingleSelector =>
//       RegExp(\`(^|\\,)\${strSingleSelector}([\\W]|$)\`);

//     type TseparateCombined = (props: {
//       strSingleSelector: string;
//       strCombinedSelector: string;
//       combined: Vars;
//     }) => string;

//     export const separateCombined: TseparateCombined = ({
//       strSingleSelector,
//       strCombinedSelector,
//       combined
//     }) =>
//       strCombinedSelector.search(getRegSingleInCombined(strSingleSelector)) !== -1
//         ? combined[strCombinedSelector]
//         : '';

//     export const combined: Vars = {\n${convertObjArrToStr(combined)}\n};
//     export const vars: Vars = {\n${convertObjStrToStr(vars)}\n};
//   `;
// };

const convertVarsToStr: TconvertVarsToStr = (vars, combined) => {
  return `
    interface Vars {
      [key: string]: string;
    }
    export const vars: Vars = {\n${convertObjStrToStr(vars)}\n};
  `;
};

type Tcli = (args: string[]) => string;
const cli: Tcli = args => {
  const objArgs = getArgs(args);
  const from = objArgs.from;
  const to = objArgs.to;
  const pathIn = from ? path.resolve(__dirname, from) : path.resolve(__dirname);
  const pathOut = to ? path.resolve(__dirname, to) : path.resolve(__dirname, 'css-vars.ts');

  const objCssAll = populateObjCssFromDir(pathIn);
  const vars = createVarsFromPopCss(objCssAll);

  // console.log('objCssAll.pseudo = ', objCssAll.pseudo);
  // console.log('objCssAll.combined = ', objCssAll.combined);
  // console.log('vars = ', vars);

  const strVars = convertVarsToStr(vars, objCssAll.combined);
  //console.log('strVars = ', strVars);

  fs.writeFile(pathOut, strVars, err => {
    if (err) {
      throw err;
    }
    console.log(`File: "${pathOut}" created successfully.`);
  });

  return 'hello';
};

export { cli };
