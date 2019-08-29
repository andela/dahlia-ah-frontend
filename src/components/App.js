import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import Homepage from './Homepage';
import Navbar from './layout/Navbar';
import LandingPage from './LandingPage/LandingPage';
import Footer from './layout/Footer/Footer';
import Login from './Login/Login';
import SignUp from './Backdrop/Backdrop';
import ResetPassword from './ResetPassword/ResetPassword';
import UserContextProvider from '../context/UserContext';
import './app.scss';

const Welcome = ({ history }) => {
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenSignup, setIsOpenSignup] = useState(false);
  const [isOpenResetPassword, setIsOpenResetPassword] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('AuthorsHavenToken')) {
      history.push('/homepage');
    }
  }, []);

  const handleOpenModal = (component) => {

    switch (component) {
      case 'login':
        setIsOpenLogin(true);
        setIsOpenSignup(false);
        setIsOpenResetPassword(false);
        break;
      case 'signup':
        setIsOpenSignup(true);
        setIsOpenLogin(false);
        setIsOpenResetPassword(false);
        break;
      case 'resetPassword':
        setIsOpenResetPassword(true);
        setIsOpenLogin(false);
        setIsOpenSignup(false);
        break;
      default:
        break;
    }
  };

  const handleCloseModal = (component) => {
    switch (component) {
      case 'login':
        setIsOpenLogin(false);
        break;
      case 'signup':
        setIsOpenSignup(false);
        break;
      case 'resetPassword':
        setIsOpenResetPassword(false);
        break;
      default:
        break;
    }
  };

  return (
    <div className="app">
      <Login isOpen={isOpenLogin} openModal={handleOpenModal} closeModal={handleCloseModal} />
      <SignUp isOpen={isOpenSignup} openModal={handleOpenModal} closeModal={handleCloseModal} />
      <ResetPassword isOpen={isOpenResetPassword} closeModal={handleCloseModal} />
      <Navbar openModal={handleOpenModal} />
      <LandingPage openModal={handleOpenModal} />
      <Footer />
    </div>
  );
};

Welcome.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};

const App = () => (
  <Switch>
    <UserContextProvider>
      <Route exact path="/" component={Welcome} />
      <Route path="/homepage" component={Homepage} />
    </UserContextProvider>
  </Switch>
);

export default App;
