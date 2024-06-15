import path from "node:path";
import data from "../../assets/rooms.json" assert { type: "json" };
import fs from "node:fs";

export function addRoom(roomCode) {
  data.rooms.push({ code: roomCode });
  console.log(process.cwd());
  fs.writeFile(
    path.join("/home/demo/dev/karaoke/karaoke-api/app/assets", "/rooms.json"),
    JSON.stringify(data),
    (data) => console.log(data)
  );
}
