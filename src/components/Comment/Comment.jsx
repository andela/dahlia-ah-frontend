import React from 'react';
import PropTypes from 'prop-types';
import CommentModal from './CommentModal/CommentModal';
import CommentList from './CommentList/CommentList';
import CommentForm from './CommentForm/CommentForm';
import './comment.scss';

const Comment = ({ closeModal }) => (
  <CommentModal closeModal={closeModal}>
    <div className="commentBody">
      <CommentList />
    </div>
    <CommentForm />
  </CommentModal>
);

Comment.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default Comment;
