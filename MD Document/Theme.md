# Theme

&#60;ThemeProvider theme={_theme_}&#62; : 아래에 있는 모든 Component가 _theme_ 에 props로 접근 가능

### App.js
```js
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";

// ~
// ~

const Form = () => (
  <Card>
    <Button>Hello</Button>
  </Card>
);

const Button = styled.button`
  border-radius: 30px;
  padding: 25px 15px;
  background-color: ${props => props.theme.successColor};
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Form />
        </Container>
      </ThemeProvider>
    );
  }
}
```

### theme.js
```js
const theme = {
  mainColor: "#1abc9c",
  dangerColor: "#e74c3c",
  successColor: "#3498db"
};

export default theme;
```