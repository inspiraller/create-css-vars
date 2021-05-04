
    export type TFuncStr = (str: string, str2?: string, str3?: string) => string;
    export interface Selectors {
      [key: string]: (getTheme: TFuncStr, getAsset: TFuncStr) => string;
    }
    const selectors: Selectors = {
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


 @media ( max-width : 821px ) {
  
    width: 100%;
    left: 0;
  


 }


 @media ( min-width : 802px ) and ( max-width : 1427px ) {
  
    left: calc(((100vw - 820px) / 2) - 10px); 
    width: 822px; 
  


 }


 @media ( min-width : 1428px ) {
  
    left: calc(((100vw - 1428px) / 2) - 10px); 
  

& + div {
   
    margin-top: 75px;
  
}

 }
`,
  '.header__col1': (getTheme, getAsset) => `
 @media ( max-width : 1427px ) {
  
    margin-top: 16px;
  


 }




 @media ( min-width : 1428px ) {
    
    margin-left: 62px;
    padding: 13px 0;
    display: flex;
  


 }
`,
  '.header__col2': (getTheme, getAsset) => `
 @media ( max-width : 1427px ) {
  
    width: 328px;
  


 }




 @media ( min-width : 1428px ) {
   
    width: 516px;
    justify-content: flex-end;
    display: flex;
  


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
  '.link': (getTheme, getAsset) => `&:hover .logo__svg  path[fill] {
    
  fill: white;

  }
&:hover .logo__svg  path[fill-rule="evenodd"] {
    
  fill: ${getTheme('--primary-green')};

  }



`,
  '.logo__label': (getTheme, getAsset) => `
 @media ( max-width : 1427px ) {
  
    margin: 0 0 0 4px;
    padding: 4px 0 0 0; 
  


 }



`,
  '.header__ul': (getTheme, getAsset) => `
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
  '.header__btn': (getTheme, getAsset) => `
/* *************************************************** */
/* start - .header__link,.header__link span,.header__btn */

  white-space: nowrap;

/* end - .header__link,.header__link span,.header__btn */
/* *************************************************** */

  white-space: nowrap;



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

};
    export default selectors;
  