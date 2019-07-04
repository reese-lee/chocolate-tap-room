import React from 'react';

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

export default Drinks;
