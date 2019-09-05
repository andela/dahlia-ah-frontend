import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UserProtected from './Protect';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer/Footer';
import LandingPage from '../LandingPage/LandingPage';
import Homepage from '../Homepage';
import NotFound from '../NotFound/NotFound';
import AuthModalContextProvider from '../../context/AuthModalContext';
import ConfirmationPageContainer from '../ConfirmationPage/ConfirmationPageContainer';

const Router = () => (
  <div>
    <AuthModalContextProvider>
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/confirmation-page" component={ConfirmationPageContainer} />
        <UserProtected exact path="/homepage" component={Homepage} />
        <Route component={NotFound} />
      </Switch>
    </AuthModalContextProvider>
    <Footer />
  </div>
);

export default Router;
