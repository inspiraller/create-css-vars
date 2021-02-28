import { ObjCssAll, Selectors } from 'src/types';

import popAllVarCss from 'src/popCss/popAllSelectors';

type TcreateSelectorsFromObjCss = (objCssAll: ObjCssAll) => Selectors;
const createSelectorsFromObjCss: TcreateSelectorsFromObjCss = objCssAll =>
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
    {} as Selectors
  );

export default createSelectorsFromObjCss;
