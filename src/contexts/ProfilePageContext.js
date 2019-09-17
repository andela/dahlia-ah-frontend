/* eslint-disable no-restricted-syntax */
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

const user = JSON.parse(localStorage.getItem('AuthorsHavenUser'));

let id;
if (user) {
  id = user.id;
}

const ProfilePageContextProvider = ({ children }) => {
  const [userProfile, setProfileState] = useState({
    firstName: '',
    lastName: '',
    bio: '',
    image: '',
    followers: 0,
    following: 0,
  });
  const [authorNovels, setAuthorNovels] = useState([]);
  const [ajaxSuccess, setAjaxSuccess] = useState(false);
  const [ajaxLoading, setAjaxLoading] = useState(false);
  const [failureMessage, setFailureMessage] = useState('');
  const [ajaxError, setAjaxError] = useState(false);
  const [validationError, setValidationError] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const { Provider } = ProfilePageContext;

  const { setModalComponent } = useContext(AuthModalContext);

  // fetch user profile on load
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
  };

  // fetch novels of an author
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
    const inputErrors = {};
    const validateName = (fieldName) => {
      if (value && value.length < 2) {
        inputErrors[fieldName] = 'Field must be at least 2 characters in length';
      } else if (!validator.isAlpha(value)) {
        inputErrors[fieldName] = 'Field must contain only alphabets';
      } else {
        inputErrors[fieldName] = '';
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
        inputErrors.bio = value && value.length < 8 ? 'Bio must be at least 8 characters long!' : '';
        break;
      default:
        break;
    }
    setFormErrors((prevState) => ({
      ...prevState,
      ...inputErrors,
    }));
    const isValidationError = Object.keys(inputErrors).some(
      (field) => inputErrors[field].length > 0,
    );
    setValidationError(isValidationError);
    setAjaxError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const profileForm = new FormData(e.target);
    const updatedProfile = {};
    for (const [key, value] of profileForm) {
      updatedProfile[key] = value;
    }

    setAjaxLoading(true);
    axios
      .patch(`${appConfig.BACKEND_PATH}/profiles/`, updatedProfile)
      .then((res) => {
        setAjaxLoading(false);
        setAjaxSuccess(true);
        const { profile: { firstName, lastName, bio } } = res.data.data;

        setProfileState((prevState) => ({
          ...prevState,
          firstName,
          lastName,
          bio,
        }));

        localStorage.setItem('AuthorsHavenUser', JSON.stringify({
          ...user, firstName, lastName, bio,
        }));

        handleCloseModal('edit-modal-profile');
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
          .then((res) => {
            const { profile } = res.data.data;
            setProfileState((prevState) => ({
              ...prevState,
              image: profile.avatarUrl,
            }));
            setAjaxLoading(false);
            setAjaxSuccess(true);
            handleCloseModal('avatar-modal');
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
        formErrors,
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
