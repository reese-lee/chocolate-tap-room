import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import DrinksList from './DrinksList';
import Splash from './Splash';
import NavBar from './NavBar';
import AddDrink from './AddDrink';
import EmployeeConfirmation from './EmployeeConfirmation';
import About from './About';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      masterDrinklist: [
        {
         name: 'The Lucy Liu',
         price: '$6.99',
         flavor: 'Spicy Milk Chocolate',
         description: 'Our popular, old-fashioned milk chocolate with a kick of jalapeno and chili spices.'
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
       }
      ]
    };
    this.handleAddingNewDrinkToList = this.handleAddingNewDrinkToList.bind(this);
  }

  handleAddingNewDrinkToList(newDrink) {
    let newMasterDrinkList = this.state.masterDrinkList.push(newDrink);
    this.setState({masterDrinkList: newMasterDrinkList});
  }

  render() {
    return(
      <div>
        <NavBar/>
        <Switch>
          <Route exact path='/'render={()=><DrinksList drinksList={this.state.masterDrinkList}/>}/>

          <Route exact path='/addDrink' render={()=><NewDrinkControl onNewDrink={this.handleAddingNewDrinkToList}/>} />

          <Route path='/employees' component={EmployeeConfirmation}/>

          <Route exact path='/about' component={About} />
          <Route component={Error404}/>
        </Switch>
      </div>
    );
  }
}

export default App;
