import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles ({
  title: {
    color: 'purple',
    fontSize: '25pt'
  }
});

export default function AddDrink() {
  const classes = useStyles();
  return(
    <div>
      <div className={classes.title}>
        Add a new drink here!
      </div>
      <form>
        <input
          type='text'
          id='name'
          placeholder='Name of Drink'/>
          <br></br>
        <input
          type='text'
          id='brand'
          placeholder='Brand'/>
          <br></br>
        <input
          type='text'
          id='price'
          placeholder='Price'/>
          <br></br>
        <textarea
          id='description'
          placeholder='Description'/>
        <br></br>
        <button type='submit'>Add drink!</button>
      </form>
    </div>
  );
}
