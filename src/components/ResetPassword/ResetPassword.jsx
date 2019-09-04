import React from 'react';
import PropTypes from 'prop-types';
import AuthModalContainer from '../helpers/AuthModal/AuthModalContainer';
import TextInput from '../helpers/TextInput/TextInput';
import SuccessIcon from '../Icons/SucessIcon/SuccessIcon';
import './ResetPassword.scss';

const ResetPassword = ({
  title, desc, ajaxSuccess, onSubmit, closeModal,
  onChange, formFields, ajaxError, failureMessage, ajaxLoading,
}) => (
  <AuthModalContainer title={title} desc={desc} isOpen closeModal={closeModal}>
    { !ajaxSuccess ? (
      <form className="reset-password-form" onSubmit={(e) => onSubmit(e)}>
        <TextInput
          onChange={onChange}
          key={formFields[0].id.toString()}
          index={0}
          formField={formFields[0]}
        />
        { ajaxError ? (
          <p className="validation-error">
            {failureMessage}
          </p>
        ) : null}
        <button type="submit" className="btn ajax-button" disabled={ajaxLoading}>
          { ajaxLoading ? <i className="fa fa-spinner fa-spin loader" /> : 'SEND' }
        </button>
      </form>
    ) : <SuccessIcon />}
  </AuthModalContainer>
);

ResetPassword.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  ajaxSuccess: PropTypes.bool.isRequired,
  ajaxLoading: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  formFields: PropTypes.arrayOf(PropTypes.object).isRequired,
  ajaxError: PropTypes.bool.isRequired,
  failureMessage: PropTypes.string.isRequired,
};

export default ResetPassword;
