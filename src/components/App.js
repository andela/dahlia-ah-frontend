import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HelloDahlia from './DummyComponent/DummyComponent';
import Login from './Login/Login';
import style from './app.scss';
import UserContextProvider from '../context/UserContext';

const Welcome = () => (
  <div className={style.app}>
    <h1>Authors Haven</h1>
    <div className={style.sassyDiv}>Welcome!</div>
  </div>
);

const App = () => (
  <Switch>
    <UserContextProvider>
      <Route exact path="/" component={Welcome} />
      <Route path="/hello" component={HelloDahlia} />
      <Route path="/login" component={Login} />
    </UserContextProvider>
  </Switch>
);

export default App;
