import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";
import {  withStyles } from "@material-ui/core/styles";
import "../fonts.css";
import swal from "@sweetalert/with-react";
import firebase from '../../Util/firebase'

const useStyles = (theme) => ({
  textField: {
    display: "block",
    margin: 10,
  },
  button: {
    background: "#6c5ce7",
    "&:hover": {
      backgroundColor: "#222",
    },
    marginTop: 10,
  },
  heading: {
    fontFamily: "Roboto",
    fontWeight: "900",
    fontSize: 40,
    marginBottom: 20 
  },
  containerWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexFlow: "column",
    background: "linear-gradient(0deg, #2d3436,#0984e3);",
    height: "calc(100vh - 64px)",
    width: "100%",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexFlow: "column",
    background: "white",
    padding: 30,
    borderRadius: 10,
    height: "350px"
  },
  form: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexFlow: "column",
  },
});
class Login extends Component {
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

  submit = async (e) => {
    e.preventDefault();

    const {username,password} = this.state;
    try {
      await firebase.auth().signInWithEmailAndPassword(username,password);  
      this.props.history.push("/Dashboard");
    } catch (error) {
      swal(null,error.message,"error");
    }

    // let users = JSON.parse(localStorage.getItem("users"));
    // let flag = true;
    // users?users.forEach((element) => {
    //   if (
    //     element.username === this.state.username &&
    //     element.password === this.state.password
    //   ) {
    //     this.props.changeState(element.username);
    //     flag = false;
    //     this.props.history.push("/Dashboard");
    //   }
    // }):swal("Wrong Credentials","","error");
    // if (flag) swal("Wrong Credentials","","error");
  };
  render() {
    const {
      textField,
      heading,
      button,
      form,
      container,
      containerWrapper,
    } = this.props.classes;
    return (
      <div className={containerWrapper}>
        <div className={container}>
          <h1 className={heading}>Login</h1>
          <form
            className={form}
            onChange={this.changeInput}
            onSubmit={this.submit}
          >
            <TextField
              name="username"
              defaultValue={this.state.username}
              type="text"
              id="standard-basic"
              label="Username"
              className={textField}
            />
            <TextField
              type="password"
              name="password"
              defaultValue={this.state.password}
              id="standard-basic"
              label="Password"
              className={textField}
            />
            <Button
              className={button}
              type="submit"
              variant="contained"
              color="secondary"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(Login);
