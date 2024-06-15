import data from "../../assets/rooms.json" assert { type: "json" };

export function addRoom(roomCode) {
  data.rooms.push({ code: roomCode });
}
