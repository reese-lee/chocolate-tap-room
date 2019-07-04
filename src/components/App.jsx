import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import DrinksList from './DrinksList';
import Splash from './Splash';
import NavBar from './NavBar';

function App() {
  return(
    <div>
      <NavBar/>
      <Switch>
        <Route exact path='/' component={Splash} />
        <Route exact path='/drinks' component={DrinksList} />
        <Route component={Error404}/>
      </Switch>
    </div>
  );
}

export default App;
