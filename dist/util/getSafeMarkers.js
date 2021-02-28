'use strict';Object.defineProperty(exports,'__esModule',{value:true});const exclude=(strAvailableMarkers,excludeMarkers)=>strAvailableMarkers.split('').filter(item=>excludeMarkers.indexOf(item)===-1);const getSafeMarkers=props=>{let strHtml='';let strAvailableMarkers='\xA1\xA2\xA4\xA5\xA7ª\xB1µ\xB0ÆÞ';let strMarkerLabels='m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11';let excludeMarkers='';if(typeof props==='string'){strHtml=props;}else{strHtml=props.strHtml||strHtml;strAvailableMarkers=props.strAvailableMarkers||strAvailableMarkers;strMarkerLabels=props.strMarkerLabels||strMarkerLabels;excludeMarkers=props.strMarkerLabels||excludeMarkers;}const arrAvailableMarkers=excludeMarkers?exclude(strAvailableMarkers,excludeMarkers):strAvailableMarkers.split('');const arrNewMarkerLabels=strMarkerLabels.split(',');const objM={};let strUsedMarkers='';let error=null;arrNewMarkerLabels.forEach(strMarkerLabel=>{while(arrAvailableMarkers.length!==0){const strAvailableMarker=arrAvailableMarkers.shift();if(strHtml.indexOf(strAvailableMarker)===-1){objM[strMarkerLabel]=strAvailableMarker;strUsedMarkers+=strAvailableMarker;break;}}if(!arrAvailableMarkers.length&&strUsedMarkers.length<arrNewMarkerLabels.length){error='No strAvailableMarkers are left to use';}});const obj={objM,strAvailableMarkers:arrAvailableMarkers.join(''),strUsedMarkers};if(error){obj.error=error;}return obj;};exports.default=getSafeMarkers;