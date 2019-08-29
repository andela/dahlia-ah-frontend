import React, { createContext, useState } from 'react';
import PropType from 'prop-types';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  return (
    <UserContext.Provider value={{ ...user, setUser }}>
      { children }
    </UserContext.Provider>
  );
};

UserContextProvider.propTypes = {
  children: PropType.node.isRequired,
};


export default UserContextProvider;
