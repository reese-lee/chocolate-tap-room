import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'transparent'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  clicky: {
    color: 'white',
    textDecoration: 'none',
    '&:hover': {
      color: 'rgba(255,255,255,0.7)',
    },
    '&:active': {
      color: 'rgba(255,95,193,1)',
    },
  },
  spacing:{
    width: '150px',
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'spaceBetween',
    alignItems: 'center',
  }
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <div className={classes.spacing}>
              <div className={classes.spacing}>
                <Link to="/" style={{ textDecoration: 'none' }}><a className={classes.clicky}>Home</a></Link>
              </div>
              <div className={classes.spacing}>
                <Link to="/drinks" style={{ textDecoration: 'none' }}><a className={classes.clicky}>Menu</a></Link>
              </div>

            </div>

          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
