import React, { useContext } from 'react';
import { SearchContext } from '../Hooks/searchContext';
import './Filter.scss';

const Filter = () => {
  const { setClicked, clicked } = useContext(SearchContext);
  return (
    <button
      type="button"
      className={clicked ? 'filter_true' : 'filter'}
      onClick={() => setClicked((prevState) => !prevState)}
    >
      <i className="fas fa-sort-amount-down" />
      <span>Filters</span>
    </button>
  );
};


export default Filter;
