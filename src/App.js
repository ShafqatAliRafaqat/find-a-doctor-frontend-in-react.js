import React, { Component } from "react";
import Home from "./Containers/index";
import { HashRouter, Route, Switch } from "react-router-dom";

class App extends Component {
    render() {
      return (
          <Home />
        );
    }
  }
  
  export default App;