import React, { Component } from "react";
import "./App.css";

import List from './SmurfList';
import Add from './SmurfAdd';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <List />
        <Add />
      </div>
    );
  }
}

export default App;
