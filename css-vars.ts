
    export type TFuncStr = (str: string, str2?: string, str3?: string) => string;
    export interface Selectors {
      [key: string]: (prop: TFuncStr) => string;
    }
    const selectors: Selectors = {
  'border-color': getTheme => `






`,
  'color': getTheme => `






`,
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

/* *************************************************** */
/* start - .btn--bg,.btn--bg path */

  transition: all 0.2s;
& path {
  
  transition: all 0.2s;

}

/* end - .btn--bg,.btn--bg path */
/* *************************************************** */

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


  color: ${getTheme('--primary-green')};

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
  outline: none;
  cursor: pointer;


&:hover path {
    
  stroke: ${getTheme('--primary-green')};

  }
&:hover path[fill] {
    
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
& circle {
  
    transition: all 0.2s;

}







`,
  '.btn--nostyle': getTheme => `
  background: 0;
  border: 0;
  position: relative;
  outline: none;









`,
  '.btn--close': getTheme => `
  
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
  '.btn--aside-legend': getTheme => ` 
  position: absolute;
  left: calc(100% - 40px);
  top: -8px;









`,
  '.btn--bg': getTheme => `
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
  '.btn--grey-50': getTheme => `
  border: 0;
  background-color: ${getTheme('--l-50')};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;


&:hover {
    
  background:  ${getTheme('--primary-green')};
  color: white;
  border-radius: 8px;

  }







`,
  '.btn--toast': getTheme => `
  position: absolute;
  top: -10px;
  z-index: 300; 
  padding: 12px 50px 12px 16px;
  height: 45px;


&:after {
    
  position: absolute;
  right: 16px;
  content: '';
  background: url("./svg/Cross Dismiss.svg") no-repeat 100% 50%;
  background-size: 19px 19px;
  width: 19px;
  height: 19px;

  }

 @media ( max-width : 801px ) {
  
    margin-top: 26px;
  


 }







`,
  '.btn--typeof-user': getTheme => `
  position: relative;
  padding: 16px 16px 16px 80px;
  width: 100%;
  height: 80px;
  text-align: left;
  background: white url('./svg/typeof-user.svg') no-repeat 16px 50%;
  background-size: 48px 48px;
  border:0;
  transition: all 0.2s;


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
  background: url('./svg/ChevronRight.svg') no-repeat 100% 50%;
  background-size: 16px 16px;
  width: 16px;
  height: 100%;

  }







`,
  '.divider-wrap': getTheme => `
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
  '.divider-wrap__overlay': getTheme => `
  position: relative;
  z-index: 10;
  padding: 16px 20px;
  









`,
  '.avatars': getTheme => `
  display: flex;
  flex-wrap: wrap;


& > input {
  
  margin: 20px 32px 0 0;

}
& > input:nth-child(4n + 4) {
  
  margin-right: 0;

}







`,
  '.cssicon': getTheme => `
  width: 40px;
  height: 40px;
  border: 3px solid white;
  background: ${getTheme('--secondary-blue')};
  border-radius: 50%;









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







`,
  '.desc': getTheme => `
  clear: both;


& p {
  
  margin: 20px 0 0  0;
  padding: 0;
  line-height: 2.24rem;

}







`,
  '.desc__img': getTheme => `
  margin: 16px 0 0;
  display:inline-block;
  width: 100%;









`,
  'var': getTheme => `
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
  'rgba': getTheme => `






`,
  '.desc__readmore': getTheme => `
  position: relative;
  z-index: 20; 
  margin: -24px auto 0 auto;
  width: 184px;
  background: ${getTheme('--l-5')};
  text-align: center;









`,
  '.dialog-bg': getTheme => `
  top: -100%;
  left: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  opacity: 0.7; 
  background-color: ${getTheme('--primary-dark')};
  
  opacity: 0;
  cursor: pointer;


&[data-css-transition="entered"] {
    
  opacity: 0.7;
  top: 0;

  }







`,
  '.dialog-create-acc': getTheme => `
  margin: 0 auto;
  width: 100%;
  position: relative;
  z-index: 200; 
  display: flex;
  opacity: 0; 


&[data-css-transition="exiting"] {
    
  opacity: 0;

  }
&[data-css-transition="entered"] {
    
  opacity: 1;

  }


 @media ( max-width : 1427px ) {
  
    
    position: fixed;
    top: -50%; 
    left: 50%;
    margin-left: -184px;
    width: 368px;
    flex-direction: column;
    border-radius: 24px;
    overflow: hidden;
  

&[data-css-transition="exiting"] {
    
    top: -50%;
  
  }
&[data-css-transition="entered"] {
    
    top: 0;
  
  }

 }


 @media ( min-width : 1428px ) {
  
/* *************************************************** */
/* start - .dialog-create-acc[data-css-transition="entering"],.dialog-create-acc[data-css-transition="exiting"] */
&[data-css-transition="entering"] {
    
    top: 20%;
  
  }
&[data-css-transition="exiting"] {
    
    top: 20%;
  
  }

/* end - .dialog-create-acc[data-css-transition="entering"],.dialog-create-acc[data-css-transition="exiting"] */
/* *************************************************** */

    position: fixed;
    top: -100%; 
    left: 50%;
    margin-left: -417px;
    margin-top: -208px;
    width: 834px;
    height: 417px;
    max-height: 100vh;
    
    border-radius: 24px;
    overflow: hidden;
  

&[data-css-transition="exiting"] {
    
    top: 20%;
  
  }
&[data-css-transition="entered"] {
    
    top: 50%;
  
  }

 }





`,
  '.dialog-create-ac__close': getTheme => `
  position: absolute;
  outline: none;




 @media ( max-width : 1427px ) {
  
    top: 16px;
    right: 24px;
  


 }


 @media ( min-width : 1428px ) {
  
    top: 56px;
    right: 56px;
  


 }





`,
  '.dialog-create-acc__logo': getTheme => `
  width: 25px;
  height: 25px;





 @media ( min-width : 1428px ) {
  
    width: 40px;
    height: 40px;
  


 }





`,
  '.dialog-create-acc__col1': getTheme => `

 @media ( max-width : 1427px ) {
  
/* *************************************************** */
/* start - .dialog-create-acc__col1,.dialog-create-acc__col2 */

    padding: 26px 24px;
  
/* end - .dialog-create-acc__col1,.dialog-create-acc__col2 */
/* *************************************************** */

 }


 @media ( min-width : 1428px ) {
  
/* *************************************************** */
/* start - .dialog-create-acc__col1,.dialog-create-acc__col2 */

    padding: 64px 56px;
    display: flex;
    flex-direction: column;
  
/* end - .dialog-create-acc__col1,.dialog-create-acc__col2 */
/* *************************************************** */

    width: 400px;
  


 }





`,
  '.dialog-create-acc__col2': getTheme => `

 @media ( max-width : 1427px ) {
  
/* *************************************************** */
/* start - .dialog-create-acc__col1,.dialog-create-acc__col2 */

    padding: 26px 24px;
  
/* end - .dialog-create-acc__col1,.dialog-create-acc__col2 */
/* *************************************************** */

    padding: 26px 24px;
  


 }


 @media ( min-width : 1428px ) {
  
/* *************************************************** */
/* start - .dialog-create-acc__col1,.dialog-create-acc__col2 */

    padding: 64px 56px;
    display: flex;
    flex-direction: column;
  
/* end - .dialog-create-acc__col1,.dialog-create-acc__col2 */
/* *************************************************** */

    padding: 64px 56px;
    display: flex;
    flex-direction: column;
  

    width: 432px;
  


 }





`,
  '.dialog-create-acc__mt-1': getTheme => `
  padding-right: 30px;




 @media ( max-width : 1427px ) {
  
    margin-top: 32px;
  


 }


 @media ( min-width : 1428px ) {
  
    margin-top: 56px;
  


 }





`,
  '.dialog-create-acc__mt-2': getTheme => `

 @media ( max-width : 1427px ) {
  
    margin-top: 20px;
  


 }


 @media ( min-width : 1428px ) {
  
    margin-top: 32px;
  


 }





`,
  '.dialog-create-acc__mt-4': getTheme => `

 @media ( max-width : 1427px ) {
  
    margin-top: 24px;
  


 }


 @media ( min-width : 1428px ) {
  
    margin-top: 56px;
  


 }





`,
  '.wrap-home__pad': getTheme => `
  margin-left: 60px;
  margin-right: 60px;




 @media ( max-width : 1427px ) {
  
    margin-left: 24px;
    margin-right: 24px;
  


 }






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
  '.figure__img': getTheme => `
  display: block;
  margin: 0 auto;









`,
  '.figure--xpad': getTheme => `
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
  '.figure': getTheme => `
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
  
    padding: 40px 32px;
  
/* end - .figure,.figure--xpad */
/* *************************************************** */

 }






