import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TextInput from '../helpers/TextInput/TextInput';
import './ResetPassword.scss';


const ResetPassword = ({
  title, ajaxSuccess, onSubmit,
  onChange, formFields, ajaxError, failureMessage, ajaxLoading,
}) => (
  <div className="reset-password">
    <div className="reset-password-box">
      <h4>{title}</h4>
      {
          !ajaxSuccess ? (
            <form className="reset-password-form" onSubmit={(e) => onSubmit(e)}>
              {formFields.map((formField, index) => (
                <TextInput
                  onChange={onChange}
                  key={formField.id.toString()}
                  index={index}
                  formField={formField}
                />
              ))}
              { ajaxError ? (
                <p className="validation-error">
                  {failureMessage}
                </p>
              ) : null}
              <button type="submit" className="btn ajax-button" disabled={ajaxLoading}>
                { ajaxLoading ? <i className="fa fa-spinner fa-spin loader" /> : 'RESET PASSWORD' }
              </button>
            </form>
          ) : (
            <p>
              Your password has been successfully reset. Redirecting to sign in.
              {' '}
              If you are not redirected in 5 seconds, click this link
              {' '}
              <Link className="signInlink" to="/">landing page</Link>
            </p>
          )
          }
    </div>
  </div>
);

ResetPassword.propTypes = {
  title: PropTypes.string.isRequired,
  ajaxSuccess: PropTypes.bool.isRequired,
  ajaxLoading: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  formFields: PropTypes.arrayOf(PropTypes.object).isRequired,
  ajaxError: PropTypes.bool.isRequired,
  failureMessage: PropTypes.string.isRequired,
};

export default ResetPassword;
