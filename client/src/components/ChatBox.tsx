import React, { FormEvent, useEffect, useState } from 'react';
import { useRealtime } from '../contexts/Realtime';

const ChatBox = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const socket = useRealtime();

  useEffect(() => {
    socket.on('message', (msg: string) => {
      setMessages(prev => [...prev, msg]);
    });
  }, [socket]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    socket.emit('message/new', newMessage);
    setNewMessage('');
  };

  return (
    <>
      <div>
        {messages.map((msg, i) => (
          <div key={i}>{msg}</div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={e => setNewMessage(e.target.value)} value={newMessage} />
        <button type="submit" disabled={!newMessage}>Send</button>
      </form>
    </>
  );
};

export default ChatBox;
