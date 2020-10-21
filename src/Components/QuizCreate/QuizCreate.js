import React, { Component } from "react";

class QuizCreate extends Component {
  state = {
    noOfQs: 0,
  };
  componentDidMount() {
console.log(this.state.noOfQs)    let num = Number(prompt("Enter Number Of Questions"));
    if (isNaN(num) || num < 1) this.componentDidMount();
    else
      this.setState(
        {
          noOfQs: num,
        },
        () => {
          console.log(this.state.noOfQs);
        }
      );
  }

  render = () => <div id="quizCreate"></div>;
}

export default QuizCreate;
