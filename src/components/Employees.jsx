import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

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


class Employees extends React.Component {

  constructor(){
    super();
    this.state = {
      name: null,
      brand: null,
      price: null,
      description: null,
      pints: 124
    }
    this.handleAddNewDrink = this.handleAddNewDrink.bind(this);
  }

  handleAddNewDrink(drink) {
    let name = drink.name
    let brand = drink.brand
    let price = drink.price
    let description = drink.description
    this.setState({
      name: name,
      brand: brand,
      price: price,
      description: description
    })
  }



  render() {
    return(
      <div>
        <div style={{fontFamily: 'DM Serif Display'}}>
          What would you like to accomplish today?
        </div>
        <div style={{fontFamily: 'DM Serif Display'}}>
          <Link style={{ textDecoration: 'none' }} to="/addDrink"><a>Add a new drink</a></Link>
          <br></br>
          <Link style={{ textDecoration: 'none' }} to="/edit"><a>Edit drinks</a></Link>
        </div>
      </div>

    )
  }
}

export default Employees;
