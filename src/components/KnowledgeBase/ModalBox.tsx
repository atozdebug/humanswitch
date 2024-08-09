import React, { useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import CloseIcon from '@mui/icons-material/Close';
import SettingsIcon from '@mui/icons-material/Settings';

interface Question {
  id: number | string;
  question: string;
  ans: string;
  categories: string[];
}

interface ModalBoxProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  heading: string;
  setFilteredQuestions: React.Dispatch<React.SetStateAction<Question[]>>;
  editdata: Question[];
  setEditData: React.Dispatch<React.SetStateAction<Question[]>>;
  filteredQuestions: Question[];
  questions: Question[];
  setQuestions: React.Dispatch<React.SetStateAction<Question[]>>;
}

const ModalBox: React.FC<ModalBoxProps> = ({
  isModalOpen,
  setIsModalOpen,
  heading,
  questions,
  setQuestions,
  setFilteredQuestions,
  editdata,
  setEditData,
  filteredQuestions,
}) => {
  console.log('🚀 ~ file: ModalBox.tsx:17 ~ questions:', questions);
  const [category, setCategory] = useState<string>('');
  const [categories, setcategories] = useState<string[]>([]);
  const [answer, setAnswer] = useState<string>('');
  const [question, setQuestion] = useState<string>('');
  console.log(
    '🚀 ~ file: ModalBox.tsx:13 ~ ModalBox ~ categories:',
    categories
  );
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: 'none',
    borderRadius: '12px',
    boxShadow: 24,
    color: 'black',
    // p: 2,
  };
  function handleclose() {
    setIsModalOpen(false);
    return isModalOpen;
    setEditData([]);
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      if (category !== '') {
        // setQuestions([...questions,{c}])
        setcategories([...categories, category]);

        setCategory('');
      }
    }
  }

  function RandomId() {
    return Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, '')
      .substr(2, 10);
  }
  function handleSubmit() {
    if (answer !== '' && question !== '' && categories.length > 0) {
      const newQuestion: Question = {
        id: RandomId(),
        categories: categories,
        question: question,
        ans: answer,
      };

      setQuestions([...questions, newQuestion]);
      setFilteredQuestions([...filteredQuestions, newQuestion]);
      setcategories([]);
      setQuestion('');
      setAnswer('');
      setIsModalOpen(false);
      setEditData([]);
    } else {
      alert('fill all fields ');
    }
  }

  return (
    <div>
      <Modal
        aria-labelledby='transition-modal-title'
        ariaDescribedby='transition-modal-description'
        open={isModalOpen}
        onClose={handleclose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={isModalOpen}>
          <Box
            sx={style}
            className='!w-[550px]'
          >
            <div className='flex justify-between p-4 '>
              <div className='flex gap-4 items-center'>
                <span className=' flex items-center justify-center rounded-[50%] border h-[37px] w-[37px] text-center'>
                  <SettingsIcon className='text-gray-dark !w-5 !h-5' />
                </span>
                <div className='flex flex-col gap-1 '>
                  <h4 className='text-sm font-medium text-darkgray3'>
                    Add {heading}
                  </h4>
                  {/* <p className="text-xs font-normal text-gray-dark">
                    Your bot will answer based on the added knowledge base.
                  </p> */}
                </div>
              </div>
              <CloseIcon
                className='!w-4 !h-4 text-gray-dark cursor-pointer'
                onClick={() => setIsModalOpen(false)}
              />
            </div>
            <hr />
            {/***************content*********** */}

            <form className='p-4'>
              <div>
                <label
                  htmlFor='category'
                  className=' text-sm  text-darkgray3 font-medium'
                >
                  Category
                </label>
                <br />

                <input
                  type='text'
                  name='category'
                  id='category'
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className='w-full border-[#eceef2] rounded-xl outline-none resize-none mt-2 text-sm font-normal'
                  placeholder='Enter here...'
                  required
                />
                <div className='flex gap-2  mt-2'>
                  {categories?.length > 0 &&
                    categories?.map((cat) => (
                      <div className='border flex gap-1 items-center rounded-md px-2 text-gray-dark font-medium text-xs py-[2px]'>
                        <span>{cat}</span>
                        <CloseIcon
                          className='!w-3 !h-3 cursor-pointer'
                          onClick={() => {
                            const filter = categories.filter((c) => c !== cat);
                            setcategories(filter);
                          }}
                        />
                      </div>
                    ))}
                </div>
              </div>
              <div>
                <label
                  htmlFor='question'
                  className=' text-sm  text-darkgray3 font-medium'
                >
                  Question
                </label>
                <br />

                <input
                  type='text'
                  name='question'
                  id='question'
                  value={
                    editdata.length !== 0 && editdata[0]?.question !== ''
                      ? editdata[0]?.question
                      : question
                  }
                  onChange={(e) => setQuestion(e.target.value)}
                  className='w-full border-[#eceef2] rounded-xl outline-none resize-none mt-2 text-sm font-normal'
                  placeholder='Enter here...'
                  required
                />
              </div>
              <div>
                <label
                  htmlFor='answer'
                  className=' text-sm  text-darkgray3 font-medium'
                >
                  Answer
                </label>
                <br />

                <textarea
                  name='answer'
                  id='answer'
                  value={
                    editdata.length !== 0 && editdata[0].ans !== ''
                      ? editdata[0].ans
                      : answer
                  }
                  className='w-full border-[#eceef2] rounded-xl outline-none   h-24 mt-2 text-sm'
                  // placeholder="Enter here..."
                  // value={formData.greetingMsg}
                  onChange={(e) => setAnswer(e.target.value)}
                  required
                />
              </div>
            </form>

            {/***************content*********** */}

            <hr />
            <div className='flex justify-between gap-4 p-4'>
              <button
                className='border py-2 text-sm font-medium w-full rounded-lg'
                // onClick={() =>
                // //   selectedType === "File" ? setImageURL([]) : setLinks([])
                // }
              >
                Discard
              </button>
              <button
                onClick={handleSubmit}
                className=' w-full text-sm font-medium py-1 bg-darkblue2 text-white rounded-lg'
              >
                Save and Proceed
              </button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalBox;
