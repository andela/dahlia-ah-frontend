import React, {
  createContext, useState, useEffect, useContext,
} from 'react';
import PropType from 'prop-types';
import { getComment, addComment, addReply } from '../api/comment';
import { CommentModalContext } from './CommentModalContext';


export const CommentContext = createContext();

const CommentContextProvider = ({ slug, children }) => {
  const [comments, setComments] = useState('');
  const [addedComment, setAddedComment] = useState('');
  const [addedReply, setAddedReply] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [replyError, setReplyError] = useState('');
  const [replySuccess, setReplySuccess] = useState('');
  const { setModalComponent } = useContext(CommentModalContext);

  useEffect(() => {
    getComment(slug, setComments, setLoading);
  }, [addedComment, addedReply]);

  const newComment = (commentData) => {
    addComment(slug, commentData, setModalComponent, setError, setSuccess, setAddedComment);
  };

  const newReply = (replyData, commentId) => {
    addReply(
      slug, replyData, setModalComponent, setReplyError, setReplySuccess, commentId, setAddedReply,
    );
  };

  return (
    <CommentContext.Provider value={{
      comments, newComment, loading, error, success, newReply, replyError, replySuccess,
    }}
    >
      { children }
    </CommentContext.Provider>
  );
};

CommentContextProvider.propTypes = {
  children: PropType.node.isRequired,
  slug: PropType.string.isRequired,
};

export default CommentContextProvider;
