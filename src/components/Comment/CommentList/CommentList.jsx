import React, { useContext } from 'react';
import CommentDetails from '../CommentDetails/CommentDetails';
import { CommentContext } from '../../../context/CommentContext';
import './commentList.scss';

const CommentList = () => {
  const { comments } = useContext(CommentContext);
  const { loading } = useContext(CommentContext);
  const handleReplyBox = (id) => {
    document.querySelector(`#replyBox${id}`).style.display = 'block';
  };

  return comments.length ? (
    <div className="commentList">
      {
        comments.map((comment) => (
          <CommentDetails comment={comment} key={comment.id} handleReplyBox={handleReplyBox} />
        ))
      }
    </div>
  ) : (
    <div className="emptyComment">
      <p>{!loading ? 'No comment' : <i className="fa fa-spinner fa-spin" /> }</p>
    </div>
  );
};

export default CommentList;
