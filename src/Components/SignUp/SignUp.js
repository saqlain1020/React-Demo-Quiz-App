import React, { Component } from "react";

class SignUp extends Component {
  state = {
    username: "",
    password: "",
  };
  changeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value,
    });
  };
  submit = (e) => {
    e.preventDefault();
    let users = []
    if(JSON.parse(localStorage.getItem("users")))
        users = JSON.parse(localStorage.getItem("users"));
    users.forEach((element) => {
      if (element.username === this.state.username) {
        alert("User Exists");
        return;
      }
    });

    users.push({
      username: this.state.username,
      password: this.state.password,
      quizes: []
    });
    localStorage.setItem("users", JSON.stringify(users));
    this.props.changeState(this.state.username);
  };
  render() {
    return (
      <div>
        <h1>SignUp</h1>
        <form onChange={this.changeInput} onSubmit={this.submit}>
          <input
            name="username"
            defaultValue={this.state.username}
            type="text"
            placeholder="UserName"
          />
          <input
            type="password"
            name="password"
            defaultValue={this.state.password}
            placeholder="Enter Password"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
