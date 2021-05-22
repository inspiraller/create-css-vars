import fs from 'fs';
import path from 'path';
import { TFuncStr } from 'src/types';

export const readFile: TFuncStr = file => {
  const read = fs.readFileSync(file);
  return read.toString();
};

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

export const recurseDirs = (pathIn: string, callback: (path: string) => void): void => {
  const files = fs.readdirSync(pathIn);
  files.forEach(file => {
    const fromPath = path.join(pathIn, file);
    const stat = fs.statSync(fromPath);
    if (stat.isFile()) {
      if (file.search(/\.css$/) !== -1) {
        callback(path.resolve(pathIn, file));
      }
    } else if (stat.isDirectory()) {
      if (!excludeDir(file)) {
        recurseDirs(path.resolve(pathIn, file), callback);
      }
    }
  });
};
