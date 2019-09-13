import React, {
  createContext, useState, useEffect, useContext,
} from 'react';
import PropTypes from 'prop-types';
import validator from 'validator';
import { AuthModalContext } from '../context/AuthModalContext';
import axios from '../api';
import appConfig from '../config/appConfig';

export const ProfilePageContext = createContext();

const user = JSON.parse(window.localStorage.getItem('AuthorsHavenUser'));

let id;
if (user) {
  id = user.id;
}

const ProfilePageContextProvider = ({ children }) => {
  const [userProfile, setProfileState] = useState({});
  const [authorNovels, setAuthorNovels] = useState([]);
  const [ajaxSuccess, setAjaxSuccess] = useState(false);
  const [ajaxLoading, setAjaxLoading] = useState(false);
  const [failureMessage, setFailureMessage] = useState('');
  const [ajaxError, setAjaxError] = useState(false);
  const [desc, setDesc] = useState('Please enter your email address to reset your password');
  const [formFields, setFormFields] = useState([
    {
      name: 'First name',
      id: 1,
      value: '',
      errorMessage: null,
    },
    {
      name: 'Last name',
      id: 2,
      value: '',
      errorMessage: null,
    },
    {
      name: 'Bio',
      id: 3,
      value: '',
      errorMessage: null,
    },
  ]);

  const { Provider } = ProfilePageContext;

  const { setModalComponent } = useContext(AuthModalContext);

  useEffect(() => {
    axios.get(`/profiles/${id}`).then((res) => {
      const {
        profile: {
          firstName, lastName, bio, image, followers, follows,
        },
      } = res.data;

      setProfileState({
        name: `${firstName} ${lastName}`,
        image:
          image
          || 'https://res.cloudinary.com/dsxwn7t6p/image/upload/v1567704320/icons8-user-100_1_jpisz3.png',
        bio,
        followers: followers.length,
        following: follows.length,
      });
    });
  }, []);

  useEffect(() => {
    axios.get(`/profiles/${id}/novels`).then((res) => {
      const { novels: novelData } = res.data;
      setAuthorNovels(novelData);
    });
  }, []);

  const handleOpenModal = (component) => {
    setModalComponent(component);
    document.body.style.height = '100vh';
    document.body.style.overflowY = 'hidden';
  };

  const handleCloseModal = () => {
    setModalComponent(null);
    document.body.style.height = '100vh';
    document.body.style.overflowY = 'auto';
  };

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
    const isRequired = !validator.isAlpha(formFields[0].value);

    const validations = [isRequired];

    const validationIndex = validations.findIndex((e) => e);

    let inputError;

    switch (validationIndex) {
      case 0:
        inputError = 'name field can only be alphabets';
        break;
      case 1:
        inputError = 'bio provide a valid email';
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
      axios
        .patch(`${appConfig.BACKEND_PATH}/profiles/`, {
          firstName: formFields[0].value,
          lastName: formFields[1].value,
          bio: formFields[2].value,
        })
        .then(() => {
          setDesc(
            'Kindly check your email for the next steps to reset your password',
          );
          setAjaxLoading(false);
          setAjaxSuccess(true);
          window.location.reload();
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
        return fields;
      });
    }
  };

  return (
    <Provider
      value={{
        userProfile,
        authorNovels,
        handleOpenModal,
        handleCloseModal,
        formFields,
        handleSubmit,
        handleValidations,
        handleInputChange,
        desc,
        ajaxSuccess,
        ajaxError,
        ajaxLoading,
        failureMessage,
      }}
    >
      {children}
    </Provider>
  );
};

ProfilePageContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProfilePageContextProvider;
