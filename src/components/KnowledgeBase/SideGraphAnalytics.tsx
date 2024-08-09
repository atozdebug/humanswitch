import { Table } from 'flowbite-react';
import { AiFillFile } from 'react-icons/ai';
import { IoDocumentTextOutline } from 'react-icons/io5';

import { MdMovie } from 'react-icons/md';

import { IoMdImage } from 'react-icons/io';

import Doughbut from './Doughbut';
import type {
  PaginatedDocumentResponseType,
  PaginatedFaqResponseType,
  PaginatedUrlResponseType,
} from '../../types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDocuments } from '../../services/slices/knowledge_base/document';
import { getUrls } from '../../services/slices/knowledge_base/urls';
import { faqSlice, getFaqs } from '../../services/slices/knowledge_base/faq';
import type { RootState } from '../../services/store/store';

function SideGraphAnalytics({ totalDocuments, totalFaqs, totalUrls }) {
  // const allDocuments: PaginatedDocumentResponseType =
  //   useSelector((state: RootState) => state.document?.getData) || null;
  // const allUrls: PaginatedUrlResponseType =
  //   useSelector((state: RootState) => state.url?.getData) || null;
  // const allFaqs: PaginatedFaqResponseType =
  //   useSelector((state: RootState) => state.faq?.getData) || [];

  // const dispatch: any = useDispatch();

  // useEffect(() => {
  //   if (!allDocuments || allDocuments?.length <= 0) {
  //     dispatch(getDocuments({ page: 1 }));
  //   }
  // }, [dispatch, allDocuments]);

  // useEffect(() => {
  //   if (!allUrls || allUrls?.length <= 0) {
  //     dispatch(getUrls({ category: null, page: 1 }));
  //   }
  // }, [dispatch, allUrls]);
  // useEffect(() => {
  //   console.info('allFaqs', allFaqs);
  //   if (!allFaqs || allFaqs?.length <= 0) {
  //     console.info('Enteered', allFaqs);
  //     dispatch(getFaqs({ page: 1 }));
  //   }
  // }, [dispatch, allFaqs]);

  return (
    <div>
      {' '}
      <div className='text-center xl:pt-10'>
        {/* <img
          src="assets/images/chart-image.png"
          alt=""
          width={216}
          className="mx-auto"
        /> */}
        <Doughbut
          documents={totalDocuments}
          urls={totalUrls}
          faqs={totalFaqs}
        />
      </div>
      <div>
        <div className='overflow-x-auto  '>
          <Table className='relative z-10'>
            <Table.Body className=' !border-0'>
              <Table.Row className='text-darkgray2 fw-medium !border-0'>
                <Table.Cell className='pb-6 pt-0 !border-y-0 pl-0 pr-3'>
                  <div className='flex justify-start items-center px-0'>
                    <span className='bg-lightblue2 w-42px h-42px flex justify-center items-center text-gray-dark rounded-md'>
                      <IoDocumentTextOutline
                        fill='#00A5FF'
                        stroke='#00A5FF'
                        className='w-5 h-5'
                      />
                    </span>
                    <div className='pl-3'>
                      <h2 className='text-darkgray2 text-base font-medium'>
                        Document
                      </h2>
                      <p className='text-lightgray4 text-xs'>
                        {totalDocuments} files
                      </p>
                    </div>
                  </div>
                </Table.Cell>
                {/* <Table.Cell className='pb-6 pt-0 text-lightgray4 text-sm !border-y-0 px-0 text-end'>
                    {item.size}
                  </Table.Cell> */}
              </Table.Row>

              <Table.Row className='text-darkgray2 fw-medium !border-0'>
                <Table.Cell className='pb-6 pt-0 !border-y-0 pl-0 pr-3'>
                  <div className='flex justify-start items-center px-0'>
                    <span className='bg-lightblue2 w-42px h-42px flex justify-center items-center text-gray-dark rounded-md'>
                      <MdMovie
                        fill='#20C9AC'
                        stroke='#20C9AC'
                        className='w-5 h-5'
                      />
                    </span>
                    <div className='pl-3'>
                      <h2 className='text-darkgray2 text-base font-medium'>
                        Youtube
                      </h2>
                      <p className='text-lightgray4 text-xs'>
                        {totalUrls} files
                      </p>
                    </div>
                  </div>
                </Table.Cell>
                {/* <Table.Cell className='pb-6 pt-0 text-lightgray4 text-sm !border-y-0 px-0 text-end'>
                    {item.size}
                  </Table.Cell> */}
              </Table.Row>

              <Table.Row className='text-darkgray2 fw-medium !border-0'>
                <Table.Cell className='pb-6 pt-0 !border-y-0 pl-0 pr-3'>
                  <div className='flex justify-start items-center px-0'>
                    <span className='bg-lightblue2 w-42px h-42px flex justify-center items-center text-gray-dark rounded-md'>
                      <AiFillFile
                        stroke='#FFA043'
                        fill='#FFA043'
                        className='w-5 h-5'
                      />
                    </span>
                    <div className='pl-3'>
                      <h2 className='text-darkgray2 text-base font-medium'>
                        FAQs
                      </h2>
                      <p className='text-lightgray4 text-xs'>
                        {totalFaqs} files
                      </p>
                    </div>
                  </div>
                </Table.Cell>
                {/* <Table.Cell className='pb-6 pt-0 text-lightgray4 text-sm !border-y-0 px-0 text-end'>
                    {item.size}
                  </Table.Cell> */}
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default SideGraphAnalytics;
