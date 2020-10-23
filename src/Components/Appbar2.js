import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Input, withStyles } from '@material-ui/core';
import Drawer from './Drawer';

import './Drawer.css';

const styles = (theme) => ({
    root: {
        backgroundColor: "red",
    },
    loginButton: {
        float: 'right',
        position: 'absolute',
        right: 0,
        backgroundColor: "white",
        // display: "none",
        width: 100,
        marginRight: 10,
        [theme.breakpoints.up("md")]: {
            // display: "block",
            width: 300,
        },
    },
});


class Appbar2 extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <div className={`${classes.root} Custom-Drawer`}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <Drawer />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            News
                        </Typography>
                        <Button className={classes.loginButton} color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles)(Appbar2);
