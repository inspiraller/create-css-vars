'use strict';Object.defineProperty(exports,'__esModule',{value:true});exports.replaceRelativeAssetsQuot=exports.replaceRelativeAssetsApos=exports.replaceRelativeTheme=void 0;const replaceRelativeTheme=str=>str.replace(/var\((--[^\)]*)\)/g,'${getTheme(\'$1\')}');exports.replaceRelativeTheme=replaceRelativeTheme;const replaceRelativeAssetsApos=str=>str.replace(/url\((\')([^\']*)\'/g,'url($1${getAsset(\'$2\')}$1');exports.replaceRelativeAssetsApos=replaceRelativeAssetsApos;const replaceRelativeAssetsQuot=str=>str.replace(/url\((\")([^\"]*)\"/g,'url($1${getAsset(\'$2\')}$1');exports.replaceRelativeAssetsQuot=replaceRelativeAssetsQuot;