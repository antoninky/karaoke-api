import { getRooms } from "../../../app/functions/get_rooms/index.mjs";

export function createRoom(server) {
  server.get("/create-room", (req, res) => {
    let roomExist = true;
    let code;

    do {
      code = getRandomRoomCode();
      let rooms = getRooms();
      roomExist = rooms.filter((room) => room.code == code);
      console.log(roomExist);
    } while (roomExist.length > 0);
    res.send({ succes: true, data: { room_code: code } });
  });
}

function getRandomRoomCode() {
  let code = "";
  for (let i = 0; i < 5; i++) {
    let rand = Math.floor(Math.random() * 10);
    code += rand;
  }
  return code;
}
