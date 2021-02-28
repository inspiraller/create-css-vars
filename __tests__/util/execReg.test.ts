import execReg  from 'src/util/execReg';

let str: string;
let callback: (arrM: RegExpExecArray | string[]) => void;
let reg: RegExp;
let arr: string[];

describe('execReg', () => {
  describe('success', ()=> {
    describe('example', () => {
      beforeAll(() => {
        // jest.clearAllMocks();
        arr = [];
        callback = jest.fn(arrM => {
          arr.push(`${arrM[1]}-${arrM[2]}`);
        });
        str = "abc abc abc def abc"
        reg = /(a)b(c)/g;
        execReg({str, reg, callback});
      });
      it('should have run callback - per match',  () => {
        expect(callback).toBeCalledTimes(4);
      });
      it('should have supplied matching parenthesis - per match',  () => {
        expect(arr).toEqual(['a-c', 'a-c', 'a-c', 'a-c']);
      });
    });
  });
  describe('fail', ()=> {
    describe('example', () => {
      it('should not run - callback if no match', () => {
        callback = jest.fn();
        execReg({str: 'abc', reg: /xyz/g, callback});
        expect(callback).toBeCalledTimes(0);
      })
    });
  });
});
