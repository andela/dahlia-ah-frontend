import { useContext } from 'react';
import axios from 'axios';
import appConfig from '../config/appConfig';
import { UserContext } from '../context/UserContext';

const { BASE_PATH } = appConfig;

export default (formData, history) => {
  const { setUser } = useContext(UserContext);
  let error = '';

  axios.post(`${BASE_PATH}/auth/login`, formData)
    .then(({ data }) => {
      const { user } = data;
      setUser(user);
      localStorage.setItem('AuthorsHavenToken', user.token);
      history.push('/homepage');
    })
    .catch(({ response: { data, status } }) => {
      if (status === 401) {
        error = data.errors;
        localStorage.setItem('AuthorsHavenToken', null);
      }
    });
  return { error };
};
