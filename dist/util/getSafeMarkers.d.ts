export interface IObjM {
    [key: string]: string;
}
export interface IMarkers {
    objM: IObjM;
    strAvailableMarkers?: string;
    strUsedMarkers?: string;
    error?: string;
}
declare type Thtml = string;
declare type TGetSafeMarkers = (props: {
    strHtml: Thtml;
    strAvailableMarkers?: string;
    strMarkerLabels?: string;
    excludeMarkers?: string;
} | Thtml) => IMarkers;
declare const getSafeMarkers: TGetSafeMarkers;
export default getSafeMarkers;
