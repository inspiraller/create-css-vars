import { TFuncStr } from 'src/types';

const markEndCurly: TFuncStr = (strUnmarked, m1, m2) => {
  let str = strUnmarked;
  str = str.replace(/\{/g, `${m1}{`);
  str = str.replace(/\}/g, `}${m2}`);
  const sregNot = `[^\\${m1}\\${m2}]*`;
  const regRemove = RegExp(`(\\${m1}${sregNot})\\${m1}(${sregNot})\\${m2}`, 'g');
  while (str.search(regRemove) !== -1) {
    str = str.replace(regRemove, '$1$2');
  }
  str = str.replace(RegExp(`${m1}`, 'g'), '');

  // final string: {{} {}}m2
  return str;
}

export default markEndCurly;
