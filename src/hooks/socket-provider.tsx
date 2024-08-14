import React, { useEffect, useRef, useState } from 'react';
import io, { type Socket } from 'socket.io-client';
import { WebSocketContext } from './use-socket';
interface WebSocketProviderProps {
  children: React.ReactNode;
}
const MAX_RETRIES = 3;
let reconnectInProgress = false;
const WebSocketProvider: React.FC<WebSocketProviderProps> = ({ children }) => {
  const [socketInstance, setSocketInstance] = useState<Socket | null>(null);
  // const sessionId = useMemo(() => getSessionId(), []);
  const retryCount = useRef(0);
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'bot',
      details: {
        response: welcome_message,
      },
    },
  ]);

  // const userMessage = messages?.filter(msg => msg?.type === 'user')

  const [loading, setLoading] = useState<boolean>(true);
  const [isSocketConnected, setIsSocketConnected] = useState<boolean>(false);
  const [websocket, setWebSocket] = useState<Socket | null>(null);

  const [isMsgloading, setisMsgloading] = useState<boolean>(false);

  useEffect(() => {
    setMessages([{ type: 'bot', details: { response: welcome_message } }]);
  }, [welcome_message]);

  let ws: Socket;

  function handleSocketError(event: Event) {
    console.error('WebSocket error:', event.type);
    // Optionally handle the error here with more detail
  }

  function connectWebSocket() {
    const token = localStorage.getItem('token');
    if (token) {
      ws = io(`http://localhost:8000`, {
        extraHeaders: {
          Authorization: 'Bearer ' + token,
        },
      });
      ws.on('error', handleSocketError);
      ws.on('connect', () => {
        setWebSocket(ws);
        console.info('Socket Connected Successfully.');

        setIsSocketConnected(true);
        retryCount.current = 0; // Reset retry count on successful connection
      });

      // Get the result object containing detailed information

      ws.on('message_stream', (event) => {
        const { data } = event;
        if (event !== null) {
          setisMsgloading(false);
          setLoading(false);
        }

        try {
          const parsedData = JSON.parse(data) as ChatResponse;

          // Do something with parsedData

          // dispatch(addSocketStatus(parsedData));
          setMessages((prevState) => [
            ...prevState,
            { type: 'bot', details: parsedData },
          ]);
        } catch (error) {
          console.error('Error parsing JSON:', error);
          // Handle the error accordingly
        }
      });

      ws.on('disconnect', () => {
        console.info('WebSocket connection closed');
        setIsSocketConnected(false);

        if (retryCount.current < MAX_RETRIES) {
          if (!reconnectInProgress) {
            reconnectInProgress = true;
            retryCount.current += 1;
            console.info(
              `Retrying connection (${retryCount.current}/${MAX_RETRIES})...`
            );
            setTimeout(() => {
              connectWebSocket();
              reconnectInProgress = false; // Reset the flag after attempting to reconnect
            }, 3000); // Retry connecting to the WebSocket after 3s
          } else {
            console.info('Reconnect attempt already in progress, waiting...');
          }
        } else {
          console.error('Max retry attempts reached. Stopping retry attempts.');
          setTimeout(connectWebSocket, 10000);
        }
      });
      setSocketInstance(ws);
    }
  }

  return (
    <WebSocketContext.Provider
      value={{
        ws: socketInstance,
        setMessages,
        messages,
        loading,
        setLoading,
        setIsSocketConnected,
        isSocketConnected,
        setisMsgloading,
        isMsgloading,
        connectWebSocket,
        websocket,
      }}
    >
      {children}
    </WebSocketContext.Provider>
  );
};

export default WebSocketProvider;
