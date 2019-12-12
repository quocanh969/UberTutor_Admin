import React from 'react';
import './App.css';
import './style.css';


import {BrowserRouter, Router, Switch,Route, Redirect, Link } from 'react-router-dom';
import LoginContainer from './Login/Login.container';
import RegisterContainer from './Register/Register.container';
import DashboardContainer from './Dashboard/Dashboard.container';

import { PrivateRoute, LoginRoute } from './Routes/PrivateRoute';

import { history } from './Helpers/History';
import Dashboard from './Dashboard/Dashboard';

function App() {
  return (
    <div>
      <Router history={history}> 
        <Switch>
          <Route path='/dashboard' component={DashboardContainer}></Route>
          <Route path='/login' component={LoginContainer}></Route>
          <Route path='/register' component={RegisterContainer}></Route>
          <Redirect to='/login'></Redirect>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
