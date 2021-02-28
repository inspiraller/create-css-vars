import { ObjCssAll, MediaQ } from 'src/types';
declare type TpopAllVarCss = (props: {
    strSingleSelector: string;
    objCssAll: ObjCssAll | MediaQ;
}) => string;
declare const popAllVarCss: TpopAllVarCss;
export default popAllVarCss;
