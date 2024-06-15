import { createRoom } from "./functions/create_room/index.mjs";
import { joinRoomRequest } from "./functions/join_room/index.mjs";

export function initExpress(server) {
  createRoom(server);
  joinRoomRequest(server);
}
