import express from 'express';
import { Server } from 'http';
import sockerIo from 'socket.io';

const app = express();
const server = new Server(app);
const io = sockerIo(server);

const PORT = process.env.PORT || 3030;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

io.on('connection', socket => {
  socket.emit('message', 'Hello!');
});
