import React, { useState } from 'react';
import axios from 'axios';
import validator from 'validator';
import PropTypes from 'prop-types';
import ResetPasswordModal from './ResetPassword';
import appConfig from '../../config/appConfig';

const ResetPasswordContianer = ({ closeModal }) => {
  const title = 'FORGOT PASSWORD';

  const [formFields, setFormFields] = useState([
    {
      name: 'Email',
      id: 1,
      value: '',
      errorMessage: null,
    },
  ]);

  const [desc, setDesc] = useState('Please enter your email address to reset your password');
  const [failureMessage, setFailureMessage] = useState('');
  const [ajaxSuccess, setAjaxSuccess] = useState(false);
  const [ajaxError, setAjaxError] = useState(false);
  const [ajaxLoading, setAjaxLoading] = useState(false);

  const handleInputChange = (e, index) => {
    const { value } = e.target;
    setFormFields((prevFormFields) => {
      const fields = [...prevFormFields];
      fields[index] = {
        ...fields[index],
        value,
        errorMessage: null,
      };
      return fields;
    });
    setAjaxError(false);
  };

  const handleValidations = () => {
    const isRequired = validator.isEmpty(formFields[0].value);
    const isEmail = !validator.isEmail(formFields[0].value);

    const validations = [isRequired, isEmail];

    const validationIndex = validations.findIndex((e) => e);

    let inputError;

    switch (validationIndex) {
      case 0:
        inputError = 'email field cannot be empty';
        break;
      case 1:
        inputError = 'please provide a valid email';
        break;
      default:
        inputError = null;
    }

    return inputError;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputError = handleValidations();

    if (!inputError) {
      setAjaxLoading(true);
      axios.post(`${appConfig.BASE_PATH}/auth/forgotpassword`, {
        email: formFields[0].value,
      })
        .then(() => {
          setDesc('Kindly check your email for the next steps to reset your password');
          setAjaxLoading(false);
          setAjaxSuccess(true);
        })
        .catch((error) => {
          setFailureMessage(error.response.data.error);
          setAjaxLoading(false);
          setAjaxError(true);
        });
    } else {
      setFormFields((prevFormFields) => {
        const fields = [...prevFormFields];
        fields[0] = {
          ...fields[0],
          errorMessage: inputError,
        };
        return (
          fields
        );
      });
    }
  };

  return (
    <ResetPasswordModal
      title={title}
      desc={desc}
      ajaxSuccess={ajaxSuccess}
      onSubmit={handleSubmit}
      onChange={handleInputChange}
      closeModal={closeModal}
      formFields={formFields}
      ajaxError={ajaxError}
      failureMessage={failureMessage}
      ajaxLoading={ajaxLoading}
    />
  );
};

ResetPasswordContianer.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default ResetPasswordContianer;
