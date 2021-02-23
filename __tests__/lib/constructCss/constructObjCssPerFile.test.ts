import { ObjCssAll } from 'src/types';
import constructObjCssPerFile from 'src/lib/constructCss/constructObjCssPerFile';
import { cropObjCssChildren } from '../../_utils';

describe('constructObjCssPerFile()', () => {
  describe('success', () => {
    it('should match - combination, single, withchild', () => {
      const strReadFile = `
        header, section {
          width: 100px;
        }
        header {
          color: red;
        }
        header .child {
          background: red;
        }
      `;
      const objCssAll: ObjCssAll = {
        combined: {},
        single: {},
        withchild: {},
        pseudo: {},
        beginNonSingle: {},
        mediaq: {}
      };
      const actual = cropObjCssChildren(constructObjCssPerFile(strReadFile, objCssAll));

      const expected: ObjCssAll = {
        combined: {
          ',header,section,': ['width: 100px;']
        },
        single: {
          header: ['color: red;']
        },
        withchild: {
          'header .child': ['background: red;']
        },
        pseudo: {},
        beginNonSingle: {},
        mediaq: {}
      };
      expect(actual).toEqual(expected);
    });
    it('should match - combination, pseudo', () => {
      const strReadFile = `
        header, section {
          width: 100px;
        }
        header:hover  {
          background: red;
        }
      `;
      const objCssAll: ObjCssAll = {
        combined: {},
        single: {},
        withchild: {},
        pseudo: {},
        beginNonSingle: {},
        mediaq: {}
      };
      const actual = cropObjCssChildren(constructObjCssPerFile(strReadFile, objCssAll));

      const expected: ObjCssAll = {
        combined: {
          ',header,section,': ['width: 100px;']
        },
        single: {},
        withchild: {},
        pseudo: {
          'header:hover': ['background: red;']
        },
        beginNonSingle: {},
        mediaq: {}
      };
      expect(actual).toEqual(expected);
    });
    it('should match - add to existing - combination, pseudo', () => {
      const strReadFile = `
        header, section {
          width: 100px;
        }
        header:hover  {
          background: red;
        }
      `;
      const objCssAll: ObjCssAll = {
        combined: {
          ',header,section,': ['position: fixed;']
        },
        single: {},
        withchild: {},
        pseudo: {},
        beginNonSingle: {},
        mediaq: {}
      };
      const actual = cropObjCssChildren(constructObjCssPerFile(strReadFile, objCssAll));

      const expected: ObjCssAll = {
        combined: {
          ',header,section,': ['position: fixed;', 'width: 100px;']
        },
        single: {},
        withchild: {},
        pseudo: {
          'header:hover': ['background: red;']
        },
        beginNonSingle: {},
        mediaq: {}
      };
      expect(actual).toEqual(expected);
    });
  });
});
