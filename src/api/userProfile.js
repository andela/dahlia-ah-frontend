import axios from '.';
import appConfig from '../config/appConfig';


const { BACKEND_PATH } = appConfig;

const userProfleApi = (userId, setProfileState) => {
  axios.get(`${BACKEND_PATH}/profiles/${userId}`)
    .then(({ data }) => {
      setProfileState(data.data);
    });
};

export default userProfleApi;
