
    export type TFuncStr = (str: string, str2?: string, str3?: string) => string;
    export interface Selectors {
      [key: string]: (prop: TFuncStr) => string;
    }
    const selectors: Selectors = {
  '.btn': getTheme => `
/* *************************************************** */
/* start - .btn--link,.btn--link path,.btn--link circle */

    transition: all 0.2s;
& path {
  
    transition: all 0.2s;

}
& circle {
  
    transition: all 0.2s;

}

/* end - .btn--link,.btn--link path,.btn--link circle */
/* *************************************************** */

/* *************************************************** */
/* start - .btn--link:hover,.btn:hover */
&:hover {
    
  color: ${getTheme('--primary-green')};

  }
&:hover {
    
  color: ${getTheme('--primary-green')};

  }

/* end - .btn--link:hover,.btn:hover */
/* *************************************************** */

  display: inline-block;
  padding: 13px 24px;
  height: 48px;
  line-height: 2rem; 
  border-radius: 8px;
  border: 0;
  text-decoration: none;
  transition: border-radius 0.2s, border-color 0.2s, color 0.2s;
  vertical-align: middle;


&:hover {
    
  border-radius: 20px/30px;

  }
&:hover,
.btn:hover {
    
  color: ${getTheme('--primary-green')};

  }
& .icon path {
  
  stroke: ${getTheme('--primary-green')};

}
& .icon path[fill] {
  
  fill: ${getTheme('--primary-green')};

}
& circle {
  
    transition: all 0.2s;

}
& path {
  
  stroke: ${getTheme('--primary-green')};

}
& path[fill] {
  
  fill: ${getTheme('--primary-green')};

}


`,
  '.btn--secondary': getTheme => `
  border: 2px solid ${getTheme('--primary-dark')}; 
  background: ${getTheme('--l-5')};


&:hover {
    
  border-color: ${getTheme('--secondary-darkgreen')};
  color: ${getTheme('--secondary-darkgreen')};

  }


`,
  '.btn--large': getTheme => `
  width: 188px;




`,
  '.btn--xlarge': getTheme => `
  width: 264px;




`,
  '.btn--small': getTheme => `
  padding-left: 17px;
  padding-right: 17px;




`,
  '.btn--icon': getTheme => `
  padding: 0;
  border: 0;
  background: transparent;


&:hover .icon path {
    
  stroke: ${getTheme('--primary-green')};

  }
&:hover .icon path[fill] {
    
  fill: ${getTheme('--primary-green')};

  }
& .icon path {
  
  stroke: ${getTheme('--primary-green')};

}
& .icon path[fill] {
  
  fill: ${getTheme('--primary-green')};

}


`,
  '.btn--primary': getTheme => `
  color: ${getTheme('--primary-white')};
  background: ${getTheme('--primary-dark')};




`,
  '.btn--green': getTheme => `
  color: ${getTheme('--primary-white')};
  background: ${getTheme('--primary-green')};


&:hover {
    
  color: ${getTheme('--primary-white')};

  }


`,
  '.btn--link': getTheme => `
/* *************************************************** */
/* start - .btn--link,.btn--link path,.btn--link circle */

    transition: all 0.2s;
& path {
  
    transition: all 0.2s;

}
& circle {
  
    transition: all 0.2s;

}

/* end - .btn--link,.btn--link path,.btn--link circle */
/* *************************************************** */

/* *************************************************** */
/* start - .btn--link:hover,.btn:hover */
&:hover {
    
  color: ${getTheme('--primary-green')};

  }

/* end - .btn--link:hover,.btn:hover */
/* *************************************************** */

  border: 0;
  background: transparent;
  width: auto;
  text-align: left;


&:hover path {
    
  stroke: ${getTheme('--primary-green')};

  }
&:hover path[fill] {
    
  fill: ${getTheme('--primary-green')};

  }
&:hover,
.btn:hover {
    
  color: ${getTheme('--primary-green')};

  }
& circle {
  
    transition: all 0.2s;

}
& path {
  
  stroke: ${getTheme('--primary-green')};

}
& path[fill] {
  
  fill: ${getTheme('--primary-green')};

}


`,
  'span': getTheme => `
  display: inline-block;




`,
  '.sr-only': getTheme => `
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  border: 0;




`,
  'button': getTheme => `
  cursor: pointer;




`,
  'a': getTheme => `
  text-decoration: none;




`,
  'li': getTheme => `
  list-style-type: none;


& circle {
  
    transition: all 0.2s;

}
& path {
  
  stroke: ${getTheme('--primary-green')};

}
& path[fill] {
  
  fill: ${getTheme('--primary-green')};

}


`,
  '.l-fixed--top': getTheme => `
  position: fixed;
  top: 0;
  background: ${getTheme('--primary-white')};
  z-index: 100; 
  width: 100%;



 @media (max-width:1427px) {
  
    left: calc(((100vw - 600px) / 2) - 10px); 
    width: 600px;
  


 }


 @media (max-width:600px) {
  
    width: 100%;
    left: 0;
  


 }


 @media (min-width:1428px) {
  
    left: calc(((100vw - 1428px) / 2) - 10px); 
  


 }
`,
  '.l-fixed--right-lg': getTheme => `
    position: fixed;
    right: calc((100vw - 1428px) / 2);  
    background: ${getTheme('--primary-white')};
    z-index: 10;
  



`,

};
    export default selectors;
  