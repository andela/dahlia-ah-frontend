import React from 'react';
import useNavigation from './effects';
import './navbar.scss';
import AuthenticatedNav from './AuthenticatedNav';
import UnauthenticatedNav from './UnauthenticatedNav';

const Navbar = () => {
  useNavigation();

  return (
    <>
      {
        localStorage.getItem('AuthorsHavenToken') === null ? <UnauthenticatedNav /> : <AuthenticatedNav />
      }
    </>
  );
};

export default Navbar;
