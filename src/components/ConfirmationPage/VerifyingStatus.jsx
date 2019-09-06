/* eslint-disable react/require-default-props */
/* eslint-disable no-restricted-globals */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import Axios from 'axios';
import appConfig from '../../config/appConfig';

const { BACKEND_PATH } = appConfig;

const VerifyStatus = ({
  setRequestSuccess, requestSuccess, user, error, setError, history,
}) => {
  useEffect(() => {
    const token = new URLSearchParams(location.search).get('token');
    if (token) {
      Axios.patch(`${BACKEND_PATH}/auth/verify/${token}`)
        .then(() => {
          const newUser = { ...user, isVerified: true };
          localStorage.setItem('AuthorsHavenUser', JSON.stringify(newUser));
          setRequestSuccess(true);
          history.push('/homepage');
        })
        .catch((err) => {
          const message = err.response.data.error;
          setError(message);
        });
    }
  });
  return (
    <div>
      <img className="mail-icon" src="https://img.icons8.com/cotton/128/000000/delivered-mail.png" alt="Delivered mail" />
      <h6> thanks for registering </h6>
      <p>
        Please wait, we’re currently verifying your account now
        {' '}
        <span className="loader">
          {requestSuccess ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 172 172"
              style={{ fill: '#000000' }}
            >
              <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}>
                <path d="M0,172v-172h172v172z" fill="none" />
                <g>
                  <path d="M86,166.625c-44.505,0 -80.625,-36.12 -80.625,-80.625c0,-44.505 36.12,-80.625 80.625,-80.625c44.505,0 80.625,36.12 80.625,80.625c0,44.505 -36.12,80.625 -80.625,80.625z" fill="#3498db" />
                  <path d="M86,6.45c43.86,0 79.55,35.69 79.55,79.55c0,43.86 -35.69,79.55 -79.55,79.55c-43.86,0 -79.55,-35.69 -79.55,-79.55c0,-43.86 35.69,-79.55 79.55,-79.55M86,4.3c-45.15,0 -81.7,36.55 -81.7,81.7c0,45.15 36.55,81.7 81.7,81.7c45.15,0 81.7,-36.55 81.7,-81.7c0,-45.15 -36.55,-81.7 -81.7,-81.7z" fill="#3498db" />
                  <path d="M73.1,120.4l-29.67,-29.67l9.245,-9.03l20.425,20.64l52.03,-52.03l9.245,9.03z" fill="#ffffff" />
                </g>
              </g>

            </svg>
          )
            : null}
        </span>
      </p>
      <span className={error !== '' ? 'error' : 'empty'}>
        ERROR:
        {' '}
        {error}
        {' '}
      </span>
    </div>
  );
};

VerifyStatus.propTypes = {
  setRequestSuccess: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
  requestSuccess: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  user: PropTypes.shape({
    isVerified: PropTypes.bool.isRequired,
  }).isRequired,
  history: ReactRouterPropTypes.history,
};

export default VerifyStatus;
