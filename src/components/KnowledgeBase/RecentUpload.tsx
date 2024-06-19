import { Dropdown, Table } from "flowbite-react";
import React from "react";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

function RecentUpload() {
  return (
    <div className="pt-8">
      <div className="overflow-x-auto">
        <div className="flex gap-2 text-sm font-semibold justify-between items-center text-darkgray2 pb-3 border-b">
          <p>Recent Upload</p>
          <p>Hide</p>
        </div>
        <Table className="relative z-10">
          <Table.Body className="divide-y">
            <Table.Row className="text-darkgray2 fw-medium">
              <Table.Cell className="py-4 border-b pl-3">
                <div className="flex gap-2 items-center min-w-[200px]">
                  <img
                    src="/assets/images/arrow-right-s-line.png"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  <img
                    src="/assets/images/movie_creation.png"
                    width={24}
                    height={24}
                    className="w-8 h-8"
                  />
                  <p className="text-darkgray2 text-sm font-semibold">
                    4 images
                  </p>
                </div>
              </Table.Cell>
              <Table.Cell className="py-4 border-b pl-3">
                <p className="text-lightgray4 text-sm font-medium min-w-[168px]">
                  added Oct 23, 2021
                </p>
              </Table.Cell>
              <Table.Cell className="py-4 border-b pl-3">
                <div className="flex items-center gap-2">
                  <img
                    src="/assets/images/folder.png"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                  <p className="text-lightgray4 text-sm font-medium">
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
                  <img
                    src="/assets/images/arrow-right-s-line.png"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  <img
                    src="/assets/images/movie_creation.png"
                    width={24}
                    height={24}
                    className="w-8 h-8"
                  />
                  <p className="text-darkgray2 text-sm font-semibold">
                    4 images
                  </p>
                </div>
              </Table.Cell>
              <Table.Cell className="py-4 border-b pl-3">
                <p className="text-lightgray4 text-sm font-medium min-w-[168px]">
                  added Oct 23, 2021
                </p>
              </Table.Cell>
              <Table.Cell className="py-4 border-b pl-3">
                <div className="flex items-center gap-2">
                  <img
                    src="/assets/images/folder.png"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                  <p className="text-lightgray4 text-sm font-medium">
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
                  <img
                    src="/assets/images/arrow-right-s-line.png"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  <img
                    src="/assets/images/pdf-File.png"
                    width={24}
                    height={24}
                    className="w-8 h-8"
                  />
                  <p className="text-darkgray2 text-sm font-semibold">
                    4 images
                  </p>
                </div>
              </Table.Cell>
              <Table.Cell className="py-4 border-b pl-3">
                <p className="text-lightgray4 text-sm font-medium min-w-[168px]">
                  added Oct 23, 2021
                </p>
              </Table.Cell>
              <Table.Cell className="py-4 border-b pl-3">
                <div className="flex items-center gap-2">
                  <img
                    src="/assets/images/folder.png"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                  <p className="text-lightgray4 text-sm font-medium">
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
                  <img
                    src="/assets/images/arrow-right-s-line.png"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                  <img
                    src="/assets/images/movie_creation.png"
                    width={24}
                    height={24}
                    className="w-8 h-8"
                  />
                  <p className="text-darkgray2 text-sm font-semibold">
                    4 images
                  </p>
                </div>
              </Table.Cell>
              <Table.Cell className="py-4 border-b pl-3">
                <p className="text-lightgray4 text-sm font-medium min-w-[168px]">
                  added Oct 23, 2021
                </p>
              </Table.Cell>
              <Table.Cell className="py-4 border-b pl-3">
                <div className="flex items-center gap-2">
                  <img
                    src="/assets/images/folder.png"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                  <p className="text-lightgray4 text-sm font-medium">
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
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}

export default RecentUpload;
