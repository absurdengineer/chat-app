//? Importing Packages
const express = require("express");
const app = express();
const server = require("http").createServer(app);

//? Configuring Port for Application
const port = process.env.PORT || 8080;

//? Setup Socket
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

//? Socket Start up and Testing
io.on("connection", (socket) => {
  console.log("Web Socket Client Connected");
  socket.on("message", (msg) => {
    io.emit("message", msg);
  });
});

server.listen(port, () => {
  console.log(`Node Server is Up and Running on Port ${port}`);
  console.log(`Development Server Started at http://localhost:${port}`);
  console.log(`Requesting to Connect to Mongo Database...`);
});
