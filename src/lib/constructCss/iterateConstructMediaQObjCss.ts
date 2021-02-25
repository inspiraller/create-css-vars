import { KeyStringArr, MediaQ, ObjCssAllOptional } from 'src/types';
import markEndCurly from 'src/lib/markEndCurly';
import constructAnyObjCss from './constructAnyObjCss';
import execConstructObjCss from './execConstructObjCss';
import constructObjCssPerFile from './constructObjCssPerFile';

type TappendToMediaQChild = (props: {objBuild: ObjCssAllOptional, objGet: ObjCssAllOptional, strChild: string}) => ObjCssAllOptional;
const appendToMediaQChild: TappendToMediaQChild  = ({objBuild: objBuildRef, objGet, strChild}) => {
  const objBuild = {...objBuildRef};
  const strKeyChild = strChild as keyof typeof objBuild;

  // console.log('¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬')
  // console.log('append() strKeyChild = ', strKeyChild);
  // console.log('objBuild[strKeyChild] =', objBuild[strKeyChild]);
  if (objBuild[strKeyChild]) {
    const objCss: KeyStringArr = objBuild[strKeyChild] as KeyStringArr;
    objBuild[strKeyChild] = Object.keys(objCss).reduce((accumRef, cur) => {
      const objCssNew = {...accumRef};
      const strGetContent = (objGet[strKeyChild] as KeyStringArr)[cur].join('');
      if (!objCssNew[cur]) {
        objCssNew[cur] = [];
      }
      objCssNew[cur].push(strGetContent);
      return objCssNew;
    }, {} as KeyStringArr);
  } else {
    objBuild[strKeyChild] = objGet[strKeyChild];
  };
  return objBuild;
};


export type TiterateConstructMediaQObjCss = (props: {
  objCssMediaQ: MediaQ;
  str: string;
  m1: string;
  m2: string;
}) => MediaQ;


export function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj)) as T;
}

const iterateConstructMediaQObjCss: TiterateConstructMediaQObjCss = ({ objCssMediaQ: objCssMediaQRef, str: strUnmarked, m1, m2 }) => {

  // console.log('################################# each file ####################################################');
  let objCssMediaQ = {...objCssMediaQRef};

  const str = markEndCurly(strUnmarked, m1, m2);
  // console.log(`str marked =###"${str}###"`);

  const regMediaQ = RegExp(
    `(^|\\n)\\s*(\\@media[^\\{\\}]*)()\\{([^\\${m2}]*)\\}${m2}`,
    'ig'
  );

  let objMediaContent: KeyStringArr = {};
  objMediaContent = execConstructObjCss({
    objCss: objMediaContent,
    str,
    reg: regMediaQ,
    constructCssObj: constructAnyObjCss
  });

  // console.log('objMediaContent = ', objMediaContent);

  // console.log('iterateConstructMediaQObjCss() existing = objCssMediaQ = ', objCssMediaQ);
  objCssMediaQ = Object.keys(objMediaContent).reduce((accumRef, cur) => {
    // console.log(`_____________________ cur = ${cur} _________________________`);
    // const objNew =  deepClone<MediaQ>({...accumRef});
    const objNew =  {...accumRef};
    // console.log('1. ACUM - objNew = ', objNew);

    const strReadMediaQContent = objMediaContent[cur].join('');
    const objCssAllMediaQ: ObjCssAllOptional = constructObjCssPerFile(strReadMediaQContent, objNew[cur] || {}, true) as ObjCssAllOptional;

    // console.log('objCssAllMediaQ =', objCssAllMediaQ);
    if (objNew[cur]) {
      objNew[cur] = appendToMediaQChild({objBuild: objNew[cur], objGet: objCssAllMediaQ, strChild: 'combined'});
      objNew[cur] = appendToMediaQChild({objBuild: objNew[cur], objGet: objCssAllMediaQ, strChild: 'single'});
      objNew[cur] = appendToMediaQChild({objBuild: objNew[cur], objGet: objCssAllMediaQ, strChild: 'pseudo'});
      objNew[cur] = appendToMediaQChild({objBuild: objNew[cur], objGet: objCssAllMediaQ, strChild: 'withchild'});
      objNew[cur] = appendToMediaQChild({objBuild: objNew[cur], objGet: objCssAllMediaQ, strChild: 'beginNonSingle'});
    } else {
      objNew[cur] = objCssAllMediaQ;
    }
    return objNew;
  }, objCssMediaQ as MediaQ);

  return objCssMediaQ;
};

export default iterateConstructMediaQObjCss;
