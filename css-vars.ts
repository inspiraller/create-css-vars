
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
  '.cssicon': getTheme => `
  width: 40px;
  height: 40px;
  border: 3px solid white;
  background: ${getTheme('--secondary-blue')};
  border-radius: 50%;






`,
  '.desc': getTheme => `
  clear: both;


& p {
  
  margin: 20px 0 0  0;
  padding: 0;
  line-height: 2.24rem;

}
& + .desc__readmore {
  
  position: relative;
  z-index: 20; 
  margin: -24px auto 0 auto;
  width: 184px;
  background: ${getTheme('--l-5')};
  text-align: center;

}




`,
  '.desc--hidden': getTheme => `
  clear: both;
  position: relative;
  height: 130px;
  overflow: hidden;


&:after {
    
  content: " ";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 10; 
  height: 80px;
  background: linear-gradient(0deg, ${getTheme('--l-5')} 39.98%, rgba(249, 249, 250, 0) 111.2%);
  border-bottom :1px solid #CBD2E1; 

  }
& + .desc__readmore {
  
  position: relative;
  z-index: 20; 
  margin: -24px auto 0 auto;
  width: 184px;
  background: ${getTheme('--l-5')};
  text-align: center;

}




`,
  '.desc__img': getTheme => `
  margin: 16px 0 0;
  display:inline-block;
  width: 100%;






`,
  '#design': getTheme => `
  
  background: url('./design/desktop-mint.png') no-repeat 50% 0;
  position: absolute;
  top: 0;
  left:0;
  width: 100%;
  height: 100%;
  opacity: 0.3;


    background-image: url('./design/mobile-mint.png');
    margin: -46px 0 0 0;
  





`,
  '.all': getTheme => `
  position: relative;
  z-index: 200; 


    padding: 0 0 25px;
  





`,
  '.divider': getTheme => `
  border-bottom : 1px solid #CDCDD6; 
  padding-bottom: 24px;






`,
  '.donation': getTheme => `
  color: white;
  padding: 6px 8px 4px 8px;
  border-radius: 23px;






`,
  'span': getTheme => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */

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
/* *************************************************** */
/* start - body,input,textarea,button */

  font-family: 'sharp_sansmedium';
  font-size: 1.4rem;

/* end - body,input,textarea,button */
/* *************************************************** */

  cursor: pointer;


  font-family: 'sharp_sansmedium';
  font-size: 1.4rem;


& circle {
  
  transition: stroke 0.2s;

}
& .search__button circle {
  
  stroke: ${getTheme('--primary-green')};

}




`,
  'a': getTheme => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */

/* *************************************************** */
/* start - body,input,textarea,a */

  color: ${getTheme('--primary-dark')};

/* end - body,input,textarea,a */
/* *************************************************** */

  text-decoration: none;


  color: ${getTheme('--primary-dark')};


& .icon {
  
  margin: -4px 0 0 0; 

}
& .search__input {
  
  color: ${getTheme('--primary-green')};

}
& circle {
  
  transition: stroke 0.2s;

}
& .search__button circle {
  
  stroke: ${getTheme('--primary-green')};

}
& > * {
  
  margin: 0 0 0 14px;

}
& > * {
  
  margin: 0 0 0 20px;

}
& > *:first-child {
  
  margin: 0;

}
& > * {
  
  order: 20;

}
& > *:first-child {
  
  order: 30;

}
& > *:last-child {
  
  order: 10;

}
& .h7 {
  
  color: ${getTheme('--primary-white')};

}
& .icon {
  
  width: 9px;
  height: 9px;

}
& .icon circle {
  
  fill: ${getTheme('--primary-green')};

}
& .icon circle {
  
  fill: ${getTheme('--primary-dark')};

}




`,
  'li': getTheme => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */

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
& > * {
  
  margin: 0 0 0 14px;

}
& > * {
  
  margin: 0 0 0 20px;

}
& > *:first-child {
  
  margin: 0;

}
& path {
  
  transition: all 0.2s;

}
& span {
  
  color: ${getTheme('--primary-green')};

}
& path {
  
  stroke: ${getTheme('--primary-green')};

}
& path[fill] {
  
  fill: ${getTheme('--primary-green')};

}
& .icon {
  
  width: 9px;
  height: 9px;

}
& .icon circle {
  
  fill: ${getTheme('--primary-green')};

}
& .icon circle {
  
  fill: ${getTheme('--primary-dark')};

}




