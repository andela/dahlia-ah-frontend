import React, { createContext, useState, useEffect } from 'react';
import PropType from 'prop-types';
import axios from 'axios';

export const GenreContext = createContext();

const GenreContextProvider = ({ children }) => {
  const [genres, setGenres] = useState({ genres: [] });
  useEffect(() => {
    const fetchAsyncData = async () => {
      const res = await axios.get('https://ah-dahlia-staging.herokuapp.com/api/v1/genres');
      setGenres(res.data.data);
    };
    fetchAsyncData();
  }, []);
  return (
    <GenreContext.Provider value={{ genres }}>
      { children }
    </GenreContext.Provider>
  );
};

GenreContextProvider.propTypes = {
  children: PropType.node.isRequired,
};

export default GenreContextProvider;
