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

const users: Array<{
  id: string;
  username: string;
  room: string;
}> = [];

io.on('connection', socket => {
  socket.on('message/new', msg => {
    io.emit('message', msg);
  });

  socket.on('room/join', ({ room, username }: { username: string; room: string; }) => {
    users.push({ id: socket.id, username, room });
    socket.join(room);
    socket.to(room).broadcast.emit('message', `${username} has joined the room`);
  });

  socket.on('disconnect', () => {
    const user = users.find(user => user.id === socket.id);
    if (user) {
      socket.to(user.room).broadcast.emit('message', `${user.username} has left the room`);
    }
  });
});
