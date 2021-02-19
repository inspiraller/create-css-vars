type TFuncStr = (str: string, str2?: string) => string;

interface StringProps {
  [key: string]: string;
}

interface styleBlockContents {
  selector: string;
  line: number;
  block: string;
  all: string;
  props: StringProps;
  arrAdjoinedWith?: string[];
}

interface styleBlock {
  [key: string]: Array<styleBlockContents>;
}

// export interface IClassMasks {
//   obj: {
//     selector:strLastSelector,
//     line:intLine,
//     block:strFiltered,
//     all:strMatch,
//     props:props
//   };
// }

type TfindClassesInStyles = (
  strAllStyles: string,
  arrClasses: string[],
  obj: styleBlock
) => styleBlock;

type TgetLastSelector = (strMatch: string) => string | null;

type TgetAdjoinedWith = (strSelectors: string, strClass: string) => string[];

type TfilterCombinedClassesToSingleLine = (
  obj: styleBlock,
  strClass: string,
  strMatch: string,
  intLine: styleBlockContents['line'],
  regMatchSameClass: RegExp,
  strLastSelector: string | null,
  arrAdjoinedWith: string[]
) => styleBlock;

type TgetProps = (str: string) => StringProps;

type TgetLine = (styles: string, intPos: number) => number;

class StyleBlocks {
  public obj: styleBlock = {};

  constructor(strAllStyles: string, strSelectors: string) {
    let obj = {};
    const arrClasses = strSelectors.split('.');

    if (arrClasses.length > 1) {
      obj = this.findClassesInStyles(strAllStyles, arrClasses, obj);
    }
    this.obj = obj;
  }

  findClassesInStyles: TfindClassesInStyles = (strAllStyles, arrClasses, obj) => {
    arrClasses.slice(1).forEach((strClass, i) => {
      const encodedSelector = '\\.' + arrClasses[i];

      const regMatchWholeBlock = RegExp(
        '(^|\\n|\\}) *([^\\{\\}\\n]*' + encodedSelector + '\\s*[\\,\\{\\.\\#\\:\\[][^\\}]*\\})',
        'g'
      );
      const regMatchSameClass = RegExp(
        '(^|\\,)([^\\{\\,]*' +
          encodedSelector +
          '(\\[[^\\]]*\\]|\\:[^\\:][^\\,\\{]*|[\\#\\.][^\\,\\{]*)*)\\s*[\\,\\{]',
        'g'
      );

      let arrMatch = null;

      do {
        arrMatch = regMatchWholeBlock.exec(strAllStyles);
        if (arrMatch) {
          const strMatch = arrMatch[2];
          const intLine = this.getLine(strAllStyles, regMatchWholeBlock.lastIndex);

          const strLastSelector = this.getLastSelector(strMatch);
          if (!obj[strClass]) {
            obj[strClass] = [];
          }

          const arrAdjoinedWith = strLastSelector
            ? this.getAdjoinedWith(strLastSelector as string, strClass)
            : [];

          obj = this.filterCombinedClassesToSingleLine(
            obj,
            strClass,
            strMatch,
            intLine,
            regMatchSameClass,
            strLastSelector,
            arrAdjoinedWith
          );
        }
      } while (arrMatch);
    });

    return obj;
  };
  getLastSelector: TgetLastSelector = strMatch => {
    const reg = /(^|\s)([\w\.\#\[\(][^\s\{\}]*)\s*(\{|$)/;
    const arrLastSelector = strMatch.match(reg);
    if (arrLastSelector && arrLastSelector.length) {
      return arrLastSelector[2];
    }
    return null;
  };

  getAdjoinedWith: TgetAdjoinedWith = (strSelectors, strClass) => {
    // TODO - tidy up
    const reg = /([\w\.\#\[\(][^\s\{\}\.\#\[\(]+)/g;
    let arrMatch;
    const arrAdjoinedWith = [];

    do {
      arrMatch = reg.exec(strSelectors);
      if (arrMatch) {
        if (arrMatch[1] !== strClass) {
          arrAdjoinedWith.push(arrMatch[1]);
        }
      }
    } while (arrMatch);

    return arrAdjoinedWith;
  };

  filterCombinedClassesToSingleLine: TfilterCombinedClassesToSingleLine = (
    obj,
    strClass,
    strMatch,
    intLine,
    regMatchSameClass,
    strLastSelector,
    arrAdjoinedWith
  ) => {
    // replace all other commas..
    const strNoContentInComments = this.replaceContentInComments(strMatch);
    const strCssProps = strMatch.replace(/^[^\{]*/, '');
    let arrMatchSameClass;
    const props = this.getProps(strCssProps);

    do {
      arrMatchSameClass = regMatchSameClass.exec(strNoContentInComments);

      if (arrMatchSameClass) {
        let strEach = arrMatchSameClass[2];

        strEach = strEach.replace(/^\s*\}?\s*/, '');

        const strFiltered = strEach + strCssProps;

        if (strLastSelector) {
          const objToPush: styleBlockContents = {
            selector: strLastSelector,
            line: intLine,
            block: strFiltered,
            all: strMatch,
            props: props
          };
          if (arrAdjoinedWith.length > 0) {
            objToPush.arrAdjoinedWith = arrAdjoinedWith;
          }
          obj[strClass].push(objToPush);
        }
      }
    } while (arrMatchSameClass);

    return obj;
  };
  getProps: TgetProps = strCssProps => {
    if (strCssProps) {
      const reg = /[\{\;]\s*([^\:\s\;\}\{\!]+)\:\s*([^\;\:\}\{\!]+)/g;

      let arr;
      const props: StringProps = {};

      do {
        arr = reg.exec(strCssProps);
        if (arr) {
          const key = arr[1];
          const val = arr[2];
          props[key] = val;
        }
      } while (arr);

      return props;
    }
    return {};
  };

  getLine: TgetLine = (styles, intPos) => {
    const arrMatch = styles.substring(0, intPos).match(/\n/g);
    return arrMatch && arrMatch.length ? arrMatch.length : 0;
  };

  replaceContentInComments: TFuncStr = style => {
    style = style.replace(/\*\//g, '¬');

    style = style.replace(/\/\*([^\¬]*)\¬/g, ($0, $1) => {
      const strCommentKeepNewLines = $1.replace(/[^\n]*/g, '');
      return '/' + '*' + strCommentKeepNewLines + '*' + '/';
    });
    return style;
  };
}
