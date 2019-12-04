import React from 'react';
import './App.css';

import { BrowserRouter, Switch,Route, Redirect } from 'react-router-dom';
import LoginContainer from './Login/Login.container';
import RegisterContainer from './Register/Register.container';
import DashboardContainer from './Dashboard/Dashboard.container';

import { PrivateRoute } from './Routes/PrivateRoute';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={LoginContainer}></Route>  
          <Route path="/register" exact component={RegisterContainer}></Route> 
          <PrivateRoute path="/dashboard" exact component={DashboardContainer}></PrivateRoute> 
          <Redirect to='/login' />        
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
