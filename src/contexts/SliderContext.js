import React, { createContext, useState, useEffect } from 'react';
import PropType from 'prop-types';
import axios from 'axios';
import appConfig from '../config/appConfig';

const { BACKEND_PATH } = appConfig;

export const SliderContext = createContext();

const SliderContextProvider = ({ children }) => {
  const [novels, setNovels] = useState({ novels: [] });
  useEffect(() => {
    const fetchAsyncData = async () => {
      const res = await axios.get(`${BACKEND_PATH}/novels/random?limit=3`);
      setNovels(res.data.data);
    };
    fetchAsyncData();
  }, []);
  return (
    <SliderContext.Provider value={{ novels }}>
      { children }
    </SliderContext.Provider>
  );
};

SliderContextProvider.propTypes = {
  children: PropType.node.isRequired,
};

export default SliderContextProvider;
