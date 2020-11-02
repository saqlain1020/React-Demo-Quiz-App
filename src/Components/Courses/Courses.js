import React, { Component } from 'react';
import CoursesTable from '../CoursesTable/CoursesTable';

class Courses extends Component {
    state={
        joinedCourses: ["HTML","CSS","Javascript"],
        recommendedCourses: ["React","Redux","Angular","Node"]
    }
    render() {
        return (
            <div className="flex" style={{flexFlow:"column", padding: 50, height: "100%", justifyContent:"space-around"}}>
                <CoursesTable joinedCourses={this.state.joinedCourses}  heading="JOINED COURSES"/>
                <CoursesTable recommendedCourses={this.state.recommendedCourses}heading="RECOMMENDED COURSES"/>
            </div>
        );
    }
}

export default Courses;
