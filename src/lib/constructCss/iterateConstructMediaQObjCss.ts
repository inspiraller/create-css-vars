import { KeyStringArr, MediaQ } from 'src/types';
import markEndCurly from 'src/lib/markEndCurly';
import constructAnyObjCss from './constructAnyObjCss';
import execConstructObjCss from './execConstructObjCss';
import constructObjCssPerFile from './constructObjCssPerFile';

// export const constructMediaQContent: Tconstruct = ({ objMediaQ, strMediaQKey, strContent }) => {
//   strMediaQKey = strMediaQKey.replace(/\s*$/, '');
//   if (!objMediaQ[strMediaQKey]) {
//     objMediaQ[strMediaQKey] = [];
//   }
//   objMediaQ[strMediaQKey].push(strContent);
//   return objMediaQ;
// };
//



export type TiterateConstructMediaQObjCss = (props: {
  objCssMediaQ: MediaQ;
  str: string;
  m1: string;
}) => MediaQ;

const iterateConstructMediaQObjCss: TiterateConstructMediaQObjCss = ({ objCssMediaQ, str: strUnmarked, m1 }) => {
  const str = markEndCurly(strUnmarked, m1);
  const regMediaQ = RegExp(
    `(^|\\n)\\s*(\\@media[^\\{\\}]*)()\\{([^${m1}]*)\\}${m1}`,
    'ig'
  );

  let objMediaContent: KeyStringArr = {};
  objMediaContent = execConstructObjCss({
    objCss: objMediaContent,
    str,
    reg: regMediaQ,
    constructCssObj: constructAnyObjCss
  });

  const objMediaQ: MediaQ = Object.keys(objMediaContent).reduce((accum, cur) => {
    const strReadMediaQContent = objMediaContent[cur].join('');
    const objEachMediaQCss: MediaQ = constructObjCssPerFile(strReadMediaQContent, accum) as MediaQ;
    // console.log('__________________________________________');
    // console.log('existing = ', accum);
    // console.log('objEachMediaQCss ', objEachMediaQCss);
    return objEachMediaQCss;
  }, objCssMediaQ);

  // console.log('###############################################');
  // console.log('objMediaQContent = ', objMediaContent);
  // console.log('str =', str);
  // console.log('regMediaQ = ', regMediaQ);

  //return {
    // '@media (max-width:1427px)': {
    //   combined: {
    //     '.btn--link,.btn--link path,.btn--link circle': ['color: red;\n']
    //   }
    // }
  //}
  return objMediaQ;
};

export default iterateConstructMediaQObjCss;
