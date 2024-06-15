import path from "node:path";
import data from "../../../../assets/rooms.json" assert { type: "json" };
import fs from "node:fs";

export function addRoom(roomCode) {
  data.rooms.push({ code: roomCode });
  fs.writeFile(
    path.join("/home/demo/dev/karaoke/assets", "/rooms.json"),
    JSON.stringify(data),
    (data) => console.log(data)
  );
}
