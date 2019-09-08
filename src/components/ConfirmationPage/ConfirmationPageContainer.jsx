/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import Axios from 'axios';
import ConfirmationPage from './ConfirmationPage';
import VerifyStatus from './VerifyingStatus';
import './ConfirmationPage.scss';
import appConfig from '../../config/appConfig';

const { BACKEND_PATH } = appConfig;

const ConfirmationPageContainer = ({ history }) => {
  const user = JSON.parse(localStorage.getItem('AuthorsHavenUser'));

  const [requestSuccess, setRequestSuccess] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const token = new URLSearchParams(location.search).get('token');
  let msgClass;

  if (error) {
    msgClass = 'error';
  } else if (message === '') {
    msgClass = 'empty';
  } else {
    msgClass = 'success';
  }

  const handleSubmit = () => {
    setRequestSuccess('false');
    Axios.patch(`${BACKEND_PATH}/auth/verify/resend/${user.id}`)
      .then((res) => {
        const msg = res.data.message;
        setRequestSuccess('true');
        setError(false);
        setMessage(msg);
      })
      .catch((err) => {
        setRequestSuccess('true');
        const msg = err.response.data.error;
        setMessage(msg);
        setError(true);
      });
  };


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
      message={message}
      setError={setError}
      setMessage={setMessage}
      handleSubmit={handleSubmit}
      msgClass={msgClass}
    />
  ) : null;

  return (
    <>
      {checkVerification()}
      <div className="verify-account">
        {!token && user ? (
          <ConfirmationPage
            email={user.email}
            message={message}
            handleSubmit={handleSubmit}
            msgClass={msgClass}
            requestSuccess={requestSuccess}
          />
        )
          : verify}
      </div>
    </>
  );
};

ConfirmationPageContainer.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};
export default withRouter(ConfirmationPageContainer);
