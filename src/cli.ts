

type Tcli = (args: {x: true}) => string;

const cli: Tcli = args => {
  console.log('args = ', args);
  return 'hello world';
}


export {cli};
