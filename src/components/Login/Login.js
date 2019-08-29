import React from 'react';
import PropTypes from 'prop-types';
import AuthModal from '../AuthModal/AuthModal';
import SocialLogin from '../SocialLogin/SocialLogin';
import Separator from '../Separator/Separator';
import LoginForm from '../LoginForm/LoginForm';
import './Login.scss';

const Login = ({ isOpen, closeModal }) => (
  <AuthModal title="WELCOME BACK" desc="Sign in using your social account" isOpen={isOpen} closeModal={closeModal}>
    <SocialLogin />
    <Separator />
    <LoginForm />
    <p className="small-text">
    Dont’t have an account?
      {' '}
      <a href="abc">Sign Up</a>
    </p>
  </AuthModal>
);


Login.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Login;
