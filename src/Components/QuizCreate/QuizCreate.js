import React, { Component } from "react";

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
  componentDidMount() {
    let num = Number(prompt("Enter Number Of Questions"));
    if (isNaN(num) || num < 1) this.componentDidMount();
    else
      this.setState(
        {
          noOfQ: num,
        },
        () => {
          let title = prompt("Enter Quiz Title");
          this.setState(
            {
              title: title,
            },
            () => {
              let subId = prompt("Enter SubjectID");
              this.setState(
                {
                  subject: subId,
                },
                () => {
                  this.setState({
                    quiz: {
                      subject: this.state.subject,
                      noOfQ: this.state.noOfQ,
                      title: this.state.title,
                      createdBy: this.props.username,
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
  submit = (e) => {
    e.preventDefault();
    if (this.state.currentQ === this.state.noOfQ) {
      //End Quiz Create
      let quiz = this.state.quiz;
      quiz.questions = this.state.questions;
      let quizes = [];
      if(localStorage.getItem("quizes"))
        quizes = JSON.parse(localStorage.getItem("quizes"));
      quizes.push(quiz);
      localStorage.setItem("quizes", JSON.stringify(quizes));
      this.props.dashboard();
      return;
    }
    let question = {
      question: this.state.question,
      correctOp: this.state.correctOp,
      op1: this.state.op1,
      op2: this.state.op2,
      op3: this.state.op3,
    };
    let questions = [...this.state.questions, question];
    this.setState({
      questions: questions,
    });
    // let quizes = [{
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
    this.setState({
      currentQ: Number(this.state.currentQ) + 1,
    });
  };
  render = () => (
    <div id="quizCreate" style={{ display: "flex", flexFlow: "column" }}>
      <h1>Quiz: {this.state.title}</h1>
      <form onSubmit={this.submit} style={{display: "flex",flexFlow: "column"}}>
        <h2>Qustion {this.state.currentQ}</h2>
        <textarea
          defaultValue={this.state.question}
          type="text"
          placeholder="Enter Question"
          name="question"
        />
        <input
          type="text"
          defaultValue={this.state.correctOp}
          placeholder="Correct Option"
          style={{ background: "green", color: "white" }}
          name="correctOp"
        />
        <input
          type="text"
          placeholder="Option 1"
          name="op1"
          defaultValue={this.state.op1}
        />
        <input
          type="text"
          placeholder="Option 2"
          name="op2"
          defaultValue={this.state.op2}
        />
        <input
          type="text"
          placeholder="Option 3"
          name="op3"
          defaultValue={this.state.op3}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default QuizCreate;
