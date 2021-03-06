import { Selectors } from 'src/types';
declare type TconvertObjStrToStr = (selectors: Selectors) => string;
export declare const convertObjStrToStr: TconvertObjStrToStr;
declare type TconvertSelectorsToStr = (selectors: Selectors, js?: boolean) => string;
declare const convertSelectorsToStr: TconvertSelectorsToStr;
export default convertSelectorsToStr;
