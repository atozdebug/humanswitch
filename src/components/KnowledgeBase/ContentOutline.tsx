import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { Dropdown, Table } from 'flowbite-react';
import { useState } from 'react';
import { FaFolder, FaQuestionCircle } from 'react-icons/fa';
import { IoDocumentTextOutline } from 'react-icons/io5';

function ContentOutline() {
  const [hideOutLine, setHideOutline] = useState(false);
  const data = [
    {
      name: 'Customer  Support',
      icon: (
        <FaFolder
          className='w-6 h-6'
          fill='#FFA043'
        />
      ),
      type: 'folder',
    },
    {
      name: 'FAQ-Security',
      icon: <FaQuestionCircle className='w-6 h-6 fill-success2' />,
      type: 'faq',
    },
    {
      name: 'What is ChatBot?.doc',
      icon: (
        <IoDocumentTextOutline
          fill='#00A5FF'
          stroke='#00A5FF'
          className='w-6 h-6'
        />
      ),
      type: 'pdf',
    },
    {
      name: 'Documentation',
      icon: (
        <FaFolder
          className='w-6 h-6'
          fill='#FFA043'
        />
      ),
      type: 'folder',
    },
  ];
  return (
    <div className='pt-8'>
      <div className='overflow-x-auto'>
        <div className='flex gap-2 text-sm font-semibold justify-between items-center text-darkgray2 pb-3 border-b'>
          <p>Content Outline</p>
          <p
            onClick={() => setHideOutline(!hideOutLine)}
            className='cursor-pointer'
          >
            {hideOutLine ? 'Unhide' : 'Hide'}
          </p>
        </div>

        {!hideOutLine && (
          <Table className='relative z-10'>
            <Table.Body className='divide-y'>
              {data?.map((item, index) => (
                <Table.Row
                  className='text-darkgray2 fw-medium'
                  key={index}
                >
                  <Table.Cell className='py-4 border-b pl-3'>
                    <div className='flex gap-2 items-center'>
                      {item.icon}
                      <p className='text-darkgray2 text-sm font-semibold'>
                        {item.name}
                      </p>
                    </div>
                  </Table.Cell>
                  <Table.Cell className='py-4 border-b pl-3 text-end'>
                    <Dropdown
                      label=''
                      dismissOnClick={false}
                      renderTrigger={() => (
                        <span className='inline-block cursor-pointer'>
                          <MoreHorizOutlinedIcon />
                        </span>
                      )}
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
            </Table.Body>
          </Table>
        )}
      </div>
    </div>
  );
}

export default ContentOutline;
