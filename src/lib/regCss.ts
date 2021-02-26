const sregSingle = 'a-zA-Z\\#\\.';
const sregAny = `[${sregSingle}\\[\\]\\=\\-\\'\\"\\|\\*\\(\\)\\:>\\+\\~\\$]`;
const sregCombinedOr = `${sregAny}+[^\\{\\,\\}]*\\,\\s*${sregAny}+`;
const sregNotCurly = '^\\{\\}';
const sregNotCurlyOr = `[${sregNotCurly}]*`;

export const regTruncate = /^\s*|\s*$/g;

export const sregPseudoOrAttr = '[\\:\\[]';
export const sregSingleOr = `[${sregSingle}][\\w\\-]*`;
export const sregCombinator = '\\+\\~\\>';
// export const sregWithChild = `[^\\s\\{\\,\\}]*([${sregCombinator}]|\\s+${sregAny}+)[${sregNotCurly}\\,]*`;
export const sregWithChild = `([${sregCombinator}]|\\s+${sregAny}+)[${sregNotCurly}\\,]*`;

// hack: regWithChild. added extra parenthsis for all regex execep regWithChild because (item|item) must be used. not item|item to match correctly group 2.
export const regCombined = RegExp(
  `(^|\\n)\\s*(${sregCombinedOr}${sregNotCurlyOr})()\\{(${sregNotCurlyOr})\\}`,
  'ig'
);
export const regSingle = RegExp(
  `(^|\\n)\\s*(${sregSingleOr})\\s*()\\{(${sregNotCurlyOr})\\}`,
  'ig'
);

// withChild  - no pseudo
export const regWithChild = RegExp(
  `(^|\\n)\\s*(${sregSingleOr}${sregWithChild})\\s*\\{(${sregNotCurlyOr})\\}`,
  'ig'
);

export const regPseudoOrAttr = RegExp(
  `(^|\\n)\\s*(${sregSingleOr}${sregPseudoOrAttr}[${sregNotCurly}\\,]*)\\s*()\\{(${sregNotCurlyOr})\\}`,
  'ig'
);

export const regBeginNonSingle = RegExp(
  `(^|\\n)\\s*([\\*\\[][${sregNotCurly}\\,]*)()\\{(${sregNotCurlyOr})\\}`,
  'ig'
);

// export const regMatchAnySingle = RegExp(
//   `(^|\\n)\\s*(${sregSingleOr})\\s${sregNotCurlyOr}()\\{(${sregNotCurlyOr})\\}`,
//   'ig'
// );
// export const regMatchAnySingle = RegExp(
//   `([\\n\\,])?\\s*(${sregSingleOr})([\\s\\,]${sregNotCurlyOr})?\\{()`,
//   'ig'
// );

// export const regMatchAnySingle = RegExp(
//   `(\\,|\\}\\s*)(${sregSingleOr})([\\s\\,\\{])()`,
//   'ig'
// );

export const regMatchAnySingle = RegExp(
  `(\\,|\\})\\s*(${sregSingleOr})()()`,
  'ig'
);

// exclude [someattr="some value"] as the start selector because this is not applied in styled components.
