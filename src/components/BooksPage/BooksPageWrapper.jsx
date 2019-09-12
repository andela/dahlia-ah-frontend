import React from 'react';
import { withRouter } from 'react-router-dom';
import SearchContextProvider from './Hooks/searchContext';
import BooksPage from './BooksPage';
import './BooksPage.scss';

const BooksPageWrapper = () => (
  <SearchContextProvider>
    <BooksPage />
  </SearchContextProvider>
);

export default withRouter(BooksPageWrapper);
