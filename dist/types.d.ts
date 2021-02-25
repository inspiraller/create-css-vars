export declare type TFuncStr = (str: string, str2?: string) => string;
export interface KeyStringArr {
    [key: string]: string[];
}
export declare type TKeyString = {
    [index: string]: string;
};
export interface ObjCssAllReq {
    combined: KeyStringArr;
    single: KeyStringArr;
    pseudo: KeyStringArr;
    withchild: KeyStringArr;
    beginNonSingle: KeyStringArr;
}
export interface ObjCssAllOptional {
    combined?: ObjCssAllReq['combined'];
    single?: ObjCssAllReq['single'];
    pseudo?: ObjCssAllReq['pseudo'];
    withchild?: ObjCssAllReq['withchild'];
    beginNonSingle?: ObjCssAllReq['beginNonSingle'];
}
export interface MediaQ {
    [key: string]: ObjCssAllOptional;
}
export interface ObjCssAll extends ObjCssAllReq {
    mediaq: MediaQ;
}
export declare type Tconstruct = (props: {
    objCss: KeyStringArr;
    strSelectors: string;
    strCss: string;
}) => KeyStringArr;
export interface Selectors {
    [key: string]: string;
}
export declare type TarrCss = string[];
