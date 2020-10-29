import React, { Component } from "react";
import "../fonts.css";
import { withStyles } from "@material-ui/core/";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

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
    this.seconds = this.props.quiz.noOfQ * 30;
  }
  componentDidMount() {
    if (this.state.questionNo === this.props.quiz.noOfQ - 1)
      this.setState({
        buttonText: "Done",
      });

    //Timer
    let timerDiv = document.querySelector("#timer");

    setInterval(() => {
      this.seconds--;
      timerDiv.innerHTML = `Timer: ${this.seconds} Sec Left`;
      if (this.seconds === 0) {
        let percent =
          ((this.state.correctQs / this.props.quiz.noOfQ) * 100).toFixed(2) +
          "%";
        alert("Correct Anserwes" + percent);
        //Add quiz info to user
        let users = JSON.parse(localStorage.getItem("users"));
        users = users.map((item) => {
          if (item.username === this.props.username) {
            item.quizes.push({
              id: this.props.quiz.id,
              score: percent,
            });
          }
          return item;
        });
        localStorage.setItem("users", JSON.stringify(users));
        this.props.close();
      }
    }, 1000);
  }
  next = () => {
    this.rand = (Math.random() * 3).toFixed(); // 0,1,2,3;
    if (this.state.questionNo === Number(this.props.quiz.noOfQ) - 1)
      this.setState({
        buttonText: "Done",
      });
    if (
      this.state.checkedAns ===
      this.props.quiz.questions[this.state.questionNo - 1].correctOp
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
    if (this.state.questionNo === this.props.quiz.noOfQ) {
      let percent =
        ((this.state.correctQs / this.props.quiz.noOfQ) * 100).toFixed(2) + "%";
      alert("Correct Anserwes" + percent);
      //Add quiz info to user
      let users = JSON.parse(localStorage.getItem("users"));
      users = users.map((item) => {
        if (item.username === this.props.username) {
          item.quizes.push({
            id: this.props.quiz.id,
            score: percent,
          });
        }
        return item;
      });
      localStorage.setItem("users", JSON.stringify(users));
      this.props.close();
    } else {
      if (this.state.questionNo < this.props.quiz.noOfQ)
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
          <h1 className={classes.title}>Title: {this.props.quiz.title}</h1>

          <div className={classes.titleBar}>
            <h2>
              Question {questionNo}/{this.props.quiz.noOfQ}
            </h2>
            <h3 id="timer" className={classes.timer}>
              Timer: 120 Sec Left
            </h3>
          </div>

          <h2 className={classes.question}>
            {this.props.quiz.questions[questionNo - 1].question}
          </h2>
          {this.rand && (
            <div className={classes.answers}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.ch1}
                    onChange={this.checked}
                    name="ch1"
                    color="primary"
                    value={this.props.quiz.questions[questionNo - 1].op1}
                  />
                }
                label={this.props.quiz.questions[questionNo - 1].op1}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.ch2}
                    onChange={this.checked}
                    name="ch2"
                    color="primary"
                    value={this.props.quiz.questions[questionNo - 1].correctOp}
                  />
                }
                label={this.props.quiz.questions[questionNo - 1].correctOp}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.ch3}
                    onChange={this.checked}
                    name="ch3"
                    color="primary"
                    value={this.props.quiz.questions[questionNo - 1].op2}
                  />
                }
                label={this.props.quiz.questions[questionNo - 1].op2}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.ch4}
                    onChange={this.checked}
                    name="ch4"
                    color="primary"
                    value={this.props.quiz.questions[questionNo - 1].op3}
                  />
                }
                label={this.props.quiz.questions[questionNo - 1].op3}
              />
            </div>
          )}
          {/* {this.rand === "1" && (
            <div className={classes.answers}>
              <input
                onChange={this.checked}
                className="checkbox"
                type="checkbox"
                name="ch1"
                checked={this.state.ch1}
                id="ch1"
                value={this.props.quiz.questions[questionNo - 1].correctOp}
              />
              <label for="ch1">
                {this.props.quiz.questions[questionNo - 1].correctOp}
              </label>
              <input
                onChange={this.checked}
                className="checkbox"
                type="checkbox"
                name="ch2"
                checked={this.state.ch2}
                id="ch2"
                value={this.props.quiz.questions[questionNo - 1].op1}
              />
              <label for="ch2">
                {this.props.quiz.questions[questionNo - 1].op1}
              </label>
              <input
                onChange={this.checked}
                className="checkbox"
                type="checkbox"
                name="ch3"
                checked={this.state.ch3}
                id="ch3"
                value={this.props.quiz.questions[questionNo - 1].op2}
              />
              <label for="ch3">
                {this.props.quiz.questions[questionNo - 1].op2}
              </label>
              <input
                onChange={this.checked}
                className="checkbox"
                type="checkbox"
                name="ch4"
                checked={this.state.ch4}
                id="ch4"
                value={this.props.quiz.questions[questionNo - 1].op3}
              />
              <label for="ch4">
                {this.props.quiz.questions[questionNo - 1].op3}
              </label>
            </div>
          )}
          {this.rand === "2" && (
            <div className={classes.answers}>
              <input
                onChange={this.checked}
                className="checkbox"
                type="checkbox"
                name="ch1"
                checked={this.state.ch1}
                id="ch1"
                value={this.props.quiz.questions[questionNo - 1].op2}
              />
              <label for="ch1">
                {this.props.quiz.questions[questionNo - 1].op2}
              </label>
              <input
                onChange={this.checked}
                className="checkbox"
                type="checkbox"
                name="ch2"
                checked={this.state.ch2}
                id="ch2"
                value={this.props.quiz.questions[questionNo - 1].op1}
              />
              <label for="ch2">
                {this.props.quiz.questions[questionNo - 1].op1}
              </label>
              <input
                onChange={this.checked}
                className="checkbox"
                type="checkbox"
                name="ch3"
                checked={this.state.ch3}
                id="ch3"
                value={this.props.quiz.questions[questionNo - 1].correctOp}
              />
              <label for="ch3">
                {this.props.quiz.questions[questionNo - 1].correctOp}
              </label>
              <input
                onChange={this.checked}
                className="checkbox"
                type="checkbox"
                name="ch4"
                checked={this.state.ch4}
                id="ch4"
                value={this.props.quiz.questions[questionNo - 1].op3}
              />
              <label for="ch4">
                {this.props.quiz.questions[questionNo - 1].op3}
              </label>
            </div>
          )}
          {this.rand === "3" && (
            <div className={classes.answers}>
              <input
                onChange={this.checked}
                className="checkbox"
                type="checkbox"
                name="ch1"
                checked={this.state.ch1}
                id="ch1"
                value={this.props.quiz.questions[questionNo - 1].op2}
              />
              <label for="ch1">
                {this.props.quiz.questions[questionNo - 1].op2}
              </label>
              <input
                onChange={this.checked}
                className="checkbox"
                type="checkbox"
                name="ch2"
                checked={this.state.ch2}
                id="ch2"
                value={this.props.quiz.questions[questionNo - 1].op1}
              />
              <label for="ch2">
                {this.props.quiz.questions[questionNo - 1].op1}
              </label>
              <input
                onChange={this.checked}
                className="checkbox"
                type="checkbox"
                name="ch3"
                checked={this.state.ch3}
                id="ch3"
                value={this.props.quiz.questions[questionNo - 1].op3}
              />
              <label for="ch3">
                {this.props.quiz.questions[questionNo - 1].op3}
              </label>
              <input
                onChange={this.checked}
                className="checkbox"
                type="checkbox"
                name="ch4"
                checked={this.state.ch4}
                id="ch4"
                value={this.props.quiz.questions[questionNo - 1].correctOp}
              />
              <label for="ch4">
                {this.props.quiz.questions[questionNo - 1].correctOp}
              </label>
            </div>
          )} */}
          <button onClick={this.next}>{buttonText}</button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Quiz);
