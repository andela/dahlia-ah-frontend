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
import ResetPasswordContainer from '../ResetPassword/ResetPasswordContainer';
import Settings from '../Settings/Settings';

const Router = () => (
  <div>
    <AuthModalContextProvider>
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/confirmation-page" component={ConfirmationPageContainer} />
        <Route exact path="/reset-password" component={ResetPasswordContainer} />
        <UserProtected exact path="/homepage" component={Homepage} />
        <UserProtected exact path="/user/settings" component={Settings} />
        <Route component={NotFound} />
      </Switch>
    </AuthModalContextProvider>
    <Footer />
  </div>
);

export default Router;