`,
  '.figure__btn': getTheme => `
  margin: 24px 0 0 0;









`,
  '.figcaption': getTheme => `
  display: inline-block;


& svg {
  
  margin: -4px 0 0 0; 

}







`,
  '.h1--lineh': getTheme => `
/* *************************************************** */
/* start - .h1,.h1--lineh */

  line-height: 3.45rem;

/* end - .h1,.h1--lineh */
/* *************************************************** */

  line-height: 3.45rem;









`,
  '.h1': getTheme => `
/* *************************************************** */
/* start - .h1,.h1--lineh */

  line-height: 3.45rem;

  line-height: 3.45rem;

/* end - .h1,.h1--lineh */
/* *************************************************** */

  font-size: 2.6rem;
  
  font-family: "mint-extrabold";









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
  '.h2--lineh': getTheme => `
/* *************************************************** */
/* start - .h2,.h2--lineh */

  line-height: 2.915rem;

/* end - .h2,.h2--lineh */
/* *************************************************** */

  line-height: 2.915rem;









`,
  '.h3': getTheme => `
  font-size: 1.8rem;
  
  font-family: "mint-bold";









`,
  '.h4': getTheme => `
  font-size: 1.6rem;
  
  font-family: "mint-bold";
  line-height: 2rem; 









`,
  '.h5': getTheme => `
  
  font-size: 1.4rem;
  font-family: "mint-bold";
  line-height: 2.24rem;









`,
  '.h6': getTheme => `
  
  font-family: "mint-bold";
  font-size: 1.3rem;
  line-height: 2.08rem









`,
  '.h6--semi': getTheme => `
  font-family: "sharp_sanssemibold";
  font-size: 1.3rem;









`,
  '.h7': getTheme => `
  font-family: "sharp_sansmedium";
  font-size: 1.2rem;









`,
  '.input-text': getTheme => `
  border-radius: 6px;
  border: 2px solid ${getTheme('--l-50')};
  padding: 12px 16px;
  width: 100%;


&::placeholder {
    
  color: ${getTheme('--l-90')};

  }







`,
  '.label-overlay': getTheme => `
  position: relative;
  display: inline-block;


& > span:first-child {
  
  position: absolute;
  left: 12px;
  top: -10px;
  background: ${getTheme('--l-5')};
  padding: 0 4px;
  z-index: 10;

}







`,
  '.input__error': getTheme => `&:after {
    
  content: '';
  position: absolute;
  right: 14px;
  top: 14px;
  background: url('./svg/error-icon.svg') no-repeat;
  background-size: 20px 20px;
  width: 20px;
  height: 20px;

  }







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
  '.investment__target': getTheme => `
  color: ${getTheme('--l-90')}; 
  line-height: 3.45rem; 









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
& circle {
  
    transition: all 0.2s;

}
& path {
  
  transition: all 0.2s;

}







