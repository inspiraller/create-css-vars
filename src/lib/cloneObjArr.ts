import { KeyStringArr } from 'src/types';

const cloneObjArr = (obj: KeyStringArr): KeyStringArr => {
  const objReturn: KeyStringArr = {};
  Object.keys(obj).forEach(key => {
    objReturn[key] = obj[key]
  });
  return objReturn;
};

export default cloneObjArr;
