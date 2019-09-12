/* eslint-disable no-restricted-globals */
import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import Filter from './Filter/Filter';
import FilterBox from './FilterBox/FilterBox';
import { SearchContext } from './Hooks/searchContext';
import NovelContainer from './NovelContainer/NovelContainer';
import appConfig from '../../config/appConfig';
import Button from './LoadMoreButton/Button';

const { BACKEND_PATH } = appConfig;

const BooksPage = () => {
  const {
    clicked, setOptions, loadMore, setNovels,
    setPage, setNotFound, setParam, setLoadMore,
  } = useContext(SearchContext);

  useEffect(() => {
    axios.get(`${BACKEND_PATH}/genres`)
      .then((res) => {
        setOptions(res.data.data.map((item) => item.name));
      });
  }, []);

  useEffect(() => {
    const genre = new URLSearchParams(location.search).get('genre');
    if (genre) {
      axios.get(`${BACKEND_PATH}/novels?genre=${genre}&limit=18`)
        .then((res) => {
          const { currentPage, totalPages, data } = res.data;
          setPage(currentPage + 1);
          setNotFound(false);
          setParam(`genre=${genre}`);
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
  }, []);

  return (
    <div className="books-main-page">
      <Filter />
      {clicked ? <FilterBox /> : null}
      <NovelContainer />
      {loadMore ? <Button className="btn get-more-btn" /> : null}
    </div>
  );
};
export default BooksPage;
