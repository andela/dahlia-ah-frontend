import React, { createContext, useEffect } from 'react';
import PropType from 'prop-types';
import BannerApi from '../api/banner';
import bannerState from '../hooks/Banner';

export const BannerContext = createContext();

const BannerContextProvider = ({ children }) => {
  const { banner, setBanner } = bannerState();
  useEffect(() => {
    BannerApi(1, setBanner);
  }, []);
  return (
    <BannerContext.Provider value={{ banner }}>
      { children }
    </BannerContext.Provider>
  );
};

BannerContextProvider.propTypes = {
  children: PropType.node.isRequired,
};

export default BannerContextProvider;
