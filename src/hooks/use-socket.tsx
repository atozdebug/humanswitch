import { createContext, useContext } from 'react';
import type { Socket } from 'socket.io-client';

export interface Message {
  type: 'ai' | 'human';
  content: string | undefined;
}

interface ContextType {
  isSocketConnected: boolean;
  ws: Socket | null;
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSocketConnected: React.Dispatch<React.SetStateAction<boolean>>;
  setisMsgloading: React.Dispatch<React.SetStateAction<boolean>>;
  isMsgloading: boolean;
  connectWebSocket: () => void;
  websocket: Socket | null;
}

export const WebSocketContext = createContext<ContextType | undefined>(
  undefined
);

const useSocket = () => {
  const context = useContext(WebSocketContext);
  if (!context) {
    throw Error('Context Missing');
  }
  return context;
};

export { useContext };
