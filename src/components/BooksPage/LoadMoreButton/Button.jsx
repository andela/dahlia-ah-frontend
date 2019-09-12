import React, { useContext } from 'react';
import { SearchContext } from '../Hooks/searchContext';
import './Button.scss';

const Button = () => {
  const { handleClick } = useContext(SearchContext);
  return (
    <button
      type="button"
      className="btn get-more-btn"
      onClick={handleClick}
    >
                    Load more
      <span>
        <img
          src="https://img.icons8.com/ios/20/000000/expand-arrow--v1.png"
          alt="dropdown"
        />
      </span>
    </button>
  );
};

export default Button;
