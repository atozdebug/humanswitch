import React from "react";
import { Table } from "flowbite-react";
import { Dropdown } from "flowbite-react";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

const KnowledgeBase = () => {
  return (
    <>
      <div className="content-right-inner min-h-vhcalc92px overflow-y-auto max-h-vhcalc92px lg:px-8 px-4 md:py-7 py-4 bg-lightgray">
        <div className="knowledge-inner bg-white rounded-[20px] lg:p-6 p-4">
          <ul className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
            <li className="grid-item xl:col-span-3 md:col-span-2">
              <div className="xl:max-w-p90 max-w-808">
                <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 ">
                  <div className="grid-item p-3 rounded-[10px] bg-lightgray7">
                    <img
                      src="/assets/images/folder.png"
                      width={16}
                      height={16}
                      className="w-9 h-9"
                    />
                    <p className="text-sm font-semibold mt-3">Category</p>
                    <p className="text-xs text-lightgray4 pt-2px">
                      23 Oct 2021
                    </p>
                  </div>
                  {/* ======================== */}
                  <div className="grid-item p-3 rounded-[10px] bg-lightgray7">
                    <img
                      src="/assets/images/folder.png"
                      width={16}
                      height={16}
                      className="w-9 h-9"
                    />
                    <p className="text-sm font-semibold mt-3">Category</p>
                    <p className="text-xs text-lightgray4 pt-2px">
                      23 Oct 2021
                    </p>
                  </div>
                  {/* ======================== */}
                  <div className="grid-item p-3 rounded-[10px] bg-lightgray7">
                    <img
                      src="/assets/images/folder.png"
                      width={16}
                      height={16}
                      className="w-9 h-9"
                    />
                    <p className="text-sm font-semibold mt-3">Category</p>
                    <p className="text-xs text-lightgray4 pt-2px">
                      23 Oct 2021
                    </p>
                  </div>
                  {/* ======================== */}
                  <div className="grid-item p-3 rounded-[10px] bg-lightgray7">
                    <img
                      src="/assets/images/pdf-File.png"
                      width={16}
                      height={16}
                      className="w-9 h-9"
                    />

                    <p className="text-sm font-semibold mt-3">
                      What is AI Readiness?
                    </p>
                    <p className="text-xs text-lightgray4 pt-2px">
                      23 Oct 2021
                    </p>
                  </div>
                  {/* ======================== */}
                </div>
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
                              <p className="text-darkgray2 text-sm font-semibold">
                                Design
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
              </div>
            </li>
            <li className="grid-item xl:col-span-1 md:col-span-2">
              <div className="text-center xl:pt-10">
                <img
                  src="assets/images/chart-image.png"
                  alt=""
                  width={216}
                  className="mx-auto"
                />
              </div>
              <div>
                <div className="overflow-x-auto pt-20 ">
                  <Table className="relative z-10">
                    <Table.Body className=" !border-0">
                      <Table.Row className="text-darkgray2 fw-medium !border-0">
                        <Table.Cell className="pb-6 pt-0 !border-y-0 pl-0 pr-3">
                          <div className="flex justify-start items-center px-0">
                            <span className="bg-lightblue2 w-42px h-42px flex justify-center items-center text-gray-dark rounded-md">
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M5.00001 1.6665H11.6667L16.6667 6.6665V16.6665C16.6667 17.5832 15.9167 18.3332 15 18.3332H4.99168C4.07501 18.3332 3.33334 17.5832 3.33334 16.6665L3.34168 3.33317C3.34168 2.4165 4.08334 1.6665 5.00001 1.6665ZM6.66668 14.9998H13.3333V13.3332H6.66668V14.9998ZM13.3333 11.6665H6.66668V9.99984H13.3333V11.6665ZM10.8333 2.9165V7.49984H15.4167L10.8333 2.9165Z"
                                  fill="#00A5FF"
                                />
                              </svg>
                            </span>
                            <div className="pl-3">
                              <h2 className="text-darkgray2 text-base font-medium">
                                Documents
                              </h2>
                              <p className="text-lightgray4 text-xs">
                                120 files
                              </p>
                            </div>
                          </div>
                        </Table.Cell>
                        <Table.Cell className="pb-6 pt-0 text-lightgray4 text-sm !border-y-0 px-0 text-end">
                          1,2 GB
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row className="text-darkgray2 fw-medium !border-0">
                        <Table.Cell className="pb-6 pt-0 !border-y-0 pl-0 pr-3">
                          <div className="flex justify-start items-center px-0">
                            <span className="bg-lightblue3 w-42px h-42px flex justify-center items-center text-gray-dark rounded-md">
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M17.5 15.8333V4.16667C17.5 3.25 16.75 2.5 15.8333 2.5H4.16667C3.25 2.5 2.5 3.25 2.5 4.16667V15.8333C2.5 16.75 3.25 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333ZM7.08333 11.25L9.16667 13.7583L12.0833 10L15.8333 15H4.16667L7.08333 11.25Z"
                                  fill="#5542F6"
                                />
                              </svg>
                            </span>
                            <div className="pl-4">
                              <h2 className="text-darkgray2 text-base font-medium">
                                Images
                              </h2>
                              <p className="text-lightgray4 text-xs">
                                98 files
                              </p>
                            </div>
                          </div>
                        </Table.Cell>
                        <Table.Cell className="pb-6 pt-0 text-lightgray4 text-sm !border-y-0 px-0 text-end">
                          5,1 GB
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row className="text-darkgray2 fw-medium">
                        <Table.Cell className="pb-6 pt-0 !border-y-0 pl-0 pr-3">
                          <div className="flex justify-start items-center px-0">
                            <span className="bg-lightgreen2 w-42px h-42px flex justify-center items-center text-gray-dark rounded-md">
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M15 3.3335L16.6667 6.66683H14.1667L12.5 3.3335H10.8333L12.5 6.66683H9.99999L8.33332 3.3335H6.66666L8.33332 6.66683H5.83332L4.16666 3.3335H3.33332C2.41666 3.3335 1.67499 4.0835 1.67499 5.00016L1.66666 15.0002C1.66666 15.9168 2.41666 16.6668 3.33332 16.6668H16.6667C17.5833 16.6668 18.3333 15.9168 18.3333 15.0002V3.3335H15Z"
                                  fill="#20C9AC"
                                />
                              </svg>
                            </span>
                            <div className="pl-3">
                              <h2 className="text-darkgray2 text-base font-medium">
                                Videos
                              </h2>
                              <p className="text-lightgray4 text-xs">
                                23 files
                              </p>
                            </div>
                          </div>
                        </Table.Cell>
                        <Table.Cell className="pb-6 pt-0 text-lightgray4 text-sm !border-y-0 px-0 text-end">
                          3,4 GB
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row className="text-darkgray2 fw-medium">
                        <Table.Cell className="pb-6 pt-0 !border-y-0 pl-0 pr-3">
                          <div className="flex justify-start items-center px-0">
                            <span className="bg-lightorage w-42px h-42px flex justify-center items-center text-gray-dark rounded-md">
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.00001 1.6665C4.08334 1.6665 3.34168 2.4165 3.34168 3.33317L3.33334 16.6665C3.33334 17.5832 4.07501 18.3332 4.99168 18.3332H15C15.9167 18.3332 16.6667 17.5832 16.6667 16.6665V6.6665L11.6667 1.6665H5.00001ZM10.8333 7.49984V2.9165L15.4167 7.49984H10.8333Z"
                                  fill="#FFA043"
                                />
                              </svg>
                            </span>
                            <div className="pl-3">
                              <h2 className="text-darkgray2 text-base font-medium">
                                Other
                              </h2>
                              <p className="text-lightgray4 text-xs">9 files</p>
                            </div>
                          </div>
                        </Table.Cell>
                        <Table.Cell className="pb-6 pt-0 text-lightgray4 text-sm !border-y-0 px-0 text-end">
                          24 MB
                        </Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default KnowledgeBase;
