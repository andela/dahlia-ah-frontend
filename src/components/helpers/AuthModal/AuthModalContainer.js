import React from 'react';
import PropTypes from 'prop-types';
import AuthModal from './AuthModal';
import './AuthModal.scss';

const AuthModalContainer = ({
  children, title, desc, closeModal,
}) => (
  <AuthModal title={title} desc={desc} closeModal={closeModal}>
    {children}
  </AuthModal>
);

AuthModalContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default AuthModalContainer;
