import React from 'react';
import QuizCreate from '../QuizCreate/QuizCreate';

class Dashboard extends React.Component{
    
    state={
        quiz: false
    }

    render=()=> <div>
        <button onClick={()=>this.setState({quiz: true})}>Create Quiz</button>
        {!this.state.quiz?<div><div className="left">
            <div className="quizMenu">
                <ul>
                    <li>Quiz 1</li>
                    <li>Quiz 2</li>
                    <li>Quiz 3</li>
                </ul>
            </div>
        </div>
        <div className="right">
            <div className="quizInfo">
                <h1>Quiz 1</h1>
                <h3>Passing Score: </h3>
                <h3>Quiz Duration: </h3>
                <h3>Total Questions: </h3>
                <button>Continue</button>
            </div>
        </div></div>: <QuizCreate/>}
        
    </div>
}

export default Dashboard;