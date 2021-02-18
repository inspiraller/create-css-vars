import getArgs from './lib/getArgs';
import createVarFromDir from './lib/createVarFromDir';

import path from 'path';

type Tcli = (args: string[]) => string;
const cli: Tcli = args => {
  const objArgs = getArgs(args);
  const from = objArgs.from;
  const to = objArgs.to;
  const pathIn = from ? path.resolve(__dirname, from) : path.resolve(__dirname);
  // const pathOut = to ? path.resolve(__dirname, to) : path.resolve(__dirname);

  const str = createVarFromDir(pathIn);

  console.log('str = ', str);
  // map dir and generate file
  return str;
};

export { cli };
