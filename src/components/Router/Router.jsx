import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer/Footer';
import LandingPage from '../LandingPage/LandingPage';
import NotFound from '../NotFound/NotFound';
import SignUpFormContainer from '../SignupForm/SignupFormContainer';
import ConfirmationPage from '../ConfirmationPage/ConfrimationPage';

const Router = () => {
  const [isOpenSignup, setIsOpenSignup] = useState(false);

  const handleOpenModal = () => {
    setIsOpenSignup(true);
  };

  const handleCloseModal = () => {
    setIsOpenSignup(false);
  };

  return (
    <div>
      <SignUpFormContainer closeModal={handleCloseModal} isOpen={isOpenSignup} />
      <Navbar openModal={handleOpenModal} />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route component={NotFound} />
        <Route exact path="/ConfirmationPage" component={ConfirmationPage} />
      </Switch>
      <Footer />
    </div>
  );
};

export default Router;
