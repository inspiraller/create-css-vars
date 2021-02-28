import { KeyStringArr, TFuncStr, Tconstruct } from 'src/types';
export declare const replaceVars: TFuncStr;
declare type TexecConstructObjCss = (pros: {
    objCss: KeyStringArr;
    str: string;
    reg: RegExp;
    constructCssObj: Tconstruct;
}) => KeyStringArr;
declare const execConstructObjCss: TexecConstructObjCss;
export default execConstructObjCss;