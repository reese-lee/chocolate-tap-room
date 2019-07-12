import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import AddDrink from './AddDrink';

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
      masterDrinklist: {}
    }
    this.handleAddingNewDrinkToList = this.handleAddingNewDrinkToList.bind(this);
  }

  handleAddingNewDrinkToList(newDrink) {
    let newDrinkId = v4()
    let newMasterDrinkList = Object.assign({}, this.state.masterDrinkList, {
      [newDrinkId]: newDrink
    });
    this.setState({masterDrinkList: newMasterDrinkList})
  }

  render() {
    return(
      <div>
        <div style={{fontFamily: 'DM Serif Display'}}>
          What would you like to accomplish today?
        </div>
        <div style={{fontFamily: 'DM Serif Display'}}>
          <Link style={{ textDecoration: 'none' }} to="/addDrink" AddDrink onNewDrink={this.handleAddingNewDrinkToList}><a>Add a new drink</a></Link>
          <br></br>
          <Link style={{ textDecoration: 'none' }} to="/edit"><a>Edit drinks</a></Link>
        </div>
      </div>

    )
  }
}

export default Employees;
