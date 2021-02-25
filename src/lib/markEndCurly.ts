import { TFuncStr } from 'src/types';

const markEndCurly: TFuncStr = (strUnmarked, m1) => {
  let str = strUnmarked;
  str = str.replace(/\}/g, `}${m1}`);
  // { {}m1 replace with {{}
  const sregNotCurlysM1 = `[^\\{\\}\\${m1}]*`;
  const regRemoveM1 = RegExp(`(\\{${sregNotCurlysM1}\\{${sregNotCurlysM1}\\})\\${m1}`, 'g');
  while (str.search(regRemoveM1) !== -1) {
    str = str.replace(regRemoveM1, '$1');
  }
  return str;
}

export default markEndCurly;
