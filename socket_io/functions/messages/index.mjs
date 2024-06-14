export function getMessages(socket, io) {
  socket.on("chat message", (msg) => {
    console.log(msg);
    io.emit("messageSent", msg);
  });
}
