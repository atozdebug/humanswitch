import { Button, Drawer } from 'flowbite-react';
import { useState } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Checkbox } from 'flowbite-react';
import { Dropdown, Flowbite, Pagination, Spinner, Table } from 'flowbite-react';
import { useDispatch } from 'react-redux';
import { getFaqs } from '../../services/slices/knowledge_base/faq';
import { getDocuments } from '../../services/slices/knowledge_base/document';
export function LinkDocumentKnowledge({
  allDocuments,
  selectedDocuments,
  setSelectedDocuments,
  isOpen,
  setIsOpen,
}) {
  const dispatch = useDispatch();

  const handleClose = () => setIsOpen(false);

  const onPageChange = (page: number) => {
    dispatch(getDocuments({ page: page }));
  };

  const handleMultipleChecked = (e, doc) => {
    if (e.target.checked) {
      setSelectedDocuments([...selectedDocuments, doc]);
    } else {
      setSelectedDocuments(
        selectedDocuments.filter((selectedDoc) => selectedDoc.id !== doc.id)
      );
    }
  };

  return (
    <>
      <button
        type='button'
        onClick={() => setIsOpen(true)}
        className='my-2 flex items-center gap-2 border border-span-clr text-span-clr text-sm font-medium px-4 py-[6px] rounded-lg w-fit'
      >
        <AddCircleOutlineIcon className='w-[15px]' /> Add Document Knowledge
      </button>
      <Drawer
        open={isOpen}
        onClose={handleClose}
        className='max-h-[100vh] h-full w-2/5'
        position='right'
      >
        <p>
          <AddCircleOutlineIcon className='w-[15px]' /> Add Document Knowledge
        </p>
        <Drawer.Items>
          <Table className='!static cursor-pointer '>
            <Table.Body className='divide-y'>
              {allDocuments &&
                allDocuments?.data?.map((doc, index) => {
                  const isChecked = selectedDocuments.some(
                    (selectedDoc) => selectedDoc.id === doc.id
                  );

                  return (
                    <Table.Row
                      className='bg-white dark:border-gray-700 dark:bg-gray-800'
                      key={doc?.id}
                    >
                      <Table.Cell className='whitespace-nowrap font-medium text-main-heading text-sm dark:text-black'>
                        <div className='flex items-center gap-3'>
                          <Checkbox
                            onChange={(e) => handleMultipleChecked(e, doc)}
                            checked={isChecked}
                            disabled={!doc.is_trained}
                            className='bg-white outline-none focus:ring-transparent cursor-pointer'
                          />
                          {doc?.name}
                        </div>
                      </Table.Cell>

                      <Table.Cell className='flex justify-end gap-2'>
                        {doc?.is_trained ? <p></p> : <p>Not Trained</p>}
                      </Table.Cell>
                    </Table.Row>
                  );
                })}
            </Table.Body>
          </Table>
          <div className='flex justify-center mt-3'>
            <Pagination
              currentPage={allDocuments?.page || 1}
              totalPages={allDocuments?.total_pages || 1}
              onPageChange={onPageChange}
            />
          </div>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
