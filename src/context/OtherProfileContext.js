import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from '../api';

export const OtherProfileContext = createContext();

const OtherProfileContextProvider = ({ children, userId }) => {
  const [userProfile, setProfileState] = useState({});
  const [authorNovels, setAuthorNovels] = useState([]);

  const { Provider } = OtherProfileContext;

  useEffect(() => {
    axios.get(`/profiles/${userId}`).then((res) => {
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
    axios.get(`/profiles/${userId}/novels`).then((res) => {
      const { novels: novelData } = res.data;
      setAuthorNovels(novelData);
    });
  }, []);

  return <Provider value={{ userProfile, authorNovels }}>{children}</Provider>;
};

OtherProfileContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  userId: PropTypes.string.isRequired,
};

export default OtherProfileContextProvider;
