import { Dropdown, Flowbite, Spinner, Table } from 'flowbite-react';
import React, { useEffect, useState } from 'react';

import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import type { PaginatedFaqResponseType } from '../../types';
import { Pagination } from 'flowbite-react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../services/store/store';
import { deleteFaq, getFaqs } from '../../services/slices/knowledge_base/faq';
import { RiDeleteBin5Line } from 'react-icons/ri';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';

function ViewFaqs() {
  const allFaqs = useSelector((state: RootState) => state.faq?.getData);
  const loading = useSelector((state: RootState) => state.faq?.loading);

  const dispatch = useDispatch();

  const onPageChange = (page: number) => {
    dispatch(getFaqs({ page: page }));
  };
  const [isAccordianClicked, setIsAccordianClicked] = useState<string | null>(
    null
  );
  const handleAccordionClick =
    (itemId: number) => (event: React.MouseEvent) => {
      setIsAccordianClicked(isAccordianClicked === itemId ? null : itemId);
    };

  useEffect(() => {
    if (!allFaqs) {
      console.debug(
        'ℹ️ ~ file: knowledgeBase.tsx:25 ~ useEffect ~ allFaqs:',
        allFaqs
      );
      dispatch(getFaqs({ page: 1 }));
    }
  }, [dispatch, allFaqs]);
  const handleDelete = (id: string): void => {
    dispatch(deleteFaq(id))
      .then((result: any) => {
        if (result.payload.success) {
          alert('Faq deleted successfully.');
        } else {
          alert(`Failed to delete faq: ${result.payload.error}`);
        }
      })
      .catch((error) => {
        alert('An unexpected error occurred. Please try again later.');
        console.error('Delete faq error:', error);
      });
  };
  return (
    <div className='pt-8 px-5'>
      <div className='flex gap-2 text-sm font-semibold justify-between items-center text-darkgray2 pb-3 border-b'>
        <div className='flex items-center gap-3'>
          <img
            src='/assets/images/folder.png'
            width={16}
            height={16}
            className='w-9 h-9'
          />
          <p className='text-xl'>Faq Knowledge</p>
        </div>
        <p className='text-xs text-lightgray4 pt-2px'>
          {allFaqs ? allFaqs.total : 0} files
        </p>
      </div>

      <div>
        {!loading ? (
          <>
            {allFaqs?.data?.length ? (
              allFaqs.data.map((item) => (
                <Accordion
                  expanded={isAccordianClicked === item.id}
                  key={item.id}
                  onClick={handleAccordionClick(item.id)}
                  className='py-3 '
                >
                  <AccordionSummary
                    // expandIcon={<GridExpandMoreIcon />}
                    aria-controls='panel1-content'
                    id='panel1-header'
                    className='!m-0 px-2'
                  >
                    <div className='w-full mx-2 flex justify-between items-center'>
                      <div className='flex items-center gap-2'>
                        <LiveHelpIcon className='text-lightgray4' />
                        <div>
                          <p className='text-darkgray2 text-sm font-semibold'>
                            {item.question}
                          </p>
                          <p className='text-lightgray4 text-xs font-normal min-w-[148px]'>
                            {`${new Date(item.created_at).getDate()},${new Date(
                              item.created_at
                            ).toLocaleString('en-US', {
                              month: 'short',
                            })},${new Date(
                              item.created_at
                            ).getFullYear()}, ${new Date(
                              item.created_at
                            ).toLocaleString('en-US', {
                              hour: '2-digit',
                              minute: '2-digit',
                              hour12: true,
                            })}`}
                          </p>
                        </div>
                      </div>

                      <RiDeleteBin5Line
                        onClick={() => handleDelete(item.id)}
                        stroke='red-code'
                        className='text-red-code cursor-pointer'
                      />
                    </div>
                  </AccordionSummary>
                  <AccordionDetails className=''>
                    <p>{item.answer}</p>
                  </AccordionDetails>
                </Accordion>
              ))
            ) : (
              <p className='text-center text-gray-500'>No FAQs available.</p>
            )}

            <div className='flex justify-center mt-3'>
              <Pagination
                currentPage={allFaqs?.page || 1}
                totalPages={allFaqs?.total_pages || 1}
                onPageChange={onPageChange}
              />
            </div>
          </>
        ) : (
          <div className='flex justify-center my-12'>
            <Spinner />
          </div>
        )}
      </div>
    </div>
  );
}

export default ViewFaqs;
