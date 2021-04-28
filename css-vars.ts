
    export type TFuncStr = (str: string, str2?: string, str3?: string) => string;
    export interface Selectors {
      [key: string]: (getTheme: TFuncStr, getAsset: TFuncStr) => string;
    }
    const selectors: Selectors = {
  '.cssicon': (getTheme, getAsset) => `
  width: 40px;
  height: 40px;
  border: 3px solid white;
  border-radius: 50%;


&:hover {
    
  border-color: ${getTheme('--primary-dark')};

  }
&[data-value="--secondary-blue"] {
    
  background-color: ${getTheme('--secondary-blue')};

  }
&[data-value="--secondary-ochre"] {
    
  background-color: ${getTheme('--secondary-ochre')};

  }
&[data-value="--secondary-pink"] {
    
  background-color: ${getTheme('--secondary-pink')};

  }
&[data-value="--secondary-red"] {
    
  background-color: ${getTheme('--secondary-red')};

  }
&[data-value="--secondary-salmon"] {
    
  background-color: ${getTheme('--secondary-ochre')};

  }








`,
  '.avatar-img': (getTheme, getAsset) => `
  
  
  width: 48px;
  height: 48px;
  border-radius: 50%;










`,
  'border-color': (getTheme, getAsset) => `







`,
  'color': (getTheme, getAsset) => `







`,
  '.btn': (getTheme, getAsset) => `
  display: inline-block;
  padding: 13px 24px;
  height: 48px;
  border-radius: 8px;
  border: 0;
  text-decoration: none;
  transition: border-radius 0.2s, border-color 0.2s, color 0.2s;
  vertical-align: middle;
  cursor: pointer;
  text-align: center;
  outline: none;


&:hover {
    
  border-radius: 20px/30px;

  }








`,
  '.btn--secondary': (getTheme, getAsset) => `
  border: 2px solid ${getTheme('--primary-dark')}; 
  background: ${getTheme('--l-5')};


&:hover {
    
  border-color: ${getTheme('--secondary-darkgreen')};
  background-color: ${getTheme('--l-5')};
  color: ${getTheme('--secondary-darkgreen')};

  }








`,
  '.btn--warning': (getTheme, getAsset) => `
  color: ${getTheme('--primary-white')};
  background: ${getTheme('--secondary-red')};


&:hover {
     
  background-color: ${getTheme('--secondary-red')};

  }
&[data-active="true"] {
    
  background: ${getTheme('--secondary-red')};

  }








`,
  '.btn--large': (getTheme, getAsset) => `
  width: 188px;










`,
  '.btn--xlarge': (getTheme, getAsset) => `
  width: 264px;










`,
  '.btn--small': (getTheme, getAsset) => `
  padding-left: 17px;
  padding-right: 17px;










`,
  '.btn--icon': (getTheme, getAsset) => `
  padding: 0;
  border: 0;
  background: transparent;
  outline: none;
  cursor: pointer;


&:hover path {
    
  stroke: ${getTheme('--primary-green')};

  }
&:hover path[fill] {
    
  fill: ${getTheme('--primary-green')};

  }








`,
  '.btn--dark': (getTheme, getAsset) => `
  color: ${getTheme('--primary-white')};
  background: ${getTheme('--primary-dark')};


&:hover {
     
  background-color: ${getTheme('--primary-dark')};

  }








`,
  '.btn--primary': (getTheme, getAsset) => `
  color: ${getTheme('--primary-white')};
  background: ${getTheme('--primary-green')};










`,
  '.btn--link': (getTheme, getAsset) => `
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

  border: 0;
  background: transparent;
  width: auto;
  text-align: left;
  outline: none;


&:active {
    
  outline: none;

  }
&:hover path {
    
  stroke: ${getTheme('--primary-green')};

  }
&:hover path[fill] {
    
  fill: ${getTheme('--primary-green')};

  }
&:hover {
    

  color: ${getTheme('--primary-green')};

  }
& circle {
  
    transition: all 0.2s;

}








`,
  '.btn--nostyle': (getTheme, getAsset) => `
  background: 0;
  border: 0;
  position: relative;
  outline: none;
  padding: 0;










`,
  '.btn--close': (getTheme, getAsset) => `
  
  padding: 14px;
  border: 0;
  border-radius: 50%;
  transition: all 0.2s;
  display: flex; 
  cursor: pointer;
  outline: none;


&:hover {
    
  
  background-color: ${getTheme('--sh-90')};

  }








`,
  '.btn--aside-legend': (getTheme, getAsset) => ` 
  position: absolute;
  left: calc(100% - 40px);
  top: -8px;










`,
  '.btn--bg': (getTheme, getAsset) => `
/* *************************************************** */
/* start - .btn--bg,.btn--bg path */

  transition: all 0.2s;
& path {
  
  transition: all 0.2s;

}

/* end - .btn--bg,.btn--bg path */
/* *************************************************** */

  border: 2px solid ${getTheme('--primary-dark')}; 
  background-color: ${getTheme('--l-5')};
  display: flex;
  align-items: center;
  justify-content: center;
  


&:hover {
    
  background:  ${getTheme('--primary-green')};
  color: white;
  border-color: ${getTheme('--primary-green')};
  border-radius: 8px;

  }
&:hover path[fill] {
    
  fill: white;

  }
& path {
  
  transition: all 0.2s;

}








`,
  '.btn--continue': (getTheme, getAsset) => `
  display: inline-block;
  padding: 13px 24px;
  height: 48px;
  border: 0;
  background-color: ${getTheme('--l-50')};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.2s;
  border-radius: 8px;
  cursor: not-allowed;
  outline: none;


&[data-active="true"] {
    
  background-color:  ${getTheme('--primary-green')}; 
  cursor: pointer;

  }
&[data-active="true"]:hover {
    
  background-color:  ${getTheme('--primary-dark')}; 
  cursor: pointer;

  }








`,
  '.btn--toast': (getTheme, getAsset) => `
  position: absolute;
  top: -10px;
  z-index: 300; 
  padding: 12px 50px 12px 16px;
  height: 45px;
  left: 100px;
  opacity: 0;
  transition: opacity 0.2s ease-in-out,  left 0.2s  ease-in-out;


&[data-transition="enter"] {
    
  opacity: 0;
  left: 100px;

  }
&[data-transition="entered"] {
    
  opacity: 1;
  left: 0;

  }
&[data-transition="exiting"] {
    
  opacity: 0;
  left: -100px;

  }
&[data-transition="exited"] {
    
  opacity: 0;
  left: 0;

  }
&:after {
    
  position: absolute;
  right: 16px;
  content: '';
  background: url("${getAsset('./svg/Cross Dismiss.svg')}") no-repeat 100% 50%;
  background-size: 19px 19px;
  width: 19px;
  height: 19px;

  }

 @media ( max-width : 801px ) {
  
    margin-top: 26px;
  


 }








`,
  'left': (getTheme, getAsset) => `







`,
  '.btn--typeof-user': (getTheme, getAsset) => `
/* *************************************************** */
/* start - .btn--typeof-user[data-active="true"],.btn--typeof-user:hover */
&[data-active="true"] {
    
  background-color: ${getTheme('--primary-green')}; 
  color: white;

  }
&:hover {
    
  background-color: ${getTheme('--primary-green')}; 
  color: white;

  }

/* end - .btn--typeof-user[data-active="true"],.btn--typeof-user:hover */
/* *************************************************** */

/* *************************************************** */
/* start - .btn--typeof-user[data-active="true"]:after,.btn--typeof-user:hover:after */
&[data-active="true"]:after {
    
  
  filter: brightness(0) invert(1); 

  }
&:hover:after {
    
  
  filter: brightness(0) invert(1); 

  }

/* end - .btn--typeof-user[data-active="true"]:after,.btn--typeof-user:hover:after */
/* *************************************************** */

  position: relative;
  padding: 16px 16px 16px 80px;
  width: 100%;
  height: 80px;
  text-align: left;
  background: white url('${getAsset('./svg/typeof-user.svg')}') no-repeat 16px 50%;
  background-size: 48px 48px;
  border:0;
  transition: all 0.2s;
  outline: none;
  display: flex;
  align-items: center;


&:hover {
    
  background-color: ${getTheme('--primary-green')}; 
  color: white;

  }
&:hover:after {
    
  
  filter: brightness(0) invert(1); 

  }
&:after {
    
  content: '';
  position: absolute;
  top: 0;
  right: 20px;
  background: url('${getAsset('./svg/ChevronRight.svg')}') no-repeat 100% 50%;
  background-size: 16px 16px;
  width: 16px;
  height: 100%;

  }








`,
  '.btn--chevron': (getTheme, getAsset) => `
  background: 0;
  border: 0;
  position: relative;
  outline: none;
  padding: 0;

  background: white;
  padding: 16px;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  text-align: left;


&:hover {
    
  background: ${getTheme('--primary-green')};
  color: white;

  }
&:after {
    
  content: '';
  margin: 0 0 0 auto;
  background: url('${getAsset('./svg/ChevronRight.svg')}') no-repeat 100% 50%;
  width: 16px;
  height: 16px;

  }
&:hover:after {
    
  filter: brightness(0) invert(1); 

  }








`,
  '.bullets': (getTheme, getAsset) => `
  


& dd {
  
  margin: 1px 0 0 2px;
  font-size: 1.3rem;
  line-height: 2.08rem;
  font-family: "mint-regular";

}








`,
  '.divider-wrap': (getTheme, getAsset) => `
  position: relative;
  display: flex;
  justify-content: center;


&:before {
    
  content: '';
  position: absolute;
  top: 22px;
  left: 0;
  border: 1px solid ${getTheme('--l-50')};
  width: 100%;

  }








`,
  '.divider-wrap__overlay': (getTheme, getAsset) => `
  position: relative;
  z-index: 10;
  padding: 16px 20px;
  










`,
  '.avatars': (getTheme, getAsset) => `
  display: flex;
  flex-wrap: wrap;


& > * {
  
  margin: 20px 32px 0 0;
  width: 56px;
  height: 56px;
  cursor: pointer;

}
& > *:nth-child(4n + 4) {
  
  margin-right: 0;

}








`,
  '.desc--hidden': (getTheme, getAsset) => `
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








`,
  '.desc': (getTheme, getAsset) => `
  clear: both;


& p {
  
  margin: 20px 0 0  0;
  padding: 0;
  line-height: 2.24rem;

}








`,
  '.desc__img': (getTheme, getAsset) => `
  margin: 16px 0 0;
  display:inline-block;
  width: 100%;










`,
  'var': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'rgba': (getTheme, getAsset) => `







`,
  '.desc__readmore': (getTheme, getAsset) => `
  position: relative;
  z-index: 20; 
  margin: -24px auto 0 auto;
  width: 184px;
  background: ${getTheme('--l-5')};
  text-align: center;










`,
  '.dialog-bg': (getTheme, getAsset) => `
  top: -100%;
  left: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  opacity: 0.7; 
  background-color: ${getTheme('--primary-dark')};
  
  opacity: 0;
  cursor: pointer;


&[data-transition="entered"] {
    
  opacity: 0.7;
  top: 0;

  }








`,
  '.dialog-generic': (getTheme, getAsset) => `
  margin: 0 auto;
  position: relative;
  z-index: 200; 
  transition: all 0.2s;
  border-radius: 24px;
  background: white;
  padding: 26px 24px;




 @media ( max-width : 821px ) {
  
    top: 0;

  


 }


 @media ( min-width : 622px ) {
  
    width: 622px;
    height: 822px;
    border-radius: 24px;
  


 }






`,
  '.dialog-generic__logo': (getTheme, getAsset) => `
  width: 25px;
  height: 25px;






 @media ( min-width : 1428px ) {
  
    width: 40px;
    height: 40px;
  


 }





`,
  '.dialog-generic__close': (getTheme, getAsset) => `
  position: absolute;
  outline: none;
  top: 16px;
  right: 24px;










`,
  '.dialog-wide--identity': (getTheme, getAsset) => `



 @media ( min-width : 1428px ) {
  
    height: 500px;
  


 }





`,
  '.dialog-wide--identity-col1': (getTheme, getAsset) => `



 @media ( min-width : 1428px ) {
  
    display: flex;
    justify-content: center;
    align-items: center;
  


 }


 @media ( max-width : 1427px ) {
  
    padding-top: 0; 
    order: 20;
  


 }




`,
  '.dialog-wide--identity-col2': (getTheme, getAsset) => `




 @media ( max-width : 1427px ) {
  
    order: 10;
    padding-top: 86px;
    padding-bottom: 60px;
  


 }




`,
  '.dialog-wide--raisetype-col1': (getTheme, getAsset) => `
/* *************************************************** */
/* start - .dialog-wide--raisetype-col1,.dialog-wide--raisetype-col2 */

 

/* end - .dialog-wide--raisetype-col1,.dialog-wide--raisetype-col2 */
/* *************************************************** */




 @media ( min-width : 1428px ) {
  
/* *************************************************** */
/* start - .dialog-wide--raisetype-col1,.dialog-wide--raisetype-col2 */

    padding: 64px 56px;
    display: flex;
    flex-direction: column;
  
/* end - .dialog-wide--raisetype-col1,.dialog-wide--raisetype-col2 */
/* *************************************************** */

 }


 @media ( max-width : 1427px ) {
  
    padding-top: 0; 
    order: 20;
  


 }




`,
  '.dialog-wide--raisetype-col2': (getTheme, getAsset) => `
/* *************************************************** */
/* start - .dialog-wide--raisetype-col1,.dialog-wide--raisetype-col2 */

 

/* end - .dialog-wide--raisetype-col1,.dialog-wide--raisetype-col2 */
/* *************************************************** */

 






 @media ( min-width : 1428px ) {
  
/* *************************************************** */
/* start - .dialog-wide--raisetype-col1,.dialog-wide--raisetype-col2 */

    padding: 64px 56px;
    display: flex;
    flex-direction: column;
  
/* end - .dialog-wide--raisetype-col1,.dialog-wide--raisetype-col2 */
/* *************************************************** */

    padding: 64px 56px;
    display: flex;
    flex-direction: column;
  

    width: 426px;
  


 }


 @media ( max-width : 1427px ) {
  
    order: 10;
    padding: 86px 24px 40px 24px;
  


 }




`,
  '.dialog-wide--raisetype': (getTheme, getAsset) => `







 @media ( min-width : 1428px ) {
  
    width: 858px;
    height: 602px;
  


 }





`,
  '.dialog-wide': (getTheme, getAsset) => `
  margin: 0 auto;
  width: 100%;
  position: relative;
  z-index: 200; 
  display: flex;
  opacity: 0; 
  z-index: 11;


&[data-transition="exiting"] {
    
  opacity: 0;

  }
&[data-transition="entered"] {
    
  opacity: 1;

  }




 @media ( min-width : 1428px ) {
  
/* *************************************************** */
/* start - .dialog-wide[data-transition="entering"],.dialog-wide[data-transition="exiting"] */
&[data-transition="entering"] {
    
    top: 20%;
  
  }
&[data-transition="exiting"] {
    
    top: 20%;
  
  }

/* end - .dialog-wide[data-transition="entering"],.dialog-wide[data-transition="exiting"] */
/* *************************************************** */

    top: -100%; 
    width: 834px;
    height: 450px;
    
    border-radius: 24px;
    overflow-x: hidden;
  

&[data-transition="exiting"] {
    
    top: 20%;
  
  }
&[data-transition="entered"] {
    
    top: 0;
  
  }

 }


 @media ( max-width : 1427px ) {
  
    
    top: 0;
    width: 368px;
    flex-direction: column;
    border-radius: 24px;
    overflow-x: hidden;
  

&[data-transition="exiting"] {
    
    top: -100%;
  
  }
&[data-transition="entered"] {
    
    top: 0;
  
  }

 }




`,
  '.dialog-wide__close': (getTheme, getAsset) => `
  position: absolute;
  outline: none;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;






 @media ( min-width : 1428px ) {
  
/* *************************************************** */
/* start - .dialog-wide__close svg,.dialog-wide__close img */
& svg {
  
    width: 16px;
    height: 16px;
  
}
& img {
  
    width: 16px;
    height: 16px;
  
}

/* end - .dialog-wide__close svg,.dialog-wide__close img */
/* *************************************************** */

    top: 56px;
    right: 56px;
  

& img {
  
    width: 16px;
    height: 16px;
  
}

 }


 @media ( max-width : 1427px ) {
  
/* *************************************************** */
/* start - .dialog-wide__close svg,.dialog-wide__close img */
& svg {
  
    width: 12px;
    height: 12px;
  
}
& img {
  
    width: 12px;
    height: 12px;
  
}

/* end - .dialog-wide__close svg,.dialog-wide__close img */
/* *************************************************** */

    top: 16px;
    right: 24px;
  

& img {
  
    width: 12px;
    height: 12px;
  
}

 }




`,
  '.dialog-wide__logo': (getTheme, getAsset) => `
  position: absolute;






 @media ( min-width : 1428px ) {
  
    width: 40px;
    height: 40px;
    top: 56px;
    left: 56px;
  


 }


 @media ( max-width : 1427px ) {
  
    width: 25px;
    height: 25px;
    top: 24px;
    left: 24px;
  


 }




`,
  '.dialog-wide__col1': (getTheme, getAsset) => `
/* *************************************************** */
/* start - .dialog-wide__col1,.dialog-wide__col2 */



/* end - .dialog-wide__col1,.dialog-wide__col2 */
/* *************************************************** */




 @media ( min-width : 1428px ) {
  
/* *************************************************** */
/* start - .dialog-wide__col1,.dialog-wide__col2 */

    padding: 64px 56px;
    display: flex;
    flex-direction: column;
  
/* end - .dialog-wide__col1,.dialog-wide__col2 */
/* *************************************************** */

    width: 400px;
  


 }


 @media ( max-width : 1427px ) {
  
/* *************************************************** */
/* start - .dialog-wide__col1,.dialog-wide__col2 */

    
    padding: 26px 24px; 
  
/* end - .dialog-wide__col1,.dialog-wide__col2 */
/* *************************************************** */

    padding-top: 86px; 
  


 }




`,
  '.dialog-wide__col2': (getTheme, getAsset) => `
/* *************************************************** */
/* start - .dialog-wide__col1,.dialog-wide__col2 */



/* end - .dialog-wide__col1,.dialog-wide__col2 */
/* *************************************************** */








 @media ( min-width : 1428px ) {
  
/* *************************************************** */
/* start - .dialog-wide__col1,.dialog-wide__col2 */

    padding: 64px 56px;
    display: flex;
    flex-direction: column;
  
/* end - .dialog-wide__col1,.dialog-wide__col2 */
/* *************************************************** */

    padding: 64px 56px;
    display: flex;
    flex-direction: column;
  

    width: 432px;
  


 }


 @media ( max-width : 1427px ) {
  
/* *************************************************** */
/* start - .dialog-wide__col1,.dialog-wide__col2 */

    
    padding: 26px 24px; 
  
/* end - .dialog-wide__col1,.dialog-wide__col2 */
/* *************************************************** */

    
    padding: 26px 24px; 
  


 }




`,
  '.dialog-wide__mt-1': (getTheme, getAsset) => `
  padding-right: 30px;






 @media ( min-width : 1428px ) {
  
    margin-top: 56px !important;
  


 }


 @media ( max-width : 1427px ) {
  
    margin-top: 32px;
  


 }




`,
  '.dialog-wide__mt-2': (getTheme, getAsset) => `



 @media ( min-width : 1428px ) {
  
    margin-top: 32px;
  


 }


 @media ( max-width : 1427px ) {
  
    margin-top: 20px;
  


 }




`,
  '.dialog-wide__mt-4': (getTheme, getAsset) => `



 @media ( min-width : 1428px ) {
  
    margin-top: 56px;
  


 }


 @media ( max-width : 1427px ) {
  
    margin-top: 24px;
  


 }




`,
  '.dialog-wide__cols': (getTheme, getAsset) => `



 @media ( min-width : 1428px ) {
  
    display: flex;
    justify-content: space-between;
  


 }


 @media ( max-width : 1427px ) {
  & dl {
  
    margin: 40px 0 0;
  
}

 }




`,
  '.dialog-wide__content': (getTheme, getAsset) => `



 @media ( min-width : 1428px ) {
  
    padding: 56px;
  


 }


 @media ( max-width : 1427px ) {
  
    padding: 32px 24px;
  


 }




`,
  '.dialogs': (getTheme, getAsset) => `
  z-index: 110; 
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;










`,
  '.wrap-home__pad': (getTheme, getAsset) => `
  margin-left: 60px;
  margin-right: 60px;







 @media ( max-width : 1427px ) {
  
    margin-left: 24px;
    margin-right: 24px;
  


 }




`,
  '.divider': (getTheme, getAsset) => `
  border-bottom : 1px solid #CDCDD6; 
  padding-bottom: 24px;










`,
  '.donation': (getTheme, getAsset) => `
  color: white;
  padding: 6px 8px 4px 8px;
  border-radius: 23px;










`,
  '.figure__img': (getTheme, getAsset) => `
  display: block;
  margin: 0 auto;










`,
  '.figure--xpad': (getTheme, getAsset) => `
  padding: 40px 110px;







 @media ( max-width : 1427px ) {
  
/* *************************************************** */
/* start - .figure,.figure--xpad */

    padding: 40px 32px;
  
/* end - .figure,.figure--xpad */
/* *************************************************** */

    padding: 40px 32px;
  


 }




`,
  '.figure': (getTheme, getAsset) => `
  border-radius: 12px;
  padding: 16px 40px;
  background: ${getTheme('--l-10')};


& .icon-label {
  
  margin: 8px 0 0;
  justify-content: center;

}





 @media ( max-width : 1427px ) {
  
/* *************************************************** */
/* start - .figure,.figure--xpad */

    padding: 40px 32px;
  
/* end - .figure,.figure--xpad */
/* *************************************************** */

 }




`,
  '.figure__btn': (getTheme, getAsset) => `
  margin: 24px 0 0 0;










`,
  '.figcaption': (getTheme, getAsset) => `
  display: inline-block;


& svg {
  
  margin: -4px 0 0 0; 

}








`,
  '.figure--emptyraise': (getTheme, getAsset) => `
/* *************************************************** */
/* start - .figure--emptyraise figcaption,.figure--emptyraise p */
& figcaption {
  
  padding: 0 4px;
  color: white;

}
& p {
  
  padding: 0 4px;
  color: white;

}

/* end - .figure--emptyraise figcaption,.figure--emptyraise p */
/* *************************************************** */
& p {
  
  padding: 0 4px;
  color: white;

}




 @media ( min-width : 1428px ) {
  
    margin: 40px 0 0;
    border-radius: 16px;
    padding: 40px 155px;
  


 }


 @media ( max-width : 1427px ) {
  
    margin: 32px 0 0;
    border-radius: 8px;
    padding: 40px 24px;
  


 }




`,
  '.h1--lineh': (getTheme, getAsset) => `
/* *************************************************** */
/* start - .h1,.h1--lineh */

  line-height: 3.45rem;

/* end - .h1,.h1--lineh */
/* *************************************************** */

  line-height: 3.45rem;










`,
  '.h1': (getTheme, getAsset) => `
/* *************************************************** */
/* start - .h1,.h1--lineh */

  line-height: 3.45rem;

/* end - .h1,.h1--lineh */
/* *************************************************** */

  font-size: 2.6rem;
  
  font-family: "mint-extrabold";










`,
  '.h2': (getTheme, getAsset) => `
/* *************************************************** */
/* start - .h2,.h2--lineh */

  line-height: 2.915rem;

/* end - .h2,.h2--lineh */
/* *************************************************** */

  font-size: 2.2rem;
  
  font-family: "mint-extrabold";










`,
  '.h2--lineh': (getTheme, getAsset) => `
/* *************************************************** */
/* start - .h2,.h2--lineh */

  line-height: 2.915rem;

/* end - .h2,.h2--lineh */
/* *************************************************** */

  line-height: 2.915rem;










`,
  '.h3': (getTheme, getAsset) => `
  font-size: 1.8rem;
  
  font-family: "mint-bold";
  line-height: 2.385rem;










`,
  '.h4': (getTheme, getAsset) => `
  font-size: 1.6rem;
  
  font-family: "mint-bold";
  line-height: 2rem; 










`,
  '.h5': (getTheme, getAsset) => `
  
  font-size: 1.4rem;
  font-family: "mint-bold";
  line-height: 2.24rem;










`,
  '.h6': (getTheme, getAsset) => `
  
  font-family: "mint-bold";
  font-size: 1.3rem;
  line-height: 2.08rem;










`,
  '.h6--semi': (getTheme, getAsset) => `
  font-family: "mint-bold";
  font-size: 1.3rem;
  line-height: 2.08rem;










`,
  '.h6--medium': (getTheme, getAsset) => `
  font-family: "mint-medium";
  font-size: 1.3rem;
  line-height: 2.08rem;










`,
  '.h7': (getTheme, getAsset) => `
  font-family: "mint-medium";
  font-size: 1.2rem;
  line-height: 1.92rem; 










`,
  '.h7--bold': (getTheme, getAsset) => `
  font-family: "mint-bold";
  font-size: 1.2rem;
  line-height: 1.92rem; 










`,
  '.identity__block1': (getTheme, getAsset) => `
  background: white;
  border-radius: 8px;
  filter: drop-shadow(0px 4px 24px rgba(0, 13, 134, 0.08));






 @media ( min-width : 1428px ) {
  
    margin-top: 40px;
  


 }


 @media ( max-width : 1427px ) {
  
    margin-top: 20px;
  


 }




`,
  '.identity__block2': (getTheme, getAsset) => `
  background: ${getTheme('--l-5')};
  padding: 24px;










`,
  '.identity__block3': (getTheme, getAsset) => `
  background: white;
  border-radius: 12px;
  padding: 12px;










`,
  '.input-text': (getTheme, getAsset) => `
  border-radius: 6px;
  border: 2px solid ${getTheme('--l-50')};
  padding: 12px 16px;
  width: 100%;
  outline: none;


&::placeholder {
    
  color: ${getTheme('--l-90')};

  }
&[data-error="true"] {
    
  border-color: ${getTheme('--secondary-red')};

  }








`,
  '.label-overlay': (getTheme, getAsset) => `
  position: relative;
  display: inline-block;
  width: 100%;


& label:first-child {
  
  position: absolute;
  left: 12px;
  top: -10px;
  background: ${getTheme('--l-5')};
  padding: 0 4px;
  z-index: 11; 
  display: flex;

}








`,
  '.password-icon': (getTheme, getAsset) => `
    position: absolute;
    top: 14px;
    right: 14px;
    cursor: pointer;










`,
  '.error-label': (getTheme, getAsset) => `
  color: ${getTheme('--secondary-red')};
  position: relative;
  display: flex;
  align-items: center;


&:before {
    
  content: '';
  background: url('${getAsset('./svg/error-dot.svg')}') no-repeat 0 50%;
  width: 4px;
  height: 4px;
  margin: 0 4px;

  }








`,
  '.investment__percentage-bg': (getTheme, getAsset) => `
  display: block;
  background: ${getTheme('--l-10')};
  height: 12px;
  width: 100%;
  border-radius: 6px;










`,
  '.investment__percentage-fill': (getTheme, getAsset) => `
  background: ${getTheme('--primary-green')}; 
  height: 100%;
  border-radius: 6px;










`,
  '.percent': (getTheme, getAsset) => `
  color: ${getTheme('--l-90')}; 










`,
  '.investment__target': (getTheme, getAsset) => `
  color: ${getTheme('--l-90')}; 
  line-height: 3.45rem; 










`,
  '.link': (getTheme, getAsset) => `
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


&:active {
    
  outline: none;

  }
&:hover path {
    
  stroke: ${getTheme('--primary-green')};

  }
&:hover path[fill] {
    
  fill: ${getTheme('--primary-green')};

  }
&:hover {
    

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
&:after {
    
  transition: all 0.2s;

  }
&:hover {
    
  color: ${getTheme('--primary-green')};

  }
&:hover .logo__svg  path[fill] {
    
  fill: white;

  }
&:hover .logo__svg  path[fill-rule="evenodd"] {
    
  fill: ${getTheme('--primary-green')};

  }
& circle {
  
    transition: all 0.2s;

}
& path {
  
  transition: all 0.2s;

}








`,
  '.link--underline': (getTheme, getAsset) => `&:after {
    
  content: '';
  position: absolute;
  left: 0;
  width: 100%;
  bottom: -4px;
  border-bottom: 2px solid black;
  transition: width 0.1s, left 0.1s, border 0.1s;

  }
&:hover:after {
    
  left: 8px;
  width: calc(100% - 16px);
  border-color: ${getTheme('--primary-green')};

  }








`,
  'border': (getTheme, getAsset) => `







`,
  '.link--inline': (getTheme, getAsset) => `
  color: ${getTheme('--primary-green')};


&:hover {
    
  text-decoration: underline;

  }








`,
  '.list-chevron-div': (getTheme, getAsset) => `
  display: block;
  cursor: pointer;
  position: relative;


&:before {
    
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  background: url('${getAsset('./svg/ChevronRight.svg')}') no-repeat 100% 50%;
  background-size: 16px 16px;
  width: 16px;
  height: 100%;

  }
&:after {
    
  content: '';
  position: absolute;
  left: 0;
  width: 100%;
  bottom: 0;
  border-bottom: 1px solid ${getTheme('--l-50')};

  }
&:hover:before {
    
  filter: invert(75%) sepia(62%) saturate(5319%) hue-rotate(124deg) brightness(94%) contrast(82%);

  }
&:hover:after {
    
  
  
  border-color: ${getTheme('--primary-green')};

  }








`,
  '.list-link': (getTheme, getAsset) => `
/* *************************************************** */
/* start - .list-link,.list-link:before,.list-link:after */

  transition: all 0.2s;
&:before {
    
  transition: all 0.2s;

  }
&:after {
    
  transition: all 0.2s;

  }

/* end - .list-link,.list-link:before,.list-link:after */
/* *************************************************** */

  cursor: pointer;


&:after {
    
  transition: all 0.2s;

  }
&:hover {
    
  color: ${getTheme('--primary-green')};

  }








`,
  '.list-upload__li': (getTheme, getAsset) => `
  width: 100%;
  border-bottom: 1px solid ${getTheme('--l-50')};










`,
  '.list-upload__button': (getTheme, getAsset) => `
/* *************************************************** */
/* start - .list-upload__button,.list-upload__button path,.list-upload__button circle */

  transition: all 0.2s;
& path {
  
  transition: all 0.2s;

}
& circle {
  
  transition: all 0.2s;

}

/* end - .list-upload__button,.list-upload__button path,.list-upload__button circle */
/* *************************************************** */

  border: 0;
  text-align: left;
  background: transparent;
  padding: 20px 0 16px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;



&:hover {
    
  color: ${getTheme('--primary-green')};

  }
&:hover path {
    
  stroke: ${getTheme('--primary-green')};

  }
& circle {
  
  transition: all 0.2s;

}








`,
  '.list-upload': (getTheme, getAsset) => `
  padding: 32px 32px 40px 32px;
  background: white;
  border-radius: 4px;










`,
  '.menu-link': (getTheme, getAsset) => `
  padding: 17px 0;
  display: block;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;










`,
  '.phone-dropdown': (getTheme, getAsset) => `
  display: inline-block;
  width: 92px;
  border-radius: 4px;
  background: ${getTheme('--l-10')};










`,
  '.search__form': (getTheme, getAsset) => `
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

  display: flex;
  justify-content: space-between;
  
  
  border: 1px solid ${getTheme('--l-50')}; 
  border-radius: 4px;
  position: relative;
  transition: border 0.2s;


&:hover input {
    
  color: ${getTheme('--primary-green')};

  }
&:hover {
    
  color: ${getTheme('--primary-green')};

  }
&:hover svg circle {
    
  stroke: ${getTheme('--primary-green')};

  }
& input::placeholder {
  
  color: ${getTheme('--l-80')};

}








`,
  '.search__button': (getTheme, getAsset) => `
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








`,
  '.search__input': (getTheme, getAsset) => `
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










`,
  '.slideshow__slides': (getTheme, getAsset) => `
  position: relative;
  overflow: hidden;






 @media ( min-width : 1428px ) {
  
    width: 736px;
    height: 736px;
  


 }


 @media ( max-width : 1427px ) {
  
    min-height: 600px;
  


 }


 @media ( max-width : 600px ) {
  
    height: 100vw;
    min-height: 386px;
  


 }



`,
  '.slideshow__image': (getTheme, getAsset) => `
/* *************************************************** */
/* start - .slideshow__image,.slideshow__video */

  height: auto;
  width: 100%;

/* end - .slideshow__image,.slideshow__video */
/* *************************************************** */








`,
  '.slideshow__video': (getTheme, getAsset) => `
/* *************************************************** */
/* start - .slideshow__image,.slideshow__video */

  height: auto;
  width: 100%;

/* end - .slideshow__image,.slideshow__video */
/* *************************************************** */

  height: auto;
  width: 100%;










`,
  '.slideshow__prev': (getTheme, getAsset) => `
/* *************************************************** */
/* start - .slideshow__prev,.slideshow__next */

  position: absolute;
  top: 0;
  padding: 352px 24px;
  transition: all 0.2s;
  outline: 0;
  background: transparent;
  border: 0;

/* end - .slideshow__prev,.slideshow__next */
/* *************************************************** */

  transform: rotate(180deg);


&:hover {
    
  transform: scale(1.2, 1.2) rotate(-180deg); 

  }





 @media ( max-width : 1427px ) {
  
/* *************************************************** */
/* start - .slideshow__prev,.slideshow__next */

    padding: calc(50% - 16px) 24px;
  
/* end - .slideshow__prev,.slideshow__next */
/* *************************************************** */

 }




`,
  '.slideshow__next': (getTheme, getAsset) => `
/* *************************************************** */
/* start - .slideshow__prev,.slideshow__next */

  position: absolute;
  top: 0;
  padding: 352px 24px;
  transition: all 0.2s;
  outline: 0;
  background: transparent;
  border: 0;

/* end - .slideshow__prev,.slideshow__next */
/* *************************************************** */

  position: absolute;
  top: 0;
  padding: 352px 24px;
  transition: all 0.2s;
  outline: 0;
  background: transparent;
  border: 0;


  right: 0;


&:hover {
    
  transform: scale(1.2, 1.2); 

  }





 @media ( max-width : 1427px ) {
  
/* *************************************************** */
/* start - .slideshow__prev,.slideshow__next */

    padding: calc(50% - 16px) 24px;
  
/* end - .slideshow__prev,.slideshow__next */
/* *************************************************** */

    padding: calc(50% - 16px) 24px;
  


 }




`,
  '.slideshow__links': (getTheme, getAsset) => `
  display: flex;
  justify-content: space-between;
  padding: 32px 60px 0 60px;







 @media ( max-width : 1427px ) {
  
    padding: 18px 24px 0 24px;
  


 }




`,
  '.slideshow__indicators': (getTheme, getAsset) => `
  display: flex;
  height: 20px;
  align-items: center;










`,
  '.slideshow__indicator': (getTheme, getAsset) => `
/* *************************************************** */
/* start - .slideshow__indicator--active svg,.slideshow__indicator:hover svg */
&:hover svg {
    
  width: 9px;
  height: 9px;

  }

/* end - .slideshow__indicator--active svg,.slideshow__indicator:hover svg */
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


&:hover svg {
    
  width: 9px;
  height: 9px;

  }
&:hover circle {
    
  fill: ${getTheme('--primary-green')};

  }








`,
  '.slideshow__indicator--active': (getTheme, getAsset) => `
/* *************************************************** */
/* start - .slideshow__indicator--active svg,.slideshow__indicator:hover svg */
& svg {
  
  width: 9px;
  height: 9px;

}

/* end - .slideshow__indicator--active svg,.slideshow__indicator:hover svg */
/* *************************************************** */
& circle {
  
  fill: ${getTheme('--primary-dark')};

}








`,
  '.spot-white': (getTheme, getAsset) => `
  background: white;
  border-radius: 50%;










`,
  '.text4': (getTheme, getAsset) => `
/* *************************************************** */
/* start - .text-wrap--4 p,.text4 */

  font-size: 1.6rem;
  font-family: "mint-regular";
  line-height: 2.2rem; 

/* end - .text-wrap--4 p,.text4 */
/* *************************************************** */

  font-size: 1.6rem;
  font-family: "mint-regular";
  line-height: 2.2rem; 










`,
  '.text-wrap--4': (getTheme, getAsset) => `
/* *************************************************** */
/* start - .text-wrap--4 p,.text4 */
& p {
  
  font-size: 1.6rem;
  font-family: "mint-regular";
  line-height: 2.2rem; 

}

/* end - .text-wrap--4 p,.text4 */
/* *************************************************** */
& p {
  
  margin-top: 30px;

}








`,
  '.text-wrap--5': (getTheme, getAsset) => `
/* *************************************************** */
/* start - .text-wrap--5 p,.text5 */
& p {
  
  font-size: 1.4rem;
  font-family: "mint-regular";
  line-height: 2.24rem; 

}

/* end - .text-wrap--5 p,.text5 */
/* *************************************************** */
& p {
  
  margin-top: 22px;

}








`,
  '.text5': (getTheme, getAsset) => `
/* *************************************************** */
/* start - .text-wrap--5 p,.text5 */

  font-size: 1.4rem;
  font-family: "mint-regular";
  line-height: 2.24rem; 

/* end - .text-wrap--5 p,.text5 */
/* *************************************************** */

  font-size: 1.4rem;
  font-family: "mint-regular";
  line-height: 2.24rem; 










`,
  '.text6': (getTheme, getAsset) => `
  font-size: 1.3rem;
  font-family: "mint-regular";
  line-height: 1.92rem; 










`,
  '.text7': (getTheme, getAsset) => `
  font-size: 1.2rem;
  font-family: "mint-regular";
  line-height: 1.92rem; 










`,
  '.text-error': (getTheme, getAsset) => `
  color: ${getTheme('--secondary-red')};










`,
  '.upload-doc__text': (getTheme, getAsset) => `
  margin: 16px 0 16px 16px;










`,
  '.upload-doc__icon': (getTheme, getAsset) => `
  width: 16px;
  height: 16px;










`,
  '.upload-doc__delete': (getTheme, getAsset) => `
  margin: 0 0 0 auto;
  
  width: 16px;
  height: 16px;


& svg {
  
  width: 100%;
  height: 100%;

}








`,
  '.upload-photo': (getTheme, getAsset) => `
  position: relative;
  width: 80px;










`,
  '.upload-photo__delete': (getTheme, getAsset) => `
  position: absolute;
  top: -10px;
  right: -10px;
  width: 28px;
  height: 28px;
  border: 0;
  background: transparent;
  outline: none;


& svg {
  
  width: 100%;
  height: 100%;

}








`,
  '.upload__crop': (getTheme, getAsset) => `
  position: relative;
  width: 80px;
  height: 80px;
  overflow: hidden; 
  background: ${getTheme('--secondary-blue')};
  border-radius: 4px; 










`,
  '.upload-photo__photo': (getTheme, getAsset) => `
  










`,
  '.upload-doc': (getTheme, getAsset) => `
  background: ${getTheme('--l-10')};
  padding: 8px;
  padding-right: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;










`,
  '.visible--lg': (getTheme, getAsset) => `




 @media ( max-width : 1427px ) {
  
    display: none;
  


 }




`,
  '.visible--sm': (getTheme, getAsset) => `



 @media ( min-width : 1428px ) {
  
    display: none;
  


 }





`,
  '.visible--m': (getTheme, getAsset) => `
 @media ( max-width : 801px ) {
  
    display: none;
  


 }








`,
  '.dropdown': (getTheme, getAsset) => `
/* *************************************************** */
/* start - .ui.dropdown>.filtered.text,.dropdown [role="option"] */
&[role="option"] {
    
        border-top: 1px solid ${getTheme('--l-50')};
        padding: 12px 16px;
      
  }

/* end - .ui.dropdown>.filtered.text,.dropdown [role="option"] */
/* *************************************************** */

        position: relative;
      

& input.search {
  
        position: absolute;
        border-radius: 6px;
        border: 2px solid ${getTheme('--l-50')};
        padding: 12px 16px;
        width: 100%;
      
}
& input.search::placeholder {
  
        color: ${getTheme('--l-90')};
      
}
& .icon {
  
        position: absolute;
        top: 14px;
        right: 15px;
        content: '';
        width: 20px;
        height: 20px;
        background: url('${getAsset('./css/components/svg/Dropdown.svg')}') no-repeat;
      
}
& [role="option"] {
  
        border-top: 1px solid ${getTheme('--l-50')};
        padding: 12px 16px;
      
}








`,
  '.ui': (getTheme, getAsset) => `
/* *************************************************** */
/* start - .ui.dropdown>.filtered.text,.dropdown [role="option"] */
& > .filtered.text {
  
        border-top: 1px solid ${getTheme('--l-50')};
        padding: 12px 16px;
      
}

/* end - .ui.dropdown>.filtered.text,.dropdown [role="option"] */
/* *************************************************** */








`,
  '.l-align--center': (getTheme, getAsset) => `
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;










`,
  '.l-align--vcenter': (getTheme, getAsset) => `
  display: flex;
  align-items: center;










`,
  '.l-align--hcenter': (getTheme, getAsset) => `
  display: flex;
  justify-content: center;
  text-align: center;










`,
  '.l-vertical': (getTheme, getAsset) => `
  display: flex;
  flex-direction: column;










`,
  '.l-between': (getTheme, getAsset) => `
/* *************************************************** */
/* start - .l-between,.l-between--center */

  display: flex;
  justify-content: space-between;

/* end - .l-between,.l-between--center */
/* *************************************************** */








`,
  '.l-between--center': (getTheme, getAsset) => `
/* *************************************************** */
/* start - .l-between,.l-between--center */

  display: flex;
  justify-content: space-between;

/* end - .l-between,.l-between--center */
/* *************************************************** */

  display: flex;
  justify-content: space-between;


  align-items: center;










`,
  '.l-align--vtop': (getTheme, getAsset) => `
  display: flex;
  align-items: flex-start;










`,
  '.l-align--spacearound': (getTheme, getAsset) => `
  justify-content: space-around;










`,
  '.l--baseline': (getTheme, getAsset) => `
  align-items: baseline;










`,
  '.l-align--left': (getTheme, getAsset) => `
/* *************************************************** */
/* start - .l-align--left,.l-align--right */

  flex-grow: 1;
  flex-basis: 0;

/* end - .l-align--left,.l-align--right */
/* *************************************************** */








`,
  '.l-align--right': (getTheme, getAsset) => `
/* *************************************************** */
/* start - .l-align--left,.l-align--right */

  flex-grow: 1;
  flex-basis: 0;

/* end - .l-align--left,.l-align--right */
/* *************************************************** */

  flex-grow: 1;
  flex-basis: 0;


  text-align: right;










`,
  '.l-baseline': (getTheme, getAsset) => `
  display: flex;
  align-items: baseline;


& > * {
  
  margin: 0 0 0 14px;

}
& > *:first-child {
  
  margin: 0;

}








`,
  '.l-baseline-xspace': (getTheme, getAsset) => `& > * {
  
  margin: 0 0 0 20px;

}








`,
  '.l-vertical--reverse3': (getTheme, getAsset) => `& > * {
  
  order: 20;

}
& > *:first-child {
  
  order: 30;

}
& > *:last-child {
  
  order: 10;

}








`,
  '.l-align--auto': (getTheme, getAsset) => `
  margin: 0 auto;










`,
  '.l-valign-2-4': (getTheme, getAsset) => `
/* *************************************************** */
/* start - .l-valign-2-4 > img,.l-valign-2-4 > svg,.l-valign-2-4 > span */
& > img {
  
  display: inline-block;
  line-height: 2.4rem;
  vertical-align: middle;

}
& > svg {
  
  display: inline-block;
  line-height: 2.4rem;
  vertical-align: middle;

}
& > span {
  
  display: inline-block;
  line-height: 2.4rem;
  vertical-align: middle;

}

/* end - .l-valign-2-4 > img,.l-valign-2-4 > svg,.l-valign-2-4 > span */
/* *************************************************** */
& > span {
  
  display: inline-block;
  line-height: 2.4rem;
  vertical-align: middle;


  margin: 0 0 0 2px;

}








`,
  '.l-align--textcenter': (getTheme, getAsset) => `
  text-align: center;










`,
  '.l-flex': (getTheme, getAsset) => `
  display: flex;


& > input {
  
  min-width: 0;

}








`,
  '.l-grow': (getTheme, getAsset) => `
  flex-grow: 1;










`,
  '.l-block': (getTheme, getAsset) => `
  display: block;










`,
  '.l-inline-block': (getTheme, getAsset) => `
  display: inline-block;










`,
  '.l-relative': (getTheme, getAsset) => `
  position: relative;










`,
  '.l-absolute': (getTheme, getAsset) => `
  position: absolute;










`,
  '.l-top0': (getTheme, getAsset) => `
  top: 0;










`,
  '.l-flip--h': (getTheme, getAsset) => `
  transform: scaleX(-1);










`,
  '.l-ml--56': (getTheme, getAsset) => `
  margin-left: 56px;










`,
  '.l-ml--32': (getTheme, getAsset) => `
  margin-left: 32px;










`,
  '.l-ml--20': (getTheme, getAsset) => `
  margin-left: 20px;










`,
  '.l-ml--16': (getTheme, getAsset) => `
  margin-left: 16px;










`,
  '.l-ml--14': (getTheme, getAsset) => `
  margin-left: 14px;










`,
  '.l-ml--10': (getTheme, getAsset) => `
  margin-left: 10px;










`,
  '.l-ml--8': (getTheme, getAsset) => `
  margin-left: 8px;










`,
  '.l-ml--4': (getTheme, getAsset) => `
  margin-left: 4px;










`,
  '.l-ml--64': (getTheme, getAsset) => `
  margin-left: 64px;










`,
  '.l-mr--10': (getTheme, getAsset) => `
  margin-right: 10px;










`,
  '.l-mt--66': (getTheme, getAsset) => `
  margin-top: 66px;










`,
  '.l-mt--64': (getTheme, getAsset) => `
  margin-top: 64px;










`,
  '.l-mt--56': (getTheme, getAsset) => `
  margin-top: 56px;










`,
  '.l-mt--52': (getTheme, getAsset) => `
  margin-top: 52px;










`,
  '.l-mt--48': (getTheme, getAsset) => `
  margin-top: 48px;










`,
  '.l-mt--40': (getTheme, getAsset) => `
  margin-top: 40px;










`,
  '.l-mt--32': (getTheme, getAsset) => `
  margin-top: 32px;










`,
  '.l-mt--28': (getTheme, getAsset) => `
  margin-top: 28px;










`,
  '.l-mt--24': (getTheme, getAsset) => `
  margin-top: 24px;










`,
  '.l-mt--22': (getTheme, getAsset) => `
  margin-top: 22px;










`,
  '.l-mt--20': (getTheme, getAsset) => `
  margin-top: 20px;










`,
  '.l-mt--16': (getTheme, getAsset) => `
  margin-top: 16px;










`,
  '.l-mt--14': (getTheme, getAsset) => `
  margin-top: 14px;










`,
  '.l-mt--10': (getTheme, getAsset) => `
  margin-top: 10px;










`,
  '.l-mt--8': (getTheme, getAsset) => `
  margin-top: 8px;










`,
  '.l-mt--4': (getTheme, getAsset) => `
  margin-top: 4px;










`,
  '.l-mt--minus-6': (getTheme, getAsset) => `
  margin-top: -6px;










`,
  '.l-mt--minus-4': (getTheme, getAsset) => `
  margin-top: -4px;










`,
  '.l-ml--minus-40': (getTheme, getAsset) => `
  margin-left: -40px;










`,
  '.l-p--12-20': (getTheme, getAsset) => `
  padding: 12px 20px;










`,
  '.l-p--16-20': (getTheme, getAsset) => `
  padding: 16px 20px;










`,
  '.l-p--24-0-20-0': (getTheme, getAsset) => `
  padding: 24px 0 24px;










`,
  '.l-p--16-0': (getTheme, getAsset) => `
  padding: 16px 0;










`,
  '.l-p--16-24-32': (getTheme, getAsset) => `
  padding: 16px 24px 32px;










`,
  '.l-p--24': (getTheme, getAsset) => `
  padding: 24px;










`,
  '.l-p--18': (getTheme, getAsset) => `
  padding: 18px;










`,
  '.l-p--16': (getTheme, getAsset) => `
  padding: 16px;










`,
  '.l-p--10': (getTheme, getAsset) => `
  padding: 10px;










`,
  '.l-pt--24': (getTheme, getAsset) => `
  padding-top: 24px;










`,
  '.l-pt--16': (getTheme, getAsset) => `
  padding-top: 16px;










`,
  '.l-p--64-56': (getTheme, getAsset) => `
  padding: 64px 56px;










`,
  '.l-max-width--220': (getTheme, getAsset) => `
  max-width: 220px;










`,
  '.stretch': (getTheme, getAsset) => `
  width: 100%;










`,
  '.half': (getTheme, getAsset) => `
  width: 50%;










`,
  '.l-width-16': (getTheme, getAsset) => `
  width: 16px;










`,
  '.l-width--256': (getTheme, getAsset) => `
  width: 256px;










`,
  '.l-width--300': (getTheme, getAsset) => `
  width: 300px;










`,
  '.l-width--308': (getTheme, getAsset) => `
  width: 308px;










`,
  '.l-width--328': (getTheme, getAsset) => `
  width: 328px;










`,
  '.l-width--616': (getTheme, getAsset) => `
  width: 616px;










`,
  '.l-max-width--328': (getTheme, getAsset) => `
  max-width: 328px;










`,
  'url': (getTheme, getAsset) => `







`,
  'html': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */

  box-sizing: border-box;
  font-size: 62.5%;










`,
  'body': (getTheme, getAsset) => `
/* *************************************************** */
/* start - body,input,textarea,button */

  font-family: 'mint-regular';
  font-size: 1.4rem;

/* end - body,input,textarea,button */
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

/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */

  font-weight: normal;
  font-style: normal;
  line-height: 1;










`,
  'input': (getTheme, getAsset) => `
/* *************************************************** */
/* start - body,input,textarea,button */

  font-family: 'mint-regular';
  font-size: 1.4rem;

/* end - body,input,textarea,button */
/* *************************************************** */

/* *************************************************** */
/* start - body,input,textarea,a */

  color: ${getTheme('--primary-dark')};

/* end - body,input,textarea,a */
/* *************************************************** */
& input.form-control {
  
  font-size: 1.4rem;
  line-height: 2.24rem;
  height: auto;

  border-radius: 6px;
  border: 2px solid ${getTheme('--l-50')};
  padding-top: 12px;
  padding-right: 16px;
  padding-bottom: 12px;
  width: 100%;
  outline: none;

}
& .flag-dropdown.open {
  
  width: 100%;

}
& .country-list {
  
  border-radius: 8px;
  box-shadow: 0px 12px 80px rgba(143, 142, 163, 0.2);
  width: calc(100% + 20px);

}
& .country-list .country:first-child {
  
  margin-top: 4px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

}
& .country-list .country {
  
  background: white;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${getTheme('--l-50')};

}








`,
  'textarea': (getTheme, getAsset) => `
/* *************************************************** */
/* start - body,input,textarea,button */

  font-family: 'mint-regular';
  font-size: 1.4rem;

/* end - body,input,textarea,button */
/* *************************************************** */

/* *************************************************** */
/* start - body,input,textarea,a */

  color: ${getTheme('--primary-dark')};

/* end - body,input,textarea,a */
/* *************************************************** */








`,
  'button': (getTheme, getAsset) => `
/* *************************************************** */
/* start - body,input,textarea,button */

  font-family: 'mint-regular';
  font-size: 1.4rem;

/* end - body,input,textarea,button */
/* *************************************************** */

  font-family: 'mint-regular';
  font-size: 1.4rem;


  cursor: pointer;


&:hover {
    
  color: ${getTheme('--primary-green')};

  }
&:hover path {
    
  stroke: ${getTheme('--primary-green')};

  }
& circle {
  
  transition: all 0.2s;

}
& circle {
  
  transition: stroke 0.2s;

}








`,
  '.bg--white': (getTheme, getAsset) => `
  background: white;










`,
  '.bg--l-5': (getTheme, getAsset) => `
  background: ${getTheme('--l-5')};










`,
  '.bg--primary-green': (getTheme, getAsset) => `
  background: ${getTheme('--primary-green')};










`,
  '.bg--secondary-blue': (getTheme, getAsset) => `
  background-color: ${getTheme('--secondary-blue')};










`,
  '.bg--secondary-green': (getTheme, getAsset) => `
  background-color: ${getTheme('--secondary-green')};










`,
  '.bg--secondary-ochre': (getTheme, getAsset) => `
  background-color: ${getTheme('--secondary-ochre')};










`,
  '.bg--secondary-red': (getTheme, getAsset) => `
  background-color: ${getTheme('--secondary-red')};










`,
  '.bg--secondary-salmon': (getTheme, getAsset) => `
  background-color: ${getTheme('--secondary-salmon')};










`,
  '.bg--primary-dark': (getTheme, getAsset) => `
  background-color: ${getTheme('--primary-dark')};










`,
  '.f--l-90': (getTheme, getAsset) => `
  color: ${getTheme('--l-90')};










`,
  '.f--l-80': (getTheme, getAsset) => `
  color: ${getTheme('--l-80')};










`,
  '.f--secondary-darkgreen': (getTheme, getAsset) => `
  color: ${getTheme('--secondary-darkgreen')};










`,
  '.f--secondary-red': (getTheme, getAsset) => `
  color: ${getTheme('--secondary-red')};










`,
  'a': (getTheme, getAsset) => `
/* *************************************************** */
/* start - body,input,textarea,a */

  color: ${getTheme('--primary-dark')};

/* end - body,input,textarea,a */
/* *************************************************** */

/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */

/* *************************************************** */
/* start - main,section,article */

  display: block; 

/* end - main,section,article */
/* *************************************************** */

  color: ${getTheme('--primary-dark')};


  text-decoration: none;










`,
  '.dark': (getTheme, getAsset) => `
/* *************************************************** */
/* start - body.dark,.dark input,.dark textarea,.dark .h1,.dark .h2,.dark .h3,.dark .h5,.dark .h5,.dark .h6,.dark .h7 */
& input {
  
  color: ${getTheme('--primary-white')};

}
& textarea {
  
  color: ${getTheme('--primary-white')};

}
& .h1 {
  
  color: ${getTheme('--primary-white')};

}
& .h2 {
  
  color: ${getTheme('--primary-white')};

}
& .h3 {
  
  color: ${getTheme('--primary-white')};

}
& .h5 {
  
  color: ${getTheme('--primary-white')};

}
& .h5 {
  
  color: ${getTheme('--primary-white')};

}
& .h6 {
  
  color: ${getTheme('--primary-white')};

}
& .h7 {
  
  color: ${getTheme('--primary-white')};

}

/* end - body.dark,.dark input,.dark textarea,.dark .h1,.dark .h2,.dark .h3,.dark .h5,.dark .h5,.dark .h6,.dark .h7 */
/* *************************************************** */
&:hover {
     
  background-color: ${getTheme('--primary-dark')};

  }
& .h7 {
  
  color: ${getTheme('--primary-white')};

}








`,
  'time': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */

  color: ${getTheme('--l-80')};










`,
  '.react-tel-input': (getTheme, getAsset) => `
  position: relative;


& input.form-control {
  
  font-size: 1.4rem;
  line-height: 2.24rem;
  height: auto;

  border-radius: 6px;
  border: 2px solid ${getTheme('--l-50')};
  padding-top: 12px;
  padding-right: 16px;
  padding-bottom: 12px;
  width: 100%;
  outline: none;

}
& .flag-dropdown.open {
  
  width: 100%;

}
& .country-list {
  
  border-radius: 8px;
  box-shadow: 0px 12px 80px rgba(143, 142, 163, 0.2);
  width: calc(100% + 20px);

}
& .country-list .country:first-child {
  
  margin-top: 4px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

}
& .country-list .country {
  
  background: white;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${getTheme('--l-50')};

}








`,
  '.wrap-2': (getTheme, getAsset) => `
  display: flex;
  margin: 0 auto;
  width: 1428px;
  min-height: 100vh;
  padding: 0 0 25px;







 @media ( max-width : 1427px ) {
  
    width: 820px;
    display: block;
    padding: 0 0 25px;
  


 }



 @media ( max-width : 822px ) {
  
    width: 100%;
  


 }


`,
  '.wrap-home': (getTheme, getAsset) => `
  padding: 40px 96px 190px 96px;
  width: 928px;







 @media ( max-width : 1427px ) {
  
    padding: 0;
    width: auto;
    display: block;
    min-width: 386px;
    position: relative;
  


 }




`,
  '.wrap-home__aside': (getTheme, getAsset) => `
  max-width: 500px; 
  position: relative;










`,
  '.l-fixed--right-lg': (getTheme, getAsset) => `







`,
  '.wrap-onboard': (getTheme, getAsset) => `
  min-height: 100vh;
  display: flex;
  flex-direction: column;






 @media ( min-width : 1428px ) {
  
    width: 928px;
  


 }


 @media ( max-width : 1427px ) {
  
    margin: 0 auto;
    width: 100%;
  


 }




 @media ( min-width : 802px ) {
  
    padding: 88px 0; 
  


 }

`,
  '.wrap-onboard__pt': (getTheme, getAsset) => `
/* *************************************************** */
/* start - .wrap-onboard__pt,.wrap-onboard__pt--xl,.wrap-onboard__pt--sm */

 

/* end - .wrap-onboard__pt,.wrap-onboard__pt--xl,.wrap-onboard__pt--sm */
/* *************************************************** */

 @media ( max-width : 801px ) {
  
/* *************************************************** */
/* start - .wrap-onboard__pt,.wrap-onboard__pt--xl */

    padding-top: 44px;
  
/* end - .wrap-onboard__pt,.wrap-onboard__pt--xl */
/* *************************************************** */

 }








 @media ( min-width : 802px ) {
  
    padding-top: 66px;
  


 }

`,
  '.wrap-onboard__pt--xl': (getTheme, getAsset) => `
/* *************************************************** */
/* start - .wrap-onboard__pt,.wrap-onboard__pt--xl,.wrap-onboard__pt--sm */

 

/* end - .wrap-onboard__pt,.wrap-onboard__pt--xl,.wrap-onboard__pt--sm */
/* *************************************************** */

 @media ( max-width : 801px ) {
  
/* *************************************************** */
/* start - .wrap-onboard__pt,.wrap-onboard__pt--xl */

    padding-top: 44px;
  
/* end - .wrap-onboard__pt,.wrap-onboard__pt--xl */
/* *************************************************** */

    padding-top: 44px;
  


 }








 @media ( min-width : 802px ) {
  
    
    padding-top: 116px;
  


 }

`,
  '.wrap-onboard__pt--sm': (getTheme, getAsset) => `
/* *************************************************** */
/* start - .wrap-onboard__pt,.wrap-onboard__pt--xl,.wrap-onboard__pt--sm */

 

/* end - .wrap-onboard__pt,.wrap-onboard__pt--xl,.wrap-onboard__pt--sm */
/* *************************************************** */

 



 @media ( max-width : 801px ) {
  
    padding-top: 30px;
  


 }




 @media ( min-width : 1428px ) {
  
    padding-top: 52px;
  


 }





 @media ( min-width : 802px ) {
  
    padding-top: 40px;
  


 }

`,
  '.wrap-onboard__content': (getTheme, getAsset) => `
  padding: 65px 60px 60px 60px;










`,
  '.wrap-onboard__aside': (getTheme, getAsset) => `
  
  padding: 108px 0; 
  width: 500px;










`,
  '.wrap-onboard__terms': (getTheme, getAsset) => `
 @media ( max-width : 801px ) {
  
    padding: 48px 24px;
  


 }








 @media ( min-width : 802px ) {
  
    padding: 48px 156px;
    width: 616px;
    box-sizing: content-box;
  


 }

`,
  '.wrap-profile': (getTheme, getAsset) => `
  width: 100%;






 @media ( min-width : 1428px ) {
  
    padding: 63px 306px;
  


 }


 @media ( max-width : 1427px ) {
  
    padding: 42px 24px;
  


 }




`,
  '.wrap-raising__main': (getTheme, getAsset) => `
  display: flex;






 @media ( min-width : 1428px ) {
  
/* *************************************************** */
/* start - .wrap-raising__main,.wrap-raising__aside */

    padding: 56px 60px 60px 60px;
  
/* end - .wrap-raising__main,.wrap-raising__aside */
/* *************************************************** */

    width: 928px;
  


 }


 @media ( max-width : 1427px ) {
  
    margin: 0 auto;
    width: 100%;
    flex-direction: column;
  

    padding: 22px 0 0 0;
  


 }




`,
  '.wrap-raising__aside': (getTheme, getAsset) => `
  






 @media ( min-width : 1428px ) {
  
/* *************************************************** */
/* start - .wrap-raising__main,.wrap-raising__aside */

    padding: 56px 60px 60px 60px;
  
/* end - .wrap-raising__main,.wrap-raising__aside */
/* *************************************************** */

    padding: 56px 60px 60px 60px;
  

    width: 500px;
  


 }


 @media ( max-width : 1427px ) {
  
    padding: 48px 0 0 0;
    margin: 0 auto;
    width: 328px;
  


 }




`,
  '.wrap-raising__main--616': (getTheme, getAsset) => `
 






 @media ( min-width : 1428px ) {
  
    width: 616px;
  


 }


 @media ( max-width : 1427px ) {
  
    width: 328px;
  


 }




`,
  '.all': (getTheme, getAsset) => `
  position: relative;
  z-index: 200; 










`,
  '#design': (getTheme, getAsset) => `
  
  background: url('${getAsset('./design/0010 - Create account - popup from follow raise.png')}') no-repeat 50% 0;
  position: absolute;
  top: 0;
  left:0;
  width: 100%;
  height: 100%;
  opacity: 0.3;










`,
  '.sr-only': (getTheme, getAsset) => `
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  border: 0;










`,
  'li': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */

  list-style-type: none;










`,
  '.fieldset': (getTheme, getAsset) => `
  border: 0;
  text-indent: 0;


&:first-child {
    
  border-top: 0;

  }








`,
  '.legend': (getTheme, getAsset) => `

  width: 100%;
  border: 0;
  text-indent: 0;
   










`,
  'span': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */

  display: inline-block;










`,
  '.header__above-slide': (getTheme, getAsset) => `
  position: relative;
  z-index: 100;
  display: flex;
  width: calc(100% - 106px);
  padding: 0 60px 0 56px;
  background: ${getTheme('--primary-white')};
  border-bottom: 1px solid ${getTheme('--l-10')}; 







 @media ( max-width : 1427px ) {
  
    justify-content: space-between;
    padding: 20px 24px;
    width: calc(100% - 44px);
  


 }




`,
  'header': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */

  margin: 0 auto;
  width: 1428px; 







 @media ( max-width : 1427px ) {
  
    width: auto;
 


 }




`,
  '.l-fixed--top': (getTheme, getAsset) => `
  position: fixed;
  top: 0;
  background: ${getTheme('--primary-white')};
  z-index: 100; 
  width: 100%;




 @media ( max-width : 821px ) {
  
    width: 100%;
    left: 0;
  


 }



 @media ( min-width : 1428px ) {
  
    left: calc(((100vw - 1428px) / 2) - 10px); 
  

& + div {
   
    margin-top: 75px;
  
}

 }


 @media ( max-width : 1427px ) {
  
/* *************************************************** */
/* start - .l-fixed--top ~ div,.l-fixed--top ~ nav */
& ~ div {
   
    margin-top: 65px;
  
}
& ~ nav {
   
    margin-top: 65px;
  
}

/* end - .l-fixed--top ~ div,.l-fixed--top ~ nav */
/* *************************************************** */
& ~ nav {
   
    margin-top: 65px;
  
}

 }





 @media ( min-width : 802px ) and ( max-width : 1427px ) {
  
    left: calc(((100vw - 820px) / 2) - 10px); 
    width: 822px; 
  


 }
`,
  '.header__col1': (getTheme, getAsset) => `



 @media ( min-width : 1428px ) {
    
    margin-left: 62px;
    padding: 13px 0;
    display: flex;
  


 }


 @media ( max-width : 1427px ) {
    
    margin-top: 16px;
  


 }




`,
  '.header__col2': (getTheme, getAsset) => `



 @media ( min-width : 1428px ) {
   
    width: 516px;
    justify-content: flex-end;
    display: flex;
  


 }


 @media ( max-width : 1427px ) {
  
    width: 328px;
  


 }




`,
  '.logo': (getTheme, getAsset) => `
  padding: 17px 0;


& a {
  
  display: flex; 
  align-items: center;

}





 @media ( max-width : 1427px ) {
  
    padding: 0;
  


 }




`,
  '.logo__svg': (getTheme, getAsset) => `
  height: 40px;
  width: 40px;
  width: auto;







 @media ( max-width : 1427px ) {
  
    width: 17px;
    height: 17px;
    
    
    

    
  


 }




`,
  '.logo__label': (getTheme, getAsset) => `




 @media ( max-width : 1427px ) {
  
    margin: 0 0 0 4px;
    padding: 4px 0 0 0; 
  


 }




`,
  '.header__ul': (getTheme, getAsset) => `



 @media ( min-width : 1428px ) {
  
/* *************************************************** */
/* start - .header__ul,.header__ul2 */

    display: flex;
  
    display: flex;
  
/* end - .header__ul,.header__ul2 */
/* *************************************************** */

 }


 @media ( max-width : 1427px ) {
  
    margin-top: 16px;
  


 }




`,
  '.header__ul2': (getTheme, getAsset) => `



 @media ( min-width : 1428px ) {
  
/* *************************************************** */
/* start - .header__ul,.header__ul2 */

    display: flex;
  
/* end - .header__ul,.header__ul2 */
/* *************************************************** */

    display: flex;
  


 }





`,
  '.header__link': (getTheme, getAsset) => `
/* *************************************************** */
/* start - .header__link,.header__link span,.header__btn */

  white-space: nowrap;
& span {
  
  white-space: nowrap;

}

/* end - .header__link,.header__link span,.header__btn */
/* *************************************************** */

  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  position: relative;






 @media ( min-width : 1428px ) {
  
/* *************************************************** */
/* start - .header__link,.header__btn */

    margin-left: 20px;
  
/* end - .header__link,.header__btn */
/* *************************************************** */

 }


 @media ( max-width : 1427px ) {
  
/* *************************************************** */
/* start - .header__link,.header__btn */

    margin: 13px 0 0;
  
/* end - .header__link,.header__btn */
/* *************************************************** */

    padding-left: 0;
    padding-right: 0;
  


 }




`,
  '.header__btn': (getTheme, getAsset) => `
/* *************************************************** */
/* start - .header__link,.header__link span,.header__btn */

  white-space: nowrap;

/* end - .header__link,.header__link span,.header__btn */
/* *************************************************** */

  white-space: nowrap;






 @media ( min-width : 1428px ) {
  
/* *************************************************** */
/* start - .header__link,.header__btn */

    margin-left: 20px;
  
/* end - .header__link,.header__btn */
/* *************************************************** */

    margin-left: 20px;
  


 }


 @media ( max-width : 1427px ) {
  
/* *************************************************** */
/* start - .header__link,.header__btn */

    margin: 13px 0 0;
  
/* end - .header__link,.header__btn */
/* *************************************************** */

    margin: 13px 0 0;
  

    width: 100%;
  


 }




`,
  '.header__svg-container': (getTheme, getAsset) => `
  display: flex;
  align-items: center;










`,
  '.header__sign-spinner': (getTheme, getAsset) => `
  margin: -10px 26px 0 -26px;










`,
  '.header-mobile': (getTheme, getAsset) => `
  display: block;
  position: absolute;
  top: -100vh;
  left: 0;
  z-index: 90; 
  background: white;
  height: 100vh;
  width: 100vw;
  padding: 0 20px;
  opacity: 0.2;


&[data-transition="entered"] {
    
  top: 67px;
  opacity: 1;

  }








`,
  'div': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */
&:before {
    
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  background: url('${getAsset('./svg/ChevronRight.svg')}') no-repeat 100% 50%;
  background-size: 16px 16px;
  width: 16px;
  height: 100%;

  }
&:after {
    
  content: '';
  position: absolute;
  left: 0;
  width: 100%;
  bottom: 0;
  border-bottom: 1px solid ${getTheme('--l-50')};

  }
&:hover:before {
    
  filter: invert(75%) sepia(62%) saturate(5319%) hue-rotate(124deg) brightness(94%) contrast(82%);

  }
&:hover:after {
    
  
  
  border-color: ${getTheme('--primary-green')};

  }








`,
  'applet': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'object': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'iframe': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'h1': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'h2': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'h3': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'h4': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'h5': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'h6': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'p': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */
&:before {
    
  content: '';
  position: absolute;
  top: 22px;
  left: 0;
  border: 1px solid ${getTheme('--l-50')};
  width: 100%;

  }




 @media ( min-width : 1428px ) {
  & + div {
   
    margin-top: 75px;
  
}

 }


 @media ( max-width : 1427px ) {
  & ~ nav {
   
    margin-top: 65px;
  
}

 }




`,
  'blockquote': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'pre': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'abbr': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'acronym': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'address': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'big': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'cite': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'code': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'del': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'dfn': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'em': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'img': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'ins': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'kbd': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'q': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  's': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */

/* *************************************************** */
/* start - main,section,article */

  display: block; 

/* end - main,section,article */
/* *************************************************** */
& dd {
  
  margin: 1px 0 0 2px;
  font-size: 1.3rem;
  line-height: 2.08rem;
  font-family: "mint-regular";

}
& > * {
  
  margin: 20px 32px 0 0;
  width: 56px;
  height: 56px;
  cursor: pointer;

}
& > *:nth-child(4n + 4) {
  
  margin-right: 0;

}





 @media ( max-width : 1427px ) {
  & dl {
  
    margin: 40px 0 0;
  
}

 }




`,
  'samp': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'small': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'strike': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'strong': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'sub': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'sup': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'tt': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'b': (getTheme, getAsset) => `
/* *************************************************** */
/* start - body,input,textarea,button */

  font-family: 'mint-regular';
  font-size: 1.4rem;

  font-family: 'mint-regular';
  font-size: 1.4rem;

/* end - body,input,textarea,button */
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

/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'u': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'i': (getTheme, getAsset) => `
/* *************************************************** */
/* start - body,input,textarea,button */

  font-family: 'mint-regular';
  font-size: 1.4rem;

/* end - body,input,textarea,button */
/* *************************************************** */

/* *************************************************** */
/* start - body,input,textarea,a */

  color: ${getTheme('--primary-dark')};

/* end - body,input,textarea,a */
/* *************************************************** */

/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'center': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'dl': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'dt': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'dd': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'ol': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'ul': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'fieldset': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */
&:first-child {
    
  border-top: 0;

  }








`,
  'form': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */
&:hover input {
    
  color: ${getTheme('--primary-green')};

  }
&:hover {
    
  color: ${getTheme('--primary-green')};

  }
&:hover svg circle {
    
  stroke: ${getTheme('--primary-green')};

  }
& input::placeholder {
  
  color: ${getTheme('--l-80')};

}








`,
  'label': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */
&:before {
    
  content: '';
  background: url('${getAsset('./svg/error-dot.svg')}') no-repeat 0 50%;
  width: 4px;
  height: 4px;
  margin: 0 4px;

  }








`,
  'legend': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'table': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'caption': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */
& svg {
  
  margin: -4px 0 0 0; 

}








`,
  'tbody': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'tfoot': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'thead': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'tr': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'th': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */
&:hover path[fill] {
    
  fill: ${getTheme('--primary-green')};

  }
&:hover path[fill] {
    
  fill: ${getTheme('--primary-green')};

  }
&:hover path[fill] {
    
  fill: white;

  }
&:hover path[fill] {
    
  fill: ${getTheme('--primary-green')};

  }
&:hover .logo__svg  path[fill] {
    
  fill: white;

  }
&:hover .logo__svg  path[fill-rule="evenodd"] {
    
  fill: ${getTheme('--primary-green')};

  }




 @media ( min-width : 1428px ) {
  &: 430px;
    background: $ {
    getTheme('--raisetype-fundraiser')
  }

 }





`,
  'td': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'article': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */

/* *************************************************** */
/* start - main,section,article */

  display: block; 

/* end - main,section,article */
/* *************************************************** */

  display: block; 










`,
  'main': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */

/* *************************************************** */
/* start - main,section,article */

  display: block; 

/* end - main,section,article */
/* *************************************************** */








`,
  'aside': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'canvas': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'details': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'embed': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'figure': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */
& .icon-label {
  
  margin: 8px 0 0;
  justify-content: center;

}








`,
  'figcaption': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */
& svg {
  
  margin: -4px 0 0 0; 

}








`,
  'footer': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'hgroup': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'menu': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'nav': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'output': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'ruby': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'section': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */

/* *************************************************** */
/* start - main,section,article */

  display: block; 

/* end - main,section,article */
/* *************************************************** */








`,
  'summary': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'mark': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'audio': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,
  'video': (getTheme, getAsset) => `
/* *************************************************** */
/* start - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */

  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  border-image-width: 0;

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */








`,

};
    export default selectors;
  