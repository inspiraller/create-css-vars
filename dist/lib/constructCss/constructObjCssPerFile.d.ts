import { ObjCssAll, ObjCssAllOptional } from 'src/types';
declare type TconstructObjCssPerFile = (strReadFile: string, objCssAll: ObjCssAll | ObjCssAllOptional, isMediaQ?: boolean) => ObjCssAll | ObjCssAllOptional;
declare const constructObjCssPerFile: TconstructObjCssPerFile;
export default constructObjCssPerFile;
