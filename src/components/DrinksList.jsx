import React from 'react';
import Drinks from './Drinks';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles ({
  text: {
    display: 'flex',
    border: '1px solid black',
    justifyContent: 'spaceBetween'
  },
  title: {
    textAlign: 'center',
    fontSize: '4em',
    color: '#36d9a0'
  }
})

export default function DrinksList(props) {
  const classes = useStyles();
  return (
    <div className={classes.title}>
      {drinksList.map((drinks, index)=>
        <Drinks
        name={drinks.name}
        price={drinks.price}
        flavor={drinks.flavor}
        description={drinks.description}
        key={index}/>
      )}
    </div>
  );
}

DrinksList.propTypes = {
  drinksList: PropTypes.array,
  currentRouterPath: PropTypes.string,
  onDrinkSelection: PropTypes.func
};
