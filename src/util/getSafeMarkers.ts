type TExclude = (str: string, excludeMarkers: string) => string[];

const exclude: TExclude = (strAvailableMarkers, excludeMarkers) =>
  strAvailableMarkers.split('').filter(item => excludeMarkers.indexOf(item) === -1);

export interface IObjM {
  [key: string]: string;
}

export interface IMarkers {
  objM: IObjM;
  strAvailableMarkers?: string;
  strUsedMarkers?: string;
  error?: string;
}

type Thtml = string;
type TGetSafeMarkers = (
  props:
    | {
        strHtml: Thtml;
        strAvailableMarkers?: string;
        strMarkerLabels?: string;
        excludeMarkers?: string;
      }
    | Thtml
) => IMarkers;

const getSafeMarkers: TGetSafeMarkers = props => {
  let strHtml = '';
  let strAvailableMarkers = '\u00A1\u00A2\u00A4\u00A5\u00A7\u00AA\u00B1\u00B5\u00B0\u00C6\u00DE';
  let strMarkerLabels = 'm1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11';
  let excludeMarkers = '';

  if (typeof props === 'string') {
    strHtml = props;
  } else {
    strHtml = props.strHtml || strHtml;
    strAvailableMarkers = props.strAvailableMarkers || strAvailableMarkers;
    strMarkerLabels = props.strMarkerLabels || strMarkerLabels;
    excludeMarkers = props.strMarkerLabels || excludeMarkers;
  }

  const arrAvailableMarkers: string[] = excludeMarkers
    ? exclude(strAvailableMarkers, excludeMarkers)
    : strAvailableMarkers.split('');

  const arrNewMarkerLabels = strMarkerLabels.split(',');
  const objM: IObjM = {};

  let strUsedMarkers = '';
  let error = null;

  arrNewMarkerLabels.forEach(strMarkerLabel => {
    while (arrAvailableMarkers.length !== 0) {
      const strAvailableMarker: string = arrAvailableMarkers.shift() as string;
      if (strHtml.indexOf(strAvailableMarker) === -1) {
        objM[strMarkerLabel] = strAvailableMarker;
        strUsedMarkers += strAvailableMarker;
        break;
      }
    }
    if (!arrAvailableMarkers.length && strUsedMarkers.length < arrNewMarkerLabels.length) {
      error = 'No strAvailableMarkers are left to use';
    }
  });

  const obj: IMarkers = {
    objM,
    strAvailableMarkers: arrAvailableMarkers.join(''),
    strUsedMarkers
  };
  if (error) {
    obj.error = error;
  }
  return obj;
};

export default getSafeMarkers;
