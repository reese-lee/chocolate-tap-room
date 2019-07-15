import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

export default function Drinks(props){
  return (
  <div>
      <h4>{props.name}</h4>
      <p>{props.price}<br/>
      Flavor: {props.flavor}<br/>
      Description: {props.description}</p>
  </div>
)}

Drinks.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  flavor: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}
