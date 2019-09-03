import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';

const ConfirmationPage = ({ history }) => {
  const checkVerification = () => {
    const user = JSON.parse(localStorage.getItem('AuthorsHavenUser'));
    if (user && user.isVerified) {
      history.push('/homepage');
    } else if (!user) {
      history.push('/');
    }
  };

  return (
    <>
      {checkVerification()}
      <div>
        <h3>Congratulations</h3>
        <p>
          You have been sent an email, please click on the link in your email to verify your account
        </p>
        <p> if you dont receive the email click here to be resent the email</p>
      </div>
    </>
  );
};

ConfirmationPage.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};
export default withRouter(ConfirmationPage);
