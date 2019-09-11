import React from 'react';
import PropType from 'prop-types';
import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
} from 'react-share';
import './shareNovel.scss';
import useShareButton from './effects';

const ShareNovel = ({ title }) => {
  const shareUrl = window.location.href;

  return (
    <div className="share-novel">
      <button type="button" className="btn" onClick={useShareButton}>
        <i className="fas fa-share-alt" />
      </button>
      <div className="socials dropdown hide">
        <FacebookShareButton
          url={shareUrl}
          quote={title}
        >
          <i className="fab fa-facebook-square" />
        </FacebookShareButton>
        <TwitterShareButton
          url={shareUrl}
          title={title}
        >
          <i className="fab fa-twitter-square" />
        </TwitterShareButton>
        <EmailShareButton
          url={shareUrl}
          subject={title}
        >
          <i className="fas fa-envelope" />
        </EmailShareButton>
      </div>
    </div>
  );
};

ShareNovel.propTypes = {
  title: PropType.string.isRequired,
};

export default ShareNovel;
