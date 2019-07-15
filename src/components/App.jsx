import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import DrinksList from './DrinksList';
import Splash from './Splash';
import NavBar from './NavBar';
import AddDrink from './AddDrink';
import Employees from './Employees';
import About from './About';
import NewDrinkControl from './NewDrinkControl';
import EmployeeConfirmation from './EmployeeConfirmation';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      masterDrinkList: [{
        name: 'The Lucy Liu',
        price: '$5.99',
        flavor: 'Spicy and Sweet',
        description: 'Our world-famous old-fashioned milk chocolate with a kick of jalapeno and chili spices.'
      },
      {
        name: 'The Old-Fashioned',
        price: '$4.99',
        flavor: 'Milk Chocolate',
        description: "The original recipe that started in Grandma's kitchen, and built us into a nationwide chocolate force."
      },
      {
        name: 'The Herb Garden',
        price: '$6.99',
        flavor: 'Earthy and herby',
        description: 'Made with thyme, rosemary, and oregano, this one is straight from the backyard!'
      }],
      selectedDrink: null
    }
    this.handleAddingNewDrinkToList = this.handleAddingNewDrinkToList.bind(this);
    this.handleEditingSelectedDrink = this.handleEditingSelectedDrink.bind(this);
  }

  handleAddingNewDrinkToList(newDrink) {
    let newMasterDrinkList = this.state.masterDrinkList.push(newDrink);
    this.setState({masterDrinkList: newMasterDrinkList});
  }

  handleEditingSelectedDrink(drinkId){
    this.setState({selectedDrink: drinkId});
  }

  render() {
    return(
      <div>
        <NavBar/>
        <Switch>
          <Route exact path='/' component={Splash} />

          <Route exact path='/drinks' render={()=><DrinksList drinksList={this.state.masterDrinkList}/>} />

          <Route exact path='/addDrink' render={()=><NewDrinkControl onNewDrink={this.handleAddingNewDrinkToList}/>} />

          <Route path='/employees' render={(props)=><Employees drinksList={this.state.masterDrinkList} />} />

          <Route exact path='/about' component={About} />
          <Route component={Error404}/>
        </Switch>
        <div>
          <hr/>
        </div>
      </div>
    );
  }
}

export default App;
