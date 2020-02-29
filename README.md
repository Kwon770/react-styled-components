# Styled Componenets Pratice

## Installation

### yarm

`yarn add styled-components`

```js
import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
```

## Usage

### ORIGINAL STYLE

```js
// App.js
class App extends Component {
  render() {
    return (
      <div>
        <button className="button button-success"></button>
        <button className="button button-danger"></button>
      </div>
    );
  }
}
```

```css
/* App.css */
.button {
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: white;
  appearance: none;
}
.button:active,
.button:focus {
  outline: none;
}
.button-success {
  backgroun-color: #e74c3c;
}
.button-danger {
  backgroun-color: #2ecc71;
}
```

### STYLED COMPONENT STYLE

```js
// App.js
class App extends Component {
  render() {
    return (
      <Container>
        <Button success>Hello</Button>
        <Button danger>Hello</Button>
      </Container>
    );
  }
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #34495e;
`;

const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: white;
  appearance: none;

  &:active,
  &:focus {
    outline: none;
  }

  background-color: ${props => (props.danger ? "#e74c3c" : "#2ecc71")};
`;
```

### Document

| Title                                                                                                                                                            | Description                  | Description                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------------------------------------------------------------------------------------------------- |
| styled                                                                                                                                                           | Making component             | [Documentation](https://github.com/Kwon770/react-styled-components/blob/master/MD%20Document/styled.md)        |
| createGlobalStyle`` | Apply styled globally | [Documentation](https://github.com/Kwon770/react-styled-components/blob/master/MD%20Document/createGlobalStyle.md) |
| withComponent()                                                                                                                                                  | Reuse component changing tag | [Documentation](https://github.com/Kwon770/react-styled-components/blob/master/MD%20Document/withComponent.md) |
