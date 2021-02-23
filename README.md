# Prerequisites:

- node
- npm
- yarn optional

# Download this repo

```
git clone ...create-css-vars
```

# cd into folder

```
cd create-css-vars
```

# install dependencies

```
yarn install
```

or

```
npm install
```

# position your css folder locally 
```
css /
  myfile.css
```
# run 
```
create-css-vars --from=./css --to=./css-vars.ts
```
# will output 
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

# Import this variable into your styled component
```typescript
import vars from './css-vars';
import styled from 'styled-components';
const Link = styled.span`
  ${vars['.link']}
`;

```