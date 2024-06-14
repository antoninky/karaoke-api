import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";

import { initIo } from "./socket_io/index.mjs";
import { initExpress } from "./express/index.mjs";

const app = express();
const server = createServer(app);
const socketIo = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});
// Apply CORS middleware
app.use(express.json());
// Middleware to parse URL-encoded bodies
app.use(cors());
initIo(socketIo);

initExpress(app);

server.listen(8000, () => {
  console.log("listening on *:8000");
});
