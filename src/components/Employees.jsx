import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  title: {
    fontSize: '20pt'
  }

})


export default function Employees() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.title}>
        What would you like to accomplish today?
      </div>
      <Link to="/addDrink">Add a new drink</Link>
    </div>
)}
