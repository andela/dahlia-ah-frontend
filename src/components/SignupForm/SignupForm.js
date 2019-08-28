import React, { useState } from 'react';
import axios from 'axios';
import Input from '../Input/Input';
import validation from './validation';
import AuthModal from '../AuthModal/AuthModal';
import SocialLogin from '../SocialLogin/SocialLogin';
import Separator from '../Separator/Separator';
import Aux from '../Aux/Aux';
import './SignupForm.scss';

const SignupForm = () => {
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
  };

  const handleSubmit = (event) => {
    for (let i = 0; i < formdata.length; i += 1) {
      const { name, value } = formdata[i];
      validation(name, value, setFormData, formdata);
    }

    const errors = formdata.filter((field) => field.errorMessage !== '');
    if (!errors.length > 0) {
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
    event.preventDefault();
  };

  return (
    <Aux>
      {!reqSuccess ? (
        <AuthModal desc="Sign up to create an account" title="CRAETE AN ACCOUNT" isOpen>
          <SocialLogin />
          <Separator />
          <form onSubmit={handleSubmit}>
            {formdata.map((formField, index) => (
              <Input
                key={formField.id}
                onChange={onChange}
                formField={formField}
                index={index}
              />
            ))}
            <button type="submit" className="btn">{resourceLoading ? <i className="fa fa-spinner fa-spin loader" /> : 'signup'}</button>
            <p className="small-text">
          Already have an account?
              {' '}
              <a href="abc">Sign In</a>
            </p>
          </form>
        </AuthModal>
      ) : (
        <AuthModal desc="we have sent link to your email to verify your account, please click the link to verify your account " title="Account created" isOpen>
          <i className="far fa-envelope signup-success-icon" />
        </AuthModal>
      ) }
    </Aux>

  );
};

export default SignupForm;
