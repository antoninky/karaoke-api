export function getRooms(roomCode) {
  let rooms = getRooms();
  return rooms.filter((room) => room.code == room.code).length > 0;
}
