import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  title: {
    fontSize: '4em',
    textAlign: 'center'
  },
  text: {
    textAlign: 'center',
    fontSize: '2em',
  },
  clicky: {
    color: '#36d9a0',
    '&:hover': {
      color: '#f53b88',
    },
    '&:active': {
      color: '#f2f549',
    },
  },
})


class Employees extends React.Component {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.title} style={{fontFamily: 'DM Serif Display'}}>
        What would you like to accomplish today?
      </div>
      <div className={classes.text} style={{fontFamily: 'DM Serif Display'}}>
        <Link style={{ textDecoration: 'none' }} to="/addDrink"><a className={classes.clicky}>Add a new drink</a></Link>
        <br></br>
        <Link style={{ textDecoration: 'none' }} to="/edit"><a className={classes.clicky}>Edit drinks</a></Link>
      </div>
    </div>
)}

export Employees;
