/* eslint-disable react/prop-types */
import React from 'react';
import Input from '../../helpers/TextInput/TextInput';
import AuthModalContainer from '../../helpers/AuthModal/AuthModalContainer';
import '../../SignupForm/SignupForm.scss';

const EditProfile = ({
  formdata,
  onChange,
  handleSubmit,
  resourceLoading,
  closeModal,
}) => (
  <AuthModalContainer
    desc=""
    title="EDIT YOUR PROFILE"
    closeModal={() => {
      closeModal('edit-profile');
    }}
  >
    <form
      onSubmit={handleSubmit}
      className="signup-form"
    >
      {formdata.map((formField, index) => (
        <Input
          key={formField.id}
          onChange={onChange}
          formField={formField}
          index={index}
        />
      ))}
      <button type="submit" disabled={resourceLoading} className="btn">
        {resourceLoading ? (
          <i className="fa fa-spinner fa-spin loader" />
        ) : (
          'Submit'
        )}
      </button>
    </form>
  </AuthModalContainer>
);

export default EditProfile;
