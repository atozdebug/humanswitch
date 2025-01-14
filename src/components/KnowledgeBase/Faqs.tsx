import React, { useState } from "react";
import { Checkbox, Table } from "flowbite-react";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Divider } from "@mui/material";
import ModalBox from "./ModalBox";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

import EditModal from "./EditModal";
import ButtonsAndtoggle from "./ButtonsAndtoggle";

interface Question {
  id: number | string;
  question: string;
  ans: string;
  categories: string[];
}

function Faqs() {
  const questionsDemo: Question[] = [
    {
      id: 1,
      question: "Who are you?",
      ans: "i am no ",
      categories: ["bike", "car", "tesla", "motor"],
    },
    {
      id: 2,
      question: "hey what are you doing?",
      ans: "Nothing ",
      categories: ["inro", "there", "tesla", "motor"],
    },
    {
      id: 3,
      question: "what is company?",
      ans: "omapny ",
      categories: ["IT", "Service", "Product", "motor"],
    },

    {
      id: 4,
      question: "Where is Earth ?",
      ans: "Aia ",
      categories: ["earth", "Mati", "tesla", "motor"],
    },
  ];
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [questions, setQuestions] = useState<Question[]>(questionsDemo);
  const [filteredQuestions, setFilteredQuestions] =
    useState<Question[]>(questionsDemo);
  const [editdata, setEditData] = useState<Question[]>([]);
  const [checkedItems, setCheckedItems] = useState<Question[]>([]);
  console.log("🚀 ~ file: Faqs.tsx:55 ~ Faqs ~ checkedItems:", checkedItems);

  const colors = [
    { dark: "#C2540A", Light: "#FEF3EB" },
    { dark: "#375DFB", Light: "#EBF1FF" },

    { dark: "#2D9F75", Light: "#EFFAF6" },

    { dark: "#5A36BF", Light: "#EEEBFF" },
    { dark: "#9C23A9", Light: "#FDEBFF" },
  ];

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const filter = questions?.filter((qsn) =>
      qsn.question.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredQuestions(filter);
    console.log("🚀 ~ file: Faqs.tsx:29 ~ handleSearch ~ filter:", filter);
  }
  const handleDelete = (id: number): void => {
    const filter = questions?.filter((item) => item.id !== id);
    setFilteredQuestions(filter);
    setQuestions(filter);
  };

  const handleEdit = (id: number): void => {
    console.log("edit cliccked");
    const filter = questions?.filter((item) => item.id == id);
    setEditData(filter);
    setIsEditModalOpen(true);
  };

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
  //multiple delete
  const handleMultipleDelete = () => {
    const filter = filteredQuestions.filter(
      (qsn) => !checkedItems.includes(qsn.id)
    );
    setFilteredQuestions(filter);
    setCheckedItems([]);
  };

  return (
    <div>
      <div className="flex justify-between h-fit items-center">
        <h6 className="text-base text-main-heading font-medium ">Questions </h6>
        <div className="flex gap-4">
          {checkedItems?.length > 0 && (
            <div className="flex items-center gap-1">
              <span className="text-sm">Delete</span>{" "}
              <RiDeleteBin5Line
                className="cursor-pointer text-red-code"
                onClick={handleMultipleDelete}
              />
            </div>
          )}

          <div className="rounded-lg border flex items-center text-grayMedium1 px-2 gap-2 ">
            <IoSearchOutline />
            <input
              type="search"
              placeholder="Search..."
              onChange={(e) => {
                handleSearch(e);
              }}
              className="outline-none border-none focus:ring-transparent w-full p-1 rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <Table className="!static cursor-pointer">
          <Table.Body className="divide-y">
            {filteredQuestions?.length > 0 &&
              filteredQuestions?.map((qsn, index) => {
                const colorIndex = index % colors.length; // Calculate color index based on questions index

                return (
                  <Table.Row
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    key={qsn.id}
                  >
                    {/* <Table.Cell className="p-4">
                  </Table.Cell> */}
                    <Table.Cell className="whitespace-nowrap font-medium text-main-heading text-sm dark:text-black">
                      <div className="flex items-center gap-3">
                        <Checkbox
                          onChange={(e) => handleMultipleChecked(e, qsn.id)}
                          className="bg-white outline-none focus:ring-transparent cursor-pointer"
                        />

                        <span
                          className={`h-5 w-5 rounded-[50%] flex items-center justify-center`}
                          style={{
                            backgroundColor: `${colors[colorIndex].Light}`,
                          }}
                        >
                          <FaRegQuestionCircle
                            style={{
                              fill: `${colors[colorIndex].dark}`,
                            }}
                          />
                        </span>
                        {qsn?.question}
                      </div>
                    </Table.Cell>

                    <Table.Cell className="whitespace-nowrap">
                      <div className="flex gap-2">
                        {qsn?.categories?.map((cat, index) => {
                          if (index > 1) {
                            if (index === 2) {
                              // Display the remaining count only once
                              return (
                                <span
                                  key={index}
                                  className="border rounded-xl px-2 py-1 text-xs text-main-heading font-medium"
                                >
                                  +{qsn.categories.length - index}
                                </span>
                              );
                            }
                            return null; // Do not render anything for other indices greater than 1
                          }
                          return (
                            <span
                              key={index}
                              className="border rounded-xl px-2 text-xs text-main-heading font-medium py-1"
                            >
                              {cat}
                            </span>
                          );
                        })}
                      </div>
                    </Table.Cell>

                    <Table.Cell className="flex justify-end gap-2">
                      <AiOutlineEdit
                        className="!w-4 !h-4"
                        onClick={() => handleEdit(qsn.id)}
                      />

                      <RiDeleteBin5Line
                        onClick={() => {
                          handleDelete(qsn.id);
                        }}
                        stroke="red-code"
                        className="text-red-code"
                      />
                    </Table.Cell>
                  </Table.Row>
                );
              })}
          </Table.Body>
        </Table>
        <hr />
      </div>
      <Divider className="!mt-4">
        <button
          className="border border-darkblue2 text-darkblue2 text-sm px-2 py-1 rounded-lg"
          onClick={() => setIsModalOpen(!isModalOpen)}
        >
          Add Question{" "}
        </button>
      </Divider>
      <div className="mt-8">
        <ButtonsAndtoggle
          button1="Discard"
          button2="Save"
          discard={setFilteredQuestions}
        ></ButtonsAndtoggle>
      </div>

      <ModalBox
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        heading={"New Questions"}
        setQuestions={setQuestions}
        questions={questions}
        setFilteredQuestions={setFilteredQuestions}
        editdata={editdata}
        setEditData={setEditData}
        filteredQuestions={filteredQuestions}
      />

      <EditModal
        setIsModalOpen={setIsEditModalOpen}
        isModalOpen={isEditModalOpen}
        heading={"Edit Question"}
        // setQuestions={setQuestions}

        setFilteredQuestions={setFilteredQuestions}
        editdata={editdata}
        setEditData={setEditData}
        filteredQuestions={filteredQuestions}
      />
    </div>
  );
}

export default Faqs;
