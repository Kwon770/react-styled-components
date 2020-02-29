import React, { Component } from "react";
import styled from "styled-components";
import { render } from "@testing-library/react";

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

// <styled-components>.<html tag>` css `
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

export default App;
