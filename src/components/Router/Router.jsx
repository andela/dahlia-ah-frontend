import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UserProtected from './Protect';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer/Footer';
import LandingPage from '../LandingPage/LandingPage';
import GenreContextProvider from '../../contexts/GenreContext';
import Homepage from '../Homepage';
import NotFound from '../NotFound/NotFound';
import CreateNovel from '../CreateNovel/CreateNovelContainer';
import Novel from '../SingleNovel/Novel';
import AuthModalContextProvider from '../../context/AuthModalContext';
import CommentModalContextProvider from '../../context/CommentModalContext';
import ConfirmationPageContainer from '../ConfirmationPage/ConfirmationPageContainer';
import ResetPasswordContainer from '../ResetPassword/ResetPasswordContainer';
import Settings from '../Settings/Settings';
import BooksPageWrapper from '../BooksPage/BooksPageWrapper';

const Router = () => (
  <>
    <AuthModalContextProvider>
      <Navbar />
      <div className="components">
        <CommentModalContextProvider>
          <GenreContextProvider>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/confirmation-page" component={ConfirmationPageContainer} />
              <Route exact path="/reset-password" component={ResetPasswordContainer} />
              <UserProtected exact path="/novels" component={BooksPageWrapper} />
              <UserProtected exact path="/novel/:slug" component={Novel} />
              <UserProtected exact path="/homepage" component={Homepage} />
              <UserProtected exact path="/write-novel" component={CreateNovel} />
              <UserProtected exact path="/user/settings" component={Settings} />
              <Route component={NotFound} />
            </Switch>
          </GenreContextProvider>
        </CommentModalContextProvider>
      </div>
    </AuthModalContextProvider>
    <Footer />
  </>
);

export default Router;
