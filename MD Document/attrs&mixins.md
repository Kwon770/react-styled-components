# attrs & mixins

attrs({_props_}) : Add props when making components

css\`` : Make css block what can be added easilly

```js
import styled, { css } from "styled-components";

// Mixins
const awesomeCard = css`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-color: white;
  border-radius: 10px;
  padding: 20px;
`;

// Attrs
const Input = styled.input.attrs({
  required: true
})`
  border: none;
  ${awesomeCard}
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Input placeholder="hello" />
      </Container>
    );
  }
}
```
