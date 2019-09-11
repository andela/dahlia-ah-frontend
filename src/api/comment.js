import axios from 'axios';
import appConfig from '../config/appConfig';

const { BACKEND_PATH } = appConfig;

export const getComment = (slug, setComment, setLoading) => {
  setLoading(true);
  axios.get(`${BACKEND_PATH}/novels/${slug}/comments`)
    .then(({ data }) => {
      setComment(data.comments);
      setLoading(false);
    });
};

export const addComment = (
  slug, commentData, setModalComponent, setError, setSuccess, setAddedComment,
) => {
  if (commentData) {
    const formData = { commentBody: commentData };
    axios.post(`${BACKEND_PATH}/novels/${slug}/comments`, formData)
      .then(({ data }) => {
        setAddedComment(data);
        setModalComponent('comment');
        setSuccess('Comment successfully added');
        setError('');
      })
      .catch(() => {
        setError('No comment entered');
        setSuccess('');
      });
  }
};

export const addReply = (
  slug, replyData, setModalComponent, setReplyError, setReplySuccess, commentId, setAddedReply,
) => {
  if (replyData) {
    const formData = { commentBody: replyData };
    axios.post(`${BACKEND_PATH}/novels/${slug}/comments/${commentId}`, formData)
      .then(({ data }) => {
        setAddedReply(data);
        setModalComponent('comment');
        setReplySuccess('Reply successfully added');
        setReplyError('');
      })
      .catch(() => {
        setReplyError('No reply entered');
        setReplySuccess('');
      });
  }
};
