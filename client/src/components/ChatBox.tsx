import React, { FormEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRealtime } from '../contexts/Realtime';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 100vh;
`;

const MessageBox = styled.div`
  flex-grow: 1;
  background-color: #f1f2f6;
  padding: 1rem;
`;

const MessageRow = styled.div`
  margin: 1rem 0;
  :first-child {
    margin-top: 0;
  }
`;

const ChatForm = styled.form`
  display: flex;
`;

const ChatInput = styled.input`
  flex-grow: 1;
  padding: .5rem 1rem;
  border: none;
  outline: none;
  font-size: 1rem;
`;

const SendButton = styled.button`
  padding: 1rem 1.5rem;
  background-color: #34495e;
  border: none;
  color: #fff;
  cursor: pointer;
  :disabled {
    cursor: not-allowed;
    background-color: #bdc3c7;
  }
`;

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
    <Container>
      <MessageBox>
        {messages.map((msg, i) => <MessageRow key={i}>{msg}</MessageRow>)}
      </MessageBox>

      <ChatForm onSubmit={handleSubmit}>
        <ChatInput type="text" onChange={e => setNewMessage(e.target.value)} value={newMessage} />
        <SendButton type="submit" disabled={!newMessage}>Send</SendButton>
      </ChatForm>
    </Container>
  );
};

export default ChatBox;
