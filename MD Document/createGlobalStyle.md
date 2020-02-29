# createGlobalStyle

createGlobalStyle&#96;css&#96; : Apply style globally (like body)

```js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
  }
`;

class App extends Component {
  render() {
    return (
      <Container>
        <GlobalStyle />
      </Container>
    );
  }
}

// ~
```
