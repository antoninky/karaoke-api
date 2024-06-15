import { getRooms } from "../get_rooms/index.mjs";

export function checkRooms(roomCode) {
  let rooms = getRooms();
  return rooms.filter((room) => room.code == room.code).length > 0;
}
