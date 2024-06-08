const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const socketIo = require("socket.io");

const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    console.log(msg);
    io.emit("messageSent", msg);
  });
});

server.listen(8000, () => {
  console.log("listening on *:8000");
});
