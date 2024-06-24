import { Dropdown, Flowbite, Table } from "flowbite-react";
import React, { useState } from "react";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { GridExpandMoreIcon } from "@mui/x-data-grid";
import { boolean } from "yup";

function RecentUpload() {
  const [isAccordianClicked, setIsAccordianClicked] = useState<number | null>(
    null
  );
  const [hideUpload, setHideUpload] = useState<boolean>(false);
  const dummyData = [
    {
      id: 1,
      images: ["image1.png", "image2.png", "image3.jpg"],
      createdAt: "june 20,2024",
      references: ["ref1,ref2,ref3"],
    },
    {
      id: 2,
      images: ["images23.png", "images3.jpg"],
      createdAt: "june 20,2024",
      references: ["ref1,ref2,ref3"],
    },

    {
      id: 3,
      images: ["image1.png", "image2.svg"],
      createdAt: "june 20,2024",
      references: ["ref1,ref2,"],
    },
    {
      id: 4,
      images: ["image.jpg"],
      createdAt: "june 20,2024",
      references: ["ref1,ref2,ref3"],
    },
  ];
  const handleAccordionClick =
    (itemId: number) => (event: React.MouseEvent) => {
      setIsAccordianClicked(isAccordianClicked === itemId ? null : itemId);
    };

  return (
    <div className="pt-8">
      <div className="overflow-x-auto">
        <div className="flex gap-2 text-sm font-semibold justify-between items-center text-darkgray2 pb-3 border-b">
          <p>Recent Upload</p>
          <p
            className="cursor-pointer"
            onClick={() => setHideUpload(!hideUpload)}
          >
            {hideUpload ? "Unhide" : "Hide"}
          </p>
        </div>
        {!hideUpload && (
          <Table className="relative z-10">
            <Table.Body className="">
              {dummyData?.map((item) => (
                <Table.Row className="text-darkgray2 fw-medium" key={item.id}>
                  <Accordion expanded={isAccordianClicked === item.id}>
                    <div className="flex">
                      <AccordionSummary
                        // expandIcon={<GridExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        className="!m-0"
                        onClick={handleAccordionClick(item.id)}
                      >
                        <Table.Cell className="py-4 border-b pl-3">
                          <div className="flex gap-2 items-center min-w-[200px]">
                            {/* <img
                            src="/assets/images/arrow-right-s-line.png"
                            width={24}
                            height={24}
                            className="w-6 h-6"
                          /> */}

                            {item.images.length !== 1 && (
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                                className={`h-6 w-6 shrink-0 ${
                                  isAccordianClicked === item.id
                                    ? "rotate-0"
                                    : "-rotate-90"
                                }`}
                                data-testid="flowbite-accordion-arrow"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                            )}

                            <img
                              src="/assets/images/movie_creation.png"
                              width={24}
                              height={24}
                              className="w-8 h-8"
                            />

                            <p className="text-darkgray2 text-sm font-semibold">
                              {item.images.length === 1
                                ? item.images
                                : item.images.length + " " + "images"}
                            </p>
                          </div>
                        </Table.Cell>
                        <Table.Cell className="py-4 border-b pl-3">
                          <p className="text-lightgray4 text-sm font-normal min-w-[168px]">
                            {item.createdAt}
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
                      </AccordionSummary>

                      {item.images.length === 1 && (
                        <Table.Cell
                          className={`"py-4 border-b pl-3" 
     
                         `}
                        >
                          <Dropdown
                            label=""
                            dismissOnClick={false}
                            renderTrigger={() => (
                              <span className="inline-block cursor-pointer">
                                <MoreHorizOutlinedIcon />
                              </span>
                            )}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white border-0 text-gray-dark"
                          >
                            <Dropdown.Item className=" min-w-[168px]">
                              Edit
                            </Dropdown.Item>
                            <Dropdown.Item className=" min-w-[168px]">
                              Delete
                            </Dropdown.Item>
                            {/* <Dropdown.Item className=" min-w-[168px]">
                         Point 1
                       </Dropdown.Item>
                       <Dropdown.Item className=" min-w-[168px]">
                         Point 1
                       </Dropdown.Item> */}
                          </Dropdown>
                        </Table.Cell>
                      )}
                    </div>

                    <AccordionDetails className="border-b">
                      {item?.images.map((img, index) => (
                        <Table.Row className="text-darkgray2 border-b fw-medium">
                          <Table.Cell
                            className={`"py-4 border-b pl-3" ${
                              index === item.images.length - 1
                                ? "border-none"
                                : "border-b"
                            }`}
                          >
                            <div className="flex gap-2 items-center min-w-[150px]">
                              {/* <img
    src="/assets/images/arrow-right-s-line.png"
    width={24}
    height={24}
    className="w-6 h-6"
  /> */}

                              <img
                                src="/assets/images/movie_creation.png"
                                width={24}
                                height={24}
                                className="w-8 h-8"
                              />

                              <p className="text-darkgray2 text-sm font-semibold">
                                {img}
                              </p>
                            </div>
                          </Table.Cell>
                          <Table.Cell
                            className={`"py-4 border-b " ${
                              index === item.images.length - 1
                                ? "border-none"
                                : "border-b"
                            }`}
                          >
                            <p className="text-lightgray4 text-sm font-normal min-w-[148px]">
                              {item.createdAt}
                            </p>
                          </Table.Cell>
                          <Table.Cell
                            className={`"py-4 border-b pl-3" ${
                              index === item.images.length - 1
                                ? "border-none"
                                : "border-b"
                            }`}
                          >
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

                          <Table.Cell
                            className={`"py-4 border-b pl-3" ${
                              index === item.images.length - 1
                                ? "border-none"
                                : "border-b"
                            }`}
                          >
                            <Dropdown
                              label=""
                              dismissOnClick={false}
                              renderTrigger={() => (
                                <span className="inline-block cursor-pointer">
                                  <MoreHorizOutlinedIcon />
                                </span>
                              )}
                              onClick={(e) => e.stopPropagation()}
                              className="bg-white border-0 text-gray-dark"
                            >
                              <Dropdown.Item className=" min-w-[168px]">
                                Edit
                              </Dropdown.Item>
                              <Dropdown.Item className=" min-w-[168px]">
                                Delete
                              </Dropdown.Item>
                              {/* <Dropdown.Item className=" min-w-[168px]">
                            Point 1
                          </Dropdown.Item>
                          <Dropdown.Item className=" min-w-[168px]">
                            Point 1
                          </Dropdown.Item> */}
                            </Dropdown>
                          </Table.Cell>
                        </Table.Row>
                      ))}

                      {/* <p>{item.images.length} images</p>
                  <span>Added on: {item.createdAt} </span>
                  <p>
                    Refences:{" "}
                    {item.references.map((ref) => (
                      <span>{ref}</span>
                    ))}
                  </p> */}
                    </AccordionDetails>
                  </Accordion>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        )}
      </div>
    </div>
  );
}

export default RecentUpload;
