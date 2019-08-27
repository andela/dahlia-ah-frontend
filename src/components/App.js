import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HelloDahlia from './DummyComponent/DummyComponent';

const App = () => (
  <Switch>
    <Route exact path="/" component={() => <h1>Authors Haven</h1>} />
    <Route path="/hello" component={HelloDahlia} />
  </Switch>
);

export default App;
