'use strict';Object.defineProperty(exports,'__esModule',{value:true});const readFile_1=require('../util/readFile');const replaceRelative_1=require('../util/replaceRelative');const maskPath=strPath=>strPath.replace(/[\w\W]*[\/\\]([^\/\/]*)$/,'$1');const separatePaths=strPath=>`
// -----------------------------------------------------------------------------
// ${maskPath(strPath)}
`;const getGlobalStyleCss=global_styles_path=>{const isSingleFile=global_styles_path.search(/\.[^\.\/\\]*$/)!==-1;const arrReadAll=[];if(isSingleFile){arrReadAll.push(separatePaths(global_styles_path));arrReadAll.push(readFile_1.readFile(global_styles_path));}else{readFile_1.recurseDirs(global_styles_path,file=>{arrReadAll.push(separatePaths(file));arrReadAll.push(readFile_1.readFile(file));});}let strReadAll=arrReadAll.join('');strReadAll=replaceRelative_1.replaceRelativeAssetsApos(strReadAll);strReadAll=replaceRelative_1.replaceRelativeAssetsQuot(strReadAll);strReadAll=replaceRelative_1.replaceRelativeTheme(strReadAll);return strReadAll;};const createGlobalStyles=(global_styles_path,js)=>{const strReadFile=getGlobalStyleCss(global_styles_path);const strTFuncStr=!js?'type TFuncStr = (str: string, str2?: string, str3?: string) => string;':'';const strTGlobalStyles=!js?'type TGlobalStyles = (getAsset: TFuncStr, getTheme: TFuncStr) => string;':'';const decGlobalType=!js?': TGlobalStyles':'';return`
${strTFuncStr}
${strTGlobalStyles}
const GlobalStyles${decGlobalType} = (getAsset, getTheme) => \`${strReadFile}\`;
export default GlobalStyles;
  `;};exports.default=createGlobalStyles;