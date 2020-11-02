import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import { withRouter } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  root: {
    padding: 5,
    borderTop: "2px solid #222",
    height: "250px",
    flexFlow: "column",
    justifyContent: "space-around",
    alignItems: "left",
    width: "100%",
  },
  para: {
    fontSize: "20px",
    fontWeight: "500",
  },
}));

const QuizResult = (props) => {
  const classes = useStyle();
  return (
    <div className={`${classes.root} flex`} >
      <p className={classes.para}>
        Quiz Title: {props.title}
        <br />
        Total Questions: {props.noOfQ}
        <br />
      </p>
      <div>
        {!props.score && (
          <Button
          style={{marginRight: 5}}
            variant="contained"
            color="primary"
            onClick={() => {
              props.history.push(`/Quizes/${props.id}`);
            }}
          >
            Continue
          </Button>
        )}

        <Button
          variant="contained"
          color="secondary"
          className="back"
          onClick={() => props.history.goBack()}
        >
          Back
        </Button>
      </div>

      {props.score && <h1>Score: {props.score}</h1>}
    </div>
  );
};

export default withRouter(QuizResult);
