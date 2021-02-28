declare type TexecReg = (props: {
    str: string;
    reg: RegExp;
    callback: (arrM: RegExpExecArray | string[]) => void;
}) => void;
declare const execReg: TexecReg;
export default execReg;
