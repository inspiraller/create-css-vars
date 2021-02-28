import {
  regTruncate,
  regCombined,
  regSingle,
  regPseudoOrAttr,
  regWithChild
  // sregWithChild
} from 'src/util/regCss';

describe('regCss', () => {
  describe('regTruncate', () => {
    it('should clean  ', async () => {
      const str = ' john  ';
      const actual = str.replace(regTruncate, '');
      const result = 'john';
      expect(actual).toBe(result);
    });
  });
  describe('regCombined', () => {
    describe('success', () => {
      it('should match 2 combined selectors  ', async () => {
        const strSelector = `selector1,selector2 {
          position: absolute;
        } `;
        const actual = strSelector.search(regCombined) !== -1;
        expect(actual).toBe(true);
      });
      it('should match 2 combined selectors on separate lines  ', async () => {
        const strSelector = `
        selector1,
        selector2 {
          position: absolute;
        } `;
        const actual = strSelector.search(regCombined) !== -1;
        expect(actual).toBe(true);
      });
      it('should match 3 combined selectors on separate lines  ', async () => {
        const strSelector = `
        selector1,
        selector2, selector3 {
          position: absolute;
        } `;
        const actual = strSelector.search(regCombined) !== -1;
        expect(actual).toBe(true);
      });
      it('should match combined = .selector 1, *  ', async () => {
        const strSelector = `
        .selector1,
        * {
          position: absolute;
        } `;
        const actual = strSelector.search(regCombined) !== -1;
        expect(actual).toBe(true);
      });
      it('should match combined = *, [s]  ', async () => {
        const strSelector = `
        * ,
        [s] {
          position: absolute;
        } `;
        const actual = strSelector.search(regCombined) !== -1;
        expect(actual).toBe(true);
      });
      it('should match combined = * > d , [s=""]  ', async () => {
        const strSelector = `
        * > d ,
        [s=""] {
          position: absolute;
        } `;
        const actual = strSelector.search(regCombined) !== -1;
        expect(actual).toBe(true);
      });
    });
    describe('fail', () => {
      it('should NOT match without comma - * > d .x:hover link [d|=""] #d > d ', async () => {
        const strSelector = `
        * > d .x:hover link [d|=""] #d > d  {
          position: absolute;
        } `;
        const actual = strSelector.search(regCombined) !== -1;
        expect(actual).toBe(false);
      });
    });
  });
  describe('regSingle', () => {
    describe('success', () => {
      it('should match = a ', async () => {
        const strSelector = `
        a {}`;
        const actual = strSelector.search(regSingle) !== -1;
        expect(actual).toBe(true);
      });
      it('should match = div ', async () => {
        const strSelector = `
        div {}`;
        const actual = strSelector.search(regSingle) !== -1;
        expect(actual).toBe(true);
      });
      it('should match = .class ', async () => {
        const strSelector = `
        .class {}`;
        const actual = strSelector.search(regSingle) !== -1;
        expect(actual).toBe(true);
      });
      it('should match = #item ', async () => {
        const strSelector = `
        #item {}`;
        const actual = strSelector.search(regSingle) !== -1;
        expect(actual).toBe(true);
      });
      it('should match = .item- ', async () => {
        const strSelector = `
        .item- {}`;
        const actual = strSelector.search(regSingle) !== -1;
        expect(actual).toBe(true);
      });
      it('should match = .item-x ', async () => {
        const strSelector = `
        .item-x {}`;
        const actual = strSelector.search(regSingle) !== -1;
        expect(actual).toBe(true);
      });
      it('should match = .item--x ', async () => {
        const strSelector = `
        .item--x {}`;
        const actual = strSelector.search(regSingle) !== -1;
        expect(actual).toBe(true);
      });
      it('should match = .item__d--x ', async () => {
        const strSelector = `
        .item__d--x {}`;
        const actual = strSelector.search(regSingle) !== -1;
        expect(actual).toBe(true);
      });
      it('should match = .item_ ', async () => {
        const strSelector = `
        .item_ {}`;
        const actual = strSelector.search(regSingle) !== -1;
        expect(actual).toBe(true);
      });
    });
    describe('fail', () => {
      it('should NOT match = div[d="something"] ', async () => {
        const strSelector = `
        div[d="something"] {}`;
        const actual = strSelector.search(regSingle) !== -1;
        expect(actual).toBe(false);
      });
      it('should NOT match = * ', async () => {
        const strSelector = `
          * {}`;
        const actual = strSelector.search(regSingle) !== -1;
        expect(actual).toBe(false);
      });
      it('should NOT match = d:hover ', async () => {
        const strSelector = `
          div:hover {}`;
        const actual = strSelector.search(regSingle) !== -1;
        expect(actual).toBe(false);
      });
      it('should NOT match = div p ', async () => {
        const strSelector = `
          div p {}`;
        const actual = strSelector.search(regSingle) !== -1;
        expect(actual).toBe(false);
      });
      it('should NOT match = div,p ', async () => {
        const strSelector = `
          div,p {}`;
        const actual = strSelector.search(regSingle) !== -1;
        expect(actual).toBe(false);
      });
      it('should NOT match = div>p ', async () => {
        const strSelector = `
          div>p {}`;
        const actual = strSelector.search(regSingle) !== -1;
        expect(actual).toBe(false);
      });
      it('should NOT match = div+p ', async () => {
        const strSelector = `
          div+p {}`;
        const actual = strSelector.search(regSingle) !== -1;
        expect(actual).toBe(false);
      });
      it('should NOT match = div~p ', async () => {
        const strSelector = `
          div~p {}`;
        const actual = strSelector.search(regSingle) !== -1;
        expect(actual).toBe(false);
      });
    });
    describe('regPseudoOrAttr', () => {
      describe('success', () => {
        it('should match = a:hover ', async () => {
          const strSelector = `
          a:hover {}`;
          const actual = strSelector.search(regPseudoOrAttr) !== -1;
          expect(actual).toBe(true);
        });
        it('should match = a[x] ', async () => {
          const strSelector = `
          a[x] {}`;
          const actual = strSelector.search(regPseudoOrAttr) !== -1;
          expect(actual).toBe(true);
        });
        it('should match = a[x=3] ', async () => {
          const strSelector = `
          a[x=3] {}`;
          const actual = strSelector.search(regPseudoOrAttr) !== -1;
          expect(actual).toBe(true);
        });
        it('should match = a[ x = 3] ', async () => {
          const strSelector = `
          a[ x = 3] {}`;
          const actual = strSelector.search(regPseudoOrAttr) !== -1;
          expect(actual).toBe(true);
        });
        it('should match = a[ x |= 3] ', async () => {
          const strSelector = `
          a[ x |= 3] {}`;
          const actual = strSelector.search(regPseudoOrAttr) !== -1;
          expect(actual).toBe(true);
        });
        it('should match = a[ x ~= 3] ', async () => {
          const strSelector = `
          a[ x ~= 3] {}`;
          const actual = strSelector.search(regPseudoOrAttr) !== -1;
          expect(actual).toBe(true);
        });
        it('should match = a[ x *= 3] ', async () => {
          const strSelector = `
          a[ x *= 3] {}`;
          const actual = strSelector.search(regPseudoOrAttr) !== -1;
          expect(actual).toBe(true);
        });
        it('should match = a:hover[ x *= 3] ', async () => {
          const strSelector = `
          a:hover[ x *= 3] {}`;
          const actual = strSelector.search(regPseudoOrAttr) !== -1;
          expect(actual).toBe(true);
        });
        it('should match = a::p ', async () => {
          const strSelector = `
          a::p {}`;
          const actual = strSelector.search(regPseudoOrAttr) !== -1;
          expect(actual).toBe(true);
        });
        it('should match = a::p child ', async () => {
          const strSelector = `
          a::p child {}`;
          const actual = strSelector.search(regPseudoOrAttr) !== -1;
          expect(actual).toBe(true);
        });
      });
      describe('fail', () => {
        it('should NOT match combined = a::p,child', async () => {
          const strSelector = `
          a::p,child {}`;
          const actual = strSelector.search(regPseudoOrAttr) !== -1;
          expect(actual).toBe(false);
        });
      });
    });
    describe('regWithChild', () => {
      describe('success', () => {
        it('should match with child - header .child', () => {
          // console.log('sregWithChild = ', sregWithChild);
          const strSelector = `
            header .child {}
          `;
          // console.log('sreg - match = ', strSelector.match(RegExp(sregWithChild)));
          // console.log('match = ', strSelector.match(regWithChild));
          const actual = strSelector.search(regWithChild) !== -1;
          expect(actual).toBe(true);
        });
      });
      describe('fail', () => {
        it('should NOT match combinator - header, header .child', () => {
          const strSelector = `header, header .child{}`;
          const actual = strSelector.search(regWithChild) !== -1;
          expect(actual).toBe(false);
        });
      });
    });
  });
});
