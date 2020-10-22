import React, { Component } from "react";

class Quiz extends Component {
  state = {
    questionNo: "1",
    buttonText: "Next",
    ch1: false,
    ch2: false,
    ch3: false,
    ch4: false,
    correctQs: 0,
    checkedAns: "",
  };
  componentDidMount() {
    if (this.state.questionNo === this.props.quiz.noOfQ - 1)
      this.setState({
        buttonText: "Done",
      });
  }
  next = () => {
    if (this.state.questionNo === Number(this.props.quiz.noOfQ) + 1)
      this.setState({
        buttonText: "Done",
      });

    if (
      this.state.checkedAns ===
      this.props.quiz.questions[this.state.questionNo - 1].correctOp
    ) {
      this.setState({
        correctQs: Number(this.state.correctQs) + 1,
      });
    }

    if (this.state.questionNo === this.props.quiz.noOfQ) {
        console.log("Correct Anserwes");
        console.log(this.state.correctQs)
        return;
      }

    this.setState({
      questionNo: Number(this.state.questionNo) + 1,
      ch1: false,
      ch2: false,
      ch3: false,
      ch4: false,
    });

  };

  checked = (e) => {
    this.setState(
      {
        ch1: false,
        ch2: false,
        ch3: false,
        ch4: false,
      },
      () => {
        this.setState(
          {
            [e.target.name]: true,
            checkedAns: e.target.value,
          },
          () => {
            console.log(this.state);
          }
        );
      }
    );
  };

  render() {
    const { questionNo, buttonText } = this.state;

    return (
      <div>
        <h1>{this.props.quiz.title}</h1>
        <h2>
          Question {questionNo}/{this.props.quiz.noOfQ}
        </h2>
        <h2>{this.props.quiz.questions[questionNo - 1].question}</h2>
        <input
          onChange={this.checked}
          className="checkbox"
          type="checkbox"
          name="ch1"
          checked={this.state.ch1}
          id="ch1"
          value={this.props.quiz.questions[questionNo - 1].op1}
        />
        <label for="ch1">{this.props.quiz.questions[questionNo - 1].op1}</label>
        <input
          onChange={this.checked}
          className="checkbox"
          type="checkbox"
          name="ch2"
          checked={this.state.ch2}
          id="ch2"
          value={this.props.quiz.questions[questionNo - 1].correctOp}
        />
        <label for="ch2">
          {this.props.quiz.questions[questionNo - 1].correctOp}
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
        <label for="ch3">{this.props.quiz.questions[questionNo - 1].op2}</label>
        <input
          onChange={this.checked}
          className="checkbox"
          type="checkbox"
          name="ch4"
          checked={this.state.ch4}
          id="ch4"
          value={this.props.quiz.questions[questionNo - 1].op3}
        />
        <label for="ch4">{this.props.quiz.questions[questionNo - 1].op3}</label>
        <button onClick={this.next}>{buttonText}</button>
      </div>
    );
  }
}

export default Quiz;
