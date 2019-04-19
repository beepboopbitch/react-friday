import React from "react";
import { Switch, Route, Link } from 'react-router-dom';
import Error404 from './Error404';
import Header from './Header';
import Home from './Home';
import Pop1 from './Pop1';
import Pop2 from './Pop2';
import Pop3 from './Pop3';
import Pop4 from './Pop4';
import Pop5 from './Pop5';
import Pop6 from './Pop6';

function App(){
  return(
    <div>
      <style jsx global>{`
        body {
          margin: 0;
        }  
      `}</style>  
      <Header/>
      <Link  to="/Pop1">Popular 1</Link>
      <br/>
      <Link  to="/Pop2">Popular 2</Link>
      <br/>
      <Link  to="/Pop3">Popular 3</Link>
      <br/>
      <Link  to="/Pop4">Popular 4</Link>
      <br/>
      <Link  to="/Pop5">Popular 5</Link>
      <br/>
      <Link  to="/Pop6">Popular 6</Link>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Pop1' component={Pop1} />
        <Route path='/Pop2' component={Pop2} />
        <Route path='/Pop3' component={Pop3} />
        <Route path='/Pop4' component={Pop4} />
        <Route path='/Pop5' component={Pop5} />
        <Route path='/Pop6' component={Pop6} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;