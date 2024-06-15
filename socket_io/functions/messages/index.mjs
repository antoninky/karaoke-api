export function getMessages(socket, io) {
  socket.on("chat message", (msg, room) => {
    console.log({ message: msg, room: room });
    io.to(room).emit("messageSent", msg);
  });
}
