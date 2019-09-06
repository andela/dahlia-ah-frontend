/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import ConfirmationPage from './ConfirmationPage';
import VerifyStatus from './VerifyingStatus';
import './ConfirmationPage.scss';

const ConfirmationPageContainer = ({ history }) => {
  const user = JSON.parse(localStorage.getItem('AuthorsHavenUser'));

  const [requestSuccess, setRequestSuccess] = useState(false);
  const [error, setError] = useState('');
  const token = new URLSearchParams(location.search).get('token');

  const checkVerification = () => {
    if (user && user.isVerified) {
      history.push('/homepage');
    } else if (!user) {
      history.push('/');
    }
  };

  const verify = user ? (
    <VerifyStatus
      user={user}
      requestSuccess={requestSuccess}
      setRequestSuccess={setRequestSuccess}
      error={error}
      setError={setError}
    />
  ) : null;

  return (
    <>
      {checkVerification()}
      <div className="verify-account">
        {!token && user ? <ConfirmationPage email={user.email} />
          : verify}
      </div>
    </>
  );
};

ConfirmationPageContainer.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};
export default withRouter(ConfirmationPageContainer);
