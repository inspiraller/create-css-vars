
    export type TFuncStr = (str: string, str2?: string, str3?: string) => string;
    export interface Selectors {
      [key: string]: (prop: TFuncStr) => string;
    }
    const selectors: Selectors = {
  '.l-fixed--top': getTheme => `
  position: fixed;
  top: 0;
  background: ${getTheme('--primary-white')};
  z-index: 100; 
  width: 100%;



 @media (max-width:1427px) {
  
    left: calc(((100vw - 600px) / 2) - 10px); 
    width: 600px;
  

& + div {
   
    margin-top: 65px;
  
}

 }
`,
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
  