import React, { createContext, useState } from 'react';
import PropType from 'prop-types';

export const CommentModalContext = createContext();

const CommentModalContextProvider = ({ children }) => {
  const [modalComponent, setModalComponent] = useState(null);
  return (
    <CommentModalContext.Provider value={{ modalComponent, setModalComponent }}>
      { children }
    </CommentModalContext.Provider>
  );
};

CommentModalContextProvider.propTypes = {
  children: PropType.node.isRequired,
};

export default CommentModalContextProvider;
