import React from 'react';
import PropTypes from 'prop-types';

const EditorArea = ({
  onSubmit, ajaxSaveLoading, editorError,
}) => (
  <>
    { editorError ? <p>Unable to load rich text editor</p> : <textarea id="editor" /> }
    <div>
      <button type="submit" className="btn ajax-button" onClick={() => onSubmit('save')} disabled={ajaxSaveLoading}>
        { ajaxSaveLoading ? <i className="fa fa-spinner fa-spin loader" /> : 'SAVE' }
      </button>
    </div>
  </>
);

EditorArea.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  ajaxSaveLoading: PropTypes.bool.isRequired,
  editorError: PropTypes.bool.isRequired,
};

export default EditorArea;
