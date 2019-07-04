import React from 'react';
import Navbar from './Navbar';
import { Switch, Route } from 'react-router-dom';
import AvailableProduce from './AvailableProduce';
import Splash from './Splash';
import Error404 from './Error404';

function App() {
  return(
    <div>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Splash} />
        <Route path='/produce' component={AvailableProduce}/>
        <Route component={Error404}/>
      </Switch>
    </div>
  );
}

export default App;
