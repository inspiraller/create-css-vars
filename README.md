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
# Now use in your styled components?

### 5. Import this into your styled component
- Supply a function which replaces the css variable format with your own theme and assets.
```typescript
import cssVars from './css-vars';
import styled from 'styled-components';

const mytheme = {
  '--primary-border': red
};

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

 ### It does not output generic css like this
 ```css
*
[attWithoutElem=""]
@font-face
:root
 ```
-------------------------------------------------
 # Options
 - from
 - to
 - js or ts
 - assets_from
 - assets_to
 - global_style

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


