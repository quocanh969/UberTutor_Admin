import React from 'react';
import './App.css';

import { Router, Switch,Route, Redirect } from 'react-router-dom';
import LoginContainer from './Login/Login.container';
import RegisterContainer from './Register/Register.container';
import DashboardContainer from './Dashboard/Dashboard.container';

import { PrivateRoute, LoginRoute } from './Routes/PrivateRoute';

import { history } from './Helpers/History';

function App() {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <LoginRoute path="/login" exact component={LoginContainer}></LoginRoute>  
          <Route path="/register" exact component={RegisterContainer}></Route> 
          <PrivateRoute path="/dashboard" exact component={DashboardContainer}></PrivateRoute> 
          <Redirect to='/login' />        
        </Switch>
      </Router>
    </div>
  );
}

export default App;
