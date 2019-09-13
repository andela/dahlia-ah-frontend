import React from 'react';
import PropTypes from 'prop-types';
import './otherProfileStats.scss';

const OtherProfileStats = ({ followers, following, written }) => (
  <div className="stats">
    <div className="stat">
      <span>
        <i className="fas fa-users" />
      </span>
      <div className="followers">
        <p>{followers}</p>
        <p>Followers</p>
      </div>
    </div>
    <div className="stat">
      <span>
        <i className="fas fa-users" />
      </span>
      <div className="following">
        <p>{following}</p>
        <p>Following</p>
      </div>
    </div>
    <div className="stat">
      <span>
        <i className="fas fa-book" />
      </span>
      <div className="written">
        <p>{written}</p>
        <p>Novels Written</p>
      </div>
    </div>
  </div>
);

OtherProfileStats.propTypes = {
  followers: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired,
  written: PropTypes.number.isRequired,
};

export default OtherProfileStats;
