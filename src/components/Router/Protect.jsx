import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

let isUser;

const UserProtected = ({ component: Component, path }) => {
  isUser = JSON.parse(window.localStorage.getItem('AuthorsHavenUser'));
  return (
    <Route
      path={path}
      render={({ location }) => (
        isUser && isUser.isVerified
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
