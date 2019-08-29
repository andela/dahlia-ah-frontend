import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HelloDahlia from './DummyComponent/DummyComponent';
import LandingPageComponent from './LandingPageComponent/LandingPage';
import FooterComponent from './FooterComponent/Footer';
import style from './app.scss';

const Welcome = () => (
  <div className={style.app}>
    <LandingPageComponent />
    <FooterComponent />
  </div>
);

const App = () => (
  <Switch>
    <Route exact path="/" component={Welcome} />
    <Route path="/hello" component={HelloDahlia} />
  </Switch>
);

export default App;
