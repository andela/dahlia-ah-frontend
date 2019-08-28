/* eslint-disable react/prop-types */
import React from 'react';
import Input from '../Input/Input';

const Form = ({ placeholders, buttonName }) => (
  <form>
    {placeholders.map((placeholder) => <Input placeholder={placeholder} />)}
    <button type="submit" className="btn">{buttonName}</button>
  </form>
);


export default Form;
