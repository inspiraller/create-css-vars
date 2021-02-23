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

# run script 
```
npm start
```

# Fie is created:
- **css-vars/ts**

- a file with variables to reference the css in your styled components.
exampe:
```css
const vars = {
  '.link': `

    /* combined - .link, .btn*/
    border: 1px solid red;
    /* */

    background: red;
    &:hover {
      color: blue;
    }
    [x] {
      color: pink;
    }
    @media () {
      width: 100px;
    }
  `
}
```

# Import this into your styled component
```typescript
import vars from './css-vars';
import styled from 'styled-components';
const Link = styled.span`
  ${vars['.link']}
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
 ```

