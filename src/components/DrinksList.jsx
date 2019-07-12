import React from 'react';
import Drinks from './Drinks';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

function DrinksList(props) {
  return (
    <div>
      {Object.keys(props.drinksList).map(function(drinkId){
        let drink = props.drinksList[drinkId];
        return <Drinks name={drinks.name}
        price={drinks.price}
        flavor={drinks.flavor}
        pints={drinks.pints}
        description={drinks.description}
        key={drinkId}
        drinkId={drinkId}
        onDrinkSelection={props.onDrinkSelection}
        />;
      })}
    </div>
  );
}

DrinksList.propTypes = {
  drinksList: PropTypes.object,
  currentRouterPath: PropTypes.string,
  onDrinkSelection: PropTypes.func
};

export default DrinksList;
