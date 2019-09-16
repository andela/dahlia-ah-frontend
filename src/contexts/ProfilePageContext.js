import React, {
  createContext, useState, useEffect, useContext,
} from 'react';
import PropTypes from 'prop-types';
import validator from 'validator';
import { AuthModalContext } from '../context/AuthModalContext';
import axios from '../api';
import appConfig from '../config/appConfig';

export const ProfilePageContext = createContext();

const axiosInstance = axios.create();
delete axiosInstance.defaults.headers.common.Authorization;

const user = JSON.parse(window.localStorage.getItem('AuthorsHavenUser'));

let id;
if (user) {
  id = user.id;
}

const ProfilePageContextProvider = ({ children }) => {
  const [userProfile, setProfileState] = useState({
    firstName: 'Jon',
    lastName: 'Doe',
    bio: '',
    image: '',
    formErrors: {},
    followers: 0,
    following: 0,
  });
  const [authorNovels, setAuthorNovels] = useState([]);
  const [ajaxSuccess, setAjaxSuccess] = useState(false);
  const [ajaxLoading, setAjaxLoading] = useState(false);
  const [failureMessage, setFailureMessage] = useState('');
  const [ajaxError, setAjaxError] = useState(false);
  const [validationError, setValidationError] = useState(false);

  const { Provider } = ProfilePageContext;

  const { setModalComponent } = useContext(AuthModalContext);

  useEffect(() => {
    axios.get(`/profiles/${id}`).then((res) => {
      const {
        profile: {
          firstName, lastName, bio, image, followers, follows,
        },
      } = res.data;

      setProfileState((prevState) => ({
        ...prevState,
        firstName,
        lastName,
        image:
          image
          || 'https://res.cloudinary.com/dsxwn7t6p/image/upload/v1567704320/icons8-user-100_1_jpisz3.png',
        bio,
        followers: followers.length,
        following: follows.length,
      }));
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
    window.location.reload();
  };

  useEffect(() => {
    axios
      .get(`/profiles/${id}/novels`)
      .then((res) => {
        const { novels: novelData } = res.data;
        setAuthorNovels(novelData);
      })
      .catch((err) => {
        setAjaxError(err.message);
        handleOpenModal('page-load-error-modal');
      });
  }, []);

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const { formErrors } = userProfile;
    const validateName = (fieldName) => {
      if (value.length < 2) {
        formErrors[fieldName] = 'Field must be at least 2 characters in length';
      } else if (!validator.isAlpha(value)) {
        formErrors[fieldName] = 'Field must contain only alphabets';
      } else {
        formErrors[fieldName] = '';
      }
    };

    switch (name) {
      case 'firstName':
        validateName(name);
        break;
      case 'lastName':
        validateName(name);
        break;
      case 'bio':
        formErrors.bio = value.length < 8 ? 'Bio must be at least 8 characters long!' : null;
        break;
      default:
        break;
    }
    setProfileState((prevState) => ({
      ...prevState,
      [name]: value,
      formErrors,
    }));
    const isValidationError = Object.keys(formErrors).some(
      (field) => formErrors[field].length > 0,
    );
    setValidationError(isValidationError);
    setAjaxError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAjaxLoading(true);
    axios
      .patch(`${appConfig.BACKEND_PATH}/profiles/`, {
        firstName: userProfile.firstName,
        lastName: userProfile.lastName,
        bio: userProfile.bio,
      })
      .then(() => {
        setAjaxLoading(false);
        setAjaxSuccess(true);
        window.location.reload();
      })
      .catch((error) => {
        setFailureMessage(error.message);
        setAjaxLoading(false);
        setAjaxError(true);
      });
  };

  const handleAvatarUpload = (e) => {
    e.preventDefault();
    setAjaxLoading(true);
    const avatar = document.querySelector('#avatar_upload').files[0];
    const cloudName = 'dsxwn7t6p';
    const unsignedPreset = 'ah_preset';
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
    const formData = new FormData();
    formData.append('file', avatar);
    formData.append('upload_preset', unsignedPreset);
    formData.append('tags', 'ah_avatar');

    axiosInstance
      .post(url, formData)
      .then((res) => {
        const response = res.data;
        const avatarUrl = response.secure_url;
        return avatarUrl;
      })
      .then((avatarUrl) => {
        axios
          .patch(`${appConfig.BACKEND_PATH}/profiles/`, {
            avatarUrl,
          })
          .then(() => {
            setAjaxLoading(false);
            setAjaxSuccess(true);
            window.location.reload();
          });
      })
      .catch((error) => {
        setFailureMessage(error.message);
        setAjaxLoading(false);
        setAjaxError(true);
      });
  };

  return (
    <Provider
      value={{
        userProfile,
        authorNovels,
        handleOpenModal,
        handleCloseModal,
        handleSubmit,
        handleInputChange,
        handleAvatarUpload,
        ajaxSuccess,
        ajaxError,
        ajaxLoading,
        failureMessage,
        validationError,
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
