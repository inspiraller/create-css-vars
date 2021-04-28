import { ObjCssAll, KeyStringArr, MediaQ } from 'src/types';
declare type TcropObjCss = (obj: KeyStringArr) => KeyStringArr;
export declare const cropObjCss: TcropObjCss;
declare type TcropObjCssChildren = (objCssAll: ObjCssAll | MediaQ) => ObjCssAll | MediaQ;
export declare const cropObjCssChildren: TcropObjCssChildren;
declare type TcropMediaQ = (objMediaQ: MediaQ) => MediaQ;
export declare const cropMediaQ: TcropMediaQ;
export {};
