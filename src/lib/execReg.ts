type TexecReg = (props: {
  str: string;
  reg: RegExp;
  callback: (arrM: RegExpExecArray) => void;
}) => void;

const execReg: TexecReg = ({ str, reg, callback }) => {
  let arrM;
  while ((arrM = reg.exec(str))) {
    callback(arrM);
  }
};

export default execReg;
