import { getUsersByRoom } from "../../../app/functions/get_users_by_room/index.mjs";
import { checkRooms } from "../../../app/functions/check_rooms/index.mjs";

export function getUsersByRoomRequest(server) {
  server.get("/get-room-users", (req, res) => {
    let code = req.query.code;
    if (checkRooms(code)) {
      res.send({ success: true, data: { users: getUsersByRoom(code) } });
    } else {
      res.send({ success: false, data: {} });
    }
  });
}
