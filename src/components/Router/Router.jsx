import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer/Footer';
import LandingPage from '../LandingPage/LandingPage';
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
        <Route component={NotFound} />
      </Switch>
    </AuthModalContextProvider>
    <Footer />
  </div>
);

export default Router;
