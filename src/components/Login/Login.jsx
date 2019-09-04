import React from 'react';
import PropType from 'prop-types';
import AuthModal from '../helpers/AuthModal/AuthModal';
import SocialLogin from '../helpers/SocialLogin/SocialLogin';
import Separator from '../helpers/Separator/Separator';
import LoginForm from '../LoginForm/LoginForm';
import './Login.scss';

const Login = ({ closeModal, openModal }) => (
  <AuthModal title="WELCOME BACK" desc="Sign in using your social account" closeModal={() => closeModal('signin')}>
    <SocialLogin />
    <Separator />
    <LoginForm />
    <div className="login">
      <p className="small-text">
          Don’t have an account?
        <button className="auth-btn btn-flat" onClick={() => openModal('signup')} type="button">Sign Up</button>
      </p>
    </div>
  </AuthModal>
);

Login.propTypes = {
  closeModal: PropType.func.isRequired,
  openModal: PropType.func.isRequired,
};


export default Login;
