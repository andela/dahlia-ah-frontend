import React from 'react';
import Search from '../search/Search';
import SearchButton from '../SearchButton/SearchButton';
import Dropdown from '../../helpers/Dropdown/Dropdown';
import './FilterBox.scss';

const FilterBox = () => (
  <div className="filter-box">
    <Search className="book-search" name="Author" id="author" />
    <Search className="book-search" name="Title" id="title" />
    <Search className="book-search" name="Keyword" id="keyword" />
    <Dropdown label="Genre" id="genre" name="Genres" />
    <SearchButton />
  </div>
);

export default FilterBox;
