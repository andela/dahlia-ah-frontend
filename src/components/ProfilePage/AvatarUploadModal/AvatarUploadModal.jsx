/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React from 'react';
import AuthModalContainer from '../../helpers/AuthModal/AuthModalContainer';
import '../../SignupForm/SignupForm.scss';
import './avatarUploadModal.scss';

const EditProfile = ({
  handleAvatarUpload,
  resourceLoading,
  closeModal,
}) => (
  <AuthModalContainer
    desc=""
    title=""
    closeModal={() => {
      closeModal('upload-modal');
    }}
  >
    <form onSubmit={handleAvatarUpload} className="signup-form avatar-form">
      <h4>Upload a new profile picture</h4>
      <div className="form-control">
        <label htmlFor="avatar_upload">
          <i className="far fa-image" />
          {' '}
        </label>
        <input
          id="avatar_upload"
          type="file"
          className="edit-profile-input"
          accept="image/jpeg, image/png"
          required
        />
      </div>

      <button type="submit" disabled={resourceLoading} className="btn">
        {resourceLoading ? (
          <i className="fa fa-spinner fa-spin loader" />
        ) : (
          'Upload'
        )}
      </button>
    </form>
  </AuthModalContainer>
);

export default EditProfile;