`,
  '.figure': getTheme => `
/* *************************************************** */
/* start - .figure,.figure--xpad */

    padding: 40px 32px;
  
    padding: 40px 32px;
  
/* end - .figure,.figure--xpad */
/* *************************************************** */

  border-radius: 12px;
  padding: 16px 40px;
  background: ${getTheme('--l-10')};


& .icon-label {
  
  margin: 8px 0 0;
  justify-content: center;

}




`,
  '.figure__img': getTheme => `
  display: block;
  margin: 0 auto;






`,
  '.figure--xpad': getTheme => `
/* *************************************************** */
/* start - .figure,.figure--xpad */

    padding: 40px 32px;
  
/* end - .figure,.figure--xpad */
/* *************************************************** */

  padding: 40px 110px;


    padding: 40px 32px;
  





`,
  '.figure__btn': getTheme => `
  margin: 24px 0 0 0;






`,
  '.figcaption': getTheme => `
  display: inline-block;


& .icon {
  
  margin: -4px 0 0 0; 

}




`,
  'html': getTheme => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */

  box-sizing: border-box;
  font-size: 62.5%;






`,
  'body': getTheme => `
/* *************************************************** */
/* start - body,input,textarea,button */

  font-family: 'sharp_sansmedium';
  font-size: 1.4rem;

/* end - body,input,textarea,button */
/* *************************************************** */

/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */

/* *************************************************** */
/* start - body,input,textarea,a */

  color: ${getTheme('--primary-dark')};

/* end - body,input,textarea,a */
/* *************************************************** */

/* *************************************************** */
/* start - body.dark,.dark input,.dark textarea,.dark .h1,.dark .h2,.dark .h3,.dark .h5,.dark .h5,.dark .h6,.dark .h7 */

  color: ${getTheme('--primary-white')};

/* end - body.dark,.dark input,.dark textarea,.dark .h1,.dark .h2,.dark .h3,.dark .h5,.dark .h5,.dark .h6,.dark .h7 */
/* *************************************************** */

  font-weight: normal;
  font-style: normal;
  line-height: 1;






`,
  'header': getTheme => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */

  margin: 0 auto;
  padding: 0 60px 0 56px;
  width: 1428px; 
  border-bottom: 1px solid ${getTheme('--l-10')}; 


    width: auto;
    padding: 20px 24px;
    justify-content: space-between;
    border: 0;
 





`,
  '.header__col1': getTheme => `  
  margin-left: 62px;






`,
  '.header__col2': getTheme => ` 
  width: 514px;
  justify-content: flex-end;






`,
  '.logo': getTheme => `
  padding: 17px 0;


    padding: 0;
  

& a {
  
  display: flex; 
  align-items: center;

}
& img {
  
  height: 40px;
  width: auto;

}
& .icon {
  
    width: 17px;
    height: 17px;
  
}
& .label {
  
    margin: 0 0 0 4px;
    padding: 4px 0 0 0; 
  
}




`,
  '.search__form': getTheme => `
/* *************************************************** */
/* start - .search__form:hover .search__button path,.search__form:hover .search__button circle */
&:hover .search__button path {
    
  stroke: ${getTheme('--primary-green')};

  }
&:hover .search__button circle {
    
  stroke: ${getTheme('--primary-green')};

  }

/* end - .search__form:hover .search__button path,.search__form:hover .search__button circle */
/* *************************************************** */

  margin: 13px 0;
  width: 300px;
  display: flex;
  justify-content: space-between;
  
  
  border: 1px solid ${getTheme('--l-50')}; 
  border-radius: 4px;
  position: relative;
  transition: border 0.2s;


&:hover .search__input {
    
  color: ${getTheme('--primary-green')};

  }
&:hover {
    
  color: ${getTheme('--primary-green')};

  }
&:hover .search__button path,
.search__form:hover .search__button circle {
    
  stroke: ${getTheme('--primary-green')};

  }
