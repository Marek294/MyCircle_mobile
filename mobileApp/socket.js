import io from "socket.io-client/dist/socket.io";

import config from './config';

var socket = io(config.baseUrl, { jsonp: false, transports: ['websocket'] });

export default socket;
