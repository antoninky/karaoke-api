import { removeUser } from "../../../app/functions/remove_user/index.mjs";

export function onDisconnect(socket, io) {
  socket.on("disconnecting", (reason) => {
    console.log(socket);
    removeUser(socket.room, socket.id);
    socket.to(room).emit("updateRoom");
  });
}
