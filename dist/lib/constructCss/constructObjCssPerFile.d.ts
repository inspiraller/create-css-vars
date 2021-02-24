import { ObjCssAll, TFuncStr } from 'src/types';
export declare const replaceVars: TFuncStr;
declare type TconstructObjCssPerFile = (strReadFile: string, objCssAll: ObjCssAll) => ObjCssAll;
declare const constructObjCssPerFile: TconstructObjCssPerFile;
export default constructObjCssPerFile;
