import React from 'react';
import './App.css';

import { BrowserRouter, Switch,Route, Redirect } from 'react-router-dom';
import LoginContainer from './Login/Login.container';
import RegisterContainer from './Register/Register.container';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={LoginContainer}></Route>  
          <Route path="/register" exact component={RegisterContainer}></Route>  
          <Redirect to='/login' />        
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
