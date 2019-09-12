import React, { createContext, useState, useEffect } from 'react';
import PropType from 'prop-types';
import axios from 'axios';
import appConfig from '../config/appConfig';

const { BACKEND_PATH } = appConfig;

export const ReadNovelContext = createContext();

const ReadNovelContextProvider = ({ children }) => {
  const [novels, setNovels] = useState({ novels: [] });
  useEffect(() => {
    const readNovelData = async () => {
      const res = await axios.get(`${BACKEND_PATH}/novels/hancock`);
      console.log(res);
      setNovels(res.data.data);
    };
    readNovelData();
  }, []);
  return (
    <ReadNovelContext.Provider value={{ novels }}>
      { children }
    </ReadNovelContext.Provider>
  );
};

ReadNovelContextProvider.propTypes = {
  children: PropType.node.isRequired,
};

export default ReadNovelContextContextProvider;
