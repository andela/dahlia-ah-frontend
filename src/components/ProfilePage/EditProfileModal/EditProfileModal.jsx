/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import Materialize from 'materialize-css';
import AuthModalContainer from '../../helpers/AuthModal/AuthModalContainer';
import '../../SignupForm/SignupForm.scss';
import './EditProfileModal.scss';

const EditProfile = ({
  handleInputChange,
  handleSubmit,
  resourceLoading,
  closeModal,
  firstName,
  lastName,
  bio,
  formErrors,
  validationError,
  ajaxError,
  failureMessage,
}) => {
  useEffect(() => {
    Materialize.textareaAutoResize(
      document.querySelector('.materialize-textarea'),
    );
  }, []);
  return (
    <AuthModalContainer
      desc=""
      title="EDIT YOUR PROFILE"
      closeModal={() => {
        closeModal('edit-profile-modal');
      }}
    >
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="row">
          <div className="form-group input-field col s12">
            <input
              id="first_name"
              type="text"
              className="edit-profile-input"
              defaultValue={firstName}
              onChange={(e) => handleInputChange(e)}
              name="firstName"
              required
            />
            <label htmlFor="first_name" className="form-control active">
              First Name
            </label>
            {formErrors.firstName ? (
              <span className="validation-error">{formErrors.firstName}</span>
            ) : null}
          </div>
          <div className="input-field col s12">
            <input
              id="last_name"
              type="text"
              className="edit-profile-input"
              defaultValue={lastName}
              onChange={(e) => handleInputChange(e)}
              name="lastName"
              required
            />
            <label htmlFor="last_name" className="form-control active">
              Last Name
            </label>
            {formErrors.lastName ? (
              <span className="validation-error">{formErrors.lastName}</span>
            ) : null}
          </div>
        </div>
        <div className="input-field col s12">
          <textarea
            id="textarea1"
            className="materialize-textarea edit-profile-input edit-bio-input"
            onChange={(e) => handleInputChange(e)}
            name="bio"
            defaultValue={bio}
            required
          />
          <label htmlFor="textarea1" className="active">
            Bio
          </label>
          {formErrors.bio ? (
            <span className="validation-error">{formErrors.bio}</span>
          ) : null}
        </div>
        {ajaxError ? (
          <p className="validation-error">{failureMessage}</p>
        ) : null}

        <button
          type="submit"
          disabled={validationError || resourceLoading}
          className="btn"
        >
          {resourceLoading ? (
            <i className="fa fa-spinner fa-spin loader" />
          ) : (
            'Submit'
          )}
        </button>
      </form>
    </AuthModalContainer>
  );
};

export default EditProfile;
