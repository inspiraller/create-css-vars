declare type TKeyString = {
    [key: string]: string;
};
declare type TgetArgs = (args: string[]) => TKeyString;
declare const getArgs: TgetArgs;
export default getArgs;
