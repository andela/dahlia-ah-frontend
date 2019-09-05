import React, { useState, useEffect } from 'react';
import axios from 'axios';
import validator from 'validator';
import ReactRouterPropTypes from 'react-router-prop-types';
import ResetPassword from './ResetPassword';
import appConfig from '../../config/appConfig';
import './ResetPassword.scss';

const ResetPasswordContainer = ({ location, history }) => {
  const title = 'RESET PASSWORD';

  const [formFields, setFormFields] = useState([
    {
      name: 'Password',
      id: 1,
      value: '',
      errorMessage: null,
    },
    {
      name: 'Confirm Password',
      id: 2,
      value: '',
      errorMessage: null,
    },
  ]);

  useEffect(() => {
    document.querySelector('.nav-btn').style.display = 'none';
    document.querySelector('.nav-link').style.display = 'none';
    document.querySelector('.nav-wrapper').style.boxShadow = '0px 2px 4px rgba(0, 0, 0, 0.25)';
    document.querySelector('img').setAttribute('src', 'https://res.cloudinary.com/drlcfqzym/image/upload/v1567007007/ah-logo-black.png');

    return () => {
      document.querySelector('.nav-btn').style.display = 'inline-block';
      document.querySelector('.nav-link').style.display = 'inline-block';
      document.querySelector('.nav-wrapper').style.boxShadow = 'none';
      document.querySelector('img').setAttribute('src', 'https://res.cloudinary.com/drlcfqzym/image/upload/v1567007007/ah-logo-white.png');
    };
  }, []);

  const { search } = location;
  const token = search.slice(7);

  const [failureMessage, setFailureMessage] = useState('none');
  const [ajaxError, setAjaxError] = useState(false);
  const [ajaxSuccess, setAjaxSuccess] = useState(false);
  const [ajaxLoading, setAjaxLoading] = useState(false);

  const handleInputChange = (e, index) => {
    const { value } = e.target;
    setFormFields((prevFormFields) => {
      const fields = [...prevFormFields];
      let error = null;
      const isConfirmed = fields[0].value === value;

      if (index === 1 && !isConfirmed) {
        error = 'Confirmation password has to match new password';
      }

      fields[index] = {
        ...fields[index],
        value,
        errorMessage: error,
      };
      return fields;
    });
    setAjaxError(false);
  };

  const handleValidations = () => {
    const isRequired = validator.isEmpty(formFields[0].value);
    const isAlphanumeric = !validator.isAlphanumeric(formFields[0].value);
    const isMinLength = !validator.isLength(formFields[0].value, { min: 8 });

    const validations = [isRequired, isAlphanumeric, isMinLength];

    const validationIndex = validations.findIndex((e) => e);

    let inputError;

    switch (validationIndex) {
      case 0:
        inputError = 'password field cannot be empty';
        break;
      case 1:
        inputError = 'password must be alphanumeric';
        break;
      case 2:
        inputError = 'password must be at least 8 characters long';
        break;
      default:
        inputError = null;
    }

    return inputError;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputError = handleValidations();
    const isConfirmed = formFields[0].value === formFields[1].value;

    if (!inputError && isConfirmed) {
      setAjaxLoading(true);
      axios.patch(`${appConfig.BASE_PATH}/api/v1/auth/passwordreset?token=${token}`, {
        newPassword: formFields[0].value,
      })
        .then(() => {
          setAjaxLoading(false);
          setAjaxSuccess(true);
          setTimeout(() => {
            history.push('/');
          }, 5000);
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
    <ResetPassword
      title={title}
      ajaxSuccess={ajaxSuccess}
      onSubmit={handleSubmit}
      onChange={handleInputChange}
      formFields={formFields}
      ajaxError={ajaxError}
      failureMessage={failureMessage}
      ajaxLoading={ajaxLoading}
    />
  );
};

ResetPasswordContainer.propTypes = {
  location: ReactRouterPropTypes.location.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
};

export default ResetPasswordContainer;
