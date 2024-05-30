"use client";
import React, { useState } from "react";
import { Dropdown } from "flowbite-react";
import { Tabs } from "flowbite-react";
import { Table } from "flowbite-react";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ManageRoles = () => {
  const [activeTab, setActiveTab] = useState("active");
  return (
    <div className="content-right-inner min-h-vhcalc92px overflow-y-auto max-h-vhcalc92px lg:px-8 px-4 md:py-7 py-4 bg-lightgray">
      <Tabs
        aria-label="Default tabs"
        style="default"
        className="bg-transparent border-0 tabs-cs"
      >
        <Tabs.Item active title="ACTIVE (35)">
          <div className="bg-white py-5 rounded-[20px] px-7">
            <div className="overflow-x-auto min-h-50vh">
              <Table className="relative z-10">
                <Table.Head className="text-lightgray4">
                  <Table.HeadCell className="pl-0 bg-transparent py-4 normal-case text-sm font-semibold">
                    Name
                  </Table.HeadCell>
                  <Table.HeadCell className="pl-0 bg-transparent py-4 normal-case text-sm font-semibold">
                    Status
                  </Table.HeadCell>
                  <Table.HeadCell className="pl-0 bg-transparent py-4 normal-case text-sm font-semibold">
                    Role Type
                  </Table.HeadCell>
                  <Table.HeadCell className="pl-0 bg-transparent py-4 normal-case text-sm font-semibold">
                    Members
                  </Table.HeadCell>
                  <Table.HeadCell className="pl-0 bg-transparent py-4 normal-case text-sm font-semibold">
                    Permissions
                  </Table.HeadCell>
                  <Table.HeadCell className="pl-0 bg-transparent py-4 normal-case text-sm font-semibold"></Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  <Table.Row className="text-darkgray2 fw-medium">
                    <Table.Cell className="py-5 border-b pl-0">
                      HS Super Admin
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0">
                      Active
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0">
                      Default
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0">
                      <a
                        href="#"
                        className="font-medium text-mediumgreen underline"
                      >
                        1
                      </a>
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0">
                      <a
                        href="#"
                        className="font-medium text-mediumblue underline"
                      >
                        View
                      </a>
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0 text-end">
                      <Dropdown
                        label=""
                        dismissOnClick={false}
                        renderTrigger={() => (
                          <span className="inline-block cursor-pointer">
                            <MoreVertIcon />
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
                    <Table.Cell className="py-5 border-b pl-0">
                      HS Super Admin
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0 min-w-[168px]">
                      Active
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0">
                      Default
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0">
                      <a
                        href="#"
                        className="font-medium text-mediumgreen underline"
                      >
                        1
                      </a>
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0">
                      <a
                        href="#"
                        className="font-medium text-mediumblue underline"
                      >
                        View
                      </a>
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0 text-end">
                      <Dropdown
                        label=""
                        dismissOnClick={false}
                        renderTrigger={() => (
                          <span className="inline-block cursor-pointer">
                            <MoreVertIcon />
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
                    <Table.Cell className="py-5 border-b pl-0">
                      HS Super Admin
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0 min-w-[168px]">
                      Active
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0">
                      Default
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0">
                      <a
                        href="#"
                        className="font-medium text-mediumgreen underline"
                      >
                        500
                      </a>
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0">
                      <a
                        href="#"
                        className="font-medium text-mediumblue underline"
                      >
                        View
                      </a>
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0 text-end">
                      <Dropdown
                        label=""
                        dismissOnClick={false}
                        renderTrigger={() => (
                          <span className="inline-block cursor-pointer">
                            <MoreVertIcon />
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
                    <Table.Cell className="py-5 border-b pl-0">
                      HS Super Admin
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0 min-w-[168px]">
                      Active
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0">
                      Default
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0">
                      <a
                        href="#"
                        className="font-medium text-mediumgreen underline"
                      >
                        1
                      </a>
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0">
                      <a
                        href="#"
                        className="font-medium text-mediumblue underline"
                      >
                        View
                      </a>
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0 text-end">
                      <Dropdown
                        label=""
                        dismissOnClick={false}
                        renderTrigger={() => (
                          <span className="inline-block cursor-pointer">
                            <MoreVertIcon />
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
                    <Table.Cell className="py-5 border-b pl-0">
                      HS Super Admin
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0 min-w-[168px]">
                      Active
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0">
                      Default
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0">
                      <a
                        href="#"
                        className="font-medium text-mediumgreen underline"
                      >
                        675
                      </a>
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0">
                      <a
                        href="#"
                        className="font-medium text-mediumblue underline"
                      >
                        View
                      </a>
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0 text-end">
                      <Dropdown
                        label=""
                        dismissOnClick={false}
                        renderTrigger={() => (
                          <span className="inline-block cursor-pointer">
                            <MoreVertIcon />
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
                    <Table.Cell className="py-5 border-b pl-0">
                      HS Super Admin
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0 min-w-[168px]">
                      Active
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0">
                      Default
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0">
                      <a
                        href="#"
                        className="font-medium text-mediumgreen underline"
                      >
                        675
                      </a>
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0">
                      <a
                        href="#"
                        className="font-medium text-mediumblue underline"
                      >
                        View/Modify
                      </a>
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0 text-end">
                      <Dropdown
                        label=""
                        dismissOnClick={false}
                        renderTrigger={() => (
                          <span className="inline-block cursor-pointer">
                            <MoreVertIcon />
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
        </Tabs.Item>
        <Tabs.Item title="INACTIVE">
          <div className="bg-white py-5 rounded-[20px] px-7">
            <div className="overflow-x-auto min-h-50vh">
              <Table className="relative z-10">
                <Table.Head className="text-lightgray4">
                  <Table.HeadCell className="pl-0 bg-transparent py-4 normal-case text-sm font-semibold">
                    Name
                  </Table.HeadCell>
                  <Table.HeadCell className="pl-0 bg-transparent py-4 normal-case text-sm font-semibold">
                    Status
                  </Table.HeadCell>
                  <Table.HeadCell className="pl-0 bg-transparent py-4 normal-case text-sm font-semibold">
                    Role Type
                  </Table.HeadCell>
                  <Table.HeadCell className="pl-0 bg-transparent py-4 normal-case text-sm font-semibold">
                    Members
                  </Table.HeadCell>
                  <Table.HeadCell className="pl-0 bg-transparent py-4 normal-case text-sm font-semibold">
                    Permissions
                  </Table.HeadCell>
                  <Table.HeadCell className="pl-0 bg-transparent py-4 normal-case text-sm font-semibold"></Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  <Table.Row className="text-darkgray2 fw-medium">
                    <Table.Cell className="py-5 border-b pl-0">
                      HS Super Admin
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0 ">
                      Inactive
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0">
                      Default
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0">
                      <a
                        href="#"
                        className="font-medium text-mediumgreen underline"
                      >
                        1
                      </a>
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0">
                      <a
                        href="#"
                        className="font-medium text-mediumblue underline"
                      >
                        View
                      </a>
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0 text-end">
                      <Dropdown
                        label=""
                        dismissOnClick={false}
                        renderTrigger={() => (
                          <span className="inline-block cursor-pointer">
                            <MoreVertIcon />
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
                    <Table.Cell className="py-5 border-b pl-0">
                      HS Super Admin
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0 min-w-[168px]">
                      Inactive
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0">
                      Default
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0">
                      <a
                        href="#"
                        className="font-medium text-mediumgreen underline"
                      >
                        1
                      </a>
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0">
                      <a
                        href="#"
                        className="font-medium text-mediumblue underline"
                      >
                        View
                      </a>
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0 text-end">
                      <Dropdown
                        label=""
                        dismissOnClick={false}
                        renderTrigger={() => (
                          <span className="inline-block cursor-pointer">
                            <MoreVertIcon />
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
                    <Table.Cell className="py-5 border-b pl-0">
                      HS Super Admin
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0">
                      Inactive
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0">
                      Default
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0">
                      <a
                        href="#"
                        className="font-medium text-mediumgreen underline"
                      >
                        500
                      </a>
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0">
                      <a
                        href="#"
                        className="font-medium text-mediumblue underline"
                      >
                        View
                      </a>
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0 text-end">
                      <Dropdown
                        label=""
                        dismissOnClick={false}
                        renderTrigger={() => (
                          <span className="inline-block cursor-pointer">
                            <MoreVertIcon />
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
                    <Table.Cell className="py-5 border-b pl-0">
                      HS Super Admin
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0">
                      Inactive
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0">
                      Default
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0">
                      <a
                        href="#"
                        className="font-medium text-mediumgreen underline"
                      >
                        1
                      </a>
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0">
                      <a
                        href="#"
                        className="font-medium text-mediumblue underline"
                      >
                        View
                      </a>
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0 text-end">
                      <Dropdown
                        label=""
                        dismissOnClick={false}
                        renderTrigger={() => (
                          <span className="inline-block cursor-pointer">
                            <MoreVertIcon />
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
                    <Table.Cell className="py-5 border-b pl-0">
                      HS Super Admin
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0">
                      Inactive
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0">
                      Default
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0">
                      <a
                        href="#"
                        className="font-medium text-mediumgreen underline"
                      >
                        675
                      </a>
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0">
                      <a
                        href="#"
                        className="font-medium text-mediumblue underline"
                      >
                        View
                      </a>
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0 text-end">
                      <Dropdown
                        label=""
                        dismissOnClick={false}
                        renderTrigger={() => (
                          <span className="inline-block cursor-pointer">
                            <MoreVertIcon />
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
                    <Table.Cell className="py-5 border-b pl-0">
                      HS Super Admin
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0">
                      Inactive
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0">
                      Default
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0">
                      <a
                        href="#"
                        className="font-medium text-mediumgreen underline"
                      >
                        675
                      </a>
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0">
                      <a
                        href="#"
                        className="font-medium text-mediumblue underline"
                      >
                        View/Modify
                      </a>
                    </Table.Cell>
                    <Table.Cell className="py-5 border-b pl-0 text-end">
                      <Dropdown
                        label=""
                        dismissOnClick={false}
                        renderTrigger={() => (
                          <span className="inline-block cursor-pointer">
                            <MoreVertIcon />
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
        </Tabs.Item>
      </Tabs>
    </div>
  );
};

export default ManageRoles;
