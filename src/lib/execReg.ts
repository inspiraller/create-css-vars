type TexecReg = (props: {
  str: string;
  reg: RegExp;
  callback: (arrM: RegExpExecArray | string[]) => void;
}) => void;

const execReg: TexecReg = ({ str, reg: regRef, callback }) => {
  let arrM;
  const reg = new RegExp(regRef);
  // const arr: Array<string[]> = [];
  while ((arrM = reg.exec(str))) {
    // console.log(`str=@@@"${str}"@@@`);
    // console.log('arrM[2] = ', arrM[2], reg);
    // str = str.substr(reg.lastIndex + arrM[2].length); // fix missing multiple matches
    // arr.push(Array.prototype.slice.call(arrM));
    callback(arrM);
    // str = str.substr(reg.lastIndex);
  }
  // arr.forEach(arrM => {
  //   callback(arrM);
  // });
};

export default execReg;
