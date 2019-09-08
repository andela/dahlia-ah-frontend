/* eslint-disable react/require-default-props */
/* eslint-disable no-restricted-globals */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import Axios from 'axios';
import appConfig from '../../config/appConfig';

const { BACKEND_PATH } = appConfig;

const VerifyStatus = ({
  user, setError, history, message, setMessage,
  handleSubmit, msgClass, requestSuccess, setRequestSuccess,
}) => {
  useEffect(() => {
    setRequestSuccess('false');
    const token = new URLSearchParams(location.search).get('token');
    if (token) {
      Axios.patch(`${BACKEND_PATH}/auth/verify/${token}`)
        .then((res) => {
          setRequestSuccess('true');
          const newUser = { ...user, isVerified: true };
          localStorage.setItem('AuthorsHavenUser', JSON.stringify(newUser));
          const msg = res.data.message;
          setMessage(msg);
          setError(false);
          history.push('/homepage');
        })
        .catch((err) => {
          setRequestSuccess('true');
          const msg = err.response.data.errors;
          setMessage(msg);
          setError(true);
        });
    }
  }, []);
  return (
    <div>
      <img className="mail-icon" src="https://img.icons8.com/cotton/128/000000/delivered-mail.png" alt="Delivered mail" />
      <h6> thanks for registering </h6>
      <p>
        Please wait, we’re currently verifying your account now
        {' '}
        {requestSuccess === 'false' ? (
          <svg width="200px" height="200px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" className="lds-dual-ring" style={{ background: 'none' }}><circle cx="50" cy="50" ng-attr-r="{{config.radius}}" ng-attr-stroke-width="{{config.width}}" ng-attr-stroke="{{config.stroke}}" ng-attr-stroke-dasharray="{{config.dasharray}}" fill="none" strokeLinecap="round" r="40" strokeWidth="4" stroke="#e42e3b" strokeDasharray="62.83185307179586 62.83185307179586" transform="rotate(299.916 50 50)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite" /></circle></svg>
        ) : null}
      </p>
      <button className={message === 'token expired' ? 'border-btn' : 'empty'} type="button" onClick={handleSubmit}> send again</button>
      <span className={msgClass}>
        {message}
      </span>
    </div>
  );
};

VerifyStatus.propTypes = {
  setError: PropTypes.func.isRequired,
  user: PropTypes.shape({
    isVerified: PropTypes.bool.isRequired,
  }).isRequired,
  history: ReactRouterPropTypes.history,
  message: PropTypes.string.isRequired,
  setMessage: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  msgClass: PropTypes.string.isRequired,
  requestSuccess: PropTypes.string.isRequired,
  setRequestSuccess: PropTypes.func.isRequired,
};

export default VerifyStatus;
