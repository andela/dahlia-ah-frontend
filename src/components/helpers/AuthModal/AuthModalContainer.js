import React from 'react';
import PropTypes from 'prop-types';
import AuthModal from './AuthModal';
import './AuthModal.scss';

const AuthModalContainer = ({
  children, title, desc, isOpen, closeModal,
}) => (
  <AuthModal title={title} desc={desc} isOpen={isOpen} closeModal={closeModal}>
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
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default AuthModalContainer;
