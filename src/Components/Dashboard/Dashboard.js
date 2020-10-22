import React from "react";
import QuizCreate from "../QuizCreate/QuizCreate";

class Dashboard extends React.Component {
    state={
        quizOpen: false
    }
    quizOpen=(title,subject)=>{
        let quizes = JSON.parse(localStorage.getItem("quizes"));
        let quiz;
        for (let i = 0; i < quizes.length; i++) {
            if(quizes[i].title === title && quizes[i].subject === subject){
                quiz = quizes[i];
                break;
            }
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
              {JSON.parse(localStorage.getItem("quizes")).map((item) => {
                return <tr><td>{item.title}</td><td>{item.subject}</td><td>{item.noOfQ}</td></tr>;
              })}
            </tbody>
          </table>
        </div>
      </div>)}
       </div>
    
  );
}

export default Dashboard;
