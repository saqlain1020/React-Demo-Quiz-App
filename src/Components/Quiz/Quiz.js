import React, { Component } from "react";
import "../fonts.css";
import { withStyles, Button } from "@material-ui/core/";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import swal from "@sweetalert/with-react";

const styles = () => ({
  containerWrapper: {
    display: "grid",
    gridTemplateColumns:
      "minmax(10px,1fr) minmax(min-content,1100px) minmax(10px,1fr)",
  },
  container: {
    gridArea: "1/2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexFlow: "column",
  },
  title: {
    fontFamily: "Roboto",
    fontSize: 35,
    fontWeight: 900,
    margin: 10,
    color: "#222",
  },
  titleBar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    background: "#2c3e50",
    justifyContent: "space-between",
    height: "35px",
    paddingLeft: "20px",
    paddingRight: "20px",
    color: "white",
    borderRadius: "5px",
  },
  question: {
    color: "white",
    background: "#0984e3",
    padding: 5,
    width: "100%",
    marginTop: "10px",
    border: "2px solid #0984e3",
  },
  answers: {
    border: "2px solid #0984e3",
    display: "flex",
    flexFlow: "column",
    width: "100%",
    padding: 5,
  },
});

class Quiz extends Component {
  state = {
    questionNo: 1,
    buttonText: "Next",
    ch1: false,
    ch2: false,
    ch3: false,
    ch4: false,
    correctQs: 0,
    checkedAns: "",
  };
  constructor(props) {
    super(props);
    this.rand = (Math.random() * 3).toFixed(); // 0,1,2,3
    this.quiz = this.props.quiz;
    this.seconds = this.quiz.noOfQ * 30;
  }
  componentDidMount() {
    if (this.state.questionNo === this.quiz.noOfQ - 1)
      this.setState({
        buttonText: "Done",
      });

    //Timer
    let timerDiv = document.querySelector("#timer");
    if (localStorage.getItem("status")) {
      let status = JSON.parse(localStorage.getItem("status"));
      swal("Quiz Continuing", "", "info");
      this.quiz = status.quiz;
      this.seconds = status.seconds;
      this.setState({
        questionNo: status.questionNo,
        correctQs: status.correctQs,
      });
    }
    setInterval(() => {
      this.seconds--;
      timerDiv.innerHTML = `Timer: ${this.seconds} Sec Left`;
      let status = {
        questionNo: this.state.questionNo,
        correctQs: this.state.correctQs,
        quiz: this.quiz,
        seconds: this.seconds,
      };
      localStorage.setItem("status", JSON.stringify(status));
      if (this.seconds === 0) {
        let percent =
          ((this.state.correctQs / this.quiz.noOfQ) * 100).toFixed(2) + "%";
        swal("Result", "Correct Answers" + percent, "info");
        //Add quiz info to user
        let users = JSON.parse(localStorage.getItem("users"));
        users = users.map((item) => {
          if (item.username === this.props.username) {
            item.quizes.push({
              id: this.quiz.id,
              score: percent,
            });
          }
          return item;
        });
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.removeItem("status");
        this.props.close();
      }
    }, 1000);
  }
  next = () => {
    this.rand = (Math.random() * 3).toFixed(); // 0,1,2,3;
    if (this.state.questionNo === Number(this.quiz.noOfQ) - 1)
      this.setState({
        buttonText: "Done",
      });
    if (
      this.state.checkedAns ===
      this.quiz.questions[this.state.questionNo - 1].correctOp
    ) {
      this.setState(
        {
          correctQs: Number(this.state.correctQs) + 1,
        },
        this.showResult
      );
    } else this.showResult();
  };
  showResult = () => {
    if (this.state.questionNo === this.quiz.noOfQ) {
      let percent =
        ((this.state.correctQs / this.quiz.noOfQ) * 100).toFixed(2) + "%";
      swal("Result", "Correct Answers" + percent, "info");
      //Add quiz info to user
      let users = JSON.parse(localStorage.getItem("users"));
      users = users.map((item) => {
        if (item.username === this.props.username) {
          item.quizes.push({
            id: this.quiz.id,
            score: percent,
          });
        }
        return item;
      });
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.removeItem("status");
      this.props.close();
    } else {
      if (this.state.questionNo < this.quiz.noOfQ)
        this.setState({
          questionNo: Number(this.state.questionNo) + 1,
          ch1: false,
          ch2: false,
          ch3: false,
          ch4: false,
        });
      return;
    }
  };
  checked = (e) => {
    let target = e.target;
    this.setState(
      {
        ch1: false,
        ch2: false,
        ch3: false,
        ch4: false,
      },
      () => {
        this.setState({
          [target.name]: true,
          checkedAns: target.value,
        });
      }
    );
  };

