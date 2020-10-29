import React from "react";
import Quiz from "../Quiz/Quiz";
import QuizTable from "../QuizTable/QuizTable"

class Dashboard extends React.Component {
    state={
        quizOpen: false,
        quiz: ""
    }
    quizOpen=(title,subject)=>{
        console.log("QuizOpen")
        let quizes = JSON.parse(localStorage.getItem("quizes"));
        let quiz;
        for (let i = 0; i < quizes.length; i++) {
            if(quizes[i].title === title && quizes[i].subject === subject){
                quiz = quizes[i];
                break;
            }
        }
        if(quiz){
            let flag = false;
            let score;
            let users = JSON.parse(localStorage.getItem("users"));
            users.forEach(item => {
              if(item.username === this.props.username){
                item.quizes.forEach(element=>{
                  if(element.id === quiz.id){
                    flag = true;
                    score = element.score;
                  }
                })
              }
            });
            if(flag){
              alert(`Quiz Already Taken | ${quiz.title} | Score: ${score}`)
            }else
            this.setState({
                quizOpen: true,
                quiz : <Quiz username={this.props.username} close = {()=>{this.setState({quizOpen:false})}} quiz = {quiz}/>
            })
        }


    }
    createRows(){
      return JSON.parse(localStorage.getItem("quizes"))?JSON.parse(localStorage.getItem("quizes")).map((item) => {
        return { title: item.title, subject: item.subject,noofqs: item.noOfQ , onclick: ()=>this.quizOpen(item.title,item.subject)};
      }): null
      
    }
    //Create method that will return quiz using the quiz object passed to it from here dashboard using other funciton on clickon quizes buttpns
  render = () => (
       <div>
         
           {!this.state.quizOpen &&(<div>
        <div className="quizMenu">
        <QuizTable rows={this.createRows()}/>
        </div>
      </div>)}
      {this.state.quizOpen && this.state.quiz}
       </div>
    
  );
}

export default Dashboard;
