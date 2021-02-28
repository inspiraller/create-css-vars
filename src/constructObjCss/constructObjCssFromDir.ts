import fs from 'fs';
import path from 'path';
import { ObjCssAll, TFuncStr } from 'src/types';
import constructObjCssPerFile from './constructObjCssPerFile';

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

const readFile: TFuncStr = file => {
  const read = fs.readFileSync(file);
  return read.toString();
};

type TconstructObjCssFromDir = (pathIn: string, objCssAll?: ObjCssAll) => ObjCssAll;
const constructObjCssFromDir: TconstructObjCssFromDir = (
  pathIn,
  objCssAll = {
    combined: {},
    single: {},
    withchild: {},
    pseudo: {},
    mediaq: {}
  }
) => {
  const files = fs.readdirSync(pathIn);
  console.log('#############################');
  console.log('process directory = ', pathIn);

  files.forEach(file => {
    const fromPath = path.join(pathIn, file);
    const stat = fs.statSync(fromPath);
    if (stat.isFile()) {
      if (file.search(/\.css$/) !== -1) {
        const str = readFile(path.resolve(pathIn, file));
        objCssAll = constructObjCssPerFile(str, objCssAll) as ObjCssAll;
      }
    } else if (stat.isDirectory()) {
      if (!excludeDir(file)) {
        objCssAll = constructObjCssFromDir(path.resolve(pathIn, file), objCssAll);
      }
    }
  });
  return objCssAll;
};

export default constructObjCssFromDir;
