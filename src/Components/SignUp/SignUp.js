import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import "../fonts.css";
import swal from "@sweetalert/with-react";

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
    marginBottom: 20,
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
    height: "350px",
  },
  form: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexFlow: "column",
  },
});

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
    let users = [];
    if (JSON.parse(localStorage.getItem("users")))
      users = JSON.parse(localStorage.getItem("users"));
    users.forEach((element) => {
      if (element.username === this.state.username) {
        swal("User Exists","","info");
        return;
      }
    });

    users.push({
      username: this.state.username,
      password: this.state.password,
      quizes: [],
    });
    localStorage.setItem("users", JSON.stringify(users));
    this.props.changeState(this.state.username);
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
          <h1 className={heading}>SignUp</h1>
          <form
            className={form}
            onChange={this.changeInput}
            onSubmit={this.submit}
          >
            <TextField
              name="username"
              defaultValue={this.state.username}
              type="text"
              placeholder="UserName"
              className={textField}
              label="Username"
            />
            <TextField
              className={textField}
              type="password"
              name="password"
              defaultValue={this.state.password}
              label="Password"
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

export default withStyles(useStyles)(SignUp);
