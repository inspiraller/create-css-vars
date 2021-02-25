import { ObjCssAll, MediaQ } from 'src/types';
declare type TconstructObjCssPerFile = (strReadFile: string, objCssAll: ObjCssAll | MediaQ) => ObjCssAll | MediaQ;
declare const constructObjCssPerFile: TconstructObjCssPerFile;
export default constructObjCssPerFile;
