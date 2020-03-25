import React, { createContext, FC, useContext } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3030');

const RealtimeContext = createContext<SocketIOClient.Socket>(socket);

export const RealtimeProvider: FC = ({ children }) => {
  return (<RealtimeContext.Provider value={socket}>{children}</RealtimeContext.Provider>)
};

export const useRealtime = () => useContext(RealtimeContext);
