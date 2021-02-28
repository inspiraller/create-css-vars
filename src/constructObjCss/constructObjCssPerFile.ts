import getSafMarkers from 'src/util/getSafeMarkers';
import clearCssComments from 'src/util/clearCssComents';

import {
  regCombined,
  regSingle,
  regWithChild,
  regPseudoOrAttr,
  regMatchAnySingle
} from 'src/util/regCss';
import markEndCurly from 'src/util/markEndCurly';
import execConstructObjCss from './execConstructObjCss';
import constructCombinedObjCss from './constructCombinedObjCss';
import constructAnyObjCss from './constructAnyObjCss';
import constructAnySingles from './constructAnySingles';

import iterateConstructMediaQObjCss from './iterateConstructMediaQObjCss';

import { ObjCssAll, ObjCssAllOptional, MediaQ, KeyStringArr, TFuncStr } from 'src/types';

type TisEmpty = (obj: any) => boolean;
const isEmpty: TisEmpty = obj => Object.keys(obj).length === 0;

const replaceMediaQ: TFuncStr = (str, m1, m2) => {
  str = markEndCurly(str, m1, m2);
  str = str.replace(RegExp(`\\@media[^\\${m2}]*\\${m2}`, 'g'), '');
  str = str.replace(RegExp(`\\${m2}`, 'g'), '');
  return str;
};

export function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj)) as T;
}

type TconstructObjCssPerFile = (
  strReadFile: string,
  objCssAll: ObjCssAll | ObjCssAllOptional,
  isMediaQ?: boolean
) => ObjCssAll | ObjCssAllOptional;
const constructObjCssPerFile: TconstructObjCssPerFile = (
  strReadFile,
  objCssAll,
  isMediaQ = false
) => {
  let str = ` ${strReadFile}`; // add space, so regex can multiple find - avoid using ^|
  const {
    objM: { m1, m2 }
  } = getSafMarkers(str);
  str = clearCssComments(str, m1);

  // console.log('##################################################################################')
  // console.log('constructObjCssPerFile() --- constructAnySingles()   ###########################', regMatchAnySingle);
  // console.log(`str="${str}"`);

  const cloneSingle = objCssAll.single ? deepClone<KeyStringArr>(objCssAll.single) : {};

  let single = execConstructObjCss({
    objCss: cloneSingle,
    str: str,
    reg: regMatchAnySingle,
    constructCssObj: constructAnySingles
  });
  if (!isMediaQ || !isEmpty(single)) {
    objCssAll.single = single;
  }
  //console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$');

  const strExcludeMediaQ = !isMediaQ ? replaceMediaQ(str, m1, m2) : str;

  const cloneCombined = objCssAll.combined ? deepClone<KeyStringArr>(objCssAll.combined) : {};
  const combined = execConstructObjCss({
    objCss: cloneCombined,
    str: strExcludeMediaQ,
    reg: regCombined,
    constructCssObj: constructCombinedObjCss
  });
  if (!isMediaQ || !isEmpty(combined)) {
    objCssAll.combined = combined;
  }

  const singleOrCloneSingle =
    (isEmpty(objCssAll.single || {}) && cloneSingle) || (objCssAll.single as KeyStringArr);
  single = execConstructObjCss({
    objCss: singleOrCloneSingle,
    str: strExcludeMediaQ,
    reg: regSingle,
    constructCssObj: constructAnyObjCss
  });
  if (!isMediaQ || !isEmpty(single)) {
    objCssAll.single = single;
  }

  // console.log('strExcludeMediaQ = ', strExcludeMediaQ);
  // console.log('regWithChild = ', regWithChild);
  // console.log('strExcludeMediaQ.search(regWithChild)', strExcludeMediaQ.search(regWithChild));
  const cloneChild = objCssAll.withchild ? deepClone<KeyStringArr>(objCssAll.withchild) : {};
  const withchild = execConstructObjCss({
    objCss: cloneChild,
    str: strExcludeMediaQ,
    reg: regWithChild,
    constructCssObj: constructAnyObjCss
  });
  if (!isMediaQ || !isEmpty(withchild)) {
    objCssAll.withchild = withchild;
  }

  const clonePseudo = objCssAll.pseudo ? deepClone<KeyStringArr>(objCssAll.pseudo) : {};
  const pseudo = execConstructObjCss({
    objCss: clonePseudo,
    str: strExcludeMediaQ,
    reg: regPseudoOrAttr,
    constructCssObj: constructAnyObjCss
  });
  if (!isMediaQ || !isEmpty(pseudo)) {
    objCssAll.pseudo = pseudo;
  }

  const objCssWithMediaQ: ObjCssAll = objCssAll as ObjCssAll;
  if (objCssWithMediaQ.mediaq) {
    objCssWithMediaQ.mediaq = iterateConstructMediaQObjCss({
      objMediaQ: objCssWithMediaQ.mediaq as MediaQ,
      str,
      m1,
      m2
    });
  }

  // const beginNonSingle = execConstructObjCss({
  //   objCss: objCssAll.beginNonSingle as KeyStringArr || {} as KeyStringArr,
  //   str: strExcludeMediaQ,
  //   reg: regBeginNonSingle,
  //   constructCssObj: constructAnyObjCss
  // });
  // if (!isMediaQ || beginNonSingle) {
  //   objCssAll.beginNonSingle = beginNonSingle;
  // }

  return objCssAll;
};

export default constructObjCssPerFile;
