import React, { Component } from "react";
// import CustomFunctions from "../CustomFunctions/CustomFunctions";
import swal from "@sweetalert/with-react";
import Swal from "sweetalert2/dist/sweetalert2";

import "sweetalert2/src/sweetalert2.scss";
import { TextField, Button, Container } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import "../fonts.css";
import firebase, { auth, db } from "../../Util/firebase";

const styles = (theme) => ({
  textArea: {
    outline: "1px solid blue",
    margin: "10px 0",
    height: "45px",
    fontWeight: "900",
    fontFamily: "Roboto",
    fontSize: "30px",
    color: "#222",
  },
  textField: {
    marginBottom: 10,
  },
  mainHeading: {
    fontFamily: "Roboto",
    fontWeight: "900",
  },
});

class QuizCreate extends Component {
  state = {
    noOfQ: 0,
    title: "",
    subject: "",
    op1: "",
    op2: "",
    op3: "",
    question: "",
    questions: [],
    correctOp: "",
    currentQ: "1",
    quiz: {},
  };
  async componentDidMount() {
    let num = Number(
      await swal("Enter Number Of Questions", {
        content: "input",
      })
    );

    if (isNaN(num) || num < 1) this.componentDidMount();
    else
      this.setState(
        {
          noOfQ: num,
        },
        async () => {
          let title = await swal("Enter Quiz Title", {
            content: "input",
          });
          this.setState(
            {
              title: title,
            },
            async () => {
              let courses = [];
              let query = await firebase
                .firestore()
                .collection("courses")
                .get();
              query.forEach((doc) => {
                courses.push(doc.data().courseName);
              });
              let subId = await Swal.fire({
                title: "Enter Course Name",
                input: "select",
                inputOptions: Object.assign(
                  ...courses.map((item) => ({ [item]: item }))
                ),
              });
              this.setState(
                {
                  subject: subId.value,
                },
                () => {
                  this.setState({
                    quiz: {
                      subject: this.state.subject,
                      noOfQ: this.state.noOfQ,
                      title: this.state.title,
                      createdBy: auth.currentUser.uid,
                    },
                  });
                }
              );
            }
          );
        }
      );
  }
  changeInputState = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  submit = async (e) => {
    e.preventDefault();

    let question = {
      question: this.state.question,
      correctOp: this.state.correctOp,
      op1: this.state.op1,
      op2: this.state.op2,
      op3: this.state.op3,
    };
    let questions = this.state.questions;
    questions.push(question);
    this.setState(
      {
        questions: questions,
      },
      () => {
        this.setState({
          currentQ: Number(this.state.currentQ) + 1,
          op1: "",
          op2: "",
          op3: "",
          question: "",
          correctOp: "",
        });
      }
    );
    if (this.state.currentQ >= this.state.noOfQ) {
      //End Quiz Create
      let quiz = this.state.quiz;
      quiz.questions = this.state.questions;
      console.log(quiz)
      await db.collection("quizes").add(quiz);
      this.props.history.push("/Dashboard");
      return;
    }
    // let quizes = [{
    //   id,
    //   subject,
    //   noOfQ,
    //   title,
    //   questions: [{
    //     question,
    //     correctOp
    //     op1
    //     op2
    //     op3
    //   }]
    // }];

    // currentQ++
  };
  render = () => {
    const { classes } = this.props;
    return (
      <Container style={{ padding: "0 50px" }}>
        <div id="quizCreate" style={{ display: "flex", flexFlow: "column" }}>
          <h1 className={classes.mainHeading}>Quiz: {this.state.title}</h1>
          <form
            onSubmit={this.submit}
            style={{ display: "flex", flexFlow: "column" }}
          >
            <h2 className={classes.mainHeading}>
              Question {this.state.currentQ}
            </h2>
            <textarea
              className={classes.textArea}
              value={this.state.question}
              type="text"
              placeholder="Enter Question"
              name="question"
              onChange={this.changeInputState}
            />
            <TextField
              className={classes.textField}
              style={{ background: "#7bed9f" }}
              onChange={this.changeInputState}
              name="correctOp"
              value={this.state.correctOp}
              id="outlined-basic"
              label="Correct Option"
              variant="outlined"
            />
            <TextField
              className={classes.textField}
              name="op1"
              value={this.state.op1}
              onChange={this.changeInputState}
              id="standard-basic"
              label="Option 1"
            />
            <TextField
              className={classes.textField}
              name="op2"
              value={this.state.op2}
              onChange={this.changeInputState}
              id="standard-basic"
              label="Option 2"
            />
            <TextField
              className={classes.textField}
              name="op3"
              value={this.state.op3}
              onChange={this.changeInputState}
              id="standard-basic"
              label="Option 3"
            />
            <Button variant="contained" color="primary" type="submit">
              Add
            </Button>
          </form>
        </div>
      </Container>
    );
  };
}

export default withStyles(styles)(QuizCreate);
