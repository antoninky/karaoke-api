import path from "node:path";
import data from "../../../../assets/rooms.json" assert { type: "json" };
import fs from "node:fs";

export function addUser(roomCode, user) {
  let currentRoom = data.rooms.filter((room) => room.code == roomCode)[0];
  currentRoom.users.push(user);
  data.rooms.filter((room) => room.code == roomCode) == currentRoom;
  fs.writeFile(
    path.join("/home/demo/dev/karaoke/assets", "/rooms.json"),
    JSON.stringify(data),
    (data) => console.log(data)
  );
}
