import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from '../api';

export const ProfilePageContext = createContext();

const user = JSON.parse(window.localStorage.getItem('AuthorsHavenUser'));

let id;
if (user) {
  id = user.id;
}

const ProfilePageContextProvider = ({ children }) => {
  const [userProfile, setProfileState] = useState({});
  const [authorNovels, setAuthorNovels] = useState([]);

  const { Provider } = ProfilePageContext;

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

  return <Provider value={{ userProfile, authorNovels }}>{children}</Provider>;
};

ProfilePageContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProfilePageContextProvider;
