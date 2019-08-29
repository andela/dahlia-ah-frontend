import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import LandingPage from './LandingPage/LandingPage';
import Footer from './layout/Footer/Footer';
import Login from './Login/Login';
import UserContextProvider from '../context/UserContext';
import './app.scss';

const Welcome = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="app">
      <Login isOpen={isOpen} closeModal={handleCloseModal} />
      <Navbar openModal={handleOpenModal} />
      <LandingPage openModal={handleOpenModal} />
      <Footer />
    </div>
  );
};

const App = () => (
  <Switch>
    <UserContextProvider>
      <Route exact path="/" component={Welcome} />
    </UserContextProvider>
  </Switch>
);

export default App;
