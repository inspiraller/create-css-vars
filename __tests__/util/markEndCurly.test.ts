import markEndCurly from 'src/util/markEndCurly';

describe('markEndCurly', () => {
  describe('success', () => {
    it('Should add end marker to parent end curly - single line', () => {
      const css = `.btn {position: absolute;}`;
      const actual = markEndCurly(css, '£', '¬');
      const result = `.btn {position: absolute;}¬`;
      expect(actual).toBe(result);
    });
    it('Should add end marker to parent end curly - single', () => {
      const css = `
        .btn {
          position: absolute;
        }
      `;
      const actual = markEndCurly(css, '£', '¬');
      const result = `
        .btn {
          position: absolute;
        }¬
      `;
      expect(actual).toBe(result);
    });
    it('Should add end marker to parent end curly - parent', () => {
      const css = `
        .btn {
          position: absolute;
          .child {
            color: red;
          }
        }
      `;
      const actual = markEndCurly(css, '£', '¬');
      const result = `
        .btn {
          position: absolute;
          .child {
            color: red;
          }
        }¬
      `;
      expect(actual).toBe(result);
    });
    it('Should add end marker to parent end curly - child with sibling', () => {
      const css = `
        .btn {
          position: absolute;
          .child1 {
            color: red;
          }
          .child2 {
            color: red;
          }
        }
      `;
      const actual = markEndCurly(css, '£', '¬');
      const result = `
        .btn {
          position: absolute;
          .child1 {
            color: red;
          }
          .child2 {
            color: red;
          }
        }¬
      `;
      expect(actual).toBe(result);
    });
    it('Should add end marker to parent end curly - parent  with sibling', () => {
      const css = `
        .btn {
          position: absolute;
        }
        header {
          position: absolute;
        }
      `;
      const actual = markEndCurly(css, '£', '¬');
      const result = `
        .btn {
          position: absolute;
        }¬
        header {
          position: absolute;
        }¬
      `;
      expect(actual).toBe(result);
    });
    it('Should add end marker to parent end curly - complex', () => {
      const css = `
        .btn {
          position: absolute;
          .child {
            color: red;
            &:hover {
              border: 1px solid red;
            }
          }
        }
        @media () {
          header {
            font-family: 'something';
            background: blue;
          }
          footer {
            font-family: 'something';
            background: blue;
          }
        }
      `;
      const actual = markEndCurly(css, '£', '¬');
      const result = `
        .btn {
          position: absolute;
          .child {
            color: red;
            &:hover {
              border: 1px solid red;
            }
          }
        }¬
        @media () {
          header {
            font-family: 'something';
            background: blue;
          }
          footer {
            font-family: 'something';
            background: blue;
          }
        }¬
      `;
      expect(actual).toBe(result);
    });
  });
  describe('fail', () => {
    it('Should not put any markers', () => {
      const css = `
        /* something here.. */
      `;
      const actual = markEndCurly(css, '£', '¬');
      const result = css;
      expect(actual).toBe(result);
    });
  });
});
