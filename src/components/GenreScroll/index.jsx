/* eslint-disable no-restricted-globals */
import React from 'react';
import './genreScroll.scss';
import { GenreContext } from '../../contexts/GenreContext';
import appConfig from '../../config/appConfig';

const { FRONTEND_PATH } = appConfig;

const GenreSlider = () => (
  <GenreContext.Consumer>
    {(context) => {
      if (context.genres.length > 0) {
        return (
          <section className="genre-scroll">
            {
              context.genres.map((genre) => (
                <div
                  className="genre"
                  key={genre.id}
                  style={{ backgroundColor: genre.themeColor }}
                  onClick={() => { location.href = `${FRONTEND_PATH}/novels?genre=${genre.name}`; }}
                  role="presentation"
                >
                  <span className="name">{genre.name}</span>
                </div>
              ))
            }
          </section>
        );
      }
      return (
        <section className="genre-scroll">
          <div className="genre">
            <span className="name">...</span>
          </div>
        </section>
      );
    }}
  </GenreContext.Consumer>
);

export default GenreSlider;
