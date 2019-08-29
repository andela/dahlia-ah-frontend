/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/interactive-supports-focus */

import React from 'react';
import PropType from 'prop-types';
import './AuthModal.scss';

const AuthModal = ({
  children, title, desc, isOpen, closeModal,
}) => (
  <div className="backdrop-div" style={{ display: isOpen ? 'flex' : 'none' }}>
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

AuthModal.propTypes = {
  children: PropType.node.isRequired,
  title: PropType.string.isRequired,
  desc: PropType.string.isRequired,
  isOpen: PropType.bool.isRequired,
  closeModal: PropType.func.isRequired,
};

export default AuthModal;
