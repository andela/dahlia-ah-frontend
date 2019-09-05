import axios from 'axios';
import appConfig from '../config/appConfig';

const { BACKEND_PATH } = appConfig;

export default (formData, history, setError, setLoader) => {
  axios.post(`${BACKEND_PATH}/auth/login`, formData)
    .then(({ data }) => {
      const { user } = data;
      localStorage.setItem('AuthorsHavenUser', JSON.stringify(user));
      if (user.isVerified) {
        window.location.assign('/homepage');
      } else {
        history.push('/confirmation-page');
      }
    })
    .catch(({ response: { data, status } }) => {
      if (status === 401) {
        setError(data.errors);
        localStorage.removeItem('AuthorsHavenUser');
        setLoader(false);
      }
    });
};
