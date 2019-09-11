import React, { useState, useContext } from 'react';
import './commentForm.scss';
import { CommentContext } from '../../../context/CommentContext';

const CommentForm = () => {
  const { newComment } = useContext(CommentContext);
  const { loading } = useContext(CommentContext);
  const { error } = useContext(CommentContext);
  const { success } = useContext(CommentContext);
  const [commentMessage, setCommentMessage] = useState('');
  const [characterCount, setCharacterCount] = useState(0);
  const handleSubmit = (event) => {
    event.preventDefault();
    newComment(commentMessage);
    setCommentMessage('');
    setCharacterCount(0);
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setCommentMessage(value);
    setCharacterCount(value.length);
  };

  return (
    <div className="commentForm">
      <h5>Leave a Comment</h5>
      <form onSubmit={handleSubmit}>
        <textarea placeholder="Enter a comment..." value={commentMessage} onChange={handleInputChange} required maxLength="200" />
        { error ? (
          <p className="validation-error">
            {error}
          </p>
        ) : null}
        { success ? (
          <p className="validation-success">
            {success}
          </p>
        ) : null}
        <div className="countCharacter">
          {characterCount}
          /200
        </div>
        <button className="btnMedium" type="submit">{!loading ? 'Send' : <i className="fa fa-spinner fa-spin" /> }</button>
      </form>
    </div>
  );
};

export default CommentForm;
