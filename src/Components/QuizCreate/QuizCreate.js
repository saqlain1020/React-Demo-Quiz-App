import React, { Component } from "react";

class QuizCreate extends Component {
  state = {
    noOfQs: 0,
    title: "",
  };
  componentDidMount() {
    let num = Number(prompt("Enter Number Of Questions"));
    if (isNaN(num) || num < 1) this.componentDidMount();
    else
      this.setState(
        {
          noOfQs: num,
        },
        () => {
          console.log(this.state.noOfQs);
          let title = prompt("Enter Quiz Title");
          this.setState({
              title: title
          })
        }
      );
  }

  render = () => <div id="quizCreate">
      <input readonly='true' type="text" defaultValue={this.state.title}/>
      <textarea type="text" placeholder={this.state.question}/>
      <input type="text" placeholder="Question 1" style={{background: 'green',color='white'}}/>
      <input type="text" placeholder="Question 2"/>
      <input type="text" placeholder="Question 3"/>
      <input type="text" placeholder="Question 4"/>
  </div>;
}

export default QuizCreate;
