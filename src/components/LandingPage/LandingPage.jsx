import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import Banner from './Banner/Banner';
import { AuthModalContext } from '../../context/AuthModalContext';

import NovelOfTheWeek from './NovelOfTheWeek/NovelOfTheWeek';
import './landingPage.scss';

const LandingPage = ({ history }) => {
  const { setModalComponent } = useContext(AuthModalContext);
  const user = JSON.parse(localStorage.getItem('AuthorsHavenUser'));

  return (
    <>
      {
        // eslint-disable-next-line no-nested-ternary
        user && user.isVerified ? history.push('/homepage') : (user && user.isVerified === false) ? history.push('/confirmation-page') : null
      }
      <div>
        <div className="landingPage">
          <Banner openModal={setModalComponent} />
          <NovelOfTheWeek openModal={setModalComponent} />
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
                  <p>SIGN UP</p>
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
                  <p>SUBSCRIBE</p>
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
};

export default withRouter(LandingPage);
