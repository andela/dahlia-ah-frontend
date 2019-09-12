import React, { useContext, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import jwtDecode from 'jwt-decode';
import Banner from './Banner/Banner';
import NovelOfTheWeek from './NovelOfTheWeek/NovelOfTheWeek';
import { AuthModalContext } from '../../context/AuthModalContext';
import BannerContextProvider from '../../context/BannerContext';
import NovelOfTheWeekContextProvider from '../../context/NovelOfTheWeekContext';
import './landingPage.scss';

const LandingPage = ({ history, location }) => {
  const { setModalComponent } = useContext(AuthModalContext);
  const user = JSON.parse(localStorage.getItem('AuthorsHavenUser'));

  useEffect(() => {
    if (location.search) {
      const tokenData = location.search.replace('?token=', '');
      const token = jwtDecode(tokenData);
      localStorage.setItem('AuthorsHavenUser', JSON.stringify(token));
      window.location.href = '/homepage';
    }
  }, []);

  return (
    <>
      {
        user && user.isVerified ? history.push('/homepage') : null
      }
      <div>
        <div className="landingPage">
          <BannerContextProvider>
            <Banner openModal={setModalComponent} />
          </BannerContextProvider>
          <NovelOfTheWeekContextProvider>
            <NovelOfTheWeek openModal={setModalComponent} />
          </NovelOfTheWeekContextProvider>
          <section id="writingCaption">
            <p>The Best Place To Express Yourself and Collaborate</p>
            <button type="button" onClick={() => { setModalComponent('signin'); }} className="btnLarge">Start Writing</button>
          </section>
          <section id="membership">
            <h2>Membership</h2>
            <div className="membershipBox">
              <div className="freeMembership">
                <div>
                  <h4>Free</h4>
                  <ul>
                    <li>Read Novels</li>
                    <li>Bookmark Novels</li>
                    <li>Follow Authors</li>
                  </ul>
                </div>
                <div>
                  <p><button type="button" onClick={() => { setModalComponent('signup'); }}>SIGN UP</button></p>
                </div>
              </div>
              <div className="subscribeMembership">
                <div>
                  <h4>Subscription</h4>
                  <ul>
                    <li>Read Novels</li>
                    <li>Bookmark Novels</li>
                    <li>Follow and Collaborate with other Authors</li>
                    <li>Like and Comment on Novels</li>
                    <li>Novel Review and Analytics</li>
                  </ul>
                </div>
                <div>
                  <p><button type="button" onClick={() => { setModalComponent('signin'); }}>SUBSCRIBE</button></p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

LandingPage.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  location: ReactRouterPropTypes.location.isRequired,
};

export default withRouter(LandingPage);
