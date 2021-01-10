import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import QuizResult from "../QuizResult/QuizResult";
import {v4 as uuid } from "uuid";
// import {db,auth} from "../../Util/firebase";

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
    quizResult: "",
    rows:[],
    user:{},
  }

  
  componentDidUpdate=(preProp)=>{
    if(preProp!==this.props){
      this.createRows();
    }  
  }

  createRows = async () => {
    const {quizes} = this.props;
    let rows = quizes?quizes.map((item) => {
      return {
        title: item.title,
        subject: item.subject,
        noofqs: item.noOfQ,
        id: item.id,
        onclick: () => this.quizClick(item.id),
      };
    }):[];
    // if (rows)
    //   rows.sort((a, b) =>
    //     a.subject > b.subject ? 1 : b.subject > a.subject ? -1 : 0
    //   );
    this.setState({
      rows,
    })
  }
  quizClick=(row)=>{
    const {user} = this.props;
    // let flag;
    let score;

    user.quizes?user.quizes.forEach(item=>{
      if(item.id === row.id){
        // flag = true;
        score = item.score;
      }
    }):score = null;


    this.setState({
      quizResult: <QuizResult key={uuid()} title={row.title} noOfQ={row.noofqs} score={score} id={row.id} />,
    })
  //       <QuizResult title={row.title} noOfQ={row.noofqs} score={score} id={row.id} />
  //       if(flag){
  // <QuizResult title={row.title} noOfQ={row.noofqs} score={score} id={row.id} />
  //       }else{
  //         <QuizResult title={row.title} noOfQ={row.noofqs} score={score} />
  //         <Quiz username={this.props.username} close={() => {this.setState({ quizOpen: false });}} quiz={quiz}/>
  //       }
      


    // console.log(row)
    // let flag = false;
    //   let score;
    //   let users = JSON.parse(localStorage.getItem("users"));
    //   users.forEach((item) => {
    //     if (item.username === this.props.username) {
    //       item.quizes.forEach((element) => {
    //         if (element.id === row.id) {
    //           flag = true;
    //           score = element.score;
    //         }
    //       });
    //     }
    //   });
    //   this.setState({
    //     quizResult: <QuizResult key={uuid()} title={row.title} noOfQ={row.noofqs} score={score} id={row.id} />,
    //   })
      // <QuizResult title={row.title} noOfQ={row.noofqs} score={score} id={row.id} />
      // if(flag){
// <QuizResult title={row.title} noOfQ={row.noofqs} score={score} id={row.id} />
      // }else{
        // <QuizResult title={row.title} noOfQ={row.noofqs} score={score} />
        // <Quiz username={this.props.username} close={() => {this.setState({ quizOpen: false });}} quiz={quiz}/>
      // }
    
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
              {this.state.rows ? (
                this.state.rows.map((row) => (
                  <StyledTableRow key={uuid()} onClick={()=>{this.quizClick(row)}}>
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