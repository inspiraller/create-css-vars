import fs from 'fs';
import path from 'path';
import populateObjCssPerFile, { ObjCssAll } from './populateObjCssPerFile';

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

type TpopulateObjCssFromDir = (pathIn: string, objCssAll?: ObjCssAll) => ObjCssAll;
const populateObjCssFromDir: TpopulateObjCssFromDir = (
  pathIn,
  objCssAll = {
    combined: {},
    single: {},
    withchild: {},
    pseudo: {},
    mediaq: {
      combined: {},
      single: {},
      withchild: {},
      pseudo: {}
    }
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
        objCssAll = populateObjCssPerFile(path.resolve(pathIn, file), objCssAll);
      }
    } else if (stat.isDirectory()) {
      if (!excludeDir(file)) {
        objCssAll = populateObjCssFromDir(path.resolve(pathIn, file), objCssAll);
      }
    }
  });
  return objCssAll;
};

export default populateObjCssFromDir;
