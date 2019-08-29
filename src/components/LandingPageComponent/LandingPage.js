import React from 'react';
import { Link } from 'react-router-dom';
import WeeklyNovelComponent from '../WeeklyNovelComponent/WeeklyNovel';
import MembershipComponent from '../MembershipComponent/Membership';
import style from './landingPage.scss';

const LandingPage = () => (
  <div>
    <section id={style.banner}>
      <div className={style.bannerGradient}>
        <h2>THE MAN IN THE FOREST OF DREAMS</h2>
        <div className={style.bannerText}>
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
        <button type="button" className={style.btnLarge}><Link to="/">View Snippet</Link></button>
      </div>
    </section>
    <WeeklyNovelComponent />
    <section id={style.writingCaption}>
      <p>The Best Place To Express Yourself and Collaborate</p>
      <button type="button" className={style.btnLarge}><Link to="/">Start Writing</Link></button>
    </section>
    <MembershipComponent />
  </div>
);

export default LandingPage;
