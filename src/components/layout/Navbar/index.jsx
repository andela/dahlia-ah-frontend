import React from 'react';
import PropType from 'prop-types';
import useNavigation from './effects';
import './navbar.scss';
import AuthenticatedNav from './AuthenticatedNav';
import UnauthenticatedNav from './UnauthenticatedNav';

const Navbar = ({ openModal }) => {
  useNavigation();

  return (
    <>
      {
        localStorage.getItem('AuthorsHavenToken') === null ? <UnauthenticatedNav openModal={openModal} /> : <AuthenticatedNav />
      }
    </>
  );
};

Navbar.propTypes = {
  openModal: PropType.func.isRequired,
};
export default Navbar;
