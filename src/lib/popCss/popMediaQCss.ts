import { MediaQ, TFuncStr } from 'src/types';
import popAllVarCss from './popAllSelectors';

const createMediaQ: TFuncStr = (strMediaQ, css) => `
 ${strMediaQ} {
  ${css}
 }
`;

type TpopMediaQ = (props: { strSingleSelector: string; objCss: MediaQ }) => string;
const popMediaQCss: TpopMediaQ = ({ strSingleSelector, objCss }) =>
  Object.keys(objCss)
    .map(strMediaQ => {
      const css = popAllVarCss({ strSingleSelector, objCssAll: objCss[strMediaQ] as MediaQ });
      return css !== '' ? createMediaQ(strMediaQ, css) : '';
    })
    .join('\n');

export default popMediaQCss;
