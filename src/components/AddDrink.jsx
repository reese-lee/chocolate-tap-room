import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    flexBasis: 200,
  },
  title: {
    fontSize: '4em',
    textAlign: 'center',
    color: '#36d9a0'
  },
  button: {
    textAlign: 'center',
    marginTop: '5%',
    marginLeft: '49%',
    fontSize: '1.5em',
    color: '#36d9a0',
    '&:hover': {
      color: '#f53b88',
    },
    '&:active': {
      color: '#f2f549',
    },
  }
}));

export default function AddDrink() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: '',
    brand: '',
    price: '',
    description: ''
  });

  return (
    <div>
      <div style={{fontFamily: 'DM Serif Display'}} className={classes.title}>
      Add a new drink here!
      </div>
      <br></br>
      <div className={classes.root}>
        <form>
        <TextField
        id="outlined-simple-start-adornment"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="Name of Drink"
        InputProps={{
          startAdornment: <InputAdornment position="start"></InputAdornment>,
        }}
        />

        <TextField
        id="outlined-simple-start-adornment"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="Brand"
        InputProps={{
          startAdornment: <InputAdornment position="start"></InputAdornment>,
        }}
        />

        <TextField
        id="outlined-simple-start-adornment"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="Price"
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        />

        <TextField
        id="outlined-simple-start-adornment"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="Description"
        InputProps={{
          startAdornment: <InputAdornment position="start"></InputAdornment>,
        }}
        />
        </form>
      </div>
      <div>
        <Button className={classes.button} style={{fontFamily: 'DM Serif Display'}}>ADD!</Button>
      </div>
    </div>
  );
}
