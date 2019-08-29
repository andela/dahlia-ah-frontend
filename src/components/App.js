import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import LandingPage from './LandingPage/LandingPage';
import Footer from './layout/Footer/Footer';
import Login from './Login/Login';
import UserContextProvider from '../context/UserContext';
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
    <UserContextProvider>
      <Route exact path="/" component={Welcome} />
      <Route path="/login" component={Login} />
    </UserContextProvider>
  </Switch>
);

export default App;
