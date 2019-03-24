import React, { Component } from "react";

import "./App.css";
import HeziComponent from "../src/compomemts/Hezi";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Main App</h1>
        <HeziComponent />
      </div>
    );
  }
}

export default App;
