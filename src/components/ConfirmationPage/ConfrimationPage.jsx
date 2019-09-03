import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';

const ConfirmationPage = () => {
  const user = JSON.parse(localStorage.getItem('AuthorsHavenUser'));

  return (
    <>
      {user && user.isVerified ? <Redirect to="/homepage" /> : null}
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

export default withRouter(ConfirmationPage);
