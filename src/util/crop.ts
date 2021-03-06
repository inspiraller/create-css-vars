import { TFuncStr } from 'src/types';

const crop: TFuncStr = str => {
  str = str.replace(/(^\s+|\s+$)/g, '');
  str = str.replace(/\n\s*/g, '\n');
  str = str.replace(/\n\s*\n/g, '\n');
  str = str.replace(/\n\s*\n/g, '\n');
  return str;
};

export default crop;
