/* eslint-disable no-restricted-globals */
import React, { useContext, useEffect } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import axios from 'axios';
import Filter from './Filter/Filter';
import FilterBox from './FilterBox/FilterBox';
import { SearchContext } from './Hooks/searchContext';
import NovelContainer from './NovelContainer/NovelContainer';
import appConfig from '../../config/appConfig';
import Button from './LoadMoreButton/Button';

const { BACKEND_PATH } = appConfig;

const BooksPage = ({ history }) => {
  const {
    clicked, setOptions, loadMore, setNovels,
    setPage, setNotFound, setLoadMore, getParams,
  } = useContext(SearchContext);

  useEffect(() => {
    axios.get(`${BACKEND_PATH}/genres`)
      .then((res) => {
        setOptions(res.data.data.map((item) => item.name));
      });
  }, []);

  useEffect(() => {
    const query = getParams(history.location);
    axios.get(`${BACKEND_PATH}/novels?${query}&limit=18`)
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
  }, []);

  useEffect(() => {
    const query = getParams(history.location);
    axios.get(`${BACKEND_PATH}/novels?${query}&limit=18`)
      .then((res) => {
        const { currentPage, totalPages, data } = res.data;
        setPage(currentPage + 1);
        setNotFound(false);
        setNovels(data);
        if (currentPage < totalPages) {
          setLoadMore(true);
        } else {
          setLoadMore(false);
        }
      })
      .catch((err) => {
        if (err.response.data.message === 'no novels found in database') {
          setNovels([]);
          setNotFound(true);
        }
      });
  }, [history.location]);

  return (
    <div className="books-main-page">
      <Filter />
      {clicked ? <FilterBox history={history} /> : null}
      <NovelContainer />
      {loadMore ? <Button className="btn get-more-btn" /> : null}
    </div>
  );
};

BooksPage.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};

export default BooksPage;
