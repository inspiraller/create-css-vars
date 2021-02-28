import { KeyStringArr, MediaQ, ObjCssAllOptional, Tconstruct } from 'src/types';
import markEndCurly from 'src/util/markEndCurly';
import constructAnyObjCss from './constructAnyObjCss';
import execConstructObjCss from './execConstructObjCss';
import constructObjCssPerFile from './constructObjCssPerFile';

// type TmergeObjCss = (props: {objGet: KeyStringArr, objExisting: KeyStringArr}) => KeyStringArr;
//
// export function deepClone<T>(obj: T): T {
//   return JSON.parse(JSON.stringify(obj)) as T;
// }
//
// export const mergeObjCss: TmergeObjCss = ({ objGet, objExisting }) =>
//   Object.keys(objGet).reduce((accum, strSelector) => {
//     const arrCss: string[] = objGet[strSelector];
//     console.log('get css = ', arrCss);
//     return arrCss.length
//       ? constructAnyObjCss({objCss: accum, strSelectors: strSelector, strCss: arrCss.join('') })
//       : accum;
//   }, deepClone<KeyStringArr>(objExisting));
//
// type TappendToMediaQChild = (props: {objBuild: ObjCssAllOptional, objGet: ObjCssAllOptional, strChild: string}) => ObjCssAllOptional;
// export const appendToMediaQChild: TappendToMediaQChild  = ({objBuild, objGet, strChild}) => {
//   const strKeyChild = strChild as keyof typeof objBuild;
//   if (objBuild[strKeyChild]) {
//     objBuild[strKeyChild] = mergeObjCss({ objGet: objGet[strKeyChild] || {}, objExisting: objBuild[strKeyChild] || {} });
//   } else if (objGet[strKeyChild]) {
//     objBuild[strKeyChild] = objGet[strKeyChild];
//   };
//   return objBuild;
// };

export const constructEnforceMediaQKey: Tconstruct =  ({ objCss, strSelectors, strCss }) => {
  strSelectors = strSelectors.replace(/([\(\)\:])/g, ' $1 '); // add space around all
  strSelectors = strSelectors.replace(/ {2,}/g, ' '); // replace 2+ space with 1 space.
  // console.log(`strSelectors = "${strSelectors}"`);
  // enforec the @mediaQ keey is identical irrespective of how its written.
  return constructAnyObjCss({ objCss, strSelectors, strCss });
};

type TgetMediaQContent = (props: { str: string, m2: string }) => KeyStringArr;
const getMediaQContent: TgetMediaQContent = ({ str,  m2}) => {
  const reg = RegExp(
    `(^|\\n)\\s*(\\@media[^\\{\\}]*)()\\{([^\\${m2}]*)\\}${m2}`,
    'ig'
  );
  return execConstructObjCss({
    objCss: {} as KeyStringArr,
    str,
    reg,
    constructCssObj: constructEnforceMediaQKey
  });
};

export type TiterateConstructMediaQObjCss = (props: {
  objMediaQ: MediaQ;
  str: string;
  m1: string;
  m2: string;
}) => MediaQ;

const iterateConstructMediaQObjCss: TiterateConstructMediaQObjCss = ({ objMediaQ: objMediaQRef, str: strUnmarked, m1, m2 }) => {
  let objMediaQ = {...objMediaQRef};

  const str = markEndCurly(strUnmarked, m1, m2);
  const objMediaContent = getMediaQContent ({
    str,
    m2
  });

  objMediaQ = Object.keys(objMediaContent).reduce((accum, cur) => {
    const objNew =  {...accum};
    const strReadMediaQContent = objMediaContent[cur].join('');
    objNew[cur] = constructObjCssPerFile(strReadMediaQContent, objNew[cur] || {}, true) as ObjCssAllOptional;
    return objNew;
    // const objGet: ObjCssAllOptional = constructObjCssPerFile(strReadMediaQContent, objNew[cur] || {}, true) as ObjCssAllOptional;

    // console.log(`objGet[${cur}]= `, deepClone<ObjCssAllOptional>(objGet));
    //
    // if (objNew[cur]) {
    //   objNew[cur] = appendToMediaQChild({objBuild: objNew[cur], objGet, strChild: 'combined'});
    //   objNew[cur] = appendToMediaQChild({objBuild: objNew[cur], objGet, strChild: 'single'});
    //   objNew[cur] = appendToMediaQChild({objBuild: objNew[cur], objGet, strChild: 'pseudo'});
    //   objNew[cur] = appendToMediaQChild({objBuild: objNew[cur], objGet, strChild: 'withchild'});
    //   objNew[cur] = appendToMediaQChild({objBuild: objNew[cur], objGet, strChild: 'beginNonSingle'});
    // } else {
    //   objNew[cur] = objGet;
    // }
    // return objNew;
  }, objMediaQ as MediaQ);

  return objMediaQ;
};

export default iterateConstructMediaQObjCss;
