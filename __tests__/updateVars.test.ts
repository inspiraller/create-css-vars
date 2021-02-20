import { KeyStringArr, constructCombinedObjCss } from 'src/lib/updateVars';

describe('updateVars()', () => {
  describe('constructCombinedObjCss() - ,header,section,aside .child,', () => {
    it('should match 1 combined selector', () => {
      const strCss = 'position: absolute';
      const objCss: KeyStringArr = {};
      const strSelectors = 'header,section,aside .child';
      const actual = constructCombinedObjCss({ objCss, strSelectors, strCss });

      const expected: KeyStringArr = {
        ',header,section,aside .child,': [strCss]
      };
      expect(actual).toEqual(expected);
    });
    it('should not match single selector - header', () => {
      const strCss = 'position: absolute';
      const objCss: KeyStringArr = {};
      const strSelectors = 'header';
      const actual = constructCombinedObjCss({ objCss, strSelectors, strCss });
      const expected: KeyStringArr = {};
      expect(actual).toEqual(expected);
    });
    it('should push onto existing same selector name - ,header,section,aside .child,', () => {
      const strCss = 'margin: 0;';
      const objCss: KeyStringArr = {
        ',header,section,aside .child,': [strCss]
      };
      const strSelectors = 'header,section,aside .child';
      const actual = constructCombinedObjCss({ objCss, strSelectors, strCss });
      const expected: KeyStringArr = {
        ',header,section,aside .child,': [objCss[',header,section,aside .child,'][0], strCss]
      };
      expect(actual).toEqual(expected);
    });
  });
  // describe('constructSingleObjCss()', () => {
  //   it('should match single selector - header', () => {
  //     const strCss = 'position: absolute';
  //     const styleBlocks: ObjCss = {};
  //     const arrSelectors = ['header'];
  //     const actual = constructSingleObjCss({ styleBlocks, arrSelectors, strCss });
  //     const expected: ObjCss = {
  //       header: {
  //         css: [strCss],
  //         shared: []
  //       }
  //     };
  //     expect(actual).toEqual(expected);
  //   });
  //   it('should not match combined selector - header, section', () => {
  //     const strCss = 'position: absolute';
  //     const styleBlocks: ObjCss = {};
  //     const arrSelectors = ['header', 'section'];
  //     const actual = constructSingleObjCss({ styleBlocks, arrSelectors, strCss });
  //     const expected: ObjCss = {};
  //     expect(actual).toEqual(expected);
  //   });
  //   it('should not match with a descendant class - header p', () => {
  //     const strCss = 'position: absolute';
  //     const styleBlocks: ObjCss = {};
  //     const arrSelectors = ['header p'];
  //     const actual = constructSingleObjCss({ styleBlocks, arrSelectors, strCss });
  //     const expected: ObjCss = {};
  //     expect(actual).toEqual(expected);
  //   });
  //   it('should push onto existing same selector name - header', () => {
  //     const strCss = 'margin: 0;';
  //     const styleBlocks: ObjCss = {
  //       header: {
  //         css: [strCss]
  //       }
  //     };
  //     const arrSelectors = ['header'];
  //     const actual = constructSingleObjCss({ styleBlocks, arrSelectors, strCss });
  //     const expected: ObjCss = {
  //       header: {
  //         css: [styleBlocks.header.css[0], strCss]
  //       }
  //     };
  //     expect(actual).toEqual(expected);
  //   });
  // });
});
