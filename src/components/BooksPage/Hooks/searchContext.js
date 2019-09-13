import React, { useState, createContext } from 'react';
import PropType from 'prop-types';
import axios from 'axios';
import appConfig from '../../../config/appConfig';

const { BACKEND_PATH } = appConfig;

export const SearchContext = createContext();

const SearchContextProvider = ({ children }) => {
  const [filterValues, setFilterValues] = useState({
    author: null,
    title: null,
    genre: null,
    keyword: null,
  });

  const [clicked, setClicked] = useState(false);
  const [options, setOptions] = useState([]);
  const [novels, setNovels] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(false);
  const [params, setParams] = useState();

  const getParams = (local) => {
    const searchParams = new URLSearchParams(local.search);
    const param = [...searchParams.entries()];
    setParams(param);
    return param.map((query) => query.join('=')).join('&');
  };

  const isEmpty = (value) => (
    (typeof value === 'string' && value.trim().length === 0)
    || (typeof value === 'object' && Object.keys(value) === 0)
    || (value === undefined)
  );

  const updateUrl = (query, history) => {
    const newQuery = new URLSearchParams(query);
    history.push(`?${newQuery.toString()}`);
  };

  const handleSearch = (history) => {
    const tempValues = Object.entries(filterValues);
    let query;
    let values;
    if (filterValues.keyword === null || isEmpty(filterValues.keyword)) {
      values = tempValues.filter((val) => val[1] !== null && !isEmpty(val[1]));
      query = values.map((item) => item.join('=')).join('&');
    } else {
      query = `keyword=${filterValues.keyword}`;
    }
    updateUrl(query, history);
  };

  const handleClick = () => {
    setPage(page + 1);
    axios.get(`${BACKEND_PATH}/novels?${params}&page=${page}&limit=18`)
      .then((res) => {
        const { currentPage, totalPages } = res.data;
        if (currentPage >= totalPages) {
          setLoadMore(false);
        }
        setNovels((prevNovels) => [...prevNovels, ...res.data.data]);
      });
  };

  const handleChange = (event, id) => {
    const { value } = event.target;
    setFilterValues((prevValues) => ({ ...prevValues, [id]: value }));
  };

  return (
    <SearchContext.Provider value={{
      filterValues,
      setFilterValues,
      clicked,
      setClicked,
      handleSearch,
      handleChange,
      setOptions,
      options,
      novels,
      notFound,
      handleClick,
      loadMore,
      setNovels,
      setNotFound,
      setPage,
      setLoadMore,
      getParams,
    }}
    >
      {children}
    </SearchContext.Provider>
  );
};

SearchContextProvider.propTypes = {
  children: PropType.node.isRequired,
};


export default SearchContextProvider;
