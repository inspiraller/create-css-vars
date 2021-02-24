
    interface Vars {
      [key: string]: string;
    }
    const vars: Vars = {
  '.btn': `
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
    
  color: var(--primary-green);

  }
&:hover {
    
  color: var(--primary-green);

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
    
  color: var(--primary-green);

  }
& .icon path {
  
  stroke: var(--primary-green);

}
& .icon path[fill] {
  
  fill: var(--primary-green);

}
& circle {
  
    transition: all 0.2s;

}
& path {
  
  stroke: var(--primary-green);

}
& path[fill] {
  
  fill: var(--primary-green);

}
`,
  '.btn--secondary': `
  border: 2px solid var(--primary-dark); 
  background: var(--l-5);


&:hover {
    
  border-color: var(--secondary-darkgreen);
  color: var(--secondary-darkgreen);

  }
`,
  '.btn--large': `
  width: 188px;


`,
  '.btn--xlarge': `
  width: 264px;


`,
  '.btn--small': `
  padding-left: 17px;
  padding-right: 17px;


`,
  '.btn--icon': `
  padding: 0;
  border: 0;
  background: transparent;


&:hover .icon path {
    
  stroke: var(--primary-green);

  }
&:hover .icon path[fill] {
    
  fill: var(--primary-green);

  }
& .icon path {
  
  stroke: var(--primary-green);

}
& .icon path[fill] {
  
  fill: var(--primary-green);

}
`,
  '.btn--primary': `
  color: var(--primary-white);
  background: var(--primary-dark);


`,
  '.btn--green': `
  color: var(--primary-white);
  background: var(--primary-green);


&:hover {
    
  color: var(--primary-white);

  }
`,
  '.btn--link': `
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
    
  color: var(--primary-green);

  }

/* end - .btn--link:hover,.btn:hover */
/* *************************************************** */

  border: 0;
  background: transparent;
  width: auto;
  text-align: left;


&:hover path {
    
  stroke: var(--primary-green);

  }
&:hover path[fill] {
    
  fill: var(--primary-green);

  }
&:hover,
.btn:hover {
    
  color: var(--primary-green);

  }
& circle {
  
    transition: all 0.2s;

}
& path {
  
  stroke: var(--primary-green);

}
& path[fill] {
  
  fill: var(--primary-green);

}
`,
  'span': `
  display: inline-block;


`,
  '.sr-only': `
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  border: 0;


`,
  'button': `
  cursor: pointer;


`,
  'a': `
  text-decoration: none;


`,
  'li': `
  list-style-type: none;


& circle {
  
    transition: all 0.2s;

}
& path {
  
  stroke: var(--primary-green);

}
& path[fill] {
  
  fill: var(--primary-green);

}
`,
  '.l-fixed--top': `
  position: fixed;
  top: 0;
  background: var(--primary-white);
  z-index: 100; 
  width: 100%;


    left: calc(((100vw - 600px) / 2) - 10px); 
    width: 600px;
  

    width: 100%;
    left: 0;
  

    left: calc(((100vw - 1428px) / 2) - 10px); 
  

& + * {
  
    margin-top: 65px;
  

    margin-top: 75px;
  
}
`,
  '.l-fixed--right-lg': `
    position: fixed;
    right: calc((100vw - 1428px) / 2);  
    background: var(--primary-white);
    z-index: 10;
  

`,

};
    export default vars;
  