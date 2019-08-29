import React, { useEffect } from 'react';
import Materialize from 'materialize-css';
import './bookslider.scss';

const BookSlider = () => {
  useEffect(() => {
    const slider = document.querySelector('.carousel.carousel-slider');
    const instance = Materialize.Carousel.init(slider, {
      fullWidth: true,
      indicators: true,
    });
    const autoplay = () => {
      instance.next();
    };
    setInterval(autoplay, 5000);
  }, []);

  return (
    <div className="carousel carousel-slider center">
      <div className="carousel-fixed-item center" />
      <div className="carousel-item red white-text" href="#one!">
        <img src="https://res.cloudinary.com/drlcfqzym/image/upload/v1567081040/homepage_large.png" alt="random" />
        <div className="img-overlay">
          <h2 className="title">My Home In The Woods</h2>
          <p className="white-text description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          </p>
          <a href="#!" className="read-more-btn">Read More</a>
        </div>
      </div>
      <div className="carousel-item amber white-text" href="#two!">
        <img src="https://res.cloudinary.com/drlcfqzym/image/upload/v1567013343/ah-home.jpg" alt="random" />
        <div className="img-overlay">
          <h2 className="title">The Man In The Forest Of Dreams</h2>
          <p className="white-text description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          </p>
          <a href="#!" className="read-more-btn">Read More</a>
        </div>
      </div>
      <div className="carousel-item green white-text" href="#three!">
        <img src="https://res.cloudinary.com/drlcfqzym/image/upload/v1567083656/heaven-4349025_1920.jpg" alt="random" />
        <div className="img-overlay">
          <h2 className="title">Let&apos;s Go To The Moon</h2>
          <p className="white-text description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          </p>
          <a href="#!" className="read-more-btn">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default BookSlider;
