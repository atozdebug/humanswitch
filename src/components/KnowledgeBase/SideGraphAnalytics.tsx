import { Dropdown, Table } from "flowbite-react";
import React from "react";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { IoDocumentTextOutline } from "react-icons/io5";
import { AiFillFile } from "react-icons/ai";

import { MdMovie } from "react-icons/md";
import { CiFileOn } from "react-icons/ci";

import { IoMdImage } from "react-icons/io";

import Chart from "chart.js/auto";
import Doughbut from "./Doughbut";

function SideGraphAnalytics() {
  const data = [
    {
      name: "Document",
      files: 120,
      size: "1.2 GB",
      icon: (
        <IoDocumentTextOutline
          fill="#00A5FF"
          stroke="#00A5FF"
          className="w-5 h-5"
        />
      ),
    },
    {
      name: "Images",
      files: 98,
      size: "5.1 GB",
      icon: <IoMdImage fill="#5542F6" stroke="#5542F6" className="w-5 h-5" />,
    },

    {
      name: "Videos",
      files: 23,
      size: "3.4 GB",
      icon: <MdMovie fill="#20C9AC" stroke="#20C9AC" className="w-5 h-5" />,
    },
    {
      name: "Other",
      files: 24,
      size: "1.2 GB",
      icon: <AiFillFile stroke="#FFA043" fill="#FFA043" className="w-5 h-5" />,
    },
  ];

  return (
    <div>
      {" "}
      <div className="text-center xl:pt-10">
        {/* <img
          src="assets/images/chart-image.png"
          alt=""
          width={216}
          className="mx-auto"
        /> */}
        <Doughbut files={data} />
      </div>
      <div>
        <div className="overflow-x-auto  ">
          <Table className="relative z-10">
            <Table.Body className=" !border-0">
              {data?.map((item) => (
                <Table.Row className="text-darkgray2 fw-medium !border-0">
                  <Table.Cell className="pb-6 pt-0 !border-y-0 pl-0 pr-3">
                    <div className="flex justify-start items-center px-0">
                      <span className="bg-lightblue2 w-42px h-42px flex justify-center items-center text-gray-dark rounded-md">
                        {item.icon}
                      </span>
                      <div className="pl-3">
                        <h2 className="text-darkgray2 text-base font-medium">
                          {item.name}
                        </h2>
                        <p className="text-lightgray4 text-xs">
                          {item.files} files
                        </p>
                      </div>
                    </div>
                  </Table.Cell>
                  <Table.Cell className="pb-6 pt-0 text-lightgray4 text-sm !border-y-0 px-0 text-end">
                    {item.size}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default SideGraphAnalytics;
