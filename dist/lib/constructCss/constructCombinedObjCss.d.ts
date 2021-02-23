import { KeyStringArr } from 'src/types';
export declare type Tconstruct = (props: {
    objCss: KeyStringArr;
    strSelectors: string;
    strCss: string;
}) => KeyStringArr;
declare const constructCombinedObjCss: Tconstruct;
export default constructCombinedObjCss;
