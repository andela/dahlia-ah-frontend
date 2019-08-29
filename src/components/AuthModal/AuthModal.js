/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AuthModal.scss';

const AuthModal = ({
  children, title, desc, isOpen,
}) => {
  const [display, setDisplay] = useState(isOpen);

  const closeModal = () => {
    setDisplay(false);
  };

  return (
    <div className="backdrop-div" style={{ display: display ? 'flex' : 'none' }}>
      <div className="modal">
        <div className="modal-content">
          <i className="fas fa-times" role="button" onKeyDown={closeModal} onClick={closeModal} />
          <h4>{title}</h4>
          <p className="description">{desc}</p>
          {children}
        </div>
      </div>
    </div>
  );
};

AuthModal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default AuthModal;
