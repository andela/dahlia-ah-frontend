import axios from 'axios';
import appConfig from '../config/appConfig';

const { BASE_PATH } = appConfig;
const { token } = JSON.parse(window.localStorage.getItem('AuthorsHavenUser'));

axios.defaults.baseURL = BASE_PATH;
axios.defaults.headers.common.Authorization = token;

export default axios;
