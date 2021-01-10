import { Container } from "@material-ui/core";
import React from "react";
// import Quiz from "../Quiz/Quiz";
import QuizTable from "../QuizTable/QuizTable";
// import swal from "@sweetalert/with-react";
import { auth, db } from "../../Util/firebase";

class Dashboard extends React.Component {
  state = {
    quizOpen: false,
    quiz: "",
    quizes: [],
    rows: [],
    user:{},
  };
  // createRows = async () => {
  //   const {quizes} = this.state;
  //   let rows = quizes?quizes.map((item) => {
  //     return {
  //       title: item.title,
  //       subject: item.subject,
  //       noofqs: item.noOfQ,
  //       id: item.id,
  //       onclick: () => this.quizOpen(item.id),
  //     };
  //   }):[];
  //   // if (rows)
  //   //   rows.sort((a, b) =>
  //   //     a.subject > b.subject ? 1 : b.subject > a.subject ? -1 : 0
  //   //   );
  //   this.setState({
  //     rows,
  //   })
  // };
  componentDidMount = async() => {
    const courseName = this.props.match.params.courseName;
    let quizes = [];
    let query = await db
      .collection("quizes")
      .where("subject", "==", courseName)
      .get();
    query.forEach((doc) => {
      let obj = doc.data();
      obj.id = doc.id;
      quizes.push(obj);
    });

    let user;
    let userQuery = await db.collection("users").where("uid","==",auth.currentUser.uid).get();
    userQuery.forEach(doc=>{
      user = doc.data();
    })

    this.setState({
      quizes,
      user,
    })
  };
  //Create method that will return quiz using the quiz object passed to it from here dashboard using other funciton on clickon quizes buttpns
  render = () => (
    <div>
      
      {!this.state.quizOpen && (
        <div>
          <Container style={{ marginTop: 30 }}>
            <QuizTable
              quizes = {this.state.quizes}
              username={this.props.username}
              rows={this.state.rows}
              user = {this.state.user}
            />
          </Container>
        </div>
      )}
      {this.state.quizOpen && this.state.quiz}
    </div>
  );
}

export default Dashboard;
