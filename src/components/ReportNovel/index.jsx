import React from 'react';
import PropType from 'prop-types';
import './reportNovel.scss';
import useReportNovel, { readNovelStates, handleSubmit } from './ReportNovel';

const ReportNovel = ({ slug }) => {
  useReportNovel();
  const {
    isLoading,
    setIsLoading,
    requestSuccess,
    setRequestSuccess,
    requestError,
    setRequestError,
    type,
    setType,
    body,
    setBody,
    message,
    setMessage,
  } = readNovelStates();

  return (
    <div className="report-novel">
      <button type="button" className="btn report-btn modal-trigger" data-target="report-modal">
        <i className="fas fa-flag" />
      </button>
      <div id="report-modal" className="modal">
        <div className="modal-content">
          <h4>Report Novel</h4>
          <a href="#!" className="modal-close waves-effect btn-flat">
            <i className="fas fa-times" />
          </a>
          <form
            className="input-field"
            onSubmit={(e) => handleSubmit(
              e, slug, type, body, setIsLoading, setMessage, setRequestSuccess, setRequestError,
            )}
          >
            <select id="type" defaultValue={type} onChange={(event) => setType(event.target.value)}>
              <option value="" disabled>Choose type of report</option>
              <option value="general">General</option>
              <option value="badWords">Bad Words</option>
            </select>
            <textarea
              id="report-body"
              className="materialize-textarea"
              placeholder="Enter report here"
              value={body}
              onChange={(event) => setBody(event.target.value)}
              required
            />
            {requestError && <p className="report-message red-text">{message}</p> }
            {requestSuccess && <p className="report-message green-text">{message}</p> }
            <button type="submit" className="btn report-btn">
              {isLoading ? <i className="fa fa-spinner fa-spin loader" /> : 'Send'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

ReportNovel.propTypes = {
  slug: PropType.string.isRequired,
};

export default ReportNovel;
