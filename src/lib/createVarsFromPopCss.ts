import { ObjCssAll, Vars } from 'src/types';

import popAllVarCss from './popCss/popAllVars';

type TcreateVarsFromObjCss = (objCssAll: ObjCssAll) => Vars;
const createVarsFromObjCss: TcreateVarsFromObjCss = objCssAll =>
  Object.keys(objCssAll.single).reduce(
    (accum, cur) => ({
      ...accum,
      ...{
        [cur]: popAllVarCss({
          strSingleSelector: cur,
          objCssAll
        })
      }
    }),
    {} as Vars
  );

export default createVarsFromObjCss;
