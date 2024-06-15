import data from "../../assets/rooms.json" assert { type: "json" };

export function getRooms() {
  return data.rooms;
}
