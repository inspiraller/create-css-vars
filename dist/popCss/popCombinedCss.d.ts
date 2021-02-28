import { KeyStringArr } from 'src/types';
export declare type TpopCss = (props: {
    strSingleSelector: string;
    objCss: KeyStringArr;
}) => string;
declare type TseparateCombined = (props: {
    strSingleSelector: string;
    strCombinedSelector: string;
    objCss: KeyStringArr;
}) => string;
export declare const separateCombined: TseparateCombined;
declare const popCombinedCss: TpopCss;
export default popCombinedCss;
