import getArgs from './lib/getArgs';
import populateObjCssFromDir from './lib/populateObjCssFromDir';
import createVarsFromObjCss from './lib/createVarsFromObjCss';

import path from 'path';

type Tcli = (args: string[]) => string;
const cli: Tcli = args => {
  const objArgs = getArgs(args);
  const from = objArgs.from;
  const to = objArgs.to;
  const pathIn = from ? path.resolve(__dirname, from) : path.resolve(__dirname);
  // const pathOut = to ? path.resolve(__dirname, to) : path.resolve(__dirname);

  const objCssAll = populateObjCssFromDir(pathIn);
  const vars = createVarsFromObjCss(objCssAll);

  console.log('objCssAll.combined = ', objCssAll.combined);
  console.log('vars = ', vars);

  return 'hello';
};

export { cli };
