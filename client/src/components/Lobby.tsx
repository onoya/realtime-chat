import qs from 'query-string';
import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

const Lobby = () => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    history.push({
      pathname: `/room/${room}`,
      search: qs.stringify({ username }),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" onChange={e => setUsername(e.target.value)} value={username} />

      <label htmlFor="username">Room</label>
      <input type="text" id="room" onChange={e => setRoom(e.target.value)} value={room} />

      <button type="submit">Join</button>
    </form>
  );
};

export default Lobby;
