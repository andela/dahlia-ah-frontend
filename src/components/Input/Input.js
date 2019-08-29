/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import SignupContext from '../MaroForm/signupContext';
import Aux from '../Aux/Aux';


const Input = (props) => {
  const { formdata, onChange } = useContext(SignupContext);
  const { placeholder, className } = props;
  return (
    <Aux>
      <input type="text" placeholder={placeholder} onChange={(e) => onChange(e, placeholder)} className={className} value={formdata[placeholder].value} />
      <span>{formdata.errorMessage}</span>
    </Aux>
  );
};
export default Input;
