import { ObjCssAll, TarrCss, MediaQ, KeyStringArr } from 'src/types';
import popCombinedCss from './popCombinedCss';
import popSingleCss from './popSingleCss';
import popPseudoCss from './popSeparateCombined/popPseudoCss';
import popWithChildCss from './popSeparateCombined/popWithChildCss';
import popMediaQCss from './popMediaQCss';

type TpopAllVarCss = (props: {
  strSingleSelector: string;
  objCssAll: ObjCssAll | MediaQ;
}) => string;

const popAllVarCss: TpopAllVarCss = ({ strSingleSelector, objCssAll }) => {
  // console.log('popAllVarCss() strSingleSelector = ', strSingleSelector);
  const arrCss: TarrCss = [];
  if (objCssAll.combined) {
    arrCss.push(popCombinedCss({ strSingleSelector, objCss: objCssAll.combined as KeyStringArr }));
    // console.log('add combined = ', arrCss);
  }
  if (objCssAll.single) {
    arrCss.push(popSingleCss({ strSingleSelector, objCss: objCssAll.single as KeyStringArr }));
  }
  if (objCssAll.pseudo) {
    arrCss.push(popPseudoCss({ strSingleSelector, objCss: objCssAll.pseudo as KeyStringArr }));
  }
  if (objCssAll.withchild) {
    arrCss.push(
      popWithChildCss({ strSingleSelector, objCss: objCssAll.withchild as KeyStringArr })
    );
  }
  if (objCssAll.mediaq) {
    arrCss.push(popMediaQCss({ strSingleSelector, objCss: objCssAll.mediaq as MediaQ }));
  }
  return arrCss.join('');
};

export default popAllVarCss;
