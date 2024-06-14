import { getMessages } from "./functions/messages/index.mjs";

export function initIo(io) {
  io.on("connection", (socket) => {
    getMessages(socket, io);
  });
}
