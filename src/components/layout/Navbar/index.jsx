import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import useNavigation from './effects';
import './navbar.scss';
import UserContextProvider from '../../../contexts/UserContext';
import AuthenticatedNav from './AuthenticatedNav';
import UnauthenticatedNav from './UnauthenticatedNav';

const Navbar = ({ history }) => {
  useNavigation();
  let user = JSON.parse(window.localStorage.getItem('AuthorsHavenUser'));
  const path = history.location.pathname;
  useEffect(() => {
    user = JSON.parse(window.localStorage.getItem('AuthorsHavenUser'));
  }, [history]);

  return (
    <>
      {
        user && user.token && path !== '/'
          ? (
            <UserContextProvider>
              <AuthenticatedNav />
            </UserContextProvider>
          )
          : <UnauthenticatedNav />
      }
    </>
  );
};

Navbar.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};

export default withRouter(Navbar);
