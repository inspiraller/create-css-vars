
    export type TFuncStr = (str: string, str2?: string, str3?: string) => string;
    export interface Selectors {
      [key: string]: (prop: TFuncStr) => string;
    }
    const selectors: Selectors = {
  '.visible--lg': getTheme => `
 @media (max-width:1427px) {
  
    display: none;
  


 }

`,
  '.visible--sm': getTheme => `

 @media (min-width:1428px) {
  
    display: none;
  


 }
`,

};
    export default selectors;
  