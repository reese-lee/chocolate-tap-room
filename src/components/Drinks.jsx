import React from 'react';
import PropTypes from 'prop-types';

function Drinks(props){
  return (
    <div>
      <h4>{props.name}</h4>
      <h5>{props.price}</h5>
      <h5>{props.flavor}</h5>
      <h5>{props.description}</h5>
      <h5>{props.pints}</h5>
    </div>
  )
}

Drinks.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ticketid: PropTypes.string.isRequired
};

export default Drinks;
