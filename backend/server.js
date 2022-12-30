import http from "http";
import path from "path";
import express from "express";
import { Server } from "socket.io";

const app = express();
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/frontend/build/index.html"));
});
const httpServer = http.Server(app);
const io = new Server(httpServer, { cors: { origin: "*" } });


io.on('connection', (socket) => {
    socket.on('chatMessage', (msg) => {
      console.log(msg)
        io.emit('chatMessage', msg);
      });
  });




const PORT = process.env.PORT || 4000;
httpServer.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
