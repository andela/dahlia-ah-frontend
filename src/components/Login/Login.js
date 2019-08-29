import React, { useState } from 'react';
import AuthModal from '../AuthModal/AuthModal';
import SocialLogin from '../SocialLogin/SocialLogin';
import Separator from '../Separator/Separator';
import LoginForm from '../LoginForm/LoginForm';
import './Login.scss';

const Login = () => {
  const [display, setDisplay] = useState(true);
  const closeModal = () => {
    setDisplay(false);
  };
  return (
    <AuthModal title="WELCOME BACK" desc="Sign in using your social account" isOpen={display} closeModal={closeModal}>
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
};

export default Login;
