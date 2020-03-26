import qs from 'query-string';
import React, { useEffect, useMemo } from 'react';
import { Redirect, useLocation, useParams } from 'react-router-dom';
import { useRealtime } from '../contexts/Realtime';
import ChatBox from './ChatBox';

const Room = () => {
  const socket = useRealtime();
  const { roomId } = useParams<{ roomId: string }>();
  const { search } = useLocation();
  const query = useMemo(() => qs.parse(search), [search]);

  useEffect(() => {
    if (query.username) {
      socket.emit('room/join', { username: query.username, room: roomId });
    }
  }, [query.username, socket, roomId]);

  if (!query.username) {
    return <Redirect to="/" />;
  }

  return <ChatBox />;
};

export default Room;
