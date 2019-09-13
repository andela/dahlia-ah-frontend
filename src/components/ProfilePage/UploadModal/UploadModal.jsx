/* eslint-disable react/prop-types */
import React from 'react';
import AuthModalContainer from '../../helpers/AuthModal/AuthModalContainer';
import '../../SignupForm/SignupForm.scss';

const UploadModal = ({
  handleSubmit,
  resourceLoading,
  closeModal,
}) => (
  <AuthModalContainer
    desc=""
    title="EDIT YOUR PROFILE"
    closeModal={() => {
      closeModal('upload-modal');
    }}
  >
    <form
      onSubmit={handleSubmit}
      className="signup-form"
    >
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

export default UploadModal;
