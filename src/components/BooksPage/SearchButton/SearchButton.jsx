import React, { useContext } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import './SearchButton.scss';
import { SearchContext } from '../Hooks/searchContext';

const SearchButton = ({ history }) => {
  const { handleSearch } = useContext(SearchContext);
  return (
    <button type="button" className="btn search-btn" onClick={() => handleSearch(history)}>Search</button>
  );
};

SearchButton.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};

export default SearchButton;
