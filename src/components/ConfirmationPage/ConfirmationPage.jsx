import React from 'react';
import PropTypes from 'prop-types';

const ConfirmationPage = ({
  email, message, handleSubmit, msgClass, requestSuccess,
}) => (
  <div>
    <img className="mail-icon" src="https://img.icons8.com/cotton/128/000000/delivered-mail.png" alt="Delivered mail" />
    <h6> thanks for registering </h6>
    <p>
        We’ve emailed a confirmation link to
      {' '}
      {email}
      <br />
        Click on the link to verify your account
    </p>
    <p>
        Didn’t get a confirmation email ?
      <br />
        Check your spam folder or
      <button className="normal-btn" type="button" onClick={handleSubmit}> Send again </button>
      {' '}
      { requestSuccess === 'false' ? (
        <svg width="200px" height="200px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" className="lds-dual-ring" style={{ background: 'none' }}><circle cx="50" cy="50" ng-attr-r="{{config.radius}}" ng-attr-stroke-width="{{config.width}}" ng-attr-stroke="{{config.stroke}}" ng-attr-stroke-dasharray="{{config.dasharray}}" fill="none" strokeLinecap="round" r="40" strokeWidth="4" stroke="#e42e3b" strokeDasharray="62.83185307179586 62.83185307179586" transform="rotate(299.916 50 50)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite" /></circle></svg>
      ) : null}
    </p>
    <span className={msgClass}>
      {message !== '' ? message : null}
    </span>
  </div>
);

ConfirmationPage.propTypes = {
  email: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  msgClass: PropTypes.string.isRequired,
  requestSuccess: PropTypes.string.isRequired,
};

export default ConfirmationPage;
