import React from 'react';
import PropType from 'prop-types';
import './banner.scss';

const Banner = ({ openModal }) => (
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
        <button type="button" onClick={() => { openModal('signin'); }} className="btnLarge">View Snippet</button>
      </div>
    </section>
  </div>
);

Banner.propTypes = {
  openModal: PropType.func.isRequired,
};


export default Banner;
