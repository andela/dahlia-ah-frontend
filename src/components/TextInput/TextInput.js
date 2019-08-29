import React from 'react';
import PropTypes from 'prop-types';
import './TextInput.scss';


const TextInput = (props) => {
  const {
    formField, onChange, index,
  } = props;
  return (
    <>
      <input className="text-input" type="text" placeholder={`${formField.name}`} onChange={(e) => onChange(e, index)} value={formField.value} />
      {formField.errorMessage ? <p className="validation-error">{formField.errorMessage}</p> : null }
      {/*  */}
    </>
  );
};

TextInput.propTypes = {
  formField: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    errorMessage: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default TextInput;
