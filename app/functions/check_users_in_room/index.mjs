import { getRooms } from "../get_rooms/index.mjs";

export function checkUserInRoom(roomCode, userSocket) {
  let rooms = getRooms();
  let currentRoom = rooms.find((room) => room.code === roomCode);
  console.log(currentRoom.users.some((user) => user.socket == userSocket));
  return currentRoom.users.some((user) => user.socket == userSocket);
}
