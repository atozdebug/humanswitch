import { Dropdown, Table } from "flowbite-react";
import React from "react";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

function ContentOutline() {
  return (
    <div className="pt-8">
      <div className="overflow-x-auto">
        <div className="flex gap-2 text-sm font-semibold justify-between items-center text-darkgray2 pb-3 border-b">
          <p>Content Outline</p>
          <p>Hide</p>
        </div>
        <Table className="relative z-10">
          <Table.Body className="divide-y">
            <Table.Row className="text-darkgray2 fw-medium">
              <Table.Cell className="py-4 border-b pl-3">
                <div className="flex gap-2 items-center">
                  <img
                    src="/assets/images/folder.png"
                    width={24}
                    height={24}
                    className="w-8 h-8"
                  />
                  <p className="text-darkgray2 text-sm font-semibold">
                    Support Articles
                  </p>
                </div>
              </Table.Cell>
              <Table.Cell className="py-4 border-b pl-3 text-end">
                <Dropdown
                  label=""
                  dismissOnClick={false}
                  renderTrigger={() => (
                    <span className="inline-block cursor-pointer">
                      <MoreHorizOutlinedIcon />
                    </span>
                  )}
                  className="bg-white border-0 text-gray-dark"
                >
                  <Dropdown.Item className=" min-w-[168px]">
                    Point 1
                  </Dropdown.Item>
                  <Dropdown.Item className=" min-w-[168px]">
                    Point 1
                  </Dropdown.Item>
                  <Dropdown.Item className=" min-w-[168px]">
                    Point 1
                  </Dropdown.Item>
                  <Dropdown.Item className=" min-w-[168px]">
                    Point 1
                  </Dropdown.Item>
                </Dropdown>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="text-darkgray2 fw-medium">
              <Table.Cell className="py-4 border-b pl-3">
                <div className="flex gap-2 items-center">
                  <img
                    src="/assets/images/folder.png"
                    width={24}
                    height={24}
                    className="w-8 h-8"
                  />
                  <p className="text-darkgray2 text-sm font-semibold">
                    References
                  </p>
                </div>
              </Table.Cell>
              <Table.Cell className="py-4 border-b pl-3 text-end">
                <Dropdown
                  label=""
                  dismissOnClick={false}
                  renderTrigger={() => (
                    <span className="inline-block cursor-pointer">
                      <MoreHorizOutlinedIcon />
                    </span>
                  )}
                  className="bg-white border-0 text-gray-dark"
                >
                  <Dropdown.Item className=" min-w-[168px]">
                    Point 1
                  </Dropdown.Item>
                  <Dropdown.Item className=" min-w-[168px]">
                    Point 1
                  </Dropdown.Item>
                  <Dropdown.Item className=" min-w-[168px]">
                    Point 1
                  </Dropdown.Item>
                  <Dropdown.Item className=" min-w-[168px]">
                    Point 1
                  </Dropdown.Item>
                </Dropdown>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="text-darkgray2 fw-medium">
              <Table.Cell className="py-4 border-b pl-3">
                <div className="flex gap-2 items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6 2H14L20 8V20C20 21.1 19.1 22 18 22H5.99C4.89 22 4 21.1 4 20L4.01 4C4.01 2.9 4.9 2 6 2ZM8 18H16V16H8V18ZM16 14H8V12H16V14ZM13 3.5V9H18.5L13 3.5Z"
                      fill="#00A5FF"
                    />
                  </svg>

                  <p className="text-darkgray2 text-sm font-semibold">
                    What is AI Readiness?.doc
                  </p>
                </div>
              </Table.Cell>
              <Table.Cell className="py-4 border-b pl-3 text-end">
                <Dropdown
                  label=""
                  dismissOnClick={false}
                  renderTrigger={() => (
                    <span className="inline-block cursor-pointer">
                      <MoreHorizOutlinedIcon />
                    </span>
                  )}
                  className="bg-white border-0 text-gray-dark"
                >
                  <Dropdown.Item className=" min-w-[168px]">
                    Point 1
                  </Dropdown.Item>
                  <Dropdown.Item className=" min-w-[168px]">
                    Point 1
                  </Dropdown.Item>
                  <Dropdown.Item className=" min-w-[168px]">
                    Point 1
                  </Dropdown.Item>
                  <Dropdown.Item className=" min-w-[168px]">
                    Point 1
                  </Dropdown.Item>
                </Dropdown>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="text-darkgray2 fw-medium">
              <Table.Cell className="py-4 border-b pl-3">
                <div className="flex gap-2 items-center">
                  <img
                    src="/assets/images/folder.png"
                    width={24}
                    height={24}
                    className="w-8 h-8"
                  />
                  <p className="text-darkgray2 text-sm font-semibold">Design</p>
                </div>
              </Table.Cell>
              <Table.Cell className="py-4 border-b pl-3 text-end">
                <Dropdown
                  label=""
                  dismissOnClick={false}
                  renderTrigger={() => (
                    <span className="inline-block cursor-pointer">
                      <MoreHorizOutlinedIcon />
                    </span>
                  )}
                  className="bg-white border-0 text-gray-dark"
                >
                  <Dropdown.Item className=" min-w-[168px]">
                    Point 1
                  </Dropdown.Item>
                  <Dropdown.Item className=" min-w-[168px]">
                    Point 1
                  </Dropdown.Item>
                  <Dropdown.Item className=" min-w-[168px]">
                    Point 1
                  </Dropdown.Item>
                  <Dropdown.Item className=" min-w-[168px]">
                    Point 1
                  </Dropdown.Item>
                </Dropdown>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}

export default ContentOutline;
