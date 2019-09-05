import React, { createContext, useEffect } from 'react';
import PropType from 'prop-types';
import NovelOfTheWeekApi from '../api/novelOfTheWeek';
import NovelOfTheWeekState from '../hooks/NovelOfTheWeek';

export const NovelOfTheWeekContext = createContext();

const NovelOfTheWeekContextProvider = ({ children }) => {
  const { novelOfTheWeek, setNovelOfTheWeek } = NovelOfTheWeekState();
  useEffect(() => {
    NovelOfTheWeekApi(setNovelOfTheWeek);
  }, []);
  return (
    <NovelOfTheWeekContext.Provider value={{ novelOfTheWeek }}>
      { children }
    </NovelOfTheWeekContext.Provider>
  );
};

NovelOfTheWeekContextProvider.propTypes = {
  children: PropType.node.isRequired,
};

export default NovelOfTheWeekContextProvider;
