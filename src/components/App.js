import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HelloDahlia from './DummyComponent/DummyComponent';
import Homepage from './Homepage';
import './app.scss';
import Navbar from './layout/Navbar';

const Welcome = () => (
  <div className="app">
    <Navbar />
    <h1>...</h1>
  </div>
);

const App = () => (
  <Switch>
    <Route exact path="/" component={Welcome} />
    <Route path="/hello" component={HelloDahlia} />
    <Route path="/homepage" component={Homepage} />
  </Switch>
);

export default App;
