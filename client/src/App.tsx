import React, { useEffect, useState, FormEvent } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3030');

function App() {
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    socket.on('message', (msg: string) => {
      setMessages(prev => [...prev, msg]);
    });
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    socket.emit('newMessage', newMessage);
    setNewMessage('');
  };

  return (
    <div>
      <div>
        {messages.map((msg, i) => (
          <div key={i}>{msg}</div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={e => setNewMessage(e.target.value)} value={newMessage} />
        <button type="submit" disabled={!newMessage}>Send</button>
      </form>
    </div>
  );
}

export default App;
