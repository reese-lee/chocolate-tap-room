import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Error404 from './Error404';
import DrinksList from './DrinksList';
import Splash from './Splash';
import NavBar from './NavBar';
import AddDrink from './AddDrink';
import Employees from './Employees';
import About from './About';
import { v4 } from 'uuid';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      masterDrinklist: {},
      selectedDrink: null
    }
    this.handleAddingNewDrinkToList = this.handleAddingNewDrinkToList.bind(this);
    this.handleEditingSelectedDrink = this.handleEditingSelectedDrink.bind(this);
  }

  handleAddingNewDrinkToList(newDrink) {
    let newDrinkId = v4()
    let newMasterDrinkList = Object.assign({}, this.state.masterDrinkList, {
      [newDrinkId]: newDrink
    });
    this.setState({masterDrinkList: newMasterDrinkList})
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
          <Route path='/employees' render={(props)=><Employees drinksList={this.state.masterDrinkList}
          currentRouterPath={props.location.pathname}
          onDrinkSelection={this.state.handleEditingSelectedDrink}
          selectedDrink={this.state.selectedDrink} />} />
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
