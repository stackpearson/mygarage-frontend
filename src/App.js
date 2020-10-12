import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mynav from './components/Nav';
import SignIn from './components/SignIn';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import AddVehicle from './components/AddVehicle';
import {Route, Switch } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';




function App() {
  return (<>
  <div className='app'>
      <Mynav />
      <Switch>
        <Route exact path='/' component={SignIn} />
        <Route path='/register' component={Register} />
        <PrivateRoute path='/dashboard' component={Dashboard} />
        <PrivateRoute path='/add-vehicle' component={AddVehicle} />
      </Switch>
    </div>

  </>);
}

export default App;
