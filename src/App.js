import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mynav from './components/Nav';
import SignIn from './components/SignIn';
import Register from './components/Register';
import {Route, Switch, Link } from 'react-router-dom';




function App() {
  return (<>
  <div className='app'>
      <Mynav />
      <Switch>
        <Route exact path='/' component={SignIn} />
        <Route path='/register' component = {Register} />
      </Switch>
    </div>

  </>);
}

export default App;
