import { ObjCssAll, KeyStringArr, MediaQ } from 'src/types';
import crop from 'src/lib/crop';

type TcropArrStr = (arr: string[]) => string[];
const cropArrStr: TcropArrStr = arr => arr.map(item => crop(item));

type TcropObjCss = (obj: KeyStringArr) => KeyStringArr;
export const cropObjCss: TcropObjCss = obj =>
  Object.keys(obj).reduce(
    (accum, cur) => ({
      ...accum,
      ...{ [cur]: cropArrStr(obj[cur]) }
    }),
    {} as KeyStringArr
  );

type TcropObjCssChildren = (objCssAll: ObjCssAll | MediaQ) => ObjCssAll | MediaQ;
export const cropObjCssChildren: TcropObjCssChildren = objCssAll =>
  Object.keys(objCssAll).reduce((accum, cur) => {
    if (cur === 'mediaq') {
      return {
        ...accum,
        mediaq: cropObjCssChildren(objCssAll.mediaq as MediaQ) as MediaQ
      };
    }
    return {
      ...accum,
      ...{ [cur as keyof ObjCssAll]: cropObjCss(objCssAll[cur as keyof ObjCssAll] as KeyStringArr) }
    };
  }, {} as ObjCssAll);