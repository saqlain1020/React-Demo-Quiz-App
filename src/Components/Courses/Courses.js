import React, { Component } from "react";
import CoursesTable from "../CoursesTable/CoursesTable";
import firebase, { auth } from "../../Util/firebase";

class Courses extends Component {
  state = {
    joinedCourses: [],
    recommendedCourses: [],
    courses: [],
  };

  componentDidUpdate = (preProp, preState) => {
    // console.log("Update");
    if (preProp.user !== this.props.user) this.fetchCourses();
  };

  getUserCourses = () => {
    try {
      let recommendedCourses = [];
      this.state.courses.filter((item) => {
        if (
          !this.state.joinedCourses.some((element) => {
            if (element === item) return true; else return false;
          })
        ) {
          recommendedCourses.push(item);
          return false;
        }else return false;
      });
      this.setState({
        recommendedCourses,
      });
    } catch (error) {
      console.log(error);
    }
  };

  fetchCourses = async () => {
    let courses = [];
    let query = await firebase.firestore().collection("courses").get();
    query.forEach((doc) => {
      courses.push(doc.data().courseName);
    });
    this.setState(
      {
        courses,
        joinedCourses: this.props.user.courses,
      },
      this.getUserCourses
    );
  };

  componentDidMount = () => {
    // console.log(auth.currentUser);
    // console.log(this.props);
    // console.log(this.state);
    // console.log("Mounted");
    this.fetchCourses();
    // this.fetchCourses();
    // let query = await db.collection("users").where("uid","===",auth.currentUser.uid).get();
    // query.forEach(item=>{
    //     console.log(item.data());
    // })
  };
  render() {
    return (
      <div
        className="flex"
        style={{
          flexFlow: "column",
          padding: 50,
          height: "100%",
          justifyContent: "space-around",
        }}
      >
        <CoursesTable
          joinedCourses={this.state.joinedCourses}
          heading="JOINED COURSES"
        />
        <CoursesTable
          recommendedCourses={this.state.recommendedCourses}
          user={this.props.user}
          fetchCourses={this.fetchCourses}
          heading="RECOMMENDED COURSES"
        />
      </div>
    );
  }
}

export default Courses;
