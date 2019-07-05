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
import Edit from './Edit';
import EditDrinks from './EditDrinks';
import EditPints from './EditPints';

const useStyles = makeStyles ({
  hr: {
    marginTop: '20%'
  }
})

function App() {
  const classes = useStyles();
  return(
    <div>
      <NavBar/>
      <Switch>
        <Route exact path='/' component={Splash} />
        <Route exact path='/drinks' component={DrinksList} />
        <Route exact path='/addDrink' component={AddDrink} />
        <Route exact path='/employees' component={Employees} />
        <Route exact path='/about' component={About} />
        <Route exact path='/edit' component={Edit} />
        <Route exact path='/editDrinks' component={EditDrinks} />
        <Route exact path='/editPints' component={EditPints} />
        <Route component={Error404}/>
      </Switch>
      <div className={classes.hr}>
        <hr></hr>
      </div>
    </div>
  );
}

export default App;
