import React from 'react';
import PropTypes from 'prop-types';
import MaroForm from '../MaroForm/MaroForm';
import AuthModal from '../AuthModal/AuthModal';
import SocialLogin from '../SocialLogin/SocialLogin';
import Separator from '../Separator/Separator';
import './Backdrop.scss';

const SignupForm = ({ isOpen, closeModal, openModal }) => (
  <AuthModal title="CREATE AN ACCOUNT" desc="Sign up to create an account" isOpen={isOpen} componentName="signup" closeModal={closeModal}>
    <SocialLogin />
    <Separator />
    <MaroForm />
    <p className="small-text">
      Already have an account?
      {' '}
      <button type="submit" className="auth-btn btn-flat" onClick={() => openModal('login')}>Sign In</button>
    </p>
  </AuthModal>
);

SignupForm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default SignupForm;
