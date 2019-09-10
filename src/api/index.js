import axios from 'axios';
import appConfig from '../config/appConfig';

const { BACKEND_PATH } = appConfig;
const { token } = JSON.parse(window.localStorage.getItem('AuthorsHavenUser')) || { token: null };
if (token) {
  axios.defaults.headers.common.Authorization = token;
}

axios.defaults.baseURL = BACKEND_PATH;

export default axios;
