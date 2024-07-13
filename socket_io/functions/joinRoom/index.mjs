import { addUser } from "../../../app/functions/add_user/index.mjs";
import { checkRooms } from "../../../app/functions/check_rooms/index.mjs";
import { checkUserInRoom } from "../../../app/functions/check_users_in_room/index.mjs";

export function joinRoom(socket, io) {
  socket.on("join_room", (roomCode, username) => {
    const user = {
      username: username,
      point: 0,
      socket: socket.id,
    };
    if (checkRooms(roomCode)) {
      if (!checkUserInRoom(roomCode, user.socket)) {
        addUser(roomCode, { user });
        socket.join(roomCode);
        io.to(roomCode).emit("updateRoom", 1);
      }
    }
  });
}
