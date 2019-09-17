import React from 'react';
import PropTypes from 'prop-types';
import './stats.scss';

const Stats = ({ followers, following, written }) => (
  <div className="stats">
    <div className="stat">
      <span>
        <i className="fas fa-users" />
      </span>
      <div className="followers">
        <p>{followers}</p>
        <p>followers</p>
      </div>
    </div>
    <div className="stat">
      <span>
        <i className="fas fa-users" />
      </span>
      <div className="following">
        <p>{following}</p>
        <p>following</p>
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

Stats.propTypes = {
  followers: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired,
  written: PropTypes.number.isRequired,
};

export default Stats;
