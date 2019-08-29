import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import LandingPage from './LandingPage/LandingPage';
import Footer from './layout/Footer/Footer';
import './app.scss';

const Welcome = () => (
  <div className="app">
    <Navbar />
    <LandingPage />
    <Footer />
  </div>
);

const App = () => (
  <Switch>
    <Route exact path="/" component={Welcome} />
  </Switch>
);

export default App;
