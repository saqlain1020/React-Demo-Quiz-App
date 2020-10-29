import React, { Component } from "react";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import Navbar from "./Components/Navbar/Navbar";
import SignUp from "./Components/SignUp/SignUp";
import QuizCreate from "./Components/QuizCreate/QuizCreate"

class App extends Component {
  state = {
    user: false,
    login: true,
    signUp: false,
    username: "",
    quizCreate: false
  };
  turnFalse = (name) => {
    this.setState(
      {
        [name]: false
      }
    );
  }
  turnTrue = (name) => {
    this.setState(
      {
        [name]: true
      }
    );
  }
  signUp = () => {
    this.setState(
      {
        signUp: true
      }
    );
  }
  login = () => {
    this.setState(
      {
        signUp: false,
        user: false,
        login: true,
        username: ""
      }
    );
  }
  changeState = (username) => {
    if (this.state.user)
      this.setState(
        {
          user: false,
        },
        () => {
          this.setState({
            username: "",
            signUp: false,
            login: true,
            quizCreate: false
          });
        }
      );
    else
      this.setState(
        {
          user: true,
        },
        () => {
          this.setState({
            username: username,
          });
        }
      );

    console.log(this.state.username);
  };
  render() {
    return (
      <div>
         <Navbar
          changeState={this.changeState}
          username={this.state.username}
          turnTrue = {this.turnTrue} 
          turnFalse = {this.turnFalse}
          login = {this.login}
        />
        {console.log(localStorage)}
        {!this.state.user && this.state.signUp && (<SignUp changeState={this.changeState} />)}
        {!this.state.user && !this.state.signUp && this.state.login && (<Login changeState={this.changeState} />)}        
        {this.state.user && !this.state.quizCreate && <Dashboard username={this.state.username}/>}
        {this.state.user && this.state.quizCreate && <QuizCreate dashboard={()=>{this.turnFalse("quizCreate")}} username={this.state.username}/>} 
        {/* <Appbar />
        <Home /> */}
      </div>
    );
  }
}

export default App;
