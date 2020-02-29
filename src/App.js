import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
  }
`;

class App extends Component {
  // <Component props></Component> props를 styled에서 받아갈 수 있음
  render() {
    return (
      <Container>
        <GlobalStyle />
        <Button success>Hello</Button>
        <Button danger>Hello</Button>
        <Anchor href="https://google.com">Go to google</Anchor>
      </Container>
    );
  }
}

// <styled-components>.<html tag>` // css code // `
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

// <styled>.withComponent("<Tag>") : 이미 존재하는 컴포넌트 styled의 Tag만 변경하여 재활용
// styled(~withComponent~)`` : styled extending
const Anchor = styled(Button.withComponent("a"))`
  text-decoration: none;
`;

export default App;
