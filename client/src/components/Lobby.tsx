import qs from 'query-string';
import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const LobbyForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #ecf0f1;
  margin: 2rem auto 0;
  max-width: 400px;
  padding: 2rem;
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  margin-bottom: .5rem;
  font-size: .85rem;
`;

const Input = styled.input`
  border: none;
  padding: .5rem;
  width: 100%;
`;

const JoinButton = styled.button`
  border: none;
  padding: .5rem 1rem;
  background-color: #2C3A47;
  color: #fff;
`;

const Lobby = () => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!!username && !!room) {
      history.push({
        pathname: `/room/${room}`,
        search: qs.stringify({ username }),
      });
    }
  };

  return (
    <LobbyForm onSubmit={handleSubmit}>
      <FieldGroup>
        <Label htmlFor="username">Username</Label>
        <Input type="text" id="username" onChange={e => setUsername(e.target.value)} value={username} />
      </FieldGroup>

      <FieldGroup>
        <Label htmlFor="username">Room</Label>
        <Input type="text" id="room" onChange={e => setRoom(e.target.value)} value={room} />
      </FieldGroup>

      <JoinButton type="submit">Join</JoinButton>
    </LobbyForm>
  );
};

export default Lobby;
