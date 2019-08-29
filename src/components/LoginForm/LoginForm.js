import React, { useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import validator from 'validator';
import ReactRouterPropTypes from 'react-router-prop-types';
import PropTypes from 'prop-types';
import axios from 'axios';
import './LoginForm.scss';
import { UserContext } from '../../context/UserContext';
import appConfig from '../../config/appConfig';

const { BASE_PATH } = appConfig;

const LoginForm = ({ history, openModal }) => {
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setLoader] = useState(false);
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
          history.push('/');
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
    <form className="login-form" onSubmit={handleSubmit}>
      <input className="login-input" type="email" autoComplete="email" name="email" placeholder="Email" onChange={(event) => setEmail(event.target.value)} value={email} required />
      <input className="login-input" type="password" autoComplete="current-password" name="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} value={password} required />
      <div className="align-right"><button type="submit" className="auth-btn btn-flat" onClick={() => openModal('resetPassword')}>Forgot password?</button></div>
      <span className="form-error">{error}</span>
      <button type="submit" className="btn">
        { !isLoading ? 'Sign In' : <i className="fa fa-spinner fa-spin loader" />}
      </button>
    </form>
  );
};

LoginForm.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default withRouter(LoginForm);
