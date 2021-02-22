import { ObjCssAll } from './populateObjCssPerFile';
import popAllVarCss from './popCss/popAllVars';

interface Vars {
  [key: string]: string;
}

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
