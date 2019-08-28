/* eslint-disable react/prop-types */
import React from 'react';
import './Input.scss';

const Input = (props) => {
  const {
    onChange, formField, index,
  } = props;
  const type = formField.name === 'Password' || formField.name === 'Confirm Password' ? 'password' : 'text';

  return (
    <div className="inputBox">
      <input
        type={type}
        name={formField.name}
        onChange={(e) => onChange(e, index)}
        required
      />
      <label htmlFor={formField.name}>{formField.name}</label>
      <span key={index}>{formField.errorMessage}</span>
    </div>
  );
};
export default Input;
