import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mynav from './Nav';
import SignIn from './SignIn';
import Register from './Register';
import Dashboard from './Dashboard';
import AddVehicle from './AddVehicle';
import AddService from './AddService';
import {Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';




function App() {
  return (<>
  <div className='app'>
      <Mynav />
      <Switch>
        <Route exact path='/' component={SignIn} />
        <Route path='/register' component={Register} />
        <PrivateRoute path='/dashboard' component={Dashboard} />
        <PrivateRoute path='/add-vehicle' component={AddVehicle} />
        <PrivateRoute path='/add-service/:vehicleId' component={AddService} />
      </Switch>
    </div>

  </>);
}

export default App;
