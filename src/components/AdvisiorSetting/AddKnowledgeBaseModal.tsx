import { useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import CloseIcon from '@mui/icons-material/Close';
import SettingsIcon from '@mui/icons-material/Settings';
import Dropzone from 'react-dropzone';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import { Checkbox, Table } from 'flowbite-react';
import { AiOutlineEdit } from 'react-icons/ai';
import { RiDeleteBin5Line } from 'react-icons/ri';
import UrlandFileCard from './UrlandFileCard';
import UploadCard from './UploadCard';
import LinkUpload from './LinkUpload';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../services/store/store';
import { getDocuments } from '../../services/slices/knowledge_base/document';
import { getFaqs } from '../../services/slices/knowledge_base/faq';
import { getUrls } from '../../services/slices/knowledge_base/urls';
interface AddKnowledgeBaseModalProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
interface Image {
  url: string;
  name: string;
}
const AddKnowledgeBaseModal: React.FC<AddKnowledgeBaseModalProps> = ({
  isModalOpen,
  setIsModalOpen,
}) => {
  const allDocuments = useSelector(
    (state: RootState) => state.document?.getData
  );

  const allUrls = useSelector((state: RootState) => state.url?.getData);
  const allFaqs = useSelector((state: RootState) => state.faq?.getData);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!allDocuments) {
      console.debug(
        'ℹ️ ~ file: knowledgeBase.tsx:25 ~ useEffect ~ allDocuments:',
        allDocuments
      );
      dispatch(getDocuments({ page: 1 }));
    }
  }, [dispatch, allDocuments]);

  useEffect(() => {
    if (!allUrls) {
      dispatch(getUrls({ page: 1 }));
    }
  }, [dispatch, allUrls]);
  useEffect(() => {
    console.info('allFaqs', allFaqs);
    if (!allFaqs) {
      console.info('Enteered', allFaqs);
      dispatch(getFaqs({ page: 1 }));
    }
  }, [dispatch, allFaqs]);

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
  const [selectedType, setSelectedType] = useState<string>('URL');
  const [imageUrl, setImageURL] = useState([]);

  const [links, setLinks] = useState([]);

  const [images, setImages] = useState<Image[]>([]);

  function handleclose() {
    setIsModalOpen(false);
    return isModalOpen;
  }
  //handle multiple check
  const handleMultipleChecked = (e, id) => {
    const isChecked = e.target.checked;

    if (isChecked) {
      // Add the checked item's ID to the checkedItems array
      setCheckedItems((prevCheckedItems) => [...prevCheckedItems, id]);
    } else {
      // Remove the unchecked item's ID from the checkedItems array
      setCheckedItems((prevCheckedItems) =>
        prevCheckedItems.filter((itemId) => itemId !== id)
      );
    }
  };
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
          <Box sx={style}>
            <div className='flex justify-between p-4 '>
              <div className='flex gap-4'>
                <span className=' flex items-center justify-center rounded-[50%] border h-[37px] w-[37px] text-center'>
                  <SettingsIcon className='text-gray-dark !w-5 !h-5' />
                </span>
                <div className='flex flex-col gap-1 '>
                  <h4 className='text-sm font-medium text-darkgray3'>
                    Add Knowledge Base
                  </h4>
                  <p className='text-xs font-normal text-gray-dark'>
                    Your bot will answer based on the added knowledge base.
                  </p>
                </div>
              </div>
              <CloseIcon
                className='!w-4 !h-4 text-gray-dark cursor-pointer'
                onClick={() => setIsModalOpen(false)}
              />
            </div>
            <hr />
            <div className='p-4 flex flex-col gap-3'>
              <h4 className='font-medium text-main-heading text-base'>
                {' '}
                Choose one of the following:
              </h4>
              <div className='flex gap-4 '>
                <UrlandFileCard
                  type={'URL'}
                  subHeading={'Add a url for the content'}
                  setSelectedType={setSelectedType}
                  selectedType={selectedType}
                />
                <UrlandFileCard
                  type={'File'}
                  subHeading={'Upload .pdf files.'}
                  setSelectedType={setSelectedType}
                  selectedType={selectedType}
                />
                <UrlandFileCard
                  type={'FAQs'}
                  subHeading={'Upload .pdf files.'}
                  setSelectedType={setSelectedType}
                  selectedType={selectedType}
                />
              </div>

              {selectedType === 'File' && (
                <Table className='!static cursor-pointer '>
                  <Table.Body className='divide-y'>
                    {allDocuments &&
                      allDocuments?.data?.map((doc, index) => {
                        return (
                          <Table.Row
                            className='bg-white dark:border-gray-700 dark:bg-gray-800'
                            key={doc?.id}
                          >
                            <Table.Cell className='whitespace-nowrap font-medium text-main-heading text-sm dark:text-black'>
                              <div className='flex items-center gap-3'>
                                <Checkbox
                                  onChange={(e) =>
                                    handleMultipleChecked(e, doc.id)
                                  }
                                  disabled={!doc.is_trained}
                                  className='bg-white outline-none focus:ring-transparent cursor-pointer'
                                />

                                <span
                                  className={`h-5 w-5 rounded-[50%] flex items-center justify-center`}
                                ></span>
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
              )}
            </div>
            <hr />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default AddKnowledgeBaseModal;
