import { ObjCssAll } from 'src/types';

const getRoot = (strReadFile: string): string => {
  // :root {
  //   --primary-dark: #020018;
  //   --primary-green: #17B890;
  //   --primary-white: #FFF;
  const regRoot = /(^|\n)\s*\:root\s*\{([^\{\}]*)\}/g;

  const arrVars: string[] = [];
  let arrM: RegExpExecArray | null;
  while ((arrM = regRoot.exec(strReadFile))) {
    arrVars.push(arrM[2]);
  }
  return arrVars.join('\n');
};

const getThemeFromRootVars = (strRootVars: string): ObjCssAll['theme'] => {
  const regVars = /(\-\-[^\:\s]*)\s*\:([^\;]*)\;/g;
  let arrMVars: RegExpExecArray | null;
  const theme: ObjCssAll['theme'] = {};
  while ((arrMVars = regVars.exec(strRootVars))) {
    theme[arrMVars[1]] = arrMVars[2];
  }
  return theme;
};

const createTheme = (strReadFile: string): ObjCssAll['theme'] => {
  const strRootVars = getRoot(strReadFile);
  let theme: ObjCssAll['theme'] = {};
  if (strRootVars) {
    theme = getThemeFromRootVars(strRootVars);
  }
  return theme;
};
export default createTheme;
