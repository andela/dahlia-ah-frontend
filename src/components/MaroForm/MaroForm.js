import React, { useState } from 'react';
import Form from '../Form/Form';
import SignupContext from './signupContext';

const LoginForm = () => {
  const [formdata, setFormData] = useState({
    Email: {
      value: '',
      errorMessage: '',
    },
    Password: {
      value: '',
      errorMessage: '',
    },
  });

  const onChange = (event, field) => {
    const inputValue = event.target.value;
    setFormData((prevFormdata) => ({
      ...prevFormdata,
      [field]: {
        value: inputValue,
        errorMessage: '',
      },
    }));
  };


  const [placeholders] = useState(Object.keys(formdata));
  const buttonName = 'signup';
  return (
    <SignupContext.Provider value={{ onChange, formdata }}>
      <Form placeholders={placeholders} buttonName={buttonName} />
    </SignupContext.Provider>
  );
};

export default LoginForm;
