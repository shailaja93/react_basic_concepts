import React, { Component } from "react";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    name: "Maximillian"
  };
  userNameHandler = event => {
    this.setState({ name: event.target.value });
  };
  render() {
    return (
      <div className="App">
        <h1>My Assignment</h1>
        <UserInput username={this.state.name} change={this.userNameHandler} />
        <UserOutput username={this.state.name} />
      </div>
    );
  }
}

export default App;
