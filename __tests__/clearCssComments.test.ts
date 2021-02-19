import clearCssComments from 'src/lib/clearCssComents';

type TFuncStr = (str: string, str2?: string, str3?: string) => string;

const crop: TFuncStr = str => {
  str = str.replace(/(^\s+|\s+$)/g, '');
  str = str.replace(/\n\s*/g, '\n');
  str = str.replace(/\n\s*\n/g, '\n');
  str = str.replace(/\n\s*\n/g, '\n');
  return str;
};

describe('updateVars()', () => {
  describe('clearCssComments()', () => {
    it('remove comments from this string', () => {
      const str = `
      /*
      
      */
      .file {
        position: absolute;
        /*
          .x {

          }
        */ color: red;
      }`;
      const actual = crop(clearCssComments(str, '¬'));
      const expected = crop(`
      .file {
        position: absolute;
        color: red;
      }`);

      // console.log('actual = ', actual);
      expect(actual).toBe(expected);
    });
  });
});
