/* eslint-disable react/prop-types */
import React from 'react';
import Input from '../helpers/TextInput/TextInput';
import AuthModalContainer from '../helpers/AuthModal/AuthModalContainer';
import SocialLogin from '../helpers/SocialLogin/SocialLogin';
import Separator from '../helpers/Separator/Separator';
import './SignupForm.scss';

const SignupForm = ({
  formdata, onChange, handleSubmit, resourceLoading, closeModal, openModal,
}) => (
  <AuthModalContainer desc="Sign up to create an account" title="CREATE AN ACCOUNT" closeModal={() => { closeModal('signup'); }}>
    <SocialLogin />
    <Separator />
    <form onSubmit={handleSubmit} className="signup-form">
      {formdata.map((formField, index) => (
        <Input
          key={formField.id}
          onChange={onChange}
          formField={formField}
          index={index}
        />
      ))}
      <button type="submit" disabled={resourceLoading} className="btn">{resourceLoading ? <i className="fa fa-spinner fa-spin loader" /> : 'signup'}</button>
      <p className="small-text">
          Already have an account?
        {' '}
        <button className="auth-btn btn-flat" onClick={() => openModal('signin')} type="button">Sign In</button>
      </p>
    </form>
  </AuthModalContainer>
);

export default SignupForm;
