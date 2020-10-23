import React, { Component } from "react";

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
  }
  componentDidMount() {
    if (this.state.questionNo === this.props.quiz.noOfQ - 1)
      this.setState({
        buttonText: "Done",
      });
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
      alert("Correct Anserwes" + percent)
      //Add quiz info to user
      let users  = JSON.parse(localStorage.getItem("users"));
      users = users.map((item)=>{
        if(item.username === this.props.username){
          item.quizes.push({
            id: this.props.quiz.id,
            score: percent,
          });
        }
        return item;
      })
      localStorage.setItem("users",JSON.stringify(users));
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
    this.setState(
      {
        ch1: false,
        ch2: false,
        ch3: false,
        ch4: false,
      },
      () => {
        this.setState({
          [e.target.name]: true,
          checkedAns: e.target.value,
        });
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
        {this.rand === "0" && (
          <div>
            <input
              onChange={this.checked}
              className="checkbox"
              type="checkbox"
              name="ch1"
              checked={this.state.ch1}
              id="ch1"
              value={this.props.quiz.questions[questionNo - 1].op1}
            />
            <label for="ch1">
              {this.props.quiz.questions[questionNo - 1].op1}
            </label>
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
        {this.rand === "1" && (
          <div>
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
          <div>
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
          <div>
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
        )}
        <button onClick={this.next}>{buttonText}</button>
      </div>
    );
  }
}

export default Quiz;
