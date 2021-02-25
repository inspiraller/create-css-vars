
    export type TFuncStr = (str: string, str2?: string, str3?: string) => string;
    export interface Selectors {
      [key: string]: (prop: TFuncStr) => string;
    }
    const selectors: Selectors = {
  '.search__form': getTheme => `
/* *************************************************** */
/* start - .search__form:hover svg path,.search__form:hover svg circle */
&:hover svg path {
    
  stroke: ${getTheme('--primary-green')};

  }
&:hover svg circle {
    
  stroke: ${getTheme('--primary-green')};

  }

/* end - .search__form:hover svg path,.search__form:hover svg circle */
/* *************************************************** */

  margin: 13px 0;


&:hover input {
    
  color: ${getTheme('--primary-green')};

  }
&:hover {
    
  color: ${getTheme('--primary-green')};

  }
&:hover svg circle {
    
  stroke: ${getTheme('--primary-green')};

  }
`,
  '.search__button': getTheme => `
/* *************************************************** */
/* start - .search__button path,.search__button circle */
& path {
  
  transition: stroke 0.2s;

}
& circle {
  
  transition: stroke 0.2s;

}

/* end - .search__button path,.search__button circle */
/* *************************************************** */
& circle {
  
  transition: stroke 0.2s;

}
`,

};
    export default selectors;
  