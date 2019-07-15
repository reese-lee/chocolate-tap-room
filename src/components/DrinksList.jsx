import React from 'react';
import Drinks from './Drinks';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles ({
  text: {
    fontSize: '1.5em',
    textAlign: 'center',
    color: '#36d9a0'
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
    <div>
      <div>
      <h1 className={classes.title} style={{fontFamily: 'DM Serif Display'}}>Our Drinks</h1>
      </div>
      <div className={classes.text} style={{fontFamily: 'DM Serif Display'}}>
        {props.drinksList.map((drinks, index)=>
          <Drinks
          name={drinks.name}
          price={drinks.price}
          flavor={drinks.flavor}
          description={drinks.description}
          key={index}/>
        )}
      </div>
    </div>
  );
}

DrinksList.propTypes = {
  drinksList: PropTypes.array,
  currentRouterPath: PropTypes.string,
  onDrinkSelection: PropTypes.func
};
