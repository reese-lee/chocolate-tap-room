import React from 'react';
import Drinks from './Drinks';
import PropTypes from 'prop-types';

function DrinksList(props) {
  return (
    <div>
      {props.drinksList.map((drinks, index)=>
        <Drinks
          name={drinks.name}
          price={drinks.price}
          flavor={drinks.flavor}
          description={drinks.description}
          key={index}
        />
      )}
    </div>
  );
}

DrinksList.propTypes = {
  drinksList: PropTypes.array
};

export default DrinksList;