`,
  '.link--underline': getTheme => `&:after {
    
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
  'left': getTheme => `






`,
  'border': getTheme => `






`,
  '.link--inline': getTheme => `
  color: ${getTheme('--primary-green')};


&:hover {
    
  text-decoration: underline;

  }







`,
  '.list-link': getTheme => `
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

  padding: 24px 0 20px 0;
  display: block;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;


&:after {
    
  transition: all 0.2s;

  }
&:hover {
    
  color: ${getTheme('--primary-green')};

  }







`,
  '.list-link--arrow': getTheme => `&:before {
    
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  background: url('./svg/ChevronRight.svg') no-repeat 100% 50%;
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
  '.list-upload__li': getTheme => `
  width: 100%;
  border-bottom: 1px solid ${getTheme('--l-50')};









`,
  '.list-upload__button': getTheme => `
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
  '.list-upload': getTheme => `
  padding: 32px 32px 40px 32px;
  background: white;
  border-radius: 4px;









`,
  '.menu-link': getTheme => `
  padding: 17px 0;
  display: block;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;









`,
  '.phone-dropdown': getTheme => `
  display: inline-block;
  width: 92px;
  border-radius: 4px;
  background: ${getTheme('--l-10')};









`,
  '.slideshow__slides': getTheme => `
  position: relative;
  overflow: hidden;




 @media ( max-width : 1427px ) {
  
    height: 600px;
  


 }


 @media ( min-width : 1428px ) {
  
    width: 736px;
    height: 736px;
  


 }


 @media ( max-width : 600px ) {
  
    height: 100vw;
    min-height: 386px;
  


 }




`,
  '.slideshow__image': getTheme => `
/* *************************************************** */
/* start - .slideshow__image,.slideshow__video */

  height: auto;
  width: 100%;

/* end - .slideshow__image,.slideshow__video */
/* *************************************************** */







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
  '.slideshow__prev': getTheme => `
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
  '.slideshow__next': getTheme => `
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
  '.slideshow__links': getTheme => `
  display: flex;
  justify-content: space-between;
  padding: 32px 60px 0 60px;




 @media ( max-width : 1427px ) {
  
    padding: 18px 24px 0 24px;
  


 }






`,
  '.slideshow__indicators': getTheme => `
  display: flex;
  height: 20px;
  align-items: center;









`,
  '.slideshow__indicator': getTheme => `
/* *************************************************** */
/* start - .slideshow__indicator--active svg,.slideshow__indicator:hover svg */
& svg {
  
  width: 9px;
  height: 9px;

}
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
  '.slideshow__indicator--active': getTheme => `
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
  '.text4': getTheme => `
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
  '.text-wrap--4': getTheme => `
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
  '.text-wrap--5': getTheme => `
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
  '.text5': getTheme => `
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
  '.text6': getTheme => `
  font-size: 1.3rem;
  font-family: "mint-regular";









`,
  '.text7': getTheme => `
  font-size: 1.2rem;
  font-family: "mint-regular";
  line-height: 1.92rem; 









`,
  '.visible--lg': getTheme => `

 @media ( max-width : 1427px ) {
  
    display: none;
  


 }






`,
  '.visible--sm': getTheme => `


 @media ( min-width : 1428px ) {
  
    display: none;
  


 }





`,
  '.visible--m': getTheme => `
 @media ( max-width : 801px ) {
  
    display: none;
  


 }







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









`,
  '.l-between': getTheme => `
/* *************************************************** */
/* start - .l-between,.l-between--center */

  display: flex;
  justify-content: space-between;

  display: flex;
  justify-content: space-between;

/* end - .l-between,.l-between--center */
/* *************************************************** */







`,
  '.l-between--center': getTheme => `
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
  '.l-align--left': getTheme => `
/* *************************************************** */
/* start - .l-align--left,.l-align--right */

  flex-grow: 1;
  flex-basis: 0;

/* end - .l-align--left,.l-align--right */
/* *************************************************** */







`,
  '.l-align--right': getTheme => `
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
  '.l-baseline': getTheme => `
  display: flex;
  align-items: baseline;


& > * {
  
  margin: 0 0 0 14px;

}
& > *:first-child {
  
  margin: 0;

}







`,
  '.l-baseline-xspace': getTheme => `& > * {
  
  margin: 0 0 0 20px;

}







`,
  '.l-vertical--reverse3': getTheme => `& > * {
  
  order: 20;

}
& > *:first-child {
  
  order: 30;

}
& > *:last-child {
  
  order: 10;

}







`,
  '.l-align--auto': getTheme => `
  margin: 0 auto;









`,
  '.l-align--textcenter': getTheme => `
  text-align: center;









`,
  '.l-flex': getTheme => `
  display: flex;


& > input {
  
  min-width: 0;

}







`,
  '.l-grow': getTheme => `
  flex-grow: 1;









`,
  '.l-block': getTheme => `
  display: block;









`,
  '.l-inline-block': getTheme => `
  display: inline-block;









`,
  '.l-relative': getTheme => `
  position: relative;









`,
  '.l-absolute': getTheme => `
  position: absolute;









`,
  '.l-top0': getTheme => `
  top: 0;









`,
  '.l-ml--32': getTheme => `
  margin-left: 32px;









`,
  '.l-ml--20': getTheme => `
  margin-left: 20px;









`,
  '.l-ml--16': getTheme => `
  margin-left: 16px;









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
  '.l-ml--64': getTheme => `
  margin-left: 64px;









`,
  '.l-mr--10': getTheme => `
  margin-right: 10px;









`,
  '.l-mt--66': getTheme => `
  margin-top: 66px;









`,
  '.l-mt--64': getTheme => `
  margin-top: 64px;









`,
  '.l-mt--56': getTheme => `
  margin-top: 56px;









`,
  '.l-mt--52': getTheme => `
  margin-top: 52px;









`,
  '.l-mt--48': getTheme => `
  margin-top: 48px;









`,
  '.l-mt--40': getTheme => `
  margin-top: 40px;









`,
  '.l-mt--32': getTheme => `
  margin-top: 32px;









`,
  '.l-mt--28': getTheme => `
  margin-top: 28px;









`,
  '.l-mt--24': getTheme => `
  margin-top: 24px;









`,
  '.l-mt--22': getTheme => `
  margin-top: 22px;









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
  '.l-mt--minus-4': getTheme => `
  margin-top: -4px;









`,
  '.l-ml--56': getTheme => `
  margin-left: 56px;









`,
  '.l-p--12-20': getTheme => `
  padding: 12px 20px;









`,
  '.l-p--16-20': getTheme => `
  padding: 16px 20px;









`,
  '.l-p--16-24-32': getTheme => `
  padding: 16px 24px 32px;









`,
  '.l-p--24': getTheme => `
  padding: 24px;









`,
  '.l-p--10': getTheme => `
  padding: 10px;









`,
  '.l-pt--24': getTheme => `
  padding-top: 24px;









`,
  '.l-pt--16': getTheme => `
  padding-top: 16px;









`,
  '.l-p--64-56': getTheme => `
  padding: 64px 56px;









`,
  '.l-basis--400': getTheme => `
  width: 400px;









`,
  '.l-basis--432': getTheme => `
  width: 432px;









`,
  '.l-max-width--375': getTheme => `
  max-width: 375px;









`,
  '.l-max-width--328': getTheme => `
  max-width: 328px;









`,
  '.l-max-width--326': getTheme => `
  max-width: 326px;









`,
  '.l-max-width--220': getTheme => `
  max-width: 220px;









`,
  '.stretch': getTheme => `
  width: 100%;









`,
  '.l-width--256': getTheme => `
  width: 256px;









`,
  '.l-width--328': getTheme => `
  width: 328px;









`,
  '.l-basis--50': getTheme => `
  flex-basis: 50%;









`,
  'url': getTheme => `






`,
  'html': getTheme => `
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
  'body': getTheme => `
/* *************************************************** */
/* start - body,input,textarea,button */

  font-family: 'sharp_sansmedium';
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
  'input': getTheme => `
/* *************************************************** */
/* start - body,input,textarea,button */

  font-family: 'sharp_sansmedium';
  font-size: 1.4rem;

/* end - body,input,textarea,button */
/* *************************************************** */

/* *************************************************** */
/* start - body,input,textarea,a */

  color: ${getTheme('--primary-dark')};

/* end - body,input,textarea,a */
/* *************************************************** */







`,
  'textarea': getTheme => `
/* *************************************************** */
/* start - body,input,textarea,button */

  font-family: 'sharp_sansmedium';
  font-size: 1.4rem;

/* end - body,input,textarea,button */
/* *************************************************** */

/* *************************************************** */
/* start - body,input,textarea,a */

  color: ${getTheme('--primary-dark')};

/* end - body,input,textarea,a */
/* *************************************************** */







`,
  'button': getTheme => `
/* *************************************************** */
/* start - body,input,textarea,button */

  font-family: 'sharp_sansmedium';
  font-size: 1.4rem;

/* end - body,input,textarea,button */
/* *************************************************** */

  font-family: 'sharp_sansmedium';
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
  '.bg--white': getTheme => `
  background: white;









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
  '.bg--secondary-bg-green': getTheme => `
  background: ${getTheme('--secondary-bg-green')};









`,
  '.f--l-90': getTheme => `
  color: ${getTheme('--l-90')};









`,
  '.f--l-80': getTheme => `
  color: ${getTheme('--l-80')};









`,
  '.f--secondary-darkgreen': getTheme => `
  color: ${getTheme('--secondary-darkgreen')};









`,
  '.f--secondary-red': getTheme => `
  color: ${getTheme('--secondary-red')};









`,
  'a': getTheme => `
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

/* end - html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,main,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video */
/* *************************************************** */

  color: ${getTheme('--primary-dark')};


  text-decoration: none;









`,
  '.dark': getTheme => `
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
& .h7 {
  
  color: ${getTheme('--primary-white')};

}







`,
  'time': getTheme => `
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
  '.wrap-2': getTheme => `
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
  '.wrap-home': getTheme => `
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
  '.wrap-home__aside': getTheme => `
  max-width: 500px; 
  position: relative;









`,
  '.l-fixed--right-lg': getTheme => `






`,
  '.wrap-onboard': getTheme => `
  width: 820px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;



 @media ( max-width : 801px ) {
  
    width: 100%;
  


 }


 @media ( max-width : 1427px ) {
  
    margin: 0 auto;
  


 }





 @media ( min-width : 802px ) {
  
    padding: 88px 0; 
  


 }


`,
  '.wrap-onboard__pt--sm': getTheme => `
  padding-top: 52px;









 @media ( max-width : 802px ) {
  
    padding-top: 40px;
  


 }

`,
  '.wrap-onboard__pt': getTheme => `
  padding-top: 66px;









 @media ( max-width : 802px ) {
  
/* *************************************************** */
/* start - .wrap-onboard__pt--xl,.wrap-onboard__pt */

    padding-top: 44px;
  
    padding-top: 44px;
  
/* end - .wrap-onboard__pt--xl,.wrap-onboard__pt */
/* *************************************************** */

    padding-top: 44px;
  


 }

`,
  '.wrap-onboard__pt--xl': getTheme => `
  
  padding-top: 116px;









 @media ( max-width : 802px ) {
  
/* *************************************************** */
/* start - .wrap-onboard__pt--xl,.wrap-onboard__pt */

    padding-top: 44px;
  
/* end - .wrap-onboard__pt--xl,.wrap-onboard__pt */
/* *************************************************** */

 }

`,
  '.wrap-onboard__aside': getTheme => `
  
  padding: 108px 137px; 
  width: 608px;









`,
  '.wrap-profile': getTheme => `
  padding: 63px 156px;
  width: 100%;




 @media ( max-width : 1427px ) {
  
    padding: 42px 24px;
  


 }






`,
  '.all': getTheme => `
  position: relative;
  z-index: 200; 









`,
  '#design': getTheme => `
  
  background: url('./design/0010 - Create account - popup from follow raise.png') no-repeat 50% 0;
  position: absolute;
  top: 0;
  left:0;
  width: 100%;
  height: 100%;
  opacity: 0.3;




 @media ( max-width : 1427px ) {
  
    background: url('./design/mobile/0010 - Mobile Web - popup from follow raise.png') no-repeat 50% 0;
    top: -100px;
  


 }






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
  'li': getTheme => `
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
  '.fieldset': getTheme => `
  border: 0;
  text-indent: 0;


&:first-child {
    
  border-top: 0;

  }







`,
  '.legend': getTheme => `

  width: 100%;
  border: 0;
  text-indent: 0;
   









`,
  'span': getTheme => `
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
  '.header__above-slide': getTheme => `
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
  'header': getTheme => `
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
  '.l-fixed--top': getTheme => `
  position: fixed;
  top: 0;
  background: ${getTheme('--primary-white')};
  z-index: 100; 
  width: 100%;




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

    left: calc(((100vw - 820px) / 2) - 10px); 
    width: 822px; 
  

& ~ nav {
   
    margin-top: 65px;
  
}

 }


 @media ( min-width : 1428px ) {
  
    left: calc(((100vw - 1428px) / 2) - 10px); 
  

& + div {
   
    margin-top: 75px;
  
}

 }






 @media ( max-width : 821px ) {
  
    width: 100%;
    left: 0;
  


 }
