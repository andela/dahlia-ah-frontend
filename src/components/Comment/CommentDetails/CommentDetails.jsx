import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import ReplyForm from '../ReplyForm/ReplyForm';
import './CommentDetails.scss';

const CommentDetails = ({
  comment: {
    id, commentAuthor: { firstName, avatarUrl }, commentBody, createdAt, replies,
  }, handleReplyBox,
}) => (
  <>
    <div className="commentDetails">
      <div className="commentImage">
        {avatarUrl ? <img src={avatarUrl} alt="default commentator" />
          : <img src="https://img.icons8.com/color/50/000000/person-male.png" alt="default commentator" /> }
      </div>
      <div className="commentText">
        <div className="commentDescription">
          <div className="commentAuthor">{firstName}</div>
          <div className="commentTextBody">{commentBody}</div>
        </div>
        <div className="commentActions">
          <div className="commentLike"><button type="button">Like</button></div>
          <div className="commentActionSeperator"><i className="fas fa-circle" /></div>
          <div className="commentReply"><button type="button" onClick={() => handleReplyBox(id)}>Reply</button></div>
          <div className="commentActionSeperator"><i className="fas fa-circle" /></div>
          <div className="commentTime">{moment(createdAt).utc().fromNow()}</div>
        </div>
      </div>
    </div>
    { replies.length ? (
      replies.map((reply) => (
        <div className="commentReplies" key={reply.id}>
          <div className="commentDetails">
            <div className="commentImage">
              {reply.commentAuthor.avatarUrl ? <img src={avatarUrl} alt="default commentator" />
                : <img src="https://img.icons8.com/color/50/000000/person-male.png" alt="default commentator" /> }
            </div>
            <div className="commentText">
              <div className="commentDescription">
                <div className="commentAuthor">{reply.commentAuthor.firstName}</div>
                <div className="commentTextBody">{reply.commentBody}</div>
              </div>
              <div className="commentActions">
                <div className="commentLike"><button type="button">Like</button></div>
                <div className="commentActionSeperator"><i className="fas fa-circle" /></div>
                <div className="commentTime">{moment(reply.createdAt).utc().fromNow()}</div>
              </div>
            </div>
          </div>
        </div>
      ))
    ) : ''}
    <div className="commentReplyForm" id={`replyBox${id}`}>
      <ReplyForm commentId={id} />
    </div>
  </>
);

CommentDetails.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.string,
    commentAuthor: PropTypes.object,
    commentBody: PropTypes.string,
    createdAt: PropTypes.string,
    replies: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  handleReplyBox: PropTypes.func.isRequired,
};

export default CommentDetails;
