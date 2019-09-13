import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import SearchContextProvider from './Hooks/searchContext';
import BooksPage from './BooksPage';
import './BooksPage.scss';

const BooksPageWrapper = ({ history }) => (
  <SearchContextProvider>
    <BooksPage history={history} />
  </SearchContextProvider>
);

BooksPageWrapper.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};

export default withRouter(BooksPageWrapper);
