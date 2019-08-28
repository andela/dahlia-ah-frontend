import React from 'react';
import PropTypes from 'prop-types';
import AuthModal from '../AuthModal/AuthModal';
import SocialLogin from '../SocialLogin/SocialLogin';
import Separator from '../Separator/Separator';
import LoginForm from '../LoginForm/LoginForm';
import './Login.scss';

const Login = ({ isOpen, closeModal, openModal }) => (
  <AuthModal title="WELCOME BACK" desc="Sign in using your social account" isOpen={isOpen} componentName="login" closeModal={closeModal}>
    <SocialLogin />
    <Separator />
    <LoginForm />
    <p className="small-text">
    Dont’t have an account?
      {' '}
      <button type="submit" className="auth-btn btn-flat" onClick={() => openModal('signup')}>Sign Up</button>
    </p>
  </AuthModal>
);


Login.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default Login;
