import data from "../../../../assets/rooms.json" assert { type: "json" };

export function getUsersByRoom(roomCode) {
  let currentRoom = data.rooms.filter((room) => room.code == roomCode)[0];
  return currentRoom.users;
}
