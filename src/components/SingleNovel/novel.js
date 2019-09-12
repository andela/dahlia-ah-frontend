/* eslint-disable no-restricted-globals */
import React from 'react';
import PropTypes from 'prop-types';
import NovelStats from './NovelStats/NovelStats';

import './Novel.scss';

const Novel = ({
  description, likes, time, title, author, cover, slug,
}) => (
  <div
    className="_novel"
    role="presentation"
    onClick={() => { location.href = `http://localhost:3000/read-novel/${slug}`; }}
  >
    <div className="book-cover">
      <img src={cover} alt="book cover" />
    </div>
    <div className="novel-info">
      <p className="book-title">{title}</p>
      <p className="book-author">{author}</p>
      <NovelStats likes="300" time={`${time}min`} className="stats" />
      <p className="description">
        {description}
      </p>
    </div>
  </div>
);

Novel.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  likes: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};
export default Novel;
