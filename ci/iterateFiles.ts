import fs from 'fs';
import path from 'path';

type TexcludeDir = (file: string) => boolean;
export const excludeDir: TexcludeDir = file =>
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

export const readFile: TFuncStr = file => {
  const read = fs.readFileSync(file);
  return read.toString();
};

export const iterateFiles = (pathIn: string, callback) => {
  const files = fs.readdirSync(pathIn);
  files.forEach(file => {
    const fromPath = path.join(pathIn, file);
    const stat = fs.statSync(fromPath);
    if (stat.isFile()) {
      callback(path.resolve(pathIn, file));
    } else if (stat.isDirectory()) {
      if (!excludeDir(file)) {
        const dirInner = path.join(pathIn, file);
        // console.log('dirInnner = ', dirInner);
        iterateFiles(dirInner, callback);
      }
    }
  });
};
