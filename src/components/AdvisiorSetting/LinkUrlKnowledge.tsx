import { Button, Drawer } from 'flowbite-react';
import { useState } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Checkbox } from 'flowbite-react';
import { Dropdown, Flowbite, Pagination, Spinner, Table } from 'flowbite-react';
import { useDispatch } from 'react-redux';
import { getFaqs } from '../../services/slices/knowledge_base/faq';
import { getUrls } from '../../services/slices/knowledge_base/urls';
export function LinkUrlKnowledge({ allUrls, selectedUrls, setSelectedUrls }) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => setIsOpen(false);

  const onPageChange = (page: number) => {
    dispatch(getUrls({ page: page }));
  };

  const handleMultipleChecked = (e, url) => {
    if (e.target.checked) {
      setSelectedUrls([...selectedUrls, url]);
    } else {
      setSelectedUrls(
        selectedUrls.filter((selectedUrl) => selectedUrl.id !== url.id)
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
        <AddCircleOutlineIcon className='w-[15px]' /> Add Url Knowledge
      </button>
      <Drawer
        open={isOpen}
        onClose={handleClose}
        className='max-h-[100vh] h-full w-2/5'
        position='right'
      >
        <p>
          <AddCircleOutlineIcon className='w-[15px]' /> Add Url Knowledge
        </p>
        <Drawer.Items>
          <Table className='!static cursor-pointer '>
            <Table.Body className='divide-y'>
              {allUrls &&
                allUrls?.data?.map((url, index) => {
                  const isChecked = selectedUrls.some(
                    (selectedUrl) => selectedUrl.id === url.id
                  );

                  return (
                    <Table.Row
                      className='bg-white dark:border-gray-700 dark:bg-gray-800'
                      key={url?.id}
                    >
                      <Table.Cell className='whitespace-nowrap font-medium text-main-heading text-sm dark:text-black'>
                        <div className='flex items-center gap-3'>
                          <Checkbox
                            onChange={(e) => handleMultipleChecked(e, url)}
                            checked={isChecked}
                            disabled={!url.is_trained}
                            className='bg-white outline-none focus:ring-transparent cursor-pointer'
                          />
                          {url?.title}
                        </div>
                      </Table.Cell>

                      <Table.Cell className='flex justify-end gap-2'>
                        {url?.is_trained ? <p></p> : <p>Not Trained</p>}
                      </Table.Cell>
                    </Table.Row>
                  );
                })}
            </Table.Body>
          </Table>
          <div className='flex justify-center mt-3'>
            <Pagination
              currentPage={allUrls?.page || 1}
              totalPages={allUrls?.total_pages || 1}
              onPageChange={onPageChange}
            />
          </div>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
