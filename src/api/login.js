import axios from 'axios';
import appConfig from '../config/appConfig';

const { BASE_PATH } = appConfig;

export default (formData, history, setError, setUser, setLoader) => {
  axios.post(`${BASE_PATH}/auth/login`, formData)
    .then(({ data }) => {
      const { user } = data;
      setUser(user);
      localStorage.setItem('AuthorsHavenToken', user.token);
      history.push('/homepage');
    })
    .catch(({ response: { data, status } }) => {
      if (status === 401) {
        setError(data.errors);
        localStorage.removeItem('AuthorsHavenToken');
        setLoader(false);
      }
    });
};
