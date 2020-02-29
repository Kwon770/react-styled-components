import React, { Component, Fragment } from "react";
import "./App.css";
import { render } from "@testing-library/react";

class App extends Component {
  render() {
    return (
      <Fragment>
        <button className="button button-success">Hello</button>
        <button className="button button-danger">Hello</button>
      </Fragment>
    );
  }
}

export default App;
