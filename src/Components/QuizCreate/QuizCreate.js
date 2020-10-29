import React, { Component } from "react";
import CustomFunctions from "../CustomFunctions/CustomFunctions";
import swal from "@sweetalert/with-react";

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
          })
          this.setState(
            {
              title: title,
            },
            async () => {
              let subId = await swal("Enter Subject ID", {
                content: "input",
              })
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

    let question = {
      question: this.state.question,
      correctOp: this.state.correctOp,
      op1: this.state.op1,
      op2: this.state.op2,
      op3: this.state.op3,
    };
    let questions = this.state.questions;
    questions.push(question);
    console.log(questions);
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
      let quizes = [];
      if (localStorage.getItem("quizes"))
        quizes = JSON.parse(localStorage.getItem("quizes"));

      //Get ids of all quizes;
      let ids = quizes.map((item) => {
        return item.id;
      });
      let id = CustomFunctions.uniqueId(ids);
      quiz.id = id;
      quizes.push(quiz);
      localStorage.setItem("quizes", JSON.stringify(quizes));
      this.props.dashboard();
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
  render = () => (
    <div id="quizCreate" style={{ display: "flex", flexFlow: "column" }}>
      <h1>Quiz: {this.state.title}</h1>
      <form
        onSubmit={this.submit}
        style={{ display: "flex", flexFlow: "column" }}
      >
        <h2>Qustion {this.state.currentQ}</h2>
        <textarea
          value={this.state.question}
          type="text"
          placeholder="Enter Question"
          name="question"
          onChange={this.changeInputState}
        />
        <input
          type="text"
          value={this.state.correctOp}
          placeholder="Correct Option"
          style={{ background: "green", color: "white" }}
          name="correctOp"
          onChange={this.changeInputState}
        />
        <input
          type="text"
          placeholder="Option 1"
          name="op1"
          value={this.state.op1}
          onChange={this.changeInputState}
        />
        <input
          type="text"
          placeholder="Option 2"
          name="op2"
          value={this.state.op2}
          onChange={this.changeInputState}
        />
        <input
          type="text"
          placeholder="Option 3"
          name="op3"
          value={this.state.op3}
          onChange={this.changeInputState}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default QuizCreate;
