type TKeyString = { [key: string]: string };

type TsplitArgIntoObj = (item: string) => TKeyString | null;
const splitArgIntoObj: TsplitArgIntoObj = item => {
  const arr = item.split('=');
  return {
    [arr[0]]: arr[1]
  };
};

type TgetArgs = (args: string[]) => TKeyString;
const getArgs: TgetArgs = args =>
  args.reduce(
    (accum, cur) => ({
      ...accum,
      ...(cur.indexOf('--') === 0 ? splitArgIntoObj(cur.substr(2)) : {})
    }),
    {} as TKeyString
  );

export default getArgs;
