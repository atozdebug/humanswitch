import React, { useEffect } from 'react';
import { Dropdown, Flowbite, Pagination, Spinner, Table } from 'flowbite-react';
import BackButton from '../../components/KnowledgeBase/BackButton';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../services/store/store';
import { getChats } from '../../services/slices/ai_advisor/chats';
import { formatDistanceToNow } from 'date-fns';
const ChatHistories = () => {
  const chatHistories = useSelector(
    (state: RootState) => state.chat.getChatData
  );
  const loading = useSelector((state: RootState) => state.chat.loading);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (!chatHistories) {
      dispatch(getChats({ page: 1 }));
    }
  }, [chatHistories]);
  const onPageChange = (page: number) => {
    dispatch(getChats({ page: page }));
  };
  return (
    <div className='md:px-8 px-4 py-4'>
      <div>
        <p className='text-xl font-medium'>Your recent chats</p>
        {loading ? (
          <div>
            <Spinner />
          </div>
        ) : chatHistories?.data?.length > 0 ? (
          <>
            <ul>
              {chatHistories?.data?.map((chat, index) => (
                <li
                  className='flex cursor-pointer justify-between items-center bg-[#F5F7F8] border border-[#E2E4E9] p-3 my-2 rounded-lg'
                  key={index}
                  onClick={() => navigate(`/advisor?chat_id=${chat?.id}`)}
                >
                  <div className='flex items-center gap-2 '>
                    <svg
                      width='20'
                      height='19'
                      viewBox='0 0 20 19'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M13.75 11.25H4.97765L1.47139 14.0833C1.14922 14.3437 0.676996 14.2936 0.416655 13.9714C0.308822 13.8379 0.25 13.6716 0.25 13.5V1.5C0.25 1.5 0.25 0.87868 0.68934 0.43934C0.68934 0.43934 1.12868 0 1.75 0H13.75C13.75 0 14.3713 0 14.8107 0.43934C14.8107 0.43934 15.25 0.87868 15.25 1.5V9.75C15.25 9.75 15.25 10.3713 14.8107 10.8107C14.8107 10.8107 14.3713 11.25 13.75 11.25ZM13.75 9.75V1.5H1.75V11.9297L4.24111 9.91665C4.37455 9.80882 4.54093 9.75 4.7125 9.75H13.75Z'
                        fill='#1C1C1C'
                      />
                      <path
                        d='M18.25 4.5H14.5C14.0858 4.5 13.75 4.83579 13.75 5.25C13.75 5.66421 14.0858 6 14.5 6H18.25V16.4297L15.7589 14.4167C15.6254 14.3088 15.4591 14.25 15.2875 14.25H6.25V10.5C6.25 10.0858 5.91421 9.75 5.5 9.75C5.08579 9.75 4.75 10.0858 4.75 10.5V14.25C4.75 14.8713 5.18934 15.3107 5.18934 15.3107C5.62868 15.75 6.25 15.75 6.25 15.75H15.0223L18.5286 18.5833C18.6621 18.6912 18.8284 18.75 19 18.75C19.4142 18.75 19.75 18.4142 19.75 18V6C19.75 5.37868 19.3107 4.93934 19.3107 4.93934C18.8713 4.5 18.25 4.5 18.25 4.5Z'
                        fill='#1C1C1C'
                      />
                    </svg>
                    <p className='text-sm truncate'>{chat?.title}</p>
                  </div>
                  <p className='text-sm text-gray-700 mt-2 '>
                    {formatDistanceToNow(
                      new Date(chat.created_at + 'Z'),

                      {
                        addSuffix: true,
                      }
                    )}
                  </p>
                </li>
              ))}
            </ul>
            <div className='flex justify-center mt-3'>
              <Pagination
                currentPage={chatHistories?.page || 1}
                totalPages={chatHistories?.total_pages || 1}
                onPageChange={onPageChange}
              />
            </div>
          </>
        ) : (
          <div className='flex justify-center items-center py-10 lg:py-16'>
            <p className='text-sm text-gray-700 mt-2 '>No history found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatHistories;
