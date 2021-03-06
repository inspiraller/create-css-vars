export type TFuncStr = (str: string, str2?: string, str3?: string) => string;
export interface KeyStringArr {
  [key: string]: string[];
}
export type TKeyString = {
  [index: string]: string;
};

export interface ObjCssAllReq {
  combined: KeyStringArr;
  single: KeyStringArr;
  pseudo: KeyStringArr;
  withchild: KeyStringArr;
  // beginNonSingle: KeyStringArr; // * or [] or -root or @ etc...
}

export interface ObjCssAllOptional {
  combined?: ObjCssAllReq['combined'];
  single?: ObjCssAllReq['single'];
  pseudo?: ObjCssAllReq['pseudo'];
  withchild?: ObjCssAllReq['withchild'];
  // beginNonSingle?: ObjCssAllReq['beginNonSingle']; // * or [] or -root or @ etc...
}

export interface MediaQ {
  [key: string]: ObjCssAllOptional;
}

export interface Theme {
  [key: string]: string;
}
// example
/*

export const themeLight = {
  '--primary-dark': '#020018',
  '--primary-green': '#17B890',
  '--primary-white': '#FFF',
}
*/

export interface ObjCssAll extends ObjCssAllReq {
  mediaq: MediaQ;
  theme?: Theme;
  globalStyles?: string;
}

export type Tconstruct = (props: {
  objCss: KeyStringArr;
  strSelectors: string;
  strCss: string;
}) => KeyStringArr;

/*
  const objCssAll = {
    combined: {},
    single: {
      '.item': []
    },
    withchild: {},
    pseudo: {},
    beginNonSingle: {},
    mediaq: {
      single: {
        '.link': ['']
      }
    }
  }
*/

export interface Selectors {
  [key: string]: string;
}

export type TarrCss = string[];
