/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import PropTypes from 'prop-types';
import './commentModal.scss';

const CommentModal = ({ children, closeModal }) => (
  <div className="commentModal">
    <div className="backdrop-div" role="button">
      <div className="modal">
        <div className="modal-content">
          <i className="fas fa-times" role="button" onKeyDown={closeModal} onClick={closeModal} />
          <h4>Comments</h4>
          {children}
        </div>
      </div>
    </div>
  </div>
);

CommentModal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default CommentModal;
