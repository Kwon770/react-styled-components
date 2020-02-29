import React, { Component } from "react";
import styled, { css, ThemeProvider } from "styled-components";
import theme from "./theme";

const Card = styled.div`
  background-color: red;
`;

const Button = styled.button`
  border-radius: 30px;
  padding: 25px 15px;
  background-color: ${props => props.theme.successColor};
`;

const Form = () => (
  <Card>
    <Button>Hello</Button>
  </Card>
);

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #34495e;
  ${Card} {
    background-color: white;
  }
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

export default App;
