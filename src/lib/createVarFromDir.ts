import fs from 'fs';
import path from 'path';
import updateVars, { ObjCssAll } from './updateVars';

type TexcludeDir = (file: string) => boolean;
const excludeDir: TexcludeDir = file =>
  [
    'node_modules',
    '@types',
    '.scannerwork',
    '.git',
    'coverage'
    // '__tests__',
    // 'reports',
    // 'dist',
    // 'bin',
    // '.storybook',
    // 'stories'
  ].indexOf(file) !== -1;

type TcreateVarFromDir = (pathIn: string, objCssAll: ObjCssAll) => ObjCssAll;
const createVarFromDir: TcreateVarFromDir = (pathIn, objCssAll) => {
  const files = fs.readdirSync(pathIn);
  console.log('#############################');
  console.log('process directory = ', pathIn);

  files.forEach(file => {
    const fromPath = path.join(pathIn, file);
    const stat = fs.statSync(fromPath);
    if (stat.isFile()) {
      if (file.search(/\.css$/) !== -1) {
        objCssAll = updateVars(path.resolve(pathIn, file), objCssAll);
      }
    } else if (stat.isDirectory()) {
      if (!excludeDir(file)) {
        objCssAll = createVarFromDir(path.resolve(pathIn, file), objCssAll);
      }
    }
  });
  return objCssAll;
};

export default createVarFromDir;
