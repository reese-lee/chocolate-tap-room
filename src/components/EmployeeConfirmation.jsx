import React from 'react';
import PropTypes from 'prop-types';

function EmployeeConfirmation(props){
  return (
    <div>
      <p>Are you really an employee of this cafe? (We go by the honor system here.)</p>
      <button onClick={props.onEmployeeConfirmation}>Yes</button>
    </div>
  );
}

EmployeeConfirmation.propTypes = {
  onEmployeeConfirmation: PropTypes.func
};

export default EmployeeConfirmation;
