import React from 'react';
import { Link } from 'react-router-dom';
import './landingPage.scss';

const LandingPage = () => (
  <div>
    <section id="banner">
      <div className="bannerGradient">
        <h2>THE MAN IN THE FOREST OF DREAMS</h2>
        <div className="bannerText">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <button type="button" className="btnLarge"><Link to="/">View Snippet</Link></button>
      </div>
    </section>
    <section id="weekNovel">
      <h2>Novel of the Week</h2>
      <div className="weekNovelBox">
        <div className="weekNovelImage">
          <img src="https://res.cloudinary.com/allebd/image/upload/v1567031973/dahlia/weeklynovel.png" alt="weekly novel" />
        </div>
        <div className="weekNovelDescription">
          <div>
            <h3>One Way Trip</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum..
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
              laborum upidatat non proident, sunt in culpa qui officia.
            </p>
            <button type="button" className="btnMedium"><Link to="/">View Snippet</Link></button>
          </div>
        </div>
      </div>
    </section>
    <section id="writingCaption">
      <p>The Best Place To Express Yourself and Collaborate</p>
      <button type="button" className="btnLarge"><Link to="/">Start Writing</Link></button>
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
            <p><Link to="/">SIGN UP</Link></p>
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
            <p><Link to="/">SUBSCRIBE</Link></p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default LandingPage;
