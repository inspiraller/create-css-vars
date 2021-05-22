# Installation
### 1. installing via npm
```
npm i @inspiraller/create-css-vars --save
```

### 2. Create a folder of css files locally
```
css /
  myCssFile.css
```

**myCssFile.css**
```css
.link,
.btn {
  border: 1px solid red;
}

.link {
  background: red;
}
.link:hover {
  color: blue;
}
link[x] {
  color: pink;
  border: var(--primary-border);
  background-image: url('./file.svg');
}
@media () {
  .link {
    width: 100px;
  }
}
```

### 3. Create script to run create-css-vars
**package.json**
```
  "scripts": {
    "start": "create-css-vars"
  },
```

###  (Optional - specify from and destination)
**package.json**
```
  "scripts": {
    "start": "create-css-vars --from=./css to=./destination/folder"
  },
```

### 4. run script
```
npm start
```

### done !

### Fie is created:
**destination/css-vars.ts**
```typescript
const vars = {
  '.link': (getTheme, getAsset) => `

    /* combined - .link, .btn*/
    border: 1px solid red;
    /* */

    background: red;
    &:hover {
      color: blue;
    }
    [x] {
      color: pink;
      border: ${getTheme('--primary-border')};
      background-image: url('${getAsset('file.svg')');
    }
    @media () {
      width: 100px;
    }
  `
}
```
------------
# theme.ts or theme.js creation
You can define root variables anywhere in your css
and it will automatically generate these into a theme

**mycss.css**
```css
:root {
  --primary-dark: #020018;
  --primary-green: #17B890;
  --primary-white: #FFF;
}
```
will generate

**theme.ts**
```ts
const theme = {
  '--primary-dark': '#020018';
  '--primary-green': '#17B890';
  '--primary-white': '#FFF';
}
export default theme;
```


------------------
# Now use in your styled components?

### 5. Import this into your styled component
- Supply a function which replaces the css variable format with your own theme and assets.
```typescript
import cssVars from './css-vars';
import styled from 'styled-components';
import mytheme from './theme';

const getTheme = var => mytheme[var];
const getAsset = url => `/assets/${url}`;

const Link = styled.span`
  ${cssVars['.link'](getTheme, getAsset)}
`;
```
---------------------------------------------
# What is supported?
- All single selectors - class, id, tag
- combined selectors - .class, something else, .x {}
- pseudo and attribute selectors = .link:hover .link[x="something"]
- all children = .link somechild {}
- all media queries

### Using :root will create variables - see above
this will be put into a theme.ts or theme.js

-------------------------------------------------

 # Options
 - from
 - to
 - js or ts
 - assets_from
 - assets_to
 - global_styles

**--from**
- If not supplied will look for css at root level
```
npm run create-css-vars --from=./mycsslocation/target
```
**--to**
- If not supplied will put css-vars in the root.
```
npm run create-css-vars --to=./mycssdestination/target
```

**--js** 

- will create css-vars **.js**
```
npm run create-css-vars --js=true
```

**--ts** 
- will create css-vars **.ts**
```
npm run create-css-vars --ts=true
```

**--assets_from**
- Will copy a directory of assets from this folder to destination specified in options 'assets_to' or 'to' or  root level in order of preference.
```
npm run create-css-vars --assets_from=./assets/source
```
**--assets_to**
- Will copy a directory of assets, but only if assets_from is supplied.
```
npm run create-css-vars --assets_from=./assets/source --assets_to=./destination/some/assets/folder
```
-----------------------------------------------
**--global_styles**

To ensure these do not get missed you need to put them into a separate folder and specify them to go into your globalStyle.ts or globalStyle.js

**css/global.css**
```css
* {
  margin: 0;
  padding: 0;
}

@font-face ...

html {
  font-size: 0.625%;
}
body {
  font-family: myfont;
}

```


**Specify css file that you want to generate globalStyle.js**
```
npm run create-css-vars --global_styles=./css/global.css
```
**or  specify folder**
```
npm run create-css-vars --global_styles=./css/global/myfiles.css
```
**Will generate**
css/globalStyles.ts

---------------------------------------------------------------------
Example of how to implement GlobalStyles for ThemeProvider

**WrapStyled**
```ts
import React, { FC } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import GlobalStyles from './globalStyles'; // <- this file will be generated if you supplied --global_styles=css/someglobal/files.css 
import theme from './theme'; // <- This file will be generated if have variables declared in :root of any of your css files

export const getTheme = (str: string) => theme[str];
export const getAsset = (url: string) => `/my-assets-path/${url}`; // <- this is your custom assets path destination.

const CreatedGlobalStyles = createGlobalStyle`
  ${GlobalStyles(getTheme, getAsset)}
`;

const WrapStyled: FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CreatedGlobalStyles />
    {children}
  </ThemeProvider>
);

export default WrapStyled;
```