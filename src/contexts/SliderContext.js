import React, { createContext, useState, useEffect } from 'react';
import PropType from 'prop-types';
import axios from 'axios';

export const SliderContext = createContext();

const SliderContextProvider = ({ children }) => {
  const [novels, setNovels] = useState({ novels: [] });
  useEffect(() => {
    const fetchAsyncData = async () => {
      const res = await axios.get('https://ah-dahlia.herokuapp.com/api/v1/novels/random?limit=3');
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
