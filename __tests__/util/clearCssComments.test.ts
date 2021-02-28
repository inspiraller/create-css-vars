import clearCssComments from 'src/util/clearCssComents';
import crop from 'src/util/crop';

describe('updateSelectors()', () => {
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
