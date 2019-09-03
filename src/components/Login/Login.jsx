import React from 'react';
import PropType from 'prop-types';
import AuthModal from '../AuthModal/AuthModal';
import SocialLogin from '../SocialLogin/SocialLogin';
import Separator from '../Separator/Separator';
import LoginForm from '../LoginForm/LoginForm';
import './Login.scss';

const Login = ({ isOpen, closeModal }) => (
  <AuthModal title="WELCOME BACK" desc="Sign in using your social account" isOpen={isOpen} closeModal={() => closeModal}>
    <SocialLogin />
    <Separator />
    <LoginForm />
    <div className="login">
      <p className="small-text">
          Don’t have an account?
        <button className="auth-btn btn-flat" onClick={() => {}} type="button">Sign Up</button>
      </p>
    </div>
  </AuthModal>
);

Login.propTypes = {
  isOpen: PropType.bool.isRequired,
  closeModal: PropType.func.isRequired,
};


export default Login;
