import React, { createContext, useState } from 'react';
import PropType from 'prop-types';

const { role } = JSON.parse(localStorage.getItem('AuthorsHavenUser'));

export const AuthModalContext = createContext();

const AuthModalContextProvider = ({ children }) => {
  const [modalComponent, setModalComponent] = useState(null);
  let [canWrite] = useState(false);

  canWrite = role && (role === 'superadmin' || role === 'admin' || role === 'author');

  return (
    <AuthModalContext.Provider
      value={{ modalComponent, setModalComponent, canWrite }}
    >
      {children}
    </AuthModalContext.Provider>
  );
};

AuthModalContextProvider.propTypes = {
  children: PropType.node.isRequired,
};

export default AuthModalContextProvider;
