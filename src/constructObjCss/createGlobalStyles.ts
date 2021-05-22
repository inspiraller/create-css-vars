import { readFile, recurseDirs } from 'src/util/readFile';
import {
  replaceRelativeAssetsApos,
  replaceRelativeAssetsQuot,
  replaceRelativeTheme
} from 'src/util/replaceRelative';

const maskPath = (strPath: string) => strPath.replace(/[\w\W]*[\/\\]([^\/\/]*)$/, '$1'); //

const separatePaths = (strPath: string) => `
// -----------------------------------------------------------------------------
// ${maskPath(strPath)}
`;

const getGlobalStyleCss = (global_styles_path: string) => {
  const isSingleFile = global_styles_path.search(/\.[^\.\/\\]*$/) !== -1;

  const arrReadAll: string[] = [];

  if (isSingleFile) {
    arrReadAll.push(separatePaths(global_styles_path));
    arrReadAll.push(readFile(global_styles_path));
  } else {
    recurseDirs(global_styles_path, file => {
      arrReadAll.push(separatePaths(file));
      arrReadAll.push(readFile(file));
    });
  }
  let strReadAll = arrReadAll.join('');
  strReadAll = replaceRelativeAssetsApos(strReadAll);
  strReadAll = replaceRelativeAssetsQuot(strReadAll);
  strReadAll = replaceRelativeTheme(strReadAll);
  return strReadAll;
};

const createGlobalStyles = (global_styles_path: string, js: boolean): string => {
  const strReadFile = getGlobalStyleCss(global_styles_path);
  const strTFuncStr = !js
    ? 'type TFuncStr = (str: string, str2?: string, str3?: string) => string;'
    : '';
  const strTGlobalStyles = !js
    ? 'type TGlobalStyles = (getAsset: TFuncStr, getTheme: TFuncStr) => string;'
    : '';
  const decGlobalType = !js ? ': TGlobalStyles' : '';
  return `
${strTFuncStr}
${strTGlobalStyles}
const GlobalStyles${decGlobalType} = (getAsset, getTheme) => \`${strReadFile}\`;
export default GlobalStyles;
  `;
};
export default createGlobalStyles;
