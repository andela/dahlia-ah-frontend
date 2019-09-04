import React, { createContext, useState } from 'react';
import PropType from 'prop-types';

export const AuthModalContext = createContext();

const AuthModalContextProvider = ({ children }) => {
  const [modalComponent, setModalComponent] = useState(null);
  return (
    <AuthModalContext.Provider value={{ modalComponent, setModalComponent }}>
      { children }
    </AuthModalContext.Provider>
  );
};

AuthModalContextProvider.propTypes = {
  children: PropType.node.isRequired,
};


export default AuthModalContextProvider;
