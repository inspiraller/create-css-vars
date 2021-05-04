import fs from 'fs';
import path from 'path';
import { iterateFiles, readFile } from './iterateFiles';

const replaceRequireSrc = (str: string) => {
  // require('..//util//
  const reg = /(require\(\'[^\n]*\/)src\//g;
  while (str.search(reg) !== -1) {
    str = str.replace(reg, '$1');
  }
  return str;
};

const fixTestToSrc = () => {
  const pathIn = path.join(__dirname, '../dist/__tests__');
  iterateFiles(pathIn, file => {
    if (file.search(/\.js$/) !== -1) {
      // console.log('file = ', file, readFile(file).substr(0, 30));
      const text = readFile(file); // require('..\\util\\getSafeMarkers'));
      const updated = replaceRequireSrc(text);
      if (updated !== text) {
        const stat = fs.statSync(file);
        fs.writeFileSync(file, updated, {
          encoding: 'utf8',
          flag: 'w', // default
          mode: stat.mode
        });
        // console.log('fix __tests__ src ref: ', file);
      }
    }
  });
};

export default fixTestToSrc;
