import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";
import { db } from "../../Util/firebase";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "500px",
    borderRadius: 5,
    overflow: "hidden",
  },
  heading: {
    background: "#6c5ce7",
    color: "white",
    fontFamily: "Roboto",
    fontSize: "20px",
    fontWeight: "900",
    border: "2px solid #6c5ce7",
    height: "40px",
    letterSpacing: "2px",
  },
  table: {
    border: "2px solid #6c5ce7",
  },
  item: {
    justifyContent: "space-between",
    padding: 5,
  },
  button: {
    height: "30px",
    background: "#0984e3",
  },
  buttonJoined: {
    background: "#00b894",
    color: "white",
    textDecoration: "none",
    "&:hover": {
      color: "black",
    },
  },
  courseName: {
    fontFamily: "Raleway",
    fontWeight: "600",
  },
}));

var CoursesTable = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={`${classes.heading} flex`}>{props.heading}</div>
      <div className={classes.table}>
        {props.joinedCourses &&
          props.joinedCourses.map((item) => (
            <ItemJoined key={uuid()} courseName={item} />
          ))}
        {props.recommendedCourses &&
          props.recommendedCourses.map((item) => (
            <ItemRecommended
              key={uuid()}
              user={props.user}
              fetchCourses={props.fetchCourses}
              courseName={item}
            />
          ))}
      </div>
    </div>
  );
};

var ItemJoined = (props) => {
  const classes = useStyles();
  return (
    <div className={`${classes.item} flex`}>
      <span className={classes.courseName}>{props.courseName}</span>
      <Link to={`/AllQuizes/${props.courseName}`}>
        <Button
          className={`${classes.button} ${classes.buttonJoined}`}
          variant="contained"
        >
          Open
        </Button>
      </Link>
    </div>
  );
};
var ItemRecommended = (props) => {
  const classes = useStyles();
  let onClick = async () => {
    console.log(props);
    let { courses } = props.user;
    courses.push(props.courseName);
    console.log(courses);
    let obj = props.user;
    obj.courses = courses;
    await db.collection("users").doc(props.user.docId).set(obj);
    props.fetchCourses();
  };
  return (
    <div className={`${classes.item} flex`}>
      <span className={classes.courseName}>{props.courseName}</span>
      <Button
        onClick={onClick}
        className={classes.button}
        variant="contained"
        color="primary"
      >
        Join
      </Button>
    </div>
  );
};

export default CoursesTable;
