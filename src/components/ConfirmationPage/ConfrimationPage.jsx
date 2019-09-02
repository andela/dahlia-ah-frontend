import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';

const ConfirmationPage = ({ history }) => {
  const user = JSON.parse(localStorage.getItem('AuthorsHavenUser'));
  useEffect(() => {
    if (!user) {
      history.push('/');
    } else if (user.isVerified) {
      history.push('/homepage');
    }
  }, []);

  return (
    <div>
      <h3>dsrftgyhujkl;</h3>
      <p>
        {' '}
You have been sent an email, please click on the link in your email to verify your account
      </p>
      <p> if you dont receive the email click here to be resent the email</p>
    </div>
  );
};

ConfirmationPage.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};
export default withRouter(ConfirmationPage);
