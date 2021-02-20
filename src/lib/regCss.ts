const sregSingle = 'a-zA-Z\\#\\.';
const sregAny = `[${sregSingle}\\[\\]\\=\\-\\'\\"\\|\\*\\(\\)\\:>\\+\\~\\$]`;
const sregCombinedOr = `${sregAny}+[^\\{\\,]*\\,\\s*${sregAny}+`;

export const sregPseudoOrAttr = '[\\:\\[]';
export const sregSingleOr = `[${sregSingle}][\\w\\-]`;

const sregNotCurly = '^\\{\\}';
const sregNotCurlyOr = `[${sregNotCurly}]*`;

export const regTruncate = /^\s*|\s*$/g;

export const regCombined = RegExp(
  `(^|\\n)\\s*(${sregCombinedOr}${sregNotCurlyOr})\\{(${sregNotCurlyOr})\\}`,
  'ig'
);
export const regSingle = RegExp(`(^|\\n)\\s*(${sregSingleOr}*)\\s*\\{(${sregNotCurlyOr})\\}`, 'ig');

export const regWithChild = RegExp(
  `(^|\\n)\\s*(${sregSingleOr}*[^\\s\\{\\,]*\\s${sregAny}+${sregNotCurlyOr})\\s*\\{(${sregNotCurlyOr})\\}`,
  'ig'
);

export const regPseudoOrAttr = RegExp(
  `(^|\\n)\\s*(${sregSingleOr}*${sregPseudoOrAttr}${sregNotCurlyOr})\\s*\\{(${sregNotCurlyOr})\\}`,
  'ig'
);

export const regBeginNonSingle = RegExp(
  `(^|\\n)\\s*([\\*\\[][${sregNotCurly}\\,]*)\\{(${sregNotCurlyOr})\\}`,
  'ig'
);

// exclude [someattr="some value"] as the start selector because this is not applied in styled components.
