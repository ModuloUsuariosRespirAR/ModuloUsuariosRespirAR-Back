import Server from "./server/Server.js";
import dotenv from "dotenv";
import { Keyrock } from "./services/Keyrock.js";

dotenv.config();

const server = new Server(process.env.PORT, process.env.HOST);

server.serverConfig();
server.initServer();
await Keyrock.setupKeyrockRoles();