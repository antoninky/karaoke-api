import { addRoom } from "../../../app/functions/add_room/index.mjs";
import { checkRooms } from "../../../app/functions/check_rooms/index.mjs";
import { getRooms } from "../../../app/functions/get_rooms/index.mjs";

export function joinRoomRequest(server) {
  server.get("/join-room", (req, res) => {
    let code = req.query.code;
    if (checkRooms(code)) {
      res.send({ success: true, data: { room_code: code } });
    } else {
      res.send({ success: false, data: {} });
    }
  });
}
