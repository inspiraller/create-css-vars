# installing via npm
```
npm i @inspiraller/create-css-vars --save
```

# Create a folder of css files locally
```
css /
  myfile.css
```

# example -
**myfile.css**
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

# Create script to run create-css-vars
**package.json**
```
  "scripts": {
    "start": "create-css-vars"
  },
```

# Update to targeted paths if desired
**package.json**
```
  "scripts": {
    "start": "create-css-vars --from=./mycss to=./mylocal/folder"
  },
```

# run script
```
npm start
```

# Fie is created:
- **css-vars.ts**

- a file with variables to reference the css in your styled components.
- Notice, the replacement of var to getTheme()
- You can then extract the css from this passing your getTheme method to pull the variable from your theme variable.

**example:**
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

# Import this into your styled component
```typescript
import selectors from './css-vars';
import styled from 'styled-components';

const mytheme = {
  '--primary-border': red
};

const getTheme = var => mytheme[var];
const getAsset = url => `/assets/${url}`;

const Link = styled.span`
  ${selectors['.link'](getTheme)}
`;
```

# This will pull in the following css properties
- All single selectors - class, id, tag
- combined selectors - .class, something else, .x {}
- pseudo and attribute selectors = .link:hover .link[x="something"]
- all children = .link somechild {}
- all media queries

 # It does not output generic css like this
 ```css
*
[attWithoutElem=""]
@font-face
:root
 ```
