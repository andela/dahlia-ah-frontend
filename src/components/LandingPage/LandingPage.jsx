import React from 'react';
import Banner from '../Banner/Banner';
import NovelOfTheWeek from '../NovelOfTheWeek/NovelOfTheWeek';
import './landingPage.scss';

const LandingPage = () => (
  <div>
    <div className="landingPage">
      <Banner />
      <NovelOfTheWeek />
      <section id="writingCaption">
        <p>The Best Place To Express Yourself and Collaborate</p>
        <button type="button" className="btnLarge">Start Writing</button>
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
);

export default LandingPage;
