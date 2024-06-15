import { joinRoom } from "./functions/joinRoom/index.mjs";
import { getMessages } from "./functions/messages/index.mjs";

export function initIo(io) {
  io.on("connection", (socket) => {
    joinRoom(socket, io);
    getMessages(socket, io);
  });
}
