import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HelloDahlia from './DummyComponent/DummyComponent';
import style from './app.scss';

const Welcome = () => (
  <div className={style.app}>
    <h1>Authors Haven</h1>
    <div className={style.sassyDiv}>Welcome!</div>
  </div>
);

const App = () => (
  <Switch>
    <Route exact path="/" component={Welcome} />
    <Route path="/hello" component={HelloDahlia} />
  </Switch>
);

export default App;
