import React from "react";
import Quiz from "../Quiz/Quiz"

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
            console.log(quiz)
            this.setState({
                quizOpen: true,
                quiz : <Quiz username={this.props.username} close = {()=>{this.setState({quizOpen:false})}} quiz = {quiz}/>
            })
        }


    }
    //Create method that will return quiz using the quiz object passed to it from here dashboard using other funciton on clickon quizes buttpns
  render = () => (
       <div>
           {!this.state.quizOpen &&(<div>
        <div className="quizMenu">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Subject</th>
                <th>No. of Qs</th>
              </tr>
            </thead>
            <tbody>
              {localStorage.getItem("quizes")?JSON.parse(localStorage.getItem("quizes")).map((item) => {
                return <tr onClick={()=>this.quizOpen(item.title,item.subject)}><td>{item.title}</td><td>{item.subject}</td><td>{item.noOfQ}</td></tr>;
              }): <div>No Quizes</div>}
            </tbody>
          </table>
        </div>
      </div>)}
      {this.state.quizOpen && this.state.quiz}
       </div>
    
  );
}

export default Dashboard;
