/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useContext } from 'react';
import PropType from 'prop-types';
import './Dropdown.scss';
import { SearchContext } from '../../BooksPage/Hooks/searchContext';

const Dropdown = ({
  label, id, name, className,
}) => {
  const { handleBlur, handleChange, options } = useContext(SearchContext);

  return (
    <div className={className || '_search-dropdown'}>
      <label htmlFor={name}>{label}</label>
      <i className="fas fa-angle-down" />
      <input
        name={name}
        list={name}
        id={id}
        onBlur={handleBlur}
        onChange={(e) => handleChange(e, id)}
      />
      <datalist id={name}>
        {options.map((listItem) => (
          <option
            value={listItem.charAt(0).toUpperCase() + listItem.slice(1)}
          />
        ))}
      </datalist>
    </div>
  );
};

Dropdown.propTypes = {
  label: PropType.string.isRequired,
  id: PropType.string.isRequired,
  name: PropType.string.isRequired,
  className: PropType.string.isRequired,
};

export default Dropdown;
