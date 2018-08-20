import {WebServer} from "minmin";

import './controllers/HelloController'

const server = new WebServer();
server.setPort(3000);
server.start();