import React from 'react';
import PropType from 'prop-types';

const NovelStats = ({ likes, time, className }) => (
  <div className={className}>
    <span>
      <i className="fas fa-clock" />
      {' '}
      {time}
    </span>
    <span>
      <i className="fas fa-heart" />
      {' '}
      {likes}
    </span>
  </div>
);

export default NovelStats;

NovelStats.propTypes = {
  likes: PropType.string.isRequired,
  time: PropType.string.isRequired,
  className: PropType.string.isRequired,
};
