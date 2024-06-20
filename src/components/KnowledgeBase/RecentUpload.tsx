import { Dropdown, Table } from "flowbite-react";
import React from "react";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import type { CustomFlowbiteTheme } from "flowbite-react";

import { Accordion } from "flowbite-react";

function RecentUpload() {
  const dummyData = [
    {
      id: 1,
      images: ["image1", "image2", "image3"],
      createdAt: "june 20,2024",
      references: ["ref1,ref2,ref3"],
    },
    {
      id: 2,
      images: [],
      createdAt: "june 20,2024",
      references: ["ref1,ref2,ref3"],
    },

    {
      id: 3,
      images: ["image1", "image2"],
      createdAt: "june 20,2024",
      references: ["ref1,ref2,"],
    },
    {
      id: 4,
      images: ["image1"],
      createdAt: "june 20,2024",
      references: ["ref1,ref2,ref3"],
    },
  ];

  const customTheme: CustomFlowbiteTheme = {
    content: {
      base: "p-0 first:rounded-t-lg last:rounded-b-lg dark:bg-gray-900",
    },
  };

  return (
    <div className="pt-8">
      <div className="overflow-x-auto">
        <div className="flex gap-2 text-sm font-semibold justify-between items-center text-darkgray2 pb-3 border-b">
          <p>Recent Upload</p>
          <p>Hide</p>
        </div>
        <Table className="relative z-10">
          <Table.Body className="divide-y">
            {dummyData.map((item) => (
              <Table.Row className="text-darkgray2 fw-medium">
                <Accordion collapseAll className=" !p-0">
                  <Accordion.Panel className="  p-0">
                    <Accordion.Title className="hover:!bg-none">
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
                            {item.images.length} images
                          </p>
                        </div>
                      </Table.Cell>
                      <Table.Cell className="py-4 border-b pl-3">
                        <p className="text-lightgray4 text-sm font-medium min-w-[168px]">
                          added {item.createdAt}
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
                    </Accordion.Title>
                    <Accordion.Content>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Flowbite is an open-source library of interactive
                        components built on top of Tailwind CSS including
                        buttons, dropdowns, modals, navbars, and more.
                      </p>
                      <p className="text-gray-500 dark:text-gray-400">
                        Check out this guide to learn how to&nbsp;
                        <a
                          href="https://flowbite.com/docs/getting-started/introduction/"
                          className="text-cyan-600 hover:underline dark:text-cyan-500"
                        >
                          get started&nbsp;
                        </a>
                        and start developing websites even faster with
                        components on top of Tailwind CSS.
                      </p>
                    </Accordion.Content>
                  </Accordion.Panel>
                </Accordion>
              </Table.Row>
            ))}

            {/* <Table.Row className="text-darkgray2 fw-medium">
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
            </Table.Row> */}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}

export default RecentUpload;
