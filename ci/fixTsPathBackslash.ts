import fs from 'fs';
import path from 'path';
import { iterateFiles, readFile } from './iterateFiles';

const replaceRequireBackslash = (str: string) => {
  // require('..//util//
  const reg = /(require\(\'[^\n]*)\\\\/g;
  while (str.search(reg) !== -1) {
    str = str.replace(reg, '$1/');
  }
  return str;
};

const fixTsPathBackslash = () => {
  const pathIn = path.join(__dirname, '../dist');
  iterateFiles(pathIn, file => {
    if (file.search(/\.js$/) !== -1) {
      // console.log('file = ', file, readFile(file).substr(0, 30));
      const text = readFile(file); // require('..\\util\\getSafeMarkers'));
      const updated = replaceRequireBackslash(text);
      if (updated !== text) {
        console.log('tspath backslashes fixed: ', file);
        const stat = fs.statSync(file);
        fs.writeFileSync(file, updated, {
          encoding: 'utf8',
          flag: 'w', // default
          mode: stat.mode
        });
      }
    }
  });
};

export default fixTsPathBackslash;
