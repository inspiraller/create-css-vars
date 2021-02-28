import { ObjCssAll, ObjCssAllOptional } from 'src/types';
export declare function deepClone<T>(obj: T): T;
declare type TconstructObjCssPerFile = (strReadFile: string, objCssAll: ObjCssAll | ObjCssAllOptional, isMediaQ?: boolean) => ObjCssAll | ObjCssAllOptional;
declare const constructObjCssPerFile: TconstructObjCssPerFile;
export default constructObjCssPerFile;
