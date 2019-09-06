import React from 'react';
import PropTypes from 'prop-types';

const TopSectionDiv = ({
  uploadedCover, ajaxCoverUploadLoading, handleFileCapture,
  coverImgSrc, uploadedThumb, ajaxThumbUploadLoading, thumbImgSrc,
  onSubmit, ajaxSaveLoading, ajaxPublishLoading, statusColor, publishError,
}) => (
  <div className="topSectionDiv">
    <div className="photoImage">
      { !uploadedCover ? (
        <>
          <p>Upload Cover Photo</p>
          <label htmlFor="cover-image">
            { !ajaxCoverUploadLoading ? <img alt="upload" src="https://img.icons8.com/ios/50/000000/camera.png" /> : <i className="fa fa-spinner fa-spin loader" /> }
            <input type="file" id="cover-image" onChange={(e) => handleFileCapture(e, 'cover')} />
          </label>
        </>
      ) : <img className="uploaded" alt="preview-upload" src={coverImgSrc} /> }
    </div>
    {' '}
    <div className="photoImage thumbImage">
      { !uploadedThumb ? (
        <>
          <p>Upload Thumbnail Photo</p>
          <label htmlFor="thumb-image">
            { !ajaxThumbUploadLoading ? <img alt="upload" src="https://img.icons8.com/ios/50/000000/camera.png" /> : <i className="fa fa-spinner fa-spin loader" /> }
            <input type="file" id="thumb-image" onChange={(e) => handleFileCapture(e, 'thumb')} />
          </label>
        </>
      ) : <img className="uploaded" alt="preview-upload" src={thumbImgSrc} /> }
    </div>
    <button type="button" onClick={() => onSubmit('publish')} disabled={ajaxSaveLoading}>{ajaxPublishLoading ? 'Publishing...' : 'Publish'}</button>
    <p className={`publish-error ${statusColor}`}>{publishError}</p>
  </div>
);

TopSectionDiv.propTypes = {
  uploadedCover: PropTypes.bool.isRequired,
  ajaxCoverUploadLoading: PropTypes.bool.isRequired,
  handleFileCapture: PropTypes.func.isRequired,
  coverImgSrc: PropTypes.string.isRequired,
  uploadedThumb: PropTypes.bool.isRequired,
  ajaxThumbUploadLoading: PropTypes.bool.isRequired,
  thumbImgSrc: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  ajaxSaveLoading: PropTypes.bool.isRequired,
  ajaxPublishLoading: PropTypes.bool.isRequired,
  statusColor: PropTypes.string.isRequired,
  publishError: PropTypes.string.isRequired,
};

export default TopSectionDiv;
