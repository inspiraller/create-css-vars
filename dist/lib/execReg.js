'use strict';Object.defineProperty(exports,'__esModule',{value:true});const execReg=({str,reg:regRef,callback})=>{let arrM;const reg=new RegExp(regRef);while(arrM=reg.exec(str)){callback(arrM);}};exports.default=execReg;