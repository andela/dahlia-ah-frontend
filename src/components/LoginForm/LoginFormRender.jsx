import React from 'react';
import PropType from 'prop-types';
import './LoginForm.scss';

const LoginFormRender = ({
  handleSubmit, setEmail, email, setPassword, password, error, isLoading,
}) => (
  <form className="login-form" onSubmit={handleSubmit}>
    <input className="login-input" type="email" autoComplete="email" name="email" placeholder="Email" onChange={(event) => setEmail(event.target.value)} value={email} required />
    <input className="login-input" type="password" autoComplete="current-password" name="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} value={password} required />
    <div className="align-right"><a href="/forgot-password">Forgot password?</a></div>
    <span className="form-error">{error}</span>
    <button type="submit" className="btn">
      { !isLoading ? 'Sign In' : <i className="fa fa-spinner fa-spin loader" />}
    </button>
  </form>
);

LoginFormRender.propTypes = {
  handleSubmit: PropType.func.isRequired,
  setEmail: PropType.func.isRequired,
  email: PropType.string.isRequired,
  setPassword: PropType.func.isRequired,
  password: PropType.string.isRequired,
  error: PropType.string.isRequired,
  isLoading: PropType.bool.isRequired,
};

export default LoginFormRender;