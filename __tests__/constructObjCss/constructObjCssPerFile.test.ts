import { ObjCssAll } from 'src/types';
import constructObjCssPerFile from 'src/constructObjCss/constructObjCssPerFile';
import { cropObjCssChildren } from '../_utils';

describe('constructObjCssPerFile()', () => {
  fdescribe('success', () => {
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
        mediaq: {}
      };
      const actual = cropObjCssChildren(constructObjCssPerFile(strReadFile, objCssAll) as ObjCssAll);

      const expected: ObjCssAll = {
        combined: {
          ',header,section,': ['width: 100px;']
        },
        single: {
          header: ['color: red;'],
          section: []
        },
        withchild: {
          'header .child': ['background: red;']
        },
        pseudo: {},
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
        mediaq: {}
      };
      const actual = cropObjCssChildren(constructObjCssPerFile(strReadFile, objCssAll) as ObjCssAll);

      const expected: ObjCssAll = {
        combined: {
          ',header,section,': ['width: 100px;']
        },
        single: {
          header: [],
          section: []
        },
        withchild: {},
        pseudo: {
          'header:hover': ['background: red;']
        },
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
        single: {
          header: [],
          section: []
        },
        withchild: {},
        pseudo: {},
        mediaq: {}
      };
      const actual = cropObjCssChildren(constructObjCssPerFile(strReadFile, objCssAll) as ObjCssAll);

      const expected: ObjCssAll = {
        combined: {
          ',header,section,': ['position: fixed;', 'width: 100px;']
        },
        single: {
          header: [],
          section: []
        },
        withchild: {},
        pseudo: {
          'header:hover': ['background: red;']
        },
        mediaq: {}
      };
      expect(actual).toEqual(expected);
    });
  });
});
