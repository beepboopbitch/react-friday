import React from "react";
import { Switch, Route, Link } from 'react-router-dom';
import Error404 from './Error404';
import Home from './Home';
import Pop1 from './Pop1';

function App(){
  return(
    <div>
      <h1>test</h1>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Pop1' component={Pop1} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;