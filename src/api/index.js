import axios from 'axios';
import appConfig from '../config/appConfig';

const { BACKEND_PATH } = appConfig;

const user = JSON.parse(window.localStorage.getItem('AuthorsHavenUser'));

if (user) {
  const { token } = user;
  axios.defaults.headers.common.Authorization = token;
}

axios.defaults.baseURL = BACKEND_PATH;

export default axios;
