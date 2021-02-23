
    interface Vars {
      [key: string]: string;
    }
    export const vars: Vars = {
  '.link': `
/* *************************************************** */
/* start - .link,.link span,.link path */

  transition: all 0.2s;
& span {
  
  transition: all 0.2s;

}
& path {
  
  transition: all 0.2s;

}

/* end - .link,.link span,.link path */
/* *************************************************** */

  position: relative;
  text-decoration: none;


&:hover {
    
  border: 0;
  color: var(--primary-green);

  }
&:hover span {
    
  color: var(--primary-green);

  }
&:hover path {
    
  stroke: var(--primary-green);

  }
&:hover path[fill] {
    
  fill: var(--primary-green);

  }
&:disabled {
    
  color: var(--l-80);

  }
&:disabled:after {
    
  border-color: var(--l-80);

  }
&:disabled:hover {
    
  left: 0;
  width: 100%;

  }
& path {
  
  transition: all 0.2s;

}
& span {
  
  color: var(--primary-green);

}
& path {
  
  stroke: var(--primary-green);

}
& path[fill] {
  
  fill: var(--primary-green);

}
`,

};
  