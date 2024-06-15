export function getMessages(socket, io) {
  socket.on("chat message", (username, msg, room) => {
    console.log({ username: username, message: msg, room: room });
    io.to(room).emit("messageSent", { username: username, message: msg });
  });
}
