import { strikethrough } from 'chalk';
import fs from 'fs';
import path from 'path';
import process from 'process';
import updateVars from './updateVars';

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

type TcreateVarFromDir = (pathIn: string, strBuild?: string) => string;
const createVarFromDir: TcreateVarFromDir = (pathIn, strBuild = '') => {
  const files = fs.readdirSync(pathIn);
  console.log('#############################');
  console.log('process directory = ', pathIn);

  files.forEach(file => {
    const fromPath = path.join(pathIn, file);
    const stat = fs.statSync(fromPath);
    if (stat.isFile()) {
      if (file.search(/\.css$/) !== -1) {
        strBuild = updateVars(path.resolve(pathIn, file), strBuild);
      }
    } else if (stat.isDirectory()) {
      if (!excludeDir(file)) {
        strBuild = createVarFromDir(path.resolve(pathIn, file), strBuild);
      }
    }
  });
  return strBuild;
};

export default createVarFromDir;
