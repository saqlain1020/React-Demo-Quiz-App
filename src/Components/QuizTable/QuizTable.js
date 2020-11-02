import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import QuizResult from "../QuizResult/QuizResult";
import {v4 as uuid } from "uuid";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const styles =(theme)=>({
  table: {
    // minWidth: 700,
  },
  root:{
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      flexFlow: "column",
    },
  }
});

class CustomizedTables extends React.Component{
  state={
    quizResult: ""
  }

  quizClick=(row)=>{

    console.log(row)
    let flag = false;
      let score;
      let users = JSON.parse(localStorage.getItem("users"));
      users.forEach((item) => {
        if (item.username === this.props.username) {
          item.quizes.forEach((element) => {
            if (element.id === row.id) {
              flag = true;
              score = element.score;
            }
          });
        }
      });
      this.setState({
        quizResult: <QuizResult key={uuid()} title={row.title} noOfQ={row.noofqs} score={score} id={row.id} />,
      })
      // <QuizResult title={row.title} noOfQ={row.noofqs} score={score} id={row.id} />
      if(flag){
// <QuizResult title={row.title} noOfQ={row.noofqs} score={score} id={row.id} />
      }else{
        // <QuizResult title={row.title} noOfQ={row.noofqs} score={score} />
        // <Quiz username={this.props.username} close={() => {this.setState({ quizOpen: false });}} quiz={quiz}/>
      }
    
  }

  render=()=>{
    const {classes} = this.props;
    return (
      <div className={classes.root} >
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Title</StyledTableCell>
                <StyledTableCell align="right">Subject</StyledTableCell>
                <StyledTableCell align="right">No of Qs</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.rows ? (
                this.props.rows.map((row) => (
                  <StyledTableRow key={uuid()} onClick={()=>{this.quizClick(row)}} key={row.title}>
                    <StyledTableCell component="th" scope="row">
                      {row.title}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.subject}</StyledTableCell>
                    <StyledTableCell align="right">{row.noofqs}</StyledTableCell>
                  </StyledTableRow>
                ))
              ) : (
                <StyledTableCell align="right">No Entries</StyledTableCell>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        {this.state.quizResult}
        {/* <QuizResult title noOfQ score continue /> */}
      </div>
    );
  }
  
}
export default withStyles(styles)(CustomizedTables);