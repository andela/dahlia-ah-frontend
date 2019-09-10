import io from 'socket.io-client';
import appConfig from '../config/appConfig';

const { BACKEND_PATH } = appConfig;

const socketPath = BACKEND_PATH.replace('api/v1', '');

const socket = io(socketPath);


export default socket;
