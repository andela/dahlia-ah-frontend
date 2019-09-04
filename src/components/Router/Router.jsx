import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer/Footer';
import LandingPage from '../LandingPage/LandingPage';
import NotFound from '../NotFound/NotFound';
import ConfirmationPage from '../ConfirmationPage/ConfirmationPage';
import AuthModalContextProvider from '../../context/AuthModalContext';

const Router = () => (
  <div>
    <AuthModalContextProvider>
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/confirmation-page" component={ConfirmationPage} />
        <Route component={NotFound} />
      </Switch>
    </AuthModalContextProvider>
    <Footer />
  </div>
);

export default Router;
