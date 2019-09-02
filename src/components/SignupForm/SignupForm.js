/* eslint-disable react/prop-types */
import React from 'react';
import Input from '../Input/Input';
import AuthModalContainer from '../AuthModal/AuthModalContainer';
import SocialLogin from '../SocialLogin/SocialLogin';
import Separator from '../Separator/Separator';
import Aux from '../Aux/Aux';
import './SignupForm.scss';

const SignupForm = ({
  reqSuccess, formdata, onChange, handleSubmit, resourceLoading,
}) => (
  <Aux>
    {!reqSuccess ? (
      <AuthModalContainer desc="Sign up to create an account" title="CREATE AN ACCOUNT" isOpen>
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
    ) : (
      <AuthModalContainer desc="We have sent link to your email to verify your account, please click the link to verify your account " title="Account Created" isOpen>
        <i className="far fa-envelope signup-success-icon" />
      </AuthModalContainer>
    ) }
  </Aux>

);

export default SignupForm;
