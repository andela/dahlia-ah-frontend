import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import PropType from 'prop-types';
import axios from 'axios';
import SignupForm from './SignupForm';
import './SignupForm.scss';
import validation from './validation';
import appConfig from '../../config/appConfig';

const { BACKEND_PATH } = appConfig;

const SignupFormContainer = ({
  openModal, closeModal, history,
}) => {
  const [formdata, setFormData] = useState([
    {
      name: 'Firstname',
      value: '',
      id: '1',
      errorMessage: '',
    },
    {
      name: 'Lastname',
      value: '',
      id: '2',
      errorMessage: '',
    },
    {
      name: 'Email',
      value: '',
      id: '3',
      errorMessage: '',
    },
    {
      name: 'Password',
      value: '',
      id: '4',
      errorMessage: '',
    },
    {
      name: 'Confirm Password',
      value: '',
      id: '5',
      errorMessage: '',
    },
  ]);

  const [resourceLoading, setResourceLoading] = useState(false);
  const onChange = (event, index) => {
    const inputValue = event.target.value;
    setFormData((prevFormdata) => {
      const tempFormData = [...prevFormdata];
      tempFormData[index].value = inputValue;
      return tempFormData;
    });
    const { name } = formdata[index];
    validation(name, inputValue, setFormData, formdata);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = formdata.find((field) => field.errorMessage);

    if (!errors) {
      setResourceLoading(true);
      axios.post(`${BACKEND_PATH}/auth/register`, {
        firstName: formdata[0].value,
        lastName: formdata[1].value,
        email: formdata[2].value,
        password: formdata[3].value,
      })
        .then((res) => {
          setResourceLoading(false);
          localStorage.setItem('AuthorsHavenUser', JSON.stringify(res.data.user));
          history.push('/confirmation-page');
        })
        .catch((err) => {
          const message = err.response.data.errors;
          if (err.response.status === 409) {
            setFormData((prevFormdata) => {
              const tempFormData = [...prevFormdata];
              tempFormData[2].errorMessage = message;
              return tempFormData;
            });
          }
          setResourceLoading(false);
        });
    }
  };
  return (
    <SignupForm
      handleSubmit={handleSubmit}
      onChange={onChange}
      resourceLoading={resourceLoading}
      formdata={formdata}
      openModal={openModal}
      closeModal={closeModal}
    />
  );
};

SignupFormContainer.propTypes = {
  openModal: PropType.func.isRequired,
  closeModal: PropType.func.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
};


export default withRouter(SignupFormContainer);
