import fs from 'fs';
// import util from 'util';

import getSafMarkers from './getSafeMarkers';

type TFuncStr = (str: string, str2?: string, str3?: string) => string;

export interface KeyStringArr {
  [key: string]: string[];
}

export interface ObjCssAllNonMediaQuery {
  combined?: KeyStringArr;
  single?: KeyStringArr;
  withchild?: KeyStringArr;
}

export interface ObjCssAll extends ObjCssAllNonMediaQuery {
  mediaq?: ObjCssAllNonMediaQuery;
}

const regCleanSel = /^\s*|\s*\=?/g;
const sregSel = '[a-zA-Z\\#\\.\\[\\]\\*]';

export const clearComments: TFuncStr = (strAll, marker) => {
  let str = strAll;

  const m1 = marker as string;
  //                                                                            Marker m1
  //                                                                                |
  //                                                                               \/
  str = str.replace(/(\*\/)/g, ['$1', m1].join('')); // Find: */  Replace with:  */¬
  //                                                                                                        Marker m1
  //                                                                                                           |
  //                                                                                                          \/
  const regComment = RegExp(`\\/\\*[^${m1}]*\\*\\/${m1}`, 'g'); // Removes all instances of: /* anything..  */¬
  str = str.replace(regComment, '');
  str = str.replace(m1, ''); // if any remainders of marker.
  return str;
};

interface StyleBlocksContent {
  css: string[];
  pseudo?: string[];
  child?: string[];
  shared?: string[];
  mediaQ?: string[];
}

export interface StyleBlocks {
  [key: string]: StyleBlocksContent;
}

interface MediaBlocks {
  [key: string]: StyleBlocks;
}

interface ObjCss {
  styleBlocks: StyleBlocks;
  mediaBlocks: MediaBlocks;
}

type TconstructCombinedStyleBlocks = (props: {
  objCombined: KeyStringArr;
  arrSelectors: string[];
  strCss: string;
}) => KeyStringArr;
export const constructCombinedStyleBlocks: TconstructCombinedStyleBlocks = ({
  objCombined,
  arrSelectors,
  strCss
}) => {
  if (arrSelectors.length > 1) {
    const strCombineSelector = ',' + arrSelectors.join(',') + ',';
    if (!objCombined[strCombineSelector]) {
      objCombined[strCombineSelector] = [];
    }
    objCombined[strCombineSelector].push(strCss);
  }
  return objCombined;
};

type TconstructArrSelStyleBlocks = (props: {
  styleBlocks: StyleBlocks;
  arrSelectors: string[];
  strCss: string;
}) => StyleBlocks;
export const constructSingleStyleBlocks: TconstructArrSelStyleBlocks = ({
  styleBlocks,
  arrSelectors,
  strCss
}) => {
  if (arrSelectors.length === 1) {
    const strSelector = arrSelectors[0];
    if (strSelector.indexOf(' ') === -1) {
      if (!styleBlocks[strSelector]) {
        styleBlocks[strSelector] = {
          css: [],
          shared: []
        };
      }
      styleBlocks[strSelector].css.push(strCss);
    }
  }
  return styleBlocks;
};

type TconstructShared = (props: { styleBlocks: StyleBlocks }) => StyleBlocks;
const constructShared: TconstructShared = ({ styleBlocks }) => {
  const arrAllSelectors = Object.keys(styleBlocks);
  arrAllSelectors.forEach(strSelector => {
    const regHasSelector = RegExp(`\\,${strSelector}\\,`);
    styleBlocks[strSelector].shared = arrAllSelectors.filter(
      sel => sel.search(regHasSelector) !== -1
    );
  });
  return styleBlocks;
};

const replColon: TFuncStr = (str, m1) => str.replace(/\:/g, m1 as string);

type TcleanSelectors = (strSelectors: string) => string[];
const cleanSelectors: TcleanSelectors = strSelectors =>
  strSelectors.split(',').map(sel => sel.replace(regCleanSel, ''));

const markEndCurly: TFuncStr = (str, m1, sregNotCurly) => {
  let strMarked = str;
  strMarked = str.replace(/\}/g, '}' + m1);

  const regCurlyRepl = RegExp(`(\\{${sregNotCurly}\\{${sregNotCurly}\\})${m1}`, 'g');
  while (strMarked.search(regCurlyRepl) !== -1) {
    strMarked = strMarked.replace(regCurlyRepl, '$1');
  }
  return strMarked;
};

