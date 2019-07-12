import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import AddDrink from './AddDrink';
import DrinksList from './DrinksList';
import DrinkDetail from './DrinkDetail';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  title: {
    fontSize: '4em',
    textAlign: 'center'
  },
  text: {
    textAlign: 'center',
    fontSize: '2em',
  },
  clicky: {
    color: '#36d9a0',
    '&:hover': {
      color: '#f53b88',
    },
    '&:active': {
      color: '#f2f549',
    },
  },
})

function Employees(props) {
  let optionalSelectedDrinkContent = null;
  if(props.selectedDrink != null) {
    optionalSelectedDrinkContent = <DrinkDetail selectedDrink={props.drinksList[props.selectedDrink]}/>;
  }
  return(
    <div>
      <h2>Employees Only</h2>
      {optionalSelectedDrinkContent}
      <DrinksList
        drinksList={props.drinksList}
        currentRouterPath={props.currentRouterPath}
        onDrinkSelection={props.onDrinkSelection} />
    </div>
    )
  }

  Employees.propTypes = {
    drinksList: PropTypes.object,
    currentRouterPath: PropTypes.string.isRequired,
    onDrinkSelection: PropTypes.func.isRequired,
    selectedDrink: PropTypes.string
  }


export default Employees;
