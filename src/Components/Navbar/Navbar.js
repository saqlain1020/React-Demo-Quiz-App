import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import {auth} from '../../Util/firebase'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginRight: 10
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
          <Link to={auth.currentUser?"/Dashboard":"/Login"}><HomeIcon/></Link>
          </IconButton>
          <Typography variant="h6" className={classes.title} onClick={()=>{props.turnFalse("quizCreate")}}>
          Quiz Application
          </Typography>
          {!props.user && (
          <div style={{ display: "flex", marginRight: "10px" }}>
            <Link to="/Signup"><Button color="inherit">SignUP</Button></Link>
            <Link to="/Login"><Button color="inherit">Login</Button></Link>
          </div>
        )}
        {props.user && (
          <div style={{ display: "flex", marginRight: "10px" }}>
            <Typography variant="h6" className={classes.title}>Welcome {props.username}</Typography>
            <Link to="/Quizcreate"><Button color="inherit">Create Quiz</Button></Link>
            <Link onClick={()=>{auth.signOut()}}><Button color="inherit">Logout</Button></Link>
          </div>
        )}
        </Toolbar>
      </AppBar>
    </div>
  );
}