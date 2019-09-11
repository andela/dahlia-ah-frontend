import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import './replyForm.scss';
import { CommentContext } from '../../../context/CommentContext';

const ReplyForm = ({ commentId }) => {
  const { newReply } = useContext(CommentContext);
  const { loading } = useContext(CommentContext);
  const { replyError } = useContext(CommentContext);
  const { replySuccess } = useContext(CommentContext);
  const [replyMessage, setReplyMessage] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    newReply(replyMessage, commentId);
    setReplyMessage('');
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setReplyMessage(value);
  };

  return (
    <div className="replyForm">
      <h5>Leave a Reply</h5>
      <form onSubmit={handleSubmit}>
        <textarea placeholder="Enter a reply..." value={replyMessage} onChange={handleInputChange} required maxLength="200" />
        { replyError ? (
          <p className="validation-error">
            {replyError}
          </p>
        ) : null}
        { replySuccess ? (
          <p className="validation-success">
            {replySuccess}
          </p>
        ) : null}
        <button className="btnMedium" type="submit">{!loading ? 'Reply' : <i className="fa fa-spinner fa-spin" /> }</button>
      </form>
    </div>
  );
};

ReplyForm.propTypes = {
  commentId: PropTypes.string.isRequired,
};

export default ReplyForm;
