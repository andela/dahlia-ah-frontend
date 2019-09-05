/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from 'react';
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

  useEffect(() => {
    const authNav = document.querySelector('.authenticated-nav');
    if (location.pathname === '/confirmation-page') {
      authNav.classList.add('confirm-page');
    } else {
      authNav.classList.remove('confirm-page');
    }
  }, []);

  const checkVerification = () => {
    if (user && user.isVerified) {
      history.push('/homepage');
    } else if (!user) {
      history.push('/');
    }
  };

  return (
    <>
      {checkVerification()}
      <div className="verify-account">
        {!token ? <ConfirmationPage email={user.email} />
          : (
            <VerifyStatus
              user={user}
              requestSuccess={requestSuccess}
              setRequestSuccess={setRequestSuccess}
              error={error}
              setError={setError}
            />
          )}
      </div>
    </>
  );
};

ConfirmationPageContainer.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};
export default withRouter(ConfirmationPageContainer);