type TiterateGetCombined = (props: {
  objCombined: KeyStringArr;
  str: string;
  sregNotCurly: string;
}) => KeyStringArr;

const iterateGetCombined: TiterateGetCombined = ({ objCombined, str, sregNotCurly }) => {
  const reg = RegExp(
    `(^|\\n)\\s*(${sregSel}\\,${sregSel}${sregNotCurly})\\{(${sregNotCurly})\\}`,
    'ig'
  );

  const marker = '$$';
  let arrM;

  while ((arrM = reg.exec(str))) {
    const strCss = arrM[3];
    let strSelectors = arrM[2];

    strSelectors = replColon(strSelectors, marker);
    const arrSelectors = cleanSelectors(strSelectors);
    objCombined = constructCombinedStyleBlocks({ objCombined, arrSelectors, strCss });
  }

  return objCombined;
};

type TiterateStyleBlocks = (props: {
  styleBlocks: StyleBlocks;
  str: string;
  sregNotCurly: string;
}) => StyleBlocks;

const iterateGetStyleBlocks: TiterateStyleBlocks = ({ styleBlocks, str, sregNotCurly }) => {
  const objCombined = iterateGetCombined({ styleBlocks, str, sregNotCurly });

  const regNonMediaQ = RegExp(
    `(^|\\n)\\s*(${sregSel}${sregNotCurly})\\{(${sregNotCurly})\\}`,
    'ig'
  );

  while ((arrM = regNonMediaQ.exec(str))) {
    const strCss = arrM[3];
    let strSelectors = arrM[2];

    const marker = '$$';
    strSelectors = replColon(strSelectors, marker);
    const arrSelectors = cleanSelectors(strSelectors);
    styleBlocks = constructSingleStyleBlocks({ styleBlocks, arrSelectors, strCss });
  }

  styleBlocks = constructShared({ styleBlocks });
  return styleBlocks;
};

type TiterateMediaBlocks = (props: {
  mediaBlocks: MediaBlocks;
  str: string;
  m1: string;
  sregNotCurly: string;
}) => MediaBlocks;

const iterateGetMediaQueryBlocks: TiterateMediaBlocks = ({
  mediaBlocks,
  str,
  m1,
  sregNotCurly
}) => {
  const strMarked = markEndCurly(str, m1, sregNotCurly);
  const regMediaQ = RegExp(`(\\@media${sregNotCurly})\\{([^\\${m1}]*)\\}\\${m1}`, 'gi');
  let arrM;
  while ((arrM = regMediaQ.exec(strMarked))) {
    const strMediaDecl = arrM[1];
    const strMediaContent = arrM[2];
    mediaBlocks[strMediaDecl] = iterateGetStyleBlocks({
      styleBlocks: mediaBlocks[strMediaDecl] || {},
      str: strMediaContent,
      sregNotCurly
    });
  }
  return mediaBlocks;
};

type TiterateFileConstructObjCss = (str: string, m1: string) => ObjCss;
const iterateFileConstructObjCss: TiterateFileConstructObjCss = (str, m1) => {
  const objCss: ObjCss = {
    styleBlocks: {},
    mediaBlocks: {}
  };
  const sregNotCurly = `[^\\{\\}\\${m1}]*`;
  objCss.styleBlocks = iterateGetStyleBlocks({
    styleBlocks: objCss.styleBlocks,
    str,
    sregNotCurly
  });
  objCss.mediaBlocks = iterateGetMediaQueryBlocks({
    mediaBlocks: objCss.mediaBlocks,
    str,
    m1,
    sregNotCurly
  });
  return objCss;
};

// type TgetCssIntVars = (objCss: ObjCss) => string;
// const getCssIntVars: TgetCssIntVars = objCss => {
//   let str;
//   objCss.styleBlocks.forEach(sel => {
//     const isCombinedSelector = sel.indexOf(',') === 0;
//     if (isCombinedSelector) {
//     }
//   });
//   return str;
// };

type TupdateVars = (file: string, objCssAll: ObjCssAll) => ObjCssAll;

const init: TupdateVars = (file, ObjCssAll) => {
  // let strAll = strBuild;
  let str = '';

  const read = fs.readFileSync(file);
  str = read.toString();

  const {
    objM: { m1 }
  } = getSafMarkers(str);
  str = clearComments(str, m1);

  const objCss = iterateFileConstructObjCss(objCssAll, str, m1);
  // const vars = getCssIntVars(objCss);
  // return `${strBuild}\n${vars}`;

  console.log('objCss = ', objCss);

  return 'hello';
};

export default init;
