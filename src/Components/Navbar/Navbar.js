import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  button: {
    color: "white"
  }
}));

export default function Navbar(props) {
  const classes = useStyles();
 
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <HomeIcon onClick={()=>{props.turnFalse("quizCreate")}}/>
          </IconButton>
          <Typography variant="h6" className={classes.title} onClick={()=>{props.turnFalse("quizCreate")}}>
          Quiz Application
          </Typography>
          {!props.username && (
          <div style={{ display: "flex", marginRight: "10px" }}>
            <Button color="inherit" onClick={()=>props.turnTrue("signUp")}>SignUP</Button>
            <Button color="inherit" onClick={props.login}>Login</Button>
          </div>
        )}
        {props.username && (
          <div style={{ display: "flex", marginRight: "10px" }}>
            <Typography variant="h6" className={classes.title}>Welcome {props.username}</Typography>
            <Button color="inherit" onClick={()=>props.turnTrue("quizCreate")}>Create Quiz</Button>
            <Button color="inherit" onClick={props.changeState}>Logout</Button>
          </div>
        )}
        </Toolbar>
      </AppBar>
    </div>
  );
}