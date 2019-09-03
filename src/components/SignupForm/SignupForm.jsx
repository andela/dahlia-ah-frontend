/* eslint-disable react/prop-types */
import React from 'react';
import Input from '../helpers/TextInput/TextInput';
import AuthModalContainer from '../helpers/AuthModal/AuthModalContainer';
import SocialLogin from '../helpers/SocialLogin/SocialLogin';
import Separator from '../helpers/Separator/Separator';
import './SignupForm.scss';

const SignupForm = ({
  formdata, onChange, handleSubmit, resourceLoading, closeModal, isOpen,
}) => (
  <AuthModalContainer desc="Sign up to create an account" title="CREATE AN ACCOUNT" isOpen={isOpen} closeModal={closeModal}>
    <SocialLogin />
    <Separator />
    <form onSubmit={handleSubmit}>
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
        <a href="abc">Sign In</a>
      </p>
    </form>
  </AuthModalContainer>
);

export default SignupForm;