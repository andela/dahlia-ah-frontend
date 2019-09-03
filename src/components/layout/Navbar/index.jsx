import React, { useEffect } from 'react';
import PropType from 'prop-types';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import useNavigation from './effects';
import './navbar.scss';
import AuthenticatedNav from './AuthenticatedNav';
import UnauthenticatedNav from './UnauthenticatedNav';

const Navbar = ({ openModal, history }) => {
  useNavigation();
  let user = JSON.parse(window.localStorage.getItem('AuthorsHavenUser'));

  useEffect(() => {
    user = JSON.parse(window.localStorage.getItem('AuthorsHavenUser'));
  }, [history]);

  return (
    <>
      {
        user && user.token
          ? <AuthenticatedNav />
          : <UnauthenticatedNav openModal={openModal} />
      }
    </>
  );
};

Navbar.propTypes = {
  openModal: PropType.func.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
};

export default withRouter(Navbar);
