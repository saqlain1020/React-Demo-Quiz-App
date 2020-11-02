import React, { Component } from "react";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import Navbar from "./Components/Navbar/Navbar";
import SignUp from "./Components/SignUp/SignUp";
import QuizCreate from "./Components/QuizCreate/QuizCreate";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./Components/fonts.css";
import "./global.css";
import Courses from "./Components/Courses/Courses";
import QuizResult from "./Components/QuizResult/QuizResult";
import Quiz from "./Components/Quiz/Quiz";

class App extends Component {
  state = {
    user: false,
    login: true,
    signUp: false,
    username: "",
    quizCreate: false,
  };
  turnFalse = (name) => {
    this.setState({
      [name]: false,
    });
  };
  turnTrue = (name) => {
    this.setState({
      [name]: true,
    });
  };
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
            quizCreate: false,
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

  };
  render() {

    return (
      <div
        style={{
          display: "grid",
          gridTemplateRows: "64px 1fr",
          minHeight: "100vh",
        }}
      >
        <BrowserRouter>
          <Navbar
            changeState={() => {
              this.changeState();
            }}
            username={this.state.username}
            turnTrue={this.turnTrue}
            turnFalse={this.turnFalse}
            login={this.login}
          />
          <Switch>
            <Route
              path="/"
              render={(props) => {
                this.state.username
                  ? props.history.push("/Dashboard")
                  : props.history.push("/Login");
              }}
              exact
            />
            <Route
              path="/Login"
              render={(props) => (
                <Login {...props} changeState={this.changeState} />
              )}
            />
            <Route
              path="/Signup"
              render={(props) => (
                <SignUp {...props} changeState={this.changeState} />
              )}
            />
            <Route path="/Quizcreate" component={QuizCreate} />
            <Route
              path="/Dashboard"
              component={Courses}
              // render={(props) => (
              //   <Dashboard {...props} username={this.state.username} />
              // )}
            />
            <Route
              path="/AllQuizes/:courseName"
              render={(props) => (
                <Dashboard {...props} username={this.state.username} />
              )}
            />
            <Route
              path="/Quizes/:quizid"
              render={(props) => (
                <Quiz {...props} username={this.state.username} />
              )}
            />
          </Switch>
        </BrowserRouter>
        {/* <Navbar
          changeState={this.changeState}
          username={this.state.username}
          turnTrue = {this.turnTrue} 
          turnFalse = {this.turnFalse}
          login = {this.login}
        /> */}
        {this.state.user && this.state.quizCreate && (
          <QuizCreate
            dashboard={() => {
              this.turnFalse("quizCreate");
            }}
            username={this.state.username}
          />
        )}
        {/* <Appbar />
        <Home /> */}
      </div>
    );
  }
}

export default App;
