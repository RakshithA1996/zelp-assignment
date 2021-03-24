import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} />
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
