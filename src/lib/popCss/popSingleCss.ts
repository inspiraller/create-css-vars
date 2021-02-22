import { TpopCss } from './popCombinedCss';

const popSingleCss: TpopCss = ({ strSingleSelector, objCss }) => {
  const arrCss = objCss[strSingleSelector];
  return arrCss && arrCss.length ? arrCss.join('\n') + '\n\n' : '';
};

export default popSingleCss;
