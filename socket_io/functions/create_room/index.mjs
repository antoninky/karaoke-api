export function createRoom() {
  socket.on("create_room", (msg) => {
    
    io.emit("roomCode", code);
  });
}
