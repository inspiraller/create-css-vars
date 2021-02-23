declare type TexecReg = (props: {
    str: string;
    reg: RegExp;
    callback: (arrM: RegExpExecArray) => void;
}) => void;
declare const execReg: TexecReg;
export default execReg;
