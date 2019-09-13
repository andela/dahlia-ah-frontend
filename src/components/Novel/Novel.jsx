import React, { useContext } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { CommentModalContext } from '../../context/CommentModalContext';
import CommentContextProvider from '../../context/CommentContext';
import Comment from '../Comment/Comment';

const Novel = ({ match: { params: { slug } } }) => {
  const { modalComponent, setModalComponent } = useContext(CommentModalContext);

  const handleOpenModal = (comment) => {
    setModalComponent(comment);
    document.body.style.height = '100vh';
    document.body.style.overflowY = 'hidden';
  };

  const handleCloseModal = () => {
    setModalComponent(null);
    document.body.style.height = '100vh';
    document.body.style.overflowY = 'auto';
  };

  return (
    <>
      { modalComponent ? (
        <CommentContextProvider slug={slug}>
          <Comment closeModal={handleCloseModal} openModal={handleOpenModal} />
        </CommentContextProvider>
      ) : ''}
      <button type="button" style={{ margin: '200px' }} onClick={() => { handleOpenModal('comment'); }}>View Comments</button>
    </>
  );
};

Novel.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default Novel;
