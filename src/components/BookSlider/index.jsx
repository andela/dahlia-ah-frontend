import React from 'react';
import './bookslider.scss';
import useSlider from './effects';
import { SliderContext } from '../../contexts/SliderContext';
import ReadNovel from '../ReadNovel/ReadNovel';

const BookSlider = ({readNovel}) => {
  useSlider();
  let keyValue = 0;

  return (
    <SliderContext.Consumer>
      {(context) => (
        context.novels.length > 0
          ? ( 
            <div className="carousel carousel-slider center">
              {context.novels.map((novel) => {
                keyValue += 1;
                return (
                  <div
                    className="carousel-item red white-text"
                    style={{ backgroundImage: `url(${novel.coverImgUrl})` }}
                    href="#one!"
                    key={keyValue}
                  >
                    <div className="img-overlay">
                      <h2 className="title">{novel.title}</h2>
                      <p className="white-text description">
                        {novel.description}
                      </p>
                      <a href="#!" onClick={() => { readNovel(novel.slug)}} className="read-more-btn">Read More</a>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="carousel carousel-slider center">
              <div className="carousel-item red white-text" href="#one!" key="1" />
              <div className="carousel-item red white-text" href="#one!" key="2" />
              <div className="carousel-item red white-text" href="#one!" key="3" />
            </div>
          )
      )}
    </SliderContext.Consumer>
  );
};

export default BookSlider;