& .search__input {
  
  color: ${getTheme('--primary-green')};

}
& .search__button circle {
  
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

/* *************************************************** */
/* start - .search__input,.search__button */

  outline: none;

/* end - .search__input,.search__button */
/* *************************************************** */

  outline: none;


  margin: 13px;
  width: 20px;
  height: 20px;
  cursor: pointer;


& circle {
  
  transition: stroke 0.2s;

}
& .search__button circle {
  
  stroke: ${getTheme('--primary-green')};

}




`,
  '.search__input': getTheme => `
/* *************************************************** */
/* start - .search__input,.search__button */

  outline: none;

/* end - .search__input,.search__button */
/* *************************************************** */

  border: 0;
  margin: 12px 0 12px 15px;
  padding: 0;
  width: 235px;
  height: 22px;
  transition: color 0.2s;


&::-webkit-input-placeholder {
     
  color: ${getTheme('--l-80')};
  width: 200px;

  }




`,
  '.h1--lineh': getTheme => `
/* *************************************************** */
/* start - .h1,.h1--lineh */

  line-height: 3.45rem;
,
    line-height: 2.9rem;
  
/* end - .h1,.h1--lineh */
/* *************************************************** */

  line-height: 3.45rem;


    line-height: 2.9rem;
  





`,
  '.h1': getTheme => `
/* *************************************************** */
/* start - .h1,.h1--lineh */

  line-height: 3.45rem;
,
    line-height: 2.9rem;
  
  line-height: 3.45rem;
,
    line-height: 2.9rem;
  
/* end - .h1,.h1--lineh */
/* *************************************************** */

  font-size: 2.6rem;
  
  font-family: "mint-extrabold";


    font-size: 2.2rem;
  





`,
  '.h2--lineh': getTheme => `
/* *************************************************** */
/* start - .h2,.h2--lineh */

  line-height: 2.915rem;

/* end - .h2,.h2--lineh */
/* *************************************************** */

  line-height: 2.915rem;






`,
  '.h2': getTheme => `
/* *************************************************** */
/* start - .h2,.h2--lineh */

  line-height: 2.915rem;

  line-height: 2.915rem;

/* end - .h2,.h2--lineh */
/* *************************************************** */

  font-size: 2.2rem;
  
  font-family: "mint-extrabold";






`,
  '.h3': getTheme => `
  font-size: 1.8rem;
  
  font-family: "mint-bold";






`,
  '.h4': getTheme => `
  font-size: 1.6rem;
  
  font-family: "mint-bold";






`,
  '.h5': getTheme => `
  
  font-size: 1.4rem;
  font-family: "mint-bold";






`,
  '.h6': getTheme => `
  
  font-family: "mint-bold";
  font-size: 1.3rem;






`,
  '.h6--semi': getTheme => `
  font-family: "sharp_sanssemibold";
  font-size: 1.3rem;






`,
  '.h7': getTheme => `
  font-family: "sharp_sansmedium";
  font-size: 1.2rem;






`,
  '.investment__target': getTheme => `
  color: ${getTheme('--l-90')}; 
  line-height: 3.45rem; 






`,
  '.investment__percentage-bg': getTheme => `
  display: block;
  background: ${getTheme('--l-10')};
  height: 12px;
  width: 100%;
  border-radius: 6px;






`,
  '.investment__percentage-fill': getTheme => `
  background: ${getTheme('--primary-green')}; 
  height: 100%;
  border-radius: 6px;






`,
  '.percent': getTheme => `
  color: ${getTheme('--l-90')}; 






`,
  '.l-align--textcenter': getTheme => `
  text-align: center;






`,
  '.l-align--center': getTheme => `
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;






`,
  '.l-align--vcenter': getTheme => `
  display: flex;
  align-items: center;






`,
  '.l-align--hcenter': getTheme => `
  display: flex;
  justify-content: center;
  text-align: center;






`,
  '.l-vertical': getTheme => `
  display: flex;
  flex-direction: column;


& > * {
  
  order: 20;

}
& > *:first-child {
  
  order: 30;

}
& > *:last-child {
  
  order: 10;

}




`,
  '.l-between--center': getTheme => `
/* *************************************************** */
/* start - .l-between,.l-between--center */

  display: flex;
  justify-content: space-between;
  align-items: center;

/* end - .l-between,.l-between--center */
/* *************************************************** */

/* *************************************************** */
/* start - .l-between--center > .l-align--left,.l-between--center > .l-align--right */
& > .l-align--left {
  
  flex-grow: 1;
  flex-basis: 0;

}
& > .l-align--right {
  
  flex-grow: 1;
  flex-basis: 0;

}

/* end - .l-between--center > .l-align--left,.l-between--center > .l-align--right */
/* *************************************************** */

  display: flex;
  justify-content: space-between;
  align-items: center;


& > .l-align--right {
  
  flex-grow: 1;
  flex-basis: 0;

}




`,
  '.l-align--vtop': getTheme => `
  display: flex;
  align-items: flex-start;






`,
  '.l-align--spacearound': getTheme => `
  justify-content: space-around;






`,
  '.l--baseline': getTheme => `
  align-items: baseline;






`,
  '.l-align--right': getTheme => `
  text-align: right;






`,
  '.l-baseline': getTheme => `
  display: flex;
  align-items: baseline;


& > * {
  
  margin: 0 0 0 14px;

}
& > * {
  
  margin: 0 0 0 20px;

}
& > *:first-child {
  
  margin: 0;

}




`,
  '.l-flex': getTheme => `
  display: flex;






`,
  '.l-block': getTheme => `
  display: block;






`,
  '.l-fixed--top': getTheme => `
  position: fixed;
  top: 0;
  background: ${getTheme('--primary-white')};
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
  '.l-fixed--right-lg': getTheme => `
    position: fixed;
    right: calc((100vw - 1428px) / 2);  
    background: ${getTheme('--primary-white')};
    z-index: 10;
  





`,
  '.l-wrap': getTheme => `
  display: flex;
  margin: 0 auto;
  width: 1428px;


    width: 600px;
  

    width: 100%;
  

    display: block;
  





`,
  '.l-asidepad': getTheme => `
  margin: 0 60px;


    margin: 0 24px;
  





`,
  'aside': getTheme => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */

  padding: 40px 96px 190px 96px;
  width: 928px;


    padding: 0;
    width: auto;
    display: block;
    min-width: 386px;
  





`,
  'article': getTheme => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */

/* *************************************************** */
/* start - main,section,article */

  display: block; 

/* end - main,section,article */
/* *************************************************** */

  position: relative;


  display: block; 






`,
  'main': getTheme => `
/* *************************************************** */
/* start - main,section,article */

  display: block; 

/* end - main,section,article */
/* *************************************************** */

  max-width: 500px; 
  position: relative;






`,
  '.l-ml--32': getTheme => `
  margin-left: 32px;






`,
  '.l-mt--24': getTheme => `
  margin-top: 24px;






`,
  '.l-ml--20': getTheme => `
  margin-left: 20px;






`,
  '.l-ml--14': getTheme => `
  margin-left: 14px;






`,
  '.l-ml--10': getTheme => `
  margin-left: 10px;






`,
  '.l-ml--8': getTheme => `
  margin-left: 8px;






`,
  '.l-ml--4': getTheme => `
  margin-left: 4px;






`,
  '.l-mt--40': getTheme => `
  margin-top: 40px;






`,
  '.l-mt--32': getTheme => `
  margin-top: 32px;






`,
  '.l-mt--20': getTheme => `
  margin-top: 20px;






`,
  '.l-mt--16': getTheme => `
  margin-top: 16px;






`,
  '.l-mt--14': getTheme => `
  margin-top: 14px;






`,
  '.l-mt--10': getTheme => `
  margin-top: 10px;






`,
  '.l-mt--8': getTheme => `
  margin-top: 8px;






`,
  '.l-mt--4': getTheme => `
  margin-top: 4px;






`,
  '.l-p--10': getTheme => `
  padding: 10px;






`,
  '.link': getTheme => `
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
&:hover {
    
  border: 0;
  color: ${getTheme('--primary-green')};

  }
&:hover span {
    
  color: ${getTheme('--primary-green')};

  }
&:hover path {
    
  stroke: ${getTheme('--primary-green')};

  }
&:hover path[fill] {
    
  fill: ${getTheme('--primary-green')};

  }
&:disabled {
    
  color: ${getTheme('--l-80')};

  }
&:disabled:after {
    
  border-color: ${getTheme('--l-80')};

  }
&:disabled:hover {
    
  left: 0;
  width: 100%;

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
& path {
  
  transition: all 0.2s;

}
& span {
  
  color: ${getTheme('--primary-green')};

}
& path {
  
  stroke: ${getTheme('--primary-green')};

}
& path[fill] {
  
  fill: ${getTheme('--primary-green')};

}




`,
  '.bg--l-5': getTheme => `
  background: ${getTheme('--l-5')};






`,
  '.bg--primary-green': getTheme => `
  background: ${getTheme('--primary-green')};






`,
  '.bg--secondary-salmon': getTheme => `
  background-color: ${getTheme('--secondary-salmon')};






`,
  '.f--l-90': getTheme => `
  color: ${getTheme('--l-90')};






`,
  '.f--l-80': getTheme => `
  color: ${getTheme('--l-80')};






`,
  'time': getTheme => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */

  color: ${getTheme('--l-80')};






`,
  '.slideshow__slides': getTheme => `
    width: 736px;
    height: 736px;
  

    height: 600px;
  

    height: 100vw;
    min-height: 386px;
  

  position: relative;
  overflow: hidden;






`,
  '.slideshow__video': getTheme => `
/* *************************************************** */
/* start - .slideshow__image,.slideshow__video */

  height: auto;
  width: 100%;

/* end - .slideshow__image,.slideshow__video */
/* *************************************************** */

  height: auto;
  width: 100%;






`,
  '.slideshow__next': getTheme => `
/* *************************************************** */
/* start - .slideshow__prev,.slideshow__next */

  position: absolute;
  top: 0;
  padding: 352px 24px;
  transition: all 0.2s;
  outline: 0;
,
    padding: calc(50% - 16px) 24px;
  
/* end - .slideshow__prev,.slideshow__next */
/* *************************************************** */

  position: absolute;
  top: 0;
  padding: 352px 24px;
  transition: all 0.2s;
  outline: 0;


    padding: calc(50% - 16px) 24px;
  

  right: 0;


&:hover {
    
  transform: scale(1.2, 1.2); 

  }




`,
  '.slideshow__prev': getTheme => `
/* *************************************************** */
/* start - .slideshow__prev,.slideshow__next */

  position: absolute;
  top: 0;
  padding: 352px 24px;
  transition: all 0.2s;
  outline: 0;
,
    padding: calc(50% - 16px) 24px;
  
/* end - .slideshow__prev,.slideshow__next */
/* *************************************************** */

  transform: rotate(180deg);


&:hover {
    
  transform: scale(1.2, 1.2) rotate(-180deg); 

  }




`,
  '.slideshow__links': getTheme => `
  display: flex;
  justify-content: space-between;
  padding: 32px 60px 0 60px;


    padding: 18px 24px 0 24px;
  





`,
  '.slideshow__indicators': getTheme => `
  display: flex;
  height: 20px;
  align-items: center;






`,
  '.slideshow__indicator': getTheme => `
/* *************************************************** */
/* start - .slideshow__indicator--active .icon,.slideshow__indicator:hover .icon */
& .icon {
  
  width: 9px;
  height: 9px;

}
&:hover .icon {
    
  width: 9px;
  height: 9px;

  }

/* end - .slideshow__indicator--active .icon,.slideshow__indicator:hover .icon */
/* *************************************************** */

  width: 9px;
  height: 9px;
  margin: 0 0 0 10px;
  padding: 0;
  
  border: 0;
  
  outline: 0;
  background: transparent;
  display: flex;
  align-items: center;


&:hover .icon {
    
  width: 9px;
  height: 9px;

  }
&:hover .icon circle {
    
  fill: ${getTheme('--primary-green')};

  }
& .icon {
  
  width: 9px;
  height: 9px;

}
& .icon circle {
  
  fill: ${getTheme('--primary-green')};

}
& .icon circle {
  
  fill: ${getTheme('--primary-dark')};

}




`,
  '.text5': getTheme => `
  font-size: 1.4rem;
  font-family: "mint-regular";






`,
  '.text6': getTheme => `
  font-size: 1.3rem;
  font-family: "mint-regular";






`,
  '.visible--lg': getTheme => `
    display: none;
  





`,
  '.visible--sm': getTheme => `
    display: none;
  





`,

};
    export default selectors;
  