import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { formatDistanceToNow } from 'date-fns';
import { Spinner } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import io, { type Socket } from 'socket.io-client';
import Markdown from 'react-markdown'
import {
  getChatMessages,
  getChats,
} from '../../services/slices/ai_advisor/chats';
import { useNavigate } from 'react-router-dom';
import { getAdvisor,getImage } from '../../services/slices/ai_advisor/setting';
import type { RootState } from '../../services/store/store';
import type { ChatMessageType } from '../../types';
// Replace this URL with your server's URL
const SOCKET_SERVER_URL = 'https://humanswitch-backend.onrender.com/';
export interface NewMessageType {
  type: string;
  content: string;
  is_loading?: boolean;
}

const Chatbot = () => {
  const [query] = useSearchParams();
  const id = query.get('chat_id');

  const [chatId, setChatId] = useState<string | null>(id);
  const [socket, setSocket] = useState<Socket | null>();
  console.debug('ℹ️ ~ file: chatbot.tsx:27 ~ Chatbot ~ socket:', socket);
  const [userMessage, setUserMessage] = useState('');
  const [response, setResponse] = useState('');
  const [newMessages, setNewMessages] = useState<NewMessageType[]>([]);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const [isQuerying, setQuerying] = useState<boolean>(false);
  const advisorDetails = useSelector(
    (state: RootState) => state.advisor?.getData
  );
  
  const advisorImage = useSelector(
    (state: RootState) => state.advisor?.imageData
  );
console.info(advisorImage)
  const chatHistories = useSelector(
    (state: RootState) => state.chat.getChatData
  );
  const navigate = useNavigate();
  const msgLoading = useSelector((state: RootState) => state.chat.loading);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!advisorDetails) {
      dispatch(getAdvisor());
    }
  }, [advisorDetails]);
  useEffect(() => {
    if (!advisorImage) {
      dispatch(getImage());
    }
  }, [advisorImage]);

  useEffect(() => {
    if (!chatHistories) {
      dispatch(getChats({ page: 1 }));
    }
  }, [chatHistories]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const newSocket = io(SOCKET_SERVER_URL, {
      extraHeaders: {
        Authorization: 'Bearer ' + token,
      },
      transports: ['websocket'],
    });
    newSocket.on('connect', () => {
      console.log('Socket connected');
      setSocket(newSocket);
    });

    newSocket.on('disconnect', () => {
      console.log('Socket disconnected');
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (chatId) {
      dispatch(getChatMessages({ id: chatId, page: 1 })).then((res) => {
        const chatHistory = res?.payload?.data || []; // Handle case where data might be undefined

        // Map over chatHistory to extract only type and content
        const extractedMessages = chatHistory.map(
          (message: ChatMessageType) => ({
            type: message.type,
            content: message.content,
            is_loading: false,
          })
        );

        // Update newMessages state with the extracted messages
        setNewMessages(extractedMessages);
      });
    }
  }, []);
  // console.info('ℹ️ ~ file: chatbot.tsx:78 ~ New Messages:', newMessages);
  useEffect(() => {
    // console.info('ℹ️ ~ file: chatbot.tsx:81 ~ useEffect ~ response:', response);
    if (response) {
      setNewMessages((prev) => {
        const updatedMessages = [...prev];
        const lastMessage = {
          ...updatedMessages[updatedMessages.length - 1],
          content: response,
          is_loading: false,
        };
        updatedMessages[updatedMessages.length - 1] = lastMessage;
        return updatedMessages;
      });
    }
  }, [response]);

  const initializeChat = (socket: Socket) => {
    // // // // console.log('ℹ️ ~ file: chatbot.tsx:62 ~ Chat initialized ~ data:', chatId);
    socket.emit('initialize_chat', {
      employee_id: '1',
      chat_id: chatId,
      message: userMessage || '',
    });

    socket.on('chat_initialized', (data) => {
      const newUrl = `${window.location.pathname}?chat_id=${data.chat_id}`;
      window.history.replaceState(null, '', newUrl);
      setIsInitialized(true);
      setChatId(data.chat_id);
      // chatId=data.chat_id
      socket.emit('message', {
        chat_id: data.chat_id,
        message: userMessage,
      });
    });

    socket.on('message_stream', (data) => {
      // console.info(
      //   'ℹ️ ~ file: chatbot.tsx:117 ~ socket.on ~ Response:',
      //   response
      // );

      // const newResponse = `${response}${data.partial_response}`;
      // console.info(
      //   'ℹ️ ~ file: chatbot.tsx:119 ~ socket.on ~ newResponse:',
      //   newResponse
      // );
      // if (isQuerying) {
      //   setQuerying(false);
      // }

      setResponse((prevres) => prevres + data.partial_response);
      // setResponse(data.partial_response);
    });
    socket.on('message_complete', () => {
      setResponse('');
    });

    socket.on('error', (data) => {
      setResponse((prevResponse) => `${prevResponse} ${data.message}`);
    });
  };

  const sendMessage = (socket: Socket) => {
    if (userMessage.trim()) {
      if (isInitialized && chatId) {
        socket.emit('message', {
          chat_id: chatId,
          message: userMessage,
        });
      } else {
        initializeChat(socket);
      }
      setNewMessages((prevMessages) => [
        ...prevMessages,
        { type: 'human', content: userMessage },
        {
          type: 'ai',
          content: '',
          is_loading: true,
        },
      ]);
      setQuerying(true);
      setUserMessage('');
    } else {
      console.log('Message is required 1');
    }
  };

  useEffect(() => {
    setChatId(id);
  }, [id]);

  return (
  <>
  <div className='flex justify-between items-center w-full'>
              <div className='flex'>
                <span className='bg-[#F6F8FA] px-2 rounded-full'>
                 <img src={advisorImage} alt="Advisor Logo" width='40' height='40'/>
                </span>
                <div className='px-4'>
                  <h2 className='text-main-heading text-lg font-medium'>
                    {advisorDetails?.bot_title}
                  </h2>
                  <p className='text-gray-dark text-sm'>A short description of the chatbot and its capabilities</p>
                </div>
              </div>
              {window.location.href.includes('/advisor?chat_id=') && (
                <div>
                  <button onClick={() => navigate('/advisor')}>New Chat</button>
                </div>
              )}
            </div>
    <div className='bg-gray-100 pb-5 max-h-[85vh] h-[85vh] '>
      {chatId ? (
        <div className='mx-auto lg:w-4/5 relative h-full py-4'>
          {!msgLoading ? (
            <div className='h-[70vh] overflow-y-scroll scrollbar-hide'>
              {newMessages?.map((message, index) =>
                message.type === 'human' ? (
                  <div
                    key={index}
                    className='flex gap-4 px-4 py-1 mb-6 items-center'
                  >
                    <img
                      className='max-w-8 max-h-8  border-r border-[#E2E4E9] mt-1'
                      src='/assets/images/image.png'
                    />{' '}
                    <p className='bg-white  rounded-lg  text-sm font-normal'>
                      <Markdown>{message?.content}</Markdown>
                    </p>
                  </div>
                ) : (
                  <div
                    key={index}
                    className='flex gap-4  px-4 py-1 mb-6'
                  >
                    <div className=''>
                      <svg
                        width='24'
                        height='22'
                        viewBox='0 0 18 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M10.125 1.5C10.125 1.83319 9.98018 2.13254 9.75 2.33854V3.75H13.5C14.7427 3.75 15.75 4.75736 15.75 6V13.5C15.75 14.7427 14.7427 15.75 13.5 15.75H4.5C3.25736 15.75 2.25 14.7427 2.25 13.5V6C2.25 4.75736 3.25736 3.75 4.5 3.75H8.25V2.33854C8.01982 2.13254 7.875 1.83319 7.875 1.5C7.875 0.878677 8.3787 0.375 9 0.375C9.6213 0.375 10.125 0.878677 10.125 1.5ZM4.5 5.25C4.08579 5.25 3.75 5.58579 3.75 6V13.5C3.75 13.9142 4.08579 14.25 4.5 14.25H13.5C13.9142 14.25 14.25 13.9142 14.25 13.5V6C14.25 5.58579 13.9142 5.25 13.5 5.25H9.75H8.25H4.5ZM1.5 7.5H0V12H1.5V7.5ZM16.5 7.5H18V12H16.5V7.5ZM6.75 10.875C7.37132 10.875 7.875 10.3713 7.875 9.75C7.875 9.1287 7.37132 8.625 6.75 8.625C6.12868 8.625 5.625 9.1287 5.625 9.75C5.625 10.3713 6.12868 10.875 6.75 10.875ZM11.25 10.875C11.8713 10.875 12.375 10.3713 12.375 9.75C12.375 9.1287 11.8713 8.625 11.25 8.625C10.6287 8.625 10.125 9.1287 10.125 9.75C10.125 10.3713 10.6287 10.875 11.25 10.875Z'
                          fill='#0A0D14'
                        />
                      </svg>
                    </div>

                    {message?.content === '' && message.is_loading ? (
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 100 100'
                        preserveAspectRatio='xMidYMid'
                        width='40'
                        height='40'
                        xmlns:xlink='http://www.w3.org/1999/xlink'
                      >
                        <g>
                          <circle
                            fill='#000000'
                            r='10'
                            cy='50'
                            cx='84'
                          >
                            <animate
                              begin='0s'
                              keySplines='0 0.5 0.5 1'
                              values='10;0'
                              keyTimes='0;1'
                              calcMode='spline'
                              dur='0.25s'
                              repeatCount='indefinite'
                              attributeName='r'
                            ></animate>
                            <animate
                              begin='0s'
                              values='#000000;#000000;#000000;#000000;#000000'
                              keyTimes='0;0.25;0.5;0.75;1'
                              calcMode='discrete'
                              dur='1s'
                              repeatCount='indefinite'
                              attributeName='fill'
                            ></animate>
                          </circle>
                          <circle
                            fill='#000000'
                            r='10'
                            cy='50'
                            cx='16'
                          >
                            <animate
                              begin='0s'
                              keySplines='0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1'
                              values='0;0;10;10;10'
                              keyTimes='0;0.25;0.5;0.75;1'
                              calcMode='spline'
                              dur='1s'
                              repeatCount='indefinite'
                              attributeName='r'
                            ></animate>
                            <animate
                              begin='0s'
                              keySplines='0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1'
                              values='16;16;16;50;84'
                              keyTimes='0;0.25;0.5;0.75;1'
                              calcMode='spline'
                              dur='1s'
                              repeatCount='indefinite'
                              attributeName='cx'
                            ></animate>
                          </circle>
                          <circle
                            fill='#000000'
                            r='10'
                            cy='50'
                            cx='50'
                          >
                            <animate
                              begin='-0.25s'
                              keySplines='0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1'
                              values='0;0;10;10;10'
                              keyTimes='0;0.25;0.5;0.75;1'
                              calcMode='spline'
                              dur='1s'
                              repeatCount='indefinite'
                              attributeName='r'
                            ></animate>
                            <animate
                              begin='-0.25s'
                              keySplines='0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1'
                              values='16;16;16;50;84'
                              keyTimes='0;0.25;0.5;0.75;1'
                              calcMode='spline'
                              dur='1s'
                              repeatCount='indefinite'
                              attributeName='cx'
                            ></animate>
                          </circle>
                          <circle
                            fill='#000000'
                            r='10'
                            cy='50'
                            cx='84'
                          >
                            <animate
                              begin='-0.5s'
                              keySplines='0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1'
                              values='0;0;10;10;10'
                              keyTimes='0;0.25;0.5;0.75;1'
                              calcMode='spline'
                              dur='1s'
                              repeatCount='indefinite'
                              attributeName='r'
                            ></animate>
                            <animate
                              begin='-0.5s'
                              keySplines='0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1'
                              values='16;16;16;50;84'
                              keyTimes='0;0.25;0.5;0.75;1'
                              calcMode='spline'
                              dur='1s'
                              repeatCount='indefinite'
                              attributeName='cx'
                            ></animate>
                          </circle>
                          <circle
                            fill='#000000'
                            r='10'
                            cy='50'
                            cx='16'
                          >
                            <animate
                              begin='-0.75s'
                              keySplines='0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1'
                              values='0;0;10;10;10'
                              keyTimes='0;0.25;0.5;0.75;1'
                              calcMode='spline'
                              dur='1s'
                              repeatCount='indefinite'
                              attributeName='r'
                            ></animate>
                            <animate
                              begin='-0.75s'
                              keySplines='0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1'
                              values='16;16;16;50;84'
                              keyTimes='0;0.25;0.5;0.75;1'
                              calcMode='spline'
                              dur='1s'
                              repeatCount='indefinite'
                              attributeName='cx'
                            ></animate>
                          </circle>
                          <g></g>
                        </g>
                      </svg>
                    ) : (
                      <p className='bg-white   rounded-lg text-sm font-normal'>
                        
                        <Markdown>{message?.content}</Markdown>
                      </p>
                    )}
                  </div>
                )
              )}
            </div>
          ) : (
            <div className='flex justify-center items-center lg:py-16 py-10'>
              <Spinner />
            </div>
          )}

          <div className=' '>
            <div className='flex border border-l-none border-[#E2E4E9] rounded-full p-2 bg-[#E1E4EA]'>
              <input
                type='text'
                value={userMessage}
                placeholder={
                  advisorDetails?.welcome_message || 'Ask me anything'
                }
                onChange={(e) => setUserMessage(e.target.value)}
                className='border-none rounded-full px-4 p-2 bg-[#E1E4EA]  focus:border-none focus:ring-transparent focus:outline-none w-full  placeholder-gray-950'
              />
              <div className='flex justify-center items-center  '>
                <button
                  onClick={() => socket && sendMessage(socket)}
                  className='p-1'
                >
                  <ArrowForwardIcon />
                </button>{' '}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='px-4 lg:px-16 h-[80vh] overflow-y-scroll scrollbar-hide'>
          <div className=''>
            <img
              src='assets/images/Group-dashboard.png'
              className='max-h-[40vh] w-full object-contain -mt-[10vh]'
            />
          </div>
          <div className='text-center content-img  mb-10'>
            <h2 className='font-semibold text-[32px]'>
              {advisorDetails?.bot_title}
            </h2>
            <p className='text-base font-normal pt-4'>
              {advisorDetails?.greeting_message}
            </p>
          </div>
          <div className='px-2 pb-2 bg-[#F6F8FA] '>
            <div className=''>
              <div className='flex border border-l-none border-[#E2E4E9] rounded-full p-2 bg-gray-200'>
                <input
                  type='text'
                  value={userMessage}
                  placeholder={
                    advisorDetails?.welcome_message || 'Ask me anything'
                  }
                  onChange={(e) => setUserMessage(e.target.value)}
                  className='border-none rounded-full p-1 bg-gray-200  focus:border-none focus:ring-transparent focus:outline-none w-full  placeholder-gray-500'
                />
                <div className='flex justify-center items-center  '>
                  <button
                    onClick={() => socket && sendMessage(socket)}
                    className='p-1'
                  >
                    <ArrowForwardIcon />
                  </button>{' '}
                </div>
              </div>
            </div>
          </div>

          <div className='grid md:grid-cols-4 sm:grid-cols-1 gap-2'>
            {advisorDetails?.quick_questions?.map((question, index) => (
              <div
                key={index}
                className='bg-white p-4 mx-3 rounded-lg mt-6'
              >
                <div
                  className='text-center cursor-pointer'
                  onClick={() => setUserMessage(question)}
                >
                  <p className='  text-sm font-normal'>{question}</p>
                </div>
              </div>
            ))}
          </div>
          { chatHistories?.data?.length>0 && 
          <div className='mt-10 px-4'>
            <div className='flex items-center justify-between'>
              <p className=''>Your recents chats</p>
              <Link
                className='text-sm text-blue-500 flex items-center'
                to='/chat-histories'
              >
                View all <ChevronRightIcon />
              </Link>
            </div>
            <div className='grid md:grid-cols-4 sm:grid-cols-1 gap-2 mt-2'>
              {chatHistories?.data?.slice(0, 4).map((chat, index) => (
                <div
                  key={index}
                  className='bg-white rounded-lg p-4'
                  onClick={() => navigate(`/advisor?chat_id=${chat?.id}`)}
                >
                  <div className=''>
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M15.75 14.25H6.97765L3.47139 17.0833C3.14922 17.3437 2.677 17.2936 2.41665 16.9714C2.30882 16.8379 2.25 16.6716 2.25 16.5V4.5C2.25 4.5 2.25 3.87868 2.68934 3.43934C2.68934 3.43934 3.12868 3 3.75 3H15.75C15.75 3 16.3713 3 16.8107 3.43934C16.8107 3.43934 17.25 3.87868 17.25 4.5V12.75C17.25 12.75 17.25 13.3713 16.8107 13.8107C16.8107 13.8107 16.3713 14.25 15.75 14.25ZM15.75 12.75V4.5H3.75V14.9297L6.24111 12.9167C6.37455 12.8088 6.54093 12.75 6.7125 12.75H15.75Z'
                        fill='#1C1C1C'
                      />
                      <path
                        d='M20.25 7.5H16.5C16.0858 7.5 15.75 7.83579 15.75 8.25C15.75 8.66421 16.0858 9 16.5 9H20.25V19.4297L17.7589 17.4167C17.6254 17.3088 17.4591 17.25 17.2875 17.25H8.25V13.5C8.25 13.0858 7.91421 12.75 7.5 12.75C7.08579 12.75 6.75 13.0858 6.75 13.5V17.25C6.75 17.8713 7.18934 18.3107 7.18934 18.3107C7.62868 18.75 8.25 18.75 8.25 18.75H17.0223L20.5286 21.5833C20.6621 21.6912 20.8284 21.75 21 21.75C21.4142 21.75 21.75 21.4142 21.75 21V9C21.75 8.37868 21.3107 7.93934 21.3107 7.93934C20.8713 7.5 20.25 7.5 20.25 7.5Z'
                        fill='#1C1C1C'
                      />
                    </svg>

                    <p className='text-sm font-normal mt-2'>{chat.title}</p>
                    <p className='text-sm text-gray-700 mt-2'>
                      {formatDistanceToNow(
                        new Date(chat.created_at + 'Z'),

                        {
                          addSuffix: true,
                        }
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          }
        </div>
      )}
    </div>
    </>
  );
};

export default Chatbot;

{
  /* <div>
              <div className='text-center'>
                <img
                  className='m-auto my-1 max-w-8 max-h-8'
                  src='/assets/images/Chats-r.png'
                />
                <h2 className='font-semibold text-2xl'>Examples</h2>
                <p className='bg-white p-4 mx-3 rounded-lg mt-6 text-sm font-normal'>
                  "Explain quantum computing insimple terms"
                </p>
              </div>

              <div className='text-center'>
                <p className='bg-white p-4 mx-3 rounded-lg mt-6 text-sm font-normal'>
                  "Got any creative ideas for a 10year old's birthday?"
                </p>
              </div>
              <div className='text-center'>
                <p className='bg-white p-4 mx-3 rounded-lg mt-6 text-sm font-normal'>
                  "How do I make an HTTP requestin Javascript?"
                </p>
              </div>
            </div>

            <div className=''>
              <div>
                <div className='text-center'>
                  <img
                    className='m-auto my-1 max-w-8 max-h-8 '
                    src='/assets/images/Star-s.png'
                  />
                  <h2 className='font-semibold text-2xl'>Capabilities</h2>
                  <p className='bg-white p-4 mx-3 rounded-lg mt-6 text-sm font-normal'>
                    Remembers what user saidearlier in the conversation.
                  </p>
                </div>

                <div className='text-center'>
                  <p className='bg-white p-4 mx-3 rounded-lg mt-6 text-sm font-normal'>
                    Allows user to provide follow-up corrections.
                  </p>
                </div>
                <div className='text-center'>
                  <p className='bg-white p-4 mx-3 rounded-lg mt-6 text-sm font-normal'>
                    Trained to decline inappropriate requests.
                  </p>
                </div>
              </div>
            </div>
            <div className=''>
              <div>
                <div className='text-center'>
                  <img
                    className='m-auto my-1 max-w-8 max-h-8'
                    src='/assets/images/ShieldWarning-r.png'
                  />
                  <h2 className='font-semibold text-2xl'>Limitations</h2>
                  <p className='bg-white p-4 mx-3 rounded-lg mt-6 text-sm font-normal'>
                    May occasionally generate incorrect information.
                  </p>
                </div>

                <div className='text-center'>
                  <p className='bg-white p-4 mx-3 rounded-lg mt-6 text-sm font-normal'>
                    May occasionally produce harmful instructions or biased
                    content.
                  </p>
                </div>
                <div className='text-center'>
                  <p className='bg-white p-4 mx-3 rounded-lg mt-6 text-sm font-normal'>
                    Limited knowledge of world andevents after 2021.
                  </p>
                </div>
              </div>
            </div> */
}
