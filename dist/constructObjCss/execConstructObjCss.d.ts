import { KeyStringArr, Tconstruct } from 'src/types';
declare type TexecConstructObjCss = (pros: {
    objCss: KeyStringArr;
    str: string;
    reg: RegExp;
    constructCssObj: Tconstruct;
}) => KeyStringArr;
declare const execConstructObjCss: TexecConstructObjCss;
export default execConstructObjCss;
