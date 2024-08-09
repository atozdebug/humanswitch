import { useState } from 'react';
import ReactPlayer from 'react-player/youtube';

import { FaCirclePlay } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { createUrl } from '../../services/slices/knowledge_base/urls';
import type { RootState } from '../../services/store/store';

function UrlUpload() {
  // Access the loading state
  const loading = useSelector((state: RootState) => state.url.loading);

  const [videoLink, setVideoLink] = useState<string>('');

  const [description, setDescription] = useState<string>('');
  const dispatch = useDispatch();

  const handleCreateUrl = async () => {
    if (!videoLink) {
      alert('Please fill out all fields.');
      return;
    }

    const data = {
      url: videoLink,
      description: description,
      is_active: true, // You can adjust this as needed or remove it if it's not necessary
    };

    const result = await dispatch(createUrl(data));

    if (result.payload?.error) {
      alert(result.payload.error);
    } else {
      alert('URL created successfully!');
      setVideoLink('');
      setDescription('');
    }
  };

  return (
    <div className='flex flex-col'>
      {videoLink !== '' && (
        <ReactPlayer
          url={videoLink}
          playIcon={<FaCirclePlay />}
          height={200}
          width={380}
          style={{ borderRadius: '20px' }}
        />
      )}

      <div>
        <label
          htmlFor='link'
          className=' text-sm  text-darkgray3 font-medium'
        >
          Youtube URL{' '}
          <span className='text-sm  text-gray-dark font-normal'></span>
        </label>
        <br />
        <div className='flex border rounded-xl items-center'>
          <div className='text-sm px-2 text-lightgray8 py-2 border-r'>
            https://
          </div>
          <hr />
          <input
            type='url'
            name='link'
            id='link'
            value={videoLink}
            onChange={(e) => setVideoLink(e.target.value)}
            className='w-full   border-none text-lightgray8  outline-none focus:ring-transparent rounded-xl resize-none  text-sm font-normal'
            placeholder='www.example.com'
            required
          />
        </div>
      </div>

      <div>
        <label
          htmlFor='welcome'
          className=' text-sm  text-darkgray3 font-medium'
        >
          Description
        </label>
        <br />

        <textarea
          name='description'
          id='description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className='w-full border-[#eceef2] rounded-xl outline-none text-lightgray8 h-24 mt-2 text-sm'
          placeholder='Enter here...'
          required
        />
      </div>

      <div className='flex gap-2'>
        <button
          className='w-fit sm:px-8 px-3 py-[2px] sm:py-1 text-[10px] sm:text-sm font-medium text-gray-dark rounded-lg border'
          onClick={() => {
            setVideoLink('');
            setDescription('');
          }}
        >
          Discard
        </button>
        <button
          onClick={handleCreateUrl}
          disabled={loading} // Disable the button while loading
          className={`w-fit sm:px-6 px-3 py-[2px] sm:py-1 rounded-lg text-[10px] sm:text-sm font-medium text-white bg-darkblue2 ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {loading ? (
            <div className='flex items-center justify-center'>
              <svg
                className='animate-spin h-4 w-4 mr-2 text-white'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
              >
                <circle
                  className='opacity-25'
                  cx='12'
                  cy='12'
                  r='10'
                  stroke='currentColor'
                  strokeWidth='4'
                ></circle>
                <path
                  className='opacity-75'
                  fill='currentColor'
                  d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                ></path>
              </svg>
              Saving...
            </div>
          ) : (
            'Add Video'
          )}
        </button>
      </div>
    </div>
  );
}

export default UrlUpload;
