import { checkRooms } from "../../../app/functions/check_rooms/index.mjs";

export function joinRoom(socket, io) {
  socket.on("join_room", (roomCode) => {
    if (checkRooms(roomCode)) {
      socket.join(roomCode);
    }
  });
}
