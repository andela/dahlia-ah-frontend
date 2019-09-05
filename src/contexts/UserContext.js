import React, { createContext, useState } from 'react';
import PropType from 'prop-types';
import setToken from '../helpers/setToken';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const authorsHavenUser = JSON.parse(localStorage.getItem('AuthorsHavenUser'));
  const [user] = useState(authorsHavenUser);
  setToken(user.token);

  return (
    <UserContext.Provider value={{ user }}>
      { children }
    </UserContext.Provider>
  );
};

UserContextProvider.propTypes = {
  children: PropType.node.isRequired,
};

export default UserContextProvider;
