import React, { Component } from "react";
import Login from "./Components/Login/Login";

class App extends Component {
  state = {
    user: false,
    username: "",
  };
  changeState = (username) => {
    if (this.state.user)
      this.setState({
        user: false,
      });
    else
      this.setState({
        user: true,
      });
    this.setState({
      username: username,
    });
    console.log(this.state.username);
  };
  localDemo() {
    localStorage.setItem(
      "users",
      JSON.stringify([
        {
          username: "user",
          password: "pass123",
        },
        {
          username: "admin",
          password: "admin",
        },
      ])
    );
    console.log(localStorage);
  }
  render() {
    return (
      <div>
        {this.localDemo()}
        <Login changeState={this.changeState} />
      </div>
    );
  }
}

export default App;
