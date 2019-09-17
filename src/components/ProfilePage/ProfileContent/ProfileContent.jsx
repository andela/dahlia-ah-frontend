import React from 'react';
import PropTypes from 'prop-types';
import Stats from '../Stats/Stats';
import './profileContent.scss';

const ProfileContent = ({
  name,
  image,
  bio,
  followers,
  following,
  written,
  openModal,
}) => (
  <div className="profile-content">
    <div className="avatar-container">
      <i
        className="fas fa-camera"
        onClick={() => {
          openModal('avatar-modal');
        }}
        onKeyDown={openModal}
        role="presentation"
      />
      <img src={image} alt="avatar" className="img" />
    </div>
    <div className="bio-container">
      <h3 className="name">{name}</h3>
      <p className="bio">{bio}</p>
      <Stats following={following} followers={followers} written={written} />
      <button
        className="generic-btn"
        type="button"
        onClick={() => {
          openModal('edit-profile-modal');
        }}
      >
        Edit Profile
      </button>
    </div>
  </div>
);

ProfileContent.propTypes = {
  name: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  following: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  written: PropTypes.number.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ProfileContent;
