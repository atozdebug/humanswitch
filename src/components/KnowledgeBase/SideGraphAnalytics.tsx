import { Dropdown, Table } from "flowbite-react";
import React from "react";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

function SideGraphAnalytics() {
  return (
    <div>
      {" "}
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
                      <p className="text-lightgray4 text-xs">120 files</p>
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
                      <p className="text-lightgray4 text-xs">98 files</p>
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
                      <p className="text-lightgray4 text-xs">23 files</p>
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
    </div>
  );
}

export default SideGraphAnalytics;
