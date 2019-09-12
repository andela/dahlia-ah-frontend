import React, { useContext } from 'react';
import PropType from 'prop-types';
import { BannerContext } from '../../../context/BannerContext';
import './banner.scss';

const Banner = ({ openModal }) => {
  const { banner } = useContext(BannerContext);
  const bannerContent = banner[0];

  return (
    <>
      { bannerContent ? (
        <section id="banner" style={{ backgroundImage: `url(${bannerContent.coverImgUrl})` }} role="button" onClick={() => { openModal('signin'); }}>
          <div className="bannerGradient">
            <div className="bannerText">
              <h2 role="button" onClick={() => { openModal('signin'); }}>{bannerContent.title}</h2>
              <p>{bannerContent.description}</p>
            </div>
            <button type="button" onClick={() => { openModal('signin'); }} className="btnLarge">See More</button>
          </div>
        </section>
      ) : 'kj jk'}
    </>
  );
};

Banner.propTypes = {
  openModal: PropType.func.isRequired,
};


export default Banner;
