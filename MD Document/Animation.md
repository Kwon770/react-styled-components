# createGlobalStyle

createGlobalStyle&#96;css&#96; : Apply style globally (like body)

```js
import styled, { css, keyframes } from "styled-components";

class App extends Component {
  render() {
    return (
      <Container>
        <Button danger rotationTime={2}>
          Hello
        </Button>
      </Container>
    );
  }
}

const Button = styled.button`
  ~
  ~

  ${props => {
    if (props.danger) {
      return css`
        animation: ${rotation} ${props.rotationTime}s linear;
      `;
    }
  }};
`;

const rotation = keyframes`
  from {
    transform:rotate(0deg)
  }
  to {
    transform:rotate(360deg)
  }
`;
```
