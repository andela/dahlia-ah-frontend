import React from 'react';
import './NovelOfTheWeek.scss';

const NovelOfTheWeek = () => (
  <div>
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
            <button type="button" className="btnMedium">View Snippet</button>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default NovelOfTheWeek;
