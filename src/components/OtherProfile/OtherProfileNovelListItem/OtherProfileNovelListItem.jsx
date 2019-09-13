import React from 'react';
import PropTypes from 'prop-types';
import './otherProfileNovelListItem.scss';

const NovelListItem = (props) => {
  const {
    title,
    summary,
    readTime,
    thumbImgUrl,
    likes,
    comments,
    genre,
  } = props;

  const estimatedTime = readTime === 1 ? '1 day read' : ` ${readTime} days read`;


  return (
    <div className="novel-list-item">
      <div className="img-container">
        <img src={thumbImgUrl} alt={title} />
      </div>
      <div className="novel-details">
        <h5>{title}</h5>
        <div className="description">
          <p>{summary}</p>
        </div>
      </div>

      <div className="novel-activity">
        <div className="activity-icon">
          <i className="fas fa-comment" />
          {' '}
          {comments}
        </div>
        <div className="activity-icon">
          <i className="fas fa-heart" />
          {' '}
          {likes}
        </div>
      </div>

      <div className="novel-meta">
        <div>
          <i className="fas fa-clock" />
          {' '}
          {estimatedTime}
        </div>
        <div>
          <i className="fas fa-tags" />
          {' '}
          {genre}
        </div>
      </div>
    </div>
  );
};

NovelListItem.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  readTime: PropTypes.number.isRequired,
  thumbImgUrl: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
};

export default NovelListItem;
