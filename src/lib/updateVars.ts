import fs from 'fs';

type TupdateVars = (file: string, strBuild: string) => string;

const updateVars: TupdateVars = (file, strBuild) => {
  let str = strBuild;

  const read = fs.readFileSync(file);

  console.log('read = ', read.toString());
  str = str + 'hello\n';
  return str;
};

export default updateVars;
