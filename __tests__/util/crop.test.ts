import crop  from 'src/util/crop';

describe('crop', () => {
  describe('success', () => {
    it('should clean - single line whitespace',  () => {
      const actual = crop('   ');
      const result = '';
      expect(actual).toBe(result);
    });
    it('should replace - end whitespace',  () => {
      const actual = crop(`a

 `);
      const result = 'a';
      expect(actual).toBe(result);
    });
    it('should replace - start whitespace',  () => {
      const actual = crop(`

 a`);
      const result = 'a';
      expect(actual).toBe(result);
    });
    it('should replace - multiple new line to 1 new line',  () => {
      const actual = crop(`a

b


 c`);

      const result = 'a\nb\nc';
      expect(actual).toBe(result);
    });
  });
});
