import { ObjCssAll } from 'src/types';
import { readFile, recurseDirs } from 'src/util/readFile';
import constructObjCssPerFile from './constructObjCssPerFile';

type TconstructObjCssFromDir = (pathIn: string, objCssAll?: ObjCssAll) => ObjCssAll;
const constructObjCssFromDir: TconstructObjCssFromDir = (
  pathIn,
  objCssAll = {
    combined: {},
    single: {},
    withchild: {},
    pseudo: {},
    mediaq: {}
  }
) => {
  recurseDirs(pathIn, file => {
    // console.log('readDirs each pathIn = ', pathIn, 'file = ', file);
    const str = readFile(file);
    objCssAll = constructObjCssPerFile(str, objCssAll) as ObjCssAll;
  });

  return objCssAll;
};

export default constructObjCssFromDir;
