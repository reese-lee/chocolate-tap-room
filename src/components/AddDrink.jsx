import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

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

function AddDrink(props) {
  const classes = useStyles();
  let _name = null;
  let _brand = null;
  let _price = null;
  let _description = null;

  function handleNewFormSubmission(event) {
    event.preventDefault();
    props.onNewDrink({name: _name.value, brand: _brand.value, price: _price.value, description: _description.value})
    _name.value = '';
    _brand.value = '';
    _price.value = '';
    _description.value = '';
  }

  return (
    <div>
      <div style={{fontFamily: 'DM Serif Display'}} className={classes.title}>
      Add a new drink here!
      </div>
      <br></br>
      <div className={classes.root}>
        <form onSubmit = {handleNewFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder = 'Name of Drink'
          ref={(input) => {_name = input;}}
        />
        <input
          type='text'
          id='brand'
          placeholder = 'Brand of Drink'
          ref={(input) => {_brand = input;}}
        />
        <input
          type='text'
          id='price'
          placeholder = 'Price'
          ref={(input) => {_price = input;}}
        />
        <input
          type='textarea'
          id='description'
          placeholder = 'Description'
          ref={(textarea) => {_description = textarea;}}
        />
        <button type="submit" className={classes.button} style={{fontFamily: 'DM Serif Display'}}>ADD!</button>
        </form>
      </div>
    </div>
  );
}

AddDrink.propTypes = {
  onNewDrink: PropTypes.func
};

export default AddDrink;
