import React from 'react';
import PropTypes from 'prop-types';

export default function Drinks(props){
  const drinkInformation =
  <div>
    <ul>
      <li>{props.name}</li>
      <li>{props.price}</li>
      <li>{props.flavor}</li>
      <li>{props.description}</li>
    </ul>
  </div>;
}

Drinks.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  flavor: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}