`,
  '.header__col1': getTheme => `

 @media ( max-width : 1427px ) {
    
    margin-top: 16px;
  


 }


 @media ( min-width : 1428px ) {
    
    margin-left: 62px;
    display: flex;
  


 }





`,
  '.header__col2': getTheme => `

 @media ( max-width : 1427px ) {
  
    width: 328px;
  


 }


 @media ( min-width : 1428px ) {
   
    width: 516px;
    justify-content: flex-end;
    display: flex;
  


 }





`,
  '.logo': getTheme => `
  padding: 17px 0;


& a {
  
  display: flex; 
  align-items: center;

}


 @media ( max-width : 1427px ) {
  
    padding: 0;
  


 }






`,
  '.logo__svg': getTheme => `
  height: 40px;
  width: 40px;
  width: auto;




 @media ( max-width : 1427px ) {
  
    width: 17px;
    height: 17px;
    
    
    

    
  


 }






`,
  '.logo__label': getTheme => `

 @media ( max-width : 1427px ) {
  
    margin: 0 0 0 4px;
    padding: 4px 0 0 0; 
  


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
  width: 300px;
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









`,
  '.header__ul': getTheme => `

 @media ( max-width : 1427px ) {
  
    margin-top: 16px;
  


 }


 @media ( min-width : 1428px ) {
  
/* *************************************************** */
/* start - .header__ul,.header__ul2 */

    display: flex;
  
/* end - .header__ul,.header__ul2 */
/* *************************************************** */

 }





`,
  '.header__ul2': getTheme => `


 @media ( min-width : 1428px ) {
  
/* *************************************************** */
/* start - .header__ul,.header__ul2 */

    display: flex;
  
/* end - .header__ul,.header__ul2 */
/* *************************************************** */

    display: flex;
  


 }





`,
  '.header__link': getTheme => `
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  position: relative;




 @media ( max-width : 1427px ) {
  
/* *************************************************** */
/* start - .header__link,.header__btn */

    margin: 13px 0 0;
  
/* end - .header__link,.header__btn */
/* *************************************************** */

    padding-left: 0;
    padding-right: 0;
  


 }


 @media ( min-width : 1428px ) {
  
/* *************************************************** */
/* start - .header__link,.header__btn */

    margin-left: 20px;
  
/* end - .header__link,.header__btn */
/* *************************************************** */

 }





`,
  '.header__btn': getTheme => `

 @media ( max-width : 1427px ) {
  
/* *************************************************** */
/* start - .header__link,.header__btn */

    margin: 13px 0 0;
  
/* end - .header__link,.header__btn */
/* *************************************************** */

    margin: 13px 0 0;
  

    width: 100%;
  


 }


 @media ( min-width : 1428px ) {
  
/* *************************************************** */
/* start - .header__link,.header__btn */

    margin-left: 20px;
  
/* end - .header__link,.header__btn */
/* *************************************************** */

    margin-left: 20px;
  


 }





`,
  '.header-mobile': getTheme => `
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


&[data-css-transition="entered"] {
    
  top: 67px;
  opacity: 1;

  }







`,
  'div': getTheme => `
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
  'applet': getTheme => `
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
  'object': getTheme => `
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
  'iframe': getTheme => `
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
  'h1': getTheme => `
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
  'h2': getTheme => `
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
  'h3': getTheme => `
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
  'h4': getTheme => `
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
  'h5': getTheme => `
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
  'h6': getTheme => `
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
  'p': getTheme => `
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
  top: 22px;
  left: 0;
  border: 1px solid ${getTheme('--l-50')};
  width: 100%;

  }


 @media ( max-width : 1427px ) {
  & ~ nav {
   
    margin-top: 65px;
  
}

 }


 @media ( min-width : 1428px ) {
  & + div {
   
    margin-top: 75px;
  
}

 }





