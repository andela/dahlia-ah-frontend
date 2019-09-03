import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AuthModal from './AuthModal';

const AuthModalContainer = ({
  children, title, desc, isOpen,
}) => {
  const [display, setDisplay] = useState(isOpen);

  const closeModal = () => {
    setDisplay(false);
  };

  return (
    <AuthModal title={title} desc={desc} closeModal={closeModal} display={display}>
      {children}
    </AuthModal>
  );
};

AuthModalContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default AuthModalContainer;