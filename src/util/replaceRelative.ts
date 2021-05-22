import { TFuncStr } from 'src/types';

export const replaceRelativeTheme: TFuncStr = str =>
  str.replace(/var\((--[^\)]*)\)/g, "${getTheme('$1')}");

export const replaceRelativeAssetsApos: TFuncStr = str =>
  str.replace(/url\((\')([^\']*)\'/g, "url($1${getAsset('$2')}$1");

export const replaceRelativeAssetsQuot: TFuncStr = str =>
  str.replace(/url\((\")([^\"]*)\"/g, "url($1${getAsset('$2')}$1");
