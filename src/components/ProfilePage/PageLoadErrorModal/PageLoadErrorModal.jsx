import React from 'react';
import PropTypes from 'prop-types';
import AuthModalContainer from '../../helpers/AuthModal/AuthModalContainer';
import '../../SignupForm/SignupForm.scss';
import './pageLoadErrorModal.scss';

const PageLoadErrorModal = ({ title, description }) => (
  <AuthModalContainer
    title={title}
    desc={description}
    closeModal={() => {
      window.location.reload();
    }}
  >
    <div className="modal-content page-error-modal">
      <div className="row">
        <button
          type="submit"
          onClick={() => {
            window.location.reload();
          }}
          className="btn button"
        >
          Reload
        </button>
      </div>
    </div>
  </AuthModalContainer>
);

PageLoadErrorModal.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

PageLoadErrorModal.defaultProps = {
  title: 'An error occured',
  description: 'This page cannot be loaded at this time',
};

export default PageLoadErrorModal;
