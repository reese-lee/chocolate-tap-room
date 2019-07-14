import React from 'react';
import PropTypes from 'prop-types';

function DrinkDetail(props){
  return (
    <div>
      <hr/>
      <h2>{props.selectedDrink.name}</h2>
      <h3>{props.selectedDrink.price}</h3>
      <h3>{props.selectedDrink.flavor}</h3>
      <h3>{props.selectedDrink.description}</h3>
      <hr/>
    </div>
  );
}

DrinkDetail.propTypes = {
  selectedDrink: PropTypes.object
};

export default DrinkDetail;
