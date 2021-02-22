import { ObjCssAll } from '../populateObjCssPerFile';
import popCombinedCss, { TarrCss } from './popCombinedCss';
import popSingleCss from './popSingleCss';
import popPseudoCss from './popPseudoCss';
import popWithChildCss from './popWithChildCss';

type TpopAllVarCss = (props: { strSingleSelector: string; objCssAll: ObjCssAll }) => string;

const popAllVarCss: TpopAllVarCss = ({ strSingleSelector, objCssAll }) => {
  const arrCss: TarrCss = [];
  arrCss.push(popCombinedCss({ strSingleSelector, objCss: objCssAll.combined }));
  arrCss.push(popSingleCss({ strSingleSelector, objCss: objCssAll.single }));
  arrCss.push(popPseudoCss({ strSingleSelector, objCss: objCssAll.pseudo }));
  arrCss.push(popWithChildCss({ strSingleSelector, objCss: objCssAll.withchild }));
  return arrCss.join('');
};

export default popAllVarCss;