  render() {
    const { questionNo, buttonText } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.containerWrapper}>
        <div className={classes.container}>
          <h1 className={classes.title}>Title: {this.quiz.title}</h1>

          <div className={classes.titleBar}>
            <h2>
              Question {questionNo}/{this.quiz.noOfQ}
            </h2>
            <h3 id="timer" className={classes.timer}>
              Timer: 120 Sec Left
            </h3>
          </div>

          <h2 className={classes.question}>
            {this.quiz.questions[questionNo - 1].question}
          </h2>
          {this.rand === "0" && (
            <div className={classes.answers}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.ch1}
                    onChange={this.checked}
                    name="ch1"
                    color="primary"
                    value={this.quiz.questions[questionNo - 1].op1}
                  />
                }
                label={this.quiz.questions[questionNo - 1].op1}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.ch2}
                    onChange={this.checked}
                    name="ch2"
                    color="primary"
                    value={this.quiz.questions[questionNo - 1].correctOp}
                  />
                }
                label={this.quiz.questions[questionNo - 1].correctOp}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.ch3}
                    onChange={this.checked}
                    name="ch3"
                    color="primary"
                    value={this.quiz.questions[questionNo - 1].op2}
                  />
                }
                label={this.quiz.questions[questionNo - 1].op2}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.ch4}
                    onChange={this.checked}
                    name="ch4"
                    color="primary"
                    value={this.quiz.questions[questionNo - 1].op3}
                  />
                }
                label={this.quiz.questions[questionNo - 1].op3}
              />
            </div>
          )}
          {this.rand === "1" && (
            <div className={classes.answers}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.ch1}
                    onChange={this.checked}
                    name="ch1"
                    color="primary"
                    value={this.quiz.questions[questionNo - 1].correctOp}
                  />
                }
                label={this.quiz.questions[questionNo - 1].correctOp}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.ch2}
                    onChange={this.checked}
                    name="ch2"
                    color="primary"
                    value={this.quiz.questions[questionNo - 1].op1}
                  />
                }
                label={this.quiz.questions[questionNo - 1].op1}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.ch3}
                    onChange={this.checked}
                    name="ch3"
                    color="primary"
                    value={this.quiz.questions[questionNo - 1].op2}
                  />
                }
                label={this.quiz.questions[questionNo - 1].op2}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.ch4}
                    onChange={this.checked}
                    name="ch4"
                    color="primary"
                    value={this.quiz.questions[questionNo - 1].op3}
                  />
                }
                label={this.quiz.questions[questionNo - 1].op3}
              />
            </div>
          )}
          {this.rand === "2" && (
            <div className={classes.answers}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.ch1}
                    onChange={this.checked}
                    name="ch1"
                    color="primary"
                    value={this.quiz.questions[questionNo - 1].op1}
                  />
                }
                label={this.quiz.questions[questionNo - 1].op1}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.ch2}
                    onChange={this.checked}
                    name="ch2"
                    color="primary"
                    value={this.quiz.questions[questionNo - 1].op2}
                  />
                }
                label={this.quiz.questions[questionNo - 1].op2}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.ch3}
                    onChange={this.checked}
                    name="ch3"
                    color="primary"
                    value={this.quiz.questions[questionNo - 1].correctOp}
                  />
                }
                label={this.quiz.questions[questionNo - 1].correctOp}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.ch4}
                    onChange={this.checked}
                    name="ch4"
                    color="primary"
                    value={this.quiz.questions[questionNo - 1].op3}
                  />
                }
                label={this.quiz.questions[questionNo - 1].op3}
              />
            </div>
          )}
          {this.rand === "3" && (
            <div className={classes.answers}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.ch1}
                    onChange={this.checked}
                    name="ch1"
                    color="primary"
                    value={this.quiz.questions[questionNo - 1].op1}
                  />
                }
                label={this.quiz.questions[questionNo - 1].op1}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.ch2}
                    onChange={this.checked}
                    name="ch2"
                    color="primary"
                    value={this.quiz.questions[questionNo - 1].op2}
                  />
                }
                label={this.quiz.questions[questionNo - 1].op2}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.ch3}
                    onChange={this.checked}
                    name="ch3"
                    color="primary"
                    value={this.quiz.questions[questionNo - 1].op3}
                  />
                }
                label={this.quiz.questions[questionNo - 1].op3}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.ch4}
                    onChange={this.checked}
                    name="ch4"
                    color="primary"
                    value={this.quiz.questions[questionNo - 1].correctOp}
                  />
                }
                label={this.quiz.questions[questionNo - 1].correctOp}
              />
            </div>
          )}
          <Button
            style={{ marginTop: 20 }}
            variant="contained"
            color="primary"
            onClick={this.next}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Quiz);
