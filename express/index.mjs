export function initExpress(server) {
  server.get("/create-room", (req, res) => {
    let code = "";
    for (let i = 0; i < 5; i++) {
      let rand = Math.floor(Math.random() * 10);
      code += rand;
    }
    res.send({ succes: true, data: { room_code: code } });
  });
}
