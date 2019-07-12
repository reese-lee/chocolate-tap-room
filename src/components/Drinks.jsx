import React from 'react';
import PropTypes from 'prop-types';

function Drinks(props){
  const drinkInformation =
  <div>
    <ul>
      <li>{props.name}</li>
      <li>{props.brand}</li>
      <li>{props.price}</li>
      <li>{props.description}</li>
    </ul>
  </div>;

  if(props.currentRouterPath === '/employees') {
    return (
      <div onClick={()=> {props.onDrinkSelection(props.drinkId);}}>
        {drinkInformation}
      </div>
    );
  } else {
    return (
      <div>
        {drinkInformation}
      </div>
    );
  }
}

Drinks.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ticketid: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  onDrinkSelection: PropTypes.func,
  drinkId: PropTypes.string.isRequired
};

export default Drinks;
