import { Dropdown, Flowbite, Pagination, Spinner, Table } from "flowbite-react";
import React, { useEffect, useState } from "react";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { GridExpandMoreIcon } from "@mui/x-data-grid";
import { boolean } from "yup";
import { getRecentDocumentKnowledge } from "../../apis/documentKnowledge";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { get } from "../../apis";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../services/store/store";
import {
  deleteDocument,
  getDocuments
} from "../../services/slices/knowledge_base/document";
import { RiDeleteBin5Line } from "react-icons/ri";

function ViewDocuments() {
  const allDocuments = useSelector(
    (state: RootState) => state.document?.getData
  );
  const loading = useSelector((state: RootState) => state.document?.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!allDocuments) {
      console.debug(
        "ℹ️ ~ file: knowledgeBase.tsx:25 ~ useEffect ~ allDocuments:",
        allDocuments
      );
      dispatch(getDocuments({ page: 1 }));
    }
  }, [dispatch, allDocuments]);
  const handleDelete = (id: string): void => {
    dispatch(deleteDocument(id))
      .then((result: any) => {
        if (result.payload.success) {
          alert("Document deleted successfully.");
        } else {
          alert(`Failed to delete document: ${result.payload.error}`);
        }
      })
      .catch(error => {
        alert("An unexpected error occurred. Please try again later.");
        console.error("Delete document error:", error);
      });
  };
  const viewDocument = async id => {
    try {
      const response = await get(`/documents/${id}/download`, {
        responseType: "blob"
      });
      if (response.status === 200) {
        // Convert Blob to a base64 string or Blob URL
        const docBlob = response.data;
        const url = URL.createObjectURL(docBlob);
        const newWindow = window.open(url);
        if (newWindow) {
          newWindow.focus();
        }
      }
    } catch (error) {
      console.error("Error fetching document:", error);
    }
  };
  const onPageChange = (page: number) => {
    dispatch(getDocuments({ page: page }));
  };
  return (
    <div className="pt-8 px-5">
      <div className="flex gap-2 text-sm font-semibold justify-between items-center text-darkgray2 pb-3 border-b">
        <div className="flex items-center gap-3">
          <img
            src="/assets/images/folder.png"
            width={16}
            height={16}
            className="w-9 h-9"
          />
          <p className="text-xl">Document Knowledge</p>
        </div>
        <p className="text-xs text-lightgray4 pt-2px">
          {allDocuments ? allDocuments.total : 0} files
        </p>
      </div>
      <div className="overflow-auto">
        {loading ? (
          <div className="flex justify-center my-12">
            <Spinner />
          </div>
        ) : allDocuments?.data?.length ? (
          <>
            <Table className="relative z-10">
              <Table.Body>
                {/* Recent Documents */}
                {allDocuments?.data?.map((item, index) => (
                  <Table.Row
                    className="text-darkgray2 border-b fw-medium"
                    key={index}
                  >
                    <Table.Cell
                      className={`py-4 border-b pl-3 ${
                        index === 1 ? "border-none" : "border-b"
                      }`}
                    >
                      <div className="flex gap-2 items-center min-w-[150px]">
                        <PictureAsPdfIcon />

                        <p className="text-darkgray2 text-sm font-semibold">
                          {item.name}
                        </p>
                      </div>
                    </Table.Cell>
                    <Table.Cell
                      className={`py-4 border-b ${
                        index === 1 ? "border-none" : "border-b"
                      }`}
                    >
                      <p className="text-lightgray4 text-sm font-normal min-w-[148px]">
                        {`${new Date(item.created_at).getDate()},${new Date(
                          item.created_at
                        ).toLocaleString("en-US", {
                          month: "short"
                        })},${new Date(
                          item.created_at
                        ).getFullYear()}, ${new Date(
                          item.created_at
                        ).toLocaleString("en-US", {
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: true
                        })}`}
                      </p>
                    </Table.Cell>
                    <Table.Cell
                      className={`py-4 border-b pl-3 ${
                        index === 1 ? "border-none" : "border-b"
                      }`}
                    ></Table.Cell>
                    <Table.Cell
                      className={`py-4 border-b pl-3 ${
                        index === 1 ? "border-none" : "border-b"
                      }`}
                    >
                      <div className="flex gap-2 md:gap-4 items-center justify-end">
                        <button
                          onClick={() => viewDocument(item.id)}
                          className="text-sm py-1 px-2 border border-gray-300 bg-white text-gray-600 rounded-lg"
                        >
                          View
                        </button>

                        <RiDeleteBin5Line
                          onClick={() => {
                            handleDelete(item.id);
                          }}
                          stroke="red-code"
                          className="text-red-code cursor-pointer"
                        />
                      </div>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
            <div className="flex justify-center mt-3">
              <Pagination
                currentPage={allDocuments?.page || 1}
                totalPages={allDocuments?.total_pages || 1}
                onPageChange={onPageChange}
              />
            </div>
          </>
        ) : (
          <div className="flex justify-center my-12">
            <p className="text-center text-gray-500">No Documents Available</p>
          </div>
        )}

        {/*} {!hideUpload && (
          <Table className='relative z-10'>
            <Table.Body className=''>
              {dummyData.map((item) => (
                <Table.Row
                  className='text-darkgray2 fw-medium'
                  key={item.id}
                >
                  <Accordion expanded={isAccordianClicked === item.id}>
                    <div className='flex'>
                      <AccordionSummary
                        // expandIcon={<GridExpandMoreIcon />}
                        aria-controls='panel1-content'
                        id='panel1-header'
                        className='!m-0'
                        onClick={handleAccordionClick(item.id)}
                      >
                        <Table.Cell className='py-4 border-b pl-3'>
                          <div className='flex gap-2 items-center min-w-[200px]'>
                            {item.images.length !== 1 && (
                              <svg
                                stroke='currentColor'
                                fill='currentColor'
                                stroke-width='0'
                                viewBox='0 0 20 20'
                                aria-hidden='true'
                                className={`h-6 w-6 shrink-0 ${
                                  isAccordianClicked === item.id
                                    ? 'rotate-0'
                                    : '-rotate-90'
                                }`}
                                data-testid='flowbite-accordion-arrow'
                                height='1em'
                                width='1em'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  fill-rule='evenodd'
                                  d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                                  clip-rule='evenodd'
                                ></path>
                              </svg>
                            )}

                            <img
                              src='/assets/images/movie_creation.png'
                              width={24}
                              height={24}
                              className='w-8 h-8'
                            />

                            <p className='text-darkgray2 text-sm font-semibold'>
                              {item.images.length === 1
                                ? item.images
                                : item.images.length + ' ' + 'images'}
                            </p>
                          </div>
                        </Table.Cell>
                        <Table.Cell className='py-4 border-b pl-3'>
                          <p className='text-lightgray4 text-sm font-normal min-w-[168px]'>
                            {item.createdAt}
                          </p>
                        </Table.Cell>
                        <Table.Cell className='py-4 border-b pl-3'>
                          <div className='flex items-center gap-2'>
                            <img
                              src='/assets/images/folder.png'
                              width={16}
                              height={16}
                              className='w-4 h-4'
                            />
                            <p className='text-lightgray4 text-sm font-medium'>
                              References
                            </p>
                          </div>
                        </Table.Cell>
                      </AccordionSummary>

                      {item.images.length === 1 && (
                        <Table.Cell
                          className={`"py-4 border-b pl-3" 
     
                         `}
                        >
                          <Dropdown
                            label=''
                            dismissOnClick={false}
                            renderTrigger={() => (
                              <span className='inline-block cursor-pointer'>
                                <MoreHorizOutlinedIcon />
                              </span>
                            )}
                            onClick={(e) => e.stopPropagation()}
                            className='bg-white border-0 text-gray-dark'
                          >
                            <Dropdown.Item className=' min-w-[168px]'>
                              Edit
                            </Dropdown.Item>
                            <Dropdown.Item className=' min-w-[168px]'>
                              Delete
                            </Dropdown.Item>
                            {/* <Dropdown.Item className=" min-w-[168px]">
                         Point 1
                       </Dropdown.Item>
                       <Dropdown.Item className=" min-w-[168px]">
                         Point 1
                       </Dropdown.Item> */}
        {/*   </Dropdown>
                        </Table.Cell>
                      )}
                    </div>

                    <AccordionDetails className='border-b'>
                      {item?.images.map((img, index) => (
                        <Table.Row className='text-darkgray2 border-b fw-medium'>
                          <Table.Cell
                            className={`"py-4 border-b pl-3" ${
                              index === item.images.length - 1
                                ? 'border-none'
                                : 'border-b'
                            }`}
                          >
                            <div className='flex gap-2 items-center min-w-[150px]'>
                              <img
                                src='/assets/images/movie_creation.png'
                                width={24}
                                height={24}
                                className='w-8 h-8'
                              />

                              <p className='text-darkgray2 text-sm font-semibold'>
                                {img}
                              </p>
                            </div>
                          </Table.Cell>
                          <Table.Cell
                            className={`"py-4 border-b " ${
                              index === item.images.length - 1
                                ? 'border-none'
                                : 'border-b'
                            }`}
                          >
                            <p className='text-lightgray4 text-sm font-normal min-w-[148px]'>
                              {item.createdAt}
                            </p>
                          </Table.Cell>
                          <Table.Cell
                            className={`"py-4 border-b pl-3" ${
                              index === item.images.length - 1
                                ? 'border-none'
                                : 'border-b'
                            }`}
                          >
                            <div className='flex items-center gap-2'>
                              <img
                                src='/assets/images/folder.png'
                                width={16}
                                height={16}
                                className='w-4 h-4'
                              />
                              <p className='text-lightgray4 text-sm font-medium'>
                                References
                              </p>
                            </div>
                          </Table.Cell>

                          <Table.Cell
                            className={`"py-4 border-b pl-3" ${
                              index === item.images.length - 1
                                ? 'border-none'
                                : 'border-b'
                            }`}
                          >
                            <Dropdown
                              label=''
                              dismissOnClick={false}
                              renderTrigger={() => (
                                <span className='inline-block cursor-pointer'>
                                  <MoreHorizOutlinedIcon />
                                </span>
                              )}
                              onClick={(e) => e.stopPropagation()}
                              className='bg-white border-0 text-gray-dark'
                            >
                              <Dropdown.Item className=' min-w-[168px]'>
                                Edit
                              </Dropdown.Item>
                              <Dropdown.Item className=' min-w-[168px]'>
                                Delete
                              </Dropdown.Item>
                            </Dropdown>
                          </Table.Cell>
                        </Table.Row>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        )}*/}
      </div>
    </div>
  );
}

export default ViewDocuments;
