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
  const [params, setParam] = useState('');
  let initialParams;

  const handleSearch = () => {
    const tempValues = Object.keys(filterValues);
    let query = [];
    for (let i = 0; i < tempValues.length; i += 1) {
      if (tempValues[i] === 'keyword' && filterValues[tempValues[i]] && filterValues[tempValues[i]] !== '') {
        query = [`keyword=${filterValues[tempValues[i]]}`];
        break;
      }
      if (filterValues[tempValues[i]] && filterValues[tempValues[i]] !== '') {
        query.push(`${tempValues[i]}=${filterValues[tempValues[i]]}`);
      }
    }
    initialParams = query.join('&');
    setParam(initialParams);

    if (query.length) {
      axios.get(`${BACKEND_PATH}/novels?${initialParams}&limit=18`)
        .then((res) => {
          const { currentPage, totalPages, data } = res.data;
          setPage(currentPage + 1);
          setNotFound(false);
          setNovels(data);
          if (currentPage < totalPages) {
            setLoadMore(true);
          }
        })
        .catch((err) => {
          if (err.response.data.message === 'no novels found in database') {
            setNovels([]);
            setNotFound(true);
          }
        });
    }
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
      setParam,
      setNovels,
      setNotFound,
      setPage,
      setLoadMore,
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
