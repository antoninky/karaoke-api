export function joinRoom(socket, io) {
  socket.on("join_room", (roomCode) => {
    socket.join(roomCode);
  });
}
