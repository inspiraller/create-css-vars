import { KeyStringArr } from 'src/types';
export declare type TpopCss = (props: {
    strSingleSelector: string;
    objCss: KeyStringArr;
}) => string;
declare type TpopSeparateCombined = (props: {
    strObjCssSelectorKey: string;
    objCss: KeyStringArr;
    regInCombined: RegExp;
}) => string;
export declare const popSeparateCombined: TpopSeparateCombined;
declare type TseparateCombined = (props: {
    strSingleSelector: string;
    strCombinedSelector: string;
    objCss: KeyStringArr;
}) => string;
declare const separateCombined: TseparateCombined;
export default separateCombined;
