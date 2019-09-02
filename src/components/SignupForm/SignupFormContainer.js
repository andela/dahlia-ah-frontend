import React, { useState } from 'react';
import axios from 'axios';
import SignupForm from './SignupForm';
import './SignupForm.scss';
import validation from './validation';

const SignupFormContainer = () => {
  const [formdata, setFormData] = useState([
    {
      name: 'Firstname',
      value: '',
      id: '1',
      errorMessage: '',
    },
    {
      name: 'Lastname',
      value: '',
      id: '2',
      errorMessage: '',
    },
    {
      name: 'Email',
      value: '',
      id: '3',
      errorMessage: '',
    },
    {
      name: 'Password',
      value: '',
      id: '4',
      errorMessage: '',
    },
    {
      name: 'Confirm Password',
      value: '',
      id: '5',
      errorMessage: '',
    },
  ]);
  const [reqSuccess, setReqSuccess] = useState(false);
  const [resourceLoading, setResourceLoading] = useState(false);

  const onChange = (event, index) => {
    const inputValue = event.target.value;
    setFormData((prevFormdata) => {
      const tempFormData = [...prevFormdata];
      tempFormData[index].value = inputValue;
      return tempFormData;
    });
    const { name } = formdata[index];
    validation(name, inputValue, setFormData, formdata);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = formdata.find((field) => field.errorMessage);

    if (!errors) {
      setResourceLoading(true);
      axios.post('https://ah-dahlia.herokuapp.com/api/v1/auth/register', {
        firstName: formdata[0].value,
        lastName: formdata[1].value,
        email: formdata[2].value,
        password: formdata[3].value,
      })
        .then(() => {
          setReqSuccess(true);
          setResourceLoading(false);
        })
        .catch((err) => {
          const message = err.response.data.errors;
          if (err.response.status === 409) {
            setFormData((prevFormdata) => {
              const tempFormData = [...prevFormdata];
              tempFormData[2].errorMessage = message;
              return tempFormData;
            });
          }
          setResourceLoading(false);
        });
    }
  };
  return (
    <SignupForm
      handleSubmit={handleSubmit}
      onChange={onChange}
      reqSuccess={reqSuccess}
      resourceLoading={resourceLoading}
      formdata={formdata}
    />
  );
};
export default SignupFormContainer;
