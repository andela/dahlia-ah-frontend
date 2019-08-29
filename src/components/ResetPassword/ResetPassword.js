import React, { useState } from 'react';
import axios from 'axios';
import validator from 'validator';
import AuthModal from '../AuthModal/AuthModal';
import TextInput from '../TextInput/TextInput';
import SuccessIcon from '../Icons/SuccessIcon';
import appConfig from '../../config/appConfig';
import './ResetPassword.scss';

const ResetPassword = () => {
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
        .then((response) => {
          setDesc(response.data.message);
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
    <AuthModal title={title} desc={desc} isOpen>
      { !ajaxSuccess ? (
        <form className="reset-password-form" onSubmit={(e) => handleSubmit(e)}>
          <TextInput
            onChange={handleInputChange}
            key={formFields[0].id.toString()}
            index={0}
            formField={formFields[0]}
          />
          { ajaxError ? (
            <p className="validation-error">
              {failureMessage}
            </p>
          ) : null}
          <button type="submit" className="btn ajax-button">
            { ajaxLoading ? <i className="fa fa-spinner fa-spin loader" /> : 'SEND' }
          </button>
        </form>
      ) : <SuccessIcon />}
    </AuthModal>
  );
};

export default ResetPassword;
