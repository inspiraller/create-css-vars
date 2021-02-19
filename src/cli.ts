import getArgs from './lib/getArgs';
import createVarFromDir from './lib/createVarFromDir';
import { ObjCssAll } from './lib/updateVars';

import path from 'path';

type Tcli = (args: string[]) => string;
const cli: Tcli = args => {
  const objArgs = getArgs(args);
  const from = objArgs.from;
  const to = objArgs.to;
  const pathIn = from ? path.resolve(__dirname, from) : path.resolve(__dirname);
  // const pathOut = to ? path.resolve(__dirname, to) : path.resolve(__dirname);

  let objCssAll: ObjCssAll = {
    combined: {},
    single: {},
    withchild: {},
    pseudo: {},
    mediaq: {
      combined: {},
      single: {},
      withchild: {},
      pseudo: {}
    }
  };
  objCssAll = createVarFromDir(pathIn, objCssAll);

  const str = 'hello';

  console.log('str = ', str);
  console.log('objCssAll.pseudo = ', objCssAll.pseudo);

  // map dir and generate file
  return str;
};

export { cli };
