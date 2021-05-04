'use strict';var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{'default':mod};};Object.defineProperty(exports,'__esModule',{value:true});exports.cli=void 0;const fs_1=__importDefault(require('fs'));const path_1=__importDefault(require('path'));const getArgs_1=__importDefault(require('./util/getArgs'));const constructObjCssFromDir_1=__importDefault(require('./constructObjCss/constructObjCssFromDir'));const createSelectorsFromObjCss_1=__importDefault(require('./popCss/createSelectorsFromObjCss'));const convertSelectorsToStr_1=__importDefault(require('./convertSelectors/convertSelectorsToStr'));const cli=args=>{const objArgs=getArgs_1.default(args);const from=objArgs.from;const to=objArgs.to;const cwd=process.cwd();let pathIn='';if(from){pathIn=fs_1.default.existsSync(from)?from:path_1.default.resolve(cwd,from);}if(!fs_1.default.existsSync(pathIn)){console.log(`! Warning: --from path "${from}" not found. Will load css from ${cwd}`);pathIn=path_1.default.resolve(cwd);}let pathOut='';if(to){pathOut=fs_1.default.existsSync(to)?to:path_1.default.resolve(cwd,to);}if(!fs_1.default.existsSync(pathOut)){console.log(`! Warning: --to path "${to}" not found. Will create here: ${cwd}/css-vars.ts`);pathOut=path_1.default.resolve(cwd);}const objCssAll=constructObjCssFromDir_1.default(pathIn);const selectors=createSelectorsFromObjCss_1.default(objCssAll);const strSelectors=convertSelectorsToStr_1.default(selectors);if(!strSelectors){console.log('! Warning: There is no css!!');return;}const outFile='css-vars.ts';fs_1.default.writeFile(path_1.default.resolve(pathOut,outFile),strSelectors,err=>{if(err){throw err;}console.log(`File: "${pathOut}/${outFile}" created successfully.`);});};exports.cli=cli;