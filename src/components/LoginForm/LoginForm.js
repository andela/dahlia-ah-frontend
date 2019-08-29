import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import validator from 'validator';
import ReactRouterPropTypes from 'react-router-prop-types';
import axios from 'axios';
import { UserContext } from '../../context/UserContext';
import appConfig from '../../config/appConfig';
import LoginFormRender from './LoginFormRender';
import {
  emailState, passwordState, errorState, isLoadingState,
} from '../../hooks/Login';

const { BASE_PATH } = appConfig;

const LoginForm = ({ history }) => {
  const { setUser } = useContext(UserContext);
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
      axios.post(`${BASE_PATH}/auth/login`, formData)
        .then(({ data }) => {
          const { user } = data;
          setUser(user);
          localStorage.setItem('AuthorsHavenToken', user.token);
          history.push('/homepage');
        })
        .catch(({ response: { data, status } }) => {
          if (status === 401) {
            setError(data.errors);
            localStorage.setItem('AuthorsHavenToken', null);
          }
          setLoader(false);
        });
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
