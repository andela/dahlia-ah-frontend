import React from 'react';
import { withRouter } from 'react-router-dom';
import validator from 'validator';
import ReactRouterPropTypes from 'react-router-prop-types';
import LoginFormRender from './LoginFormRender';
import loginApiCall from '../../api/login';
import {
  emailState, passwordState, errorState, isLoadingState,
} from '../../hooks/Login';

const LoginForm = ({ history }) => {
  const { email, setEmail } = emailState();
  const { password, setPassword } = passwordState();
  const { error, setError } = errorState();
  const { isLoading, setLoader } = isLoadingState();
  const handleValidation = () => {
    const isValidEmail = validator.isEmail(email);
    if (!isValidEmail) {
      setError('The email you entered is invalid');
      setLoader(false);
    } else {
      setError('');
    }
    return isValidEmail;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoader(true);
    if (handleValidation()) {
      const formData = { email, password };
      loginApiCall(formData, history, setError, setLoader);
    }
  };
  return (
    <LoginFormRender
      handleSubmit={handleSubmit}
      setEmail={setEmail}
      email={email}
      setPassword={setPassword}
      password={password}
      error={error}
      isLoading={isLoading}
    />
  );
};

LoginForm.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};

export default withRouter(LoginForm);
