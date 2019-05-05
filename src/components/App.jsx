import React from "react";
import { Switch, Route, Link } from 'react-router-dom';
import Error404 from './Error404';
import Header from './Header';
import Home from './Home';
import Popular from './Popular'

function App(){
  return(
    <div>
      <style jsx global>{`
        body {
          margin: 0;
        }
      `}</style>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Popular' component={Popular} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
