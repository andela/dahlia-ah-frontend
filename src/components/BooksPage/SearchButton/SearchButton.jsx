import React, { useContext } from 'react';
import './SearchButton.scss';
import { SearchContext } from '../Hooks/searchContext';

const SearchButton = () => {
  const { handleSearch } = useContext(SearchContext);
  return (
    <button type="button" className="btn search-btn" onClick={handleSearch}>Search</button>
  );
};

export default SearchButton;
