import { useState } from 'react';

import FileUpload from './FileUpload';
import UploadCard from '../AdvisiorSetting/UploadCard';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../services/store/store';
import { createDocument } from '../../services/slices/knowledge_base/document';
import { BsFiletypePdf } from 'react-icons/bs';
import { GridCloseIcon } from '@mui/x-data-grid';

function DocumentUpload() {
  const [uploadedDocument, setUploadedDocument] = useState(null);
  const loading = useSelector((state: RootState) => state.document.loading);
  const [description, setDescription] = useState<string>('');
  const dispatch = useDispatch();
  // const [isActive, setIsActive] = useState<boolean>(true);
  const handleCreateDocument = async () => {
    if (!uploadedDocument) {
      alert('Please upload a document and select categories.');
      return;
    }

    const formData = new FormData();
    formData.append('file', uploadedDocument?.url);
    formData.append('categories', []);
    formData.append('is_active', true);
    formData.append('description', description);

    const result = await dispatch(createDocument(formData));

    if (result.payload?.error) {
      alert(result.payload.error);
    } else {
      alert('Document uploaded successfully!');
      setUploadedDocument(null);
      setDescription('');
      //  setCategories([]);
    }
  };

  return (
    <div className='flex flex-col gap-4'>
      {!uploadedDocument ? (
        <FileUpload
          uploadedDocument={uploadedDocument}
          setUploadedDocument={setUploadedDocument}
        />
      ) : (
        <div className='border p-2 rounded-lg'>
          <div className='flex gap-2 items-center '>
            <span>
              <BsFiletypePdf className='!w-6 !h-6' />
            </span>
            <div className='flex justify-between w-full'>
              <div className='flex flex-col '>
                <span>{uploadedDocument?.name} </span>
                {/* <span>speed </span> */}
              </div>
              <GridCloseIcon
                className='!w-4 !h-4 text-gray-dark cursor-pointer'
                onClick={() => {
                  setUploadedDocument(null);
                }}
              />
            </div>
          </div>
          {/* <span>
            <Box sx={{ width: "100%" }}>
              <LinearProgress variant="determinate" value={progress} />
            </Box>
          </span>{" "} */}
        </div>
      )}

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
            setUploadedDocument([]);
            setDescription('');
          }}
        >
          Discard
        </button>
        <button
          onClick={handleCreateDocument}
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
              Uploading...
            </div>
          ) : (
            'Add Document'
          )}
        </button>
      </div>
    </div>
  );
}

export default DocumentUpload;
