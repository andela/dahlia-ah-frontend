/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import PropType from 'prop-types';
import { SearchContext } from '../Hooks/searchContext';
import './Search.scss';

const Search = ({ name, id }) => {
  const { handleChange } = useContext(SearchContext);
  return (
    <div className="book-search">
      <label htmlFor={name}>{name}</label>
      <i className="fas fa-search" />
      <input
        type="text"
        id={id}
        name={name}
        className="_search"
        onChange={(e) => handleChange(e, id)}
      />
    </div>
  );
};

Search.propTypes = {
  name: PropType.string.isRequired,
  id: PropType.string.isRequired,
};

export default Search;
