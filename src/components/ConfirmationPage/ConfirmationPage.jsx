import React from 'react';
import PropTypes from 'prop-types';

const ConfirmationPage = ({ email }) => (
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
      <button type="button"> Send again </button>
    </p>
  </div>
);

ConfirmationPage.propTypes = {
  email: PropTypes.string.isRequired,
};

export default ConfirmationPage;
