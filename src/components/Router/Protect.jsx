import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

let user;

const UserProtected = ({ component: Component, path }) => {
  user = JSON.parse(window.localStorage.getItem('AuthorsHavenUser'));

  return (
    <Route
      path={path}
      render={({ location }) => (
        user && user.isVerified
          ? <Component />
          : <Redirect to={{ pathname: '/confirmation-page', state: { from: location } }} />
      )}
    />
  );
};

UserProtected.propTypes = {
  component: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
};

export default UserProtected;
