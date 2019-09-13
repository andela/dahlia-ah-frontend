import React from 'react';
import PropTypes from 'prop-types';
import OtherProfileStats from '../OtherProfileStats/OtherProfileStats';
import './otherProfileContent.scss';

const OtherProfileContent = ({
  name, image, bio, followers, following, written,
}) => (
  <div className="profile-content">
    <div className="avatar-container">
      <img src={image} alt="avatar" />
    </div>
    <div className="bio-container">
      <h3 className="name">{name}</h3>
      <p className="bio">{bio}</p>
      <OtherProfileStats following={following} followers={followers} written={written} />
      <button className="generic-btn" type="button">
          Follow
      </button>
    </div>
  </div>
);

OtherProfileContent.propTypes = {
  name: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  following: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  written: PropTypes.number.isRequired,
};

export default OtherProfileContent;
