import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import './app.scss';

const App = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
  </Switch>
);

export default App;
