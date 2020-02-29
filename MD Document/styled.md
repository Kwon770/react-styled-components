# styled

styled.&#60;_Tag_&#62;&#96;_css_&#96; : Return component what have the css style

&#60;_Component props_&#62; : props in component can be used from css style

```js
import styled from "styled-components";

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
  font-weight: 600;
  appearance: none;
  cursor: pointer;

  &:active,
  &:focus {
    outline: none;
  }
  background-color: ${props => (props.danger ? "#e74c3c" : "#2ecc71")};
`;
```
