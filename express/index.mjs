import { createRoom } from "./functions/create_room/index.mjs";

export function initExpress(server) {
  createRoom(server);
}