`,
  'blockquote': getTheme => `
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
  'pre': getTheme => `
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
  'abbr': getTheme => `
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
  'acronym': getTheme => `
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
  'address': getTheme => `
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
  'big': getTheme => `
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
  'cite': getTheme => `
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
  'code': getTheme => `
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
  'del': getTheme => `
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
  'dfn': getTheme => `
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
  'em': getTheme => `
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
  'img': getTheme => `
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
  'ins': getTheme => `
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
  'kbd': getTheme => `
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
  'q': getTheme => `
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
  's': getTheme => `
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
& > input {
  
  margin: 20px 32px 0 0;

}
& > input:nth-child(4n + 4) {
  
  margin-right: 0;

}







`,
  'samp': getTheme => `
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
  'small': getTheme => `
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
  'strike': getTheme => `
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
  'strong': getTheme => `
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
  'sub': getTheme => `
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
  'sup': getTheme => `
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
  'tt': getTheme => `
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
  'b': getTheme => `
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
  'u': getTheme => `
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
  'i': getTheme => `
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
  'center': getTheme => `
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
  'dl': getTheme => `
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
  'dt': getTheme => `
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
  'dd': getTheme => `
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
  'ol': getTheme => `
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
  'ul': getTheme => `
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
  'fieldset': getTheme => `
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
  'form': getTheme => `
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
  'label': getTheme => `
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
  'legend': getTheme => `
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
  'table': getTheme => `
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
  'caption': getTheme => `
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
  'tbody': getTheme => `
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
  'tfoot': getTheme => `
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
  'thead': getTheme => `
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
  'tr': getTheme => `
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
  'th': getTheme => `
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







`,
  'td': getTheme => `
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
  'article': getTheme => `
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
  'main': getTheme => `
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
  'aside': getTheme => `
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
  'canvas': getTheme => `
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
  'details': getTheme => `
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
  'embed': getTheme => `
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
  'figure': getTheme => `
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
  'figcaption': getTheme => `
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
  'footer': getTheme => `
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
  'hgroup': getTheme => `
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
  'menu': getTheme => `
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
  'nav': getTheme => `
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
  'output': getTheme => `
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
  'ruby': getTheme => `
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
  'section': getTheme => `
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
  'summary': getTheme => `
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
  'mark': getTheme => `
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
  'audio': getTheme => `
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
  'video': getTheme => `
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
  