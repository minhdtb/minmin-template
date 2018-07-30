import {WebServer} from "minmin";

import './controllers/HelloController'

const server = new WebServer(null, false);
server.setPort(3000);
server.start();