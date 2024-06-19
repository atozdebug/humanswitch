import React, { useEffect, useRef, useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AddKnowledgeBaseModal from "../../components/AdvisiorSetting/AddKnowledgeBaseModal";
import { IoMdAdd } from "react-icons/io";
import Dropzone from "react-dropzone";
import { HiUserCircle } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";

function AdvisorSettings() {
  const initailValues = {
    botTitle: "",
    welcomeMessage: "",
    greetingMsg: "",
    callToAction: "",
    botEngine: "",
    questions: [],
    links: [],
  };
  const [formData, setFormData] = useState(initailValues);
  console.log(
    "🚀 ~ file: AdvisorSettings.tsx:20 ~ AdvisorSettings ~ formData:",
    formData
  );

  const [action, setaction] = useState<string>("");
  const [questions, setquestions] = useState<Question[]>([]);
  const [question, setquestion] = useState<string>("");
  const [idCount, setIdCount] = useState(1);
  const [profileImage, setProfileImage] = useState("");
  const [isFocusInput, setIsFocusInput] = useState(false);
  const inputRef = useRef(null);
  console.log(
    "🚀 ~ file: AdvisorSettings.tsx:31 ~ AdvisorSettings ~ isFocusInput:",
    isFocusInput
  );

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  interface Question {
    id: number;
    question: string;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  const createNewQuestionFields = (id: number) => {
    // @ts-ignore
    setquestions([...questions, { id: id, question: question }]);
    setIdCount(idCount + 1);
    setquestion("");

    setIsFocusInput(true);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  console.log(
    "🚀 ~ file: AdvisorSettings.tsx:31 ~ createNewQuestionFields ~ questions:",
    questions
  );

  function handleQuestionInput(e: React.ChangeEvent<HTMLInputElement>) {
    // @ts-ignore

    const qsn = [...questions];

    setquestions(qsn);

    setquestion(e.target.value);
  }

  function handleEditInput(e: React.ChangeEvent<HTMLInputElement>, id: number) {
    const updatedQuestions: Question[] = questions.map((qsn) => {
      if (qsn.id === id) {
        return { ...qsn, question: e.target.value };
      }
      return qsn;
    });
    setquestions(updatedQuestions);
  }

  console.log(
    "🚀 ~ file: AdvisorSettings.tsx:40 ~ handleQuestionInput ~ questions:",
    question
  );

  function handleDeleteQuestion(id: number) {
    const filteredQsn = questions.filter((qns) => qns.id !== id);
    setquestions(filteredQsn);
  }

  return (
    <div className="p-6 bg-lightgray  w-full ">
      <form className="rounded-[20px] bg-white w-full p-4 flex flex-col gap-4">
        <div className="flex  gap-1 ">
          <HiUserCircle fill="#dee0e5" className="!h-16 !w-16" />
          <div className="flex flex-col gap-1 ">
            <h3 className="text-base font-medium text-main-heading">
              Upload Image
            </h3>
            <span className="text-sm font-normal text-gray-dark">
              Min 400x400px, PNG or JPEG
            </span>
            <Dropzone
              onDrop={(acceptedFiles) => {
                const file = acceptedFiles[0];
                console.log(
                  "🚀 ~ file: AddKnowledgeBaseModal.tsx:105 ~ file:",
                  file
                );
                const imageFileUrl = URL.createObjectURL(file);
                setProfileImage(imageFileUrl);
                // setImageURL(file);
                // setModalOpen(false);
              }}
            >
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()} className="">
                  <input {...getInputProps()} />

                  <button
                    className="border px-3 py-[2px] text-sm font-medium text-gray-dark rounded-md"
                    onClick={(e) => e.preventDefault()}
                  >
                    Upload{" "}
                  </button>
                </div>
              )}
            </Dropzone>
          </div>
        </div>
        <p>{profileImage}</p>

        <div>
          <label
            htmlFor="botTitle"
            className=" text-sm  text-darkgray3 font-medium"
          >
            Bot Title
          </label>
          <br />

          <input
            type="text"
            name="botTitle"
            id="botTitle"
            value={formData.botTitle}
            onChange={(e) =>
              setFormData({ ...formData, botTitle: e.target.value })
            }
            className="w-full border-[#eceef2] rounded-xl outline-none resize-none mt-2 text-sm font-normal"
            placeholder="Enter here..."
            required
          />
        </div>
        <div>
          <label
            htmlFor="welcome"
            className=" text-sm  text-darkgray3 font-medium"
          >
            Welcome Message
          </label>
          <br />

          <textarea
            name="welcome"
            id="welcome"
            value={formData.welcomeMessage}
            onChange={(e) =>
              setFormData({ ...formData, welcomeMessage: e.target.value })
            }
            className="w-full border-[#eceef2] rounded-xl outline-none   h-24 mt-2 text-sm"
            placeholder="Enter here..."
            required
          />
        </div>
        <div>
          <label
            htmlFor="greeting"
            className=" text-sm  text-darkgray3 font-medium"
          >
            Greeting Messages
          </label>
          <br />

          <textarea
            name="greeting"
            id="greeting"
            className="w-full border-[#eceef2] rounded-xl outline-none resize-none  h-24 mt-2 text-sm"
            placeholder="Enter here..."
            value={formData.greetingMsg}
            onChange={(e) =>
              setFormData({ ...formData, greetingMsg: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label
            htmlFor="botEngine"
            className=" text-sm  text-darkgray3 font-medium"
          >
            Bot Engine
          </label>
          <br />

          <select
            // type="text"
            id="botEngine"
            name="botEngine"
            className="w-full border-[#eceef2] rounded-xl outline-none resize-none mt-2 cursor-pointer text-sm"
            // placeholder="Enter here..." required
          >
            <option className="border-none outline-none" value="chatGpt">
              Chat GPT 4o
            </option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="action"
            className=" text-sm  text-darkgray3 font-medium"
          >
            Call to Action
          </label>
          <br />

          <input
            type="text"
            id="action"
            name="action"
            className="w-full border-[#eceef2] rounded-xl outline-none resize-none mt-2 text-sm"
            placeholder="Enter here..."
            value={formData.callToAction}
            onChange={(e) =>
              setFormData({ ...formData, callToAction: e.target.value })
            }
            required
          />
        </div>

        <div>
          <h4 className="text-sm font-medium text-darkgray3">Knowledge Base</h4>
          <p className="text-lightgray8 text-sm font-normal">
            Provide custom knowledge that your bot will access to inform its
            responses. Your bot will retrieve relevant sections from the
            knowledge base based on the user message. The data in the knowledge
            base may be made viewable by other users through bot responses or
            citations.
          </p>
        </div>

        <button
          onClick={(e) => {
            e.preventDefault(), setIsModalOpen(!isModalOpen);
          }}
          className="flex items-center gap-2 border border-span-clr text-span-clr text-sm font-medium px-4 py-[6px] rounded-lg w-fit"
        >
          <AddCircleOutlineIcon className="w-[15px]" /> Add Knowledge Base
          Source
        </button>
        <AddKnowledgeBaseModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />

        <div>
          <label
            htmlFor="questions"
            className=" text-sm  text-darkgray3 font-medium"
          >
            Quick Questions
          </label>
          <br />

          <div className="flex items-center justify-between gap-2 mt-2">
            <input
              type="text"
              id="questions"
              name="questions"
              className={`"w-full border-[#eceef2] rounded-xl outline-none  w-full  text-sm" ${
                isFocusInput ? "ring-darkblue2" : null
              }`}
              placeholder="Enter here..."
              ref={inputRef}
              value={question}
              onChange={(e) => handleQuestionInput(e)}
              required
            />
            {question !== "" && (
              <span
                className="border rounded-lg p-2 flex items-center cursor-pointer bg-darkblue2 text-white "
                onClick={() => {
                  createNewQuestionFields(idCount);

                  setIsFocusInput(true);
                }}
              >
                <IoMdAdd />
              </span>
            )}
          </div>

          {questions?.map((qsn) => (
            <div
              className="flex items-center justify-between gap-2 mt-2"
              key={qsn.id}
            >
              <input
                type="text"
                id="questions"
                name="questions"
                className="w-full border-[#eceef2] rounded-xl outline-none resize-none  text-sm"
                placeholder="Enter here..."
                value={qsn?.question}
                onChange={(e) => handleEditInput(e, qsn.id)}
                required
              />
              {questions.length > 0 && (
                <span
                  className="border rounded-lg p-2 flex items-center cursor-pointer bg-darkblue2 text-white "
                  onClick={() => handleDeleteQuestion(qsn.id)}
                >
                  {/* <IoMdAdd onClick={createNewQuestionFields} />
                   */}
                  <MdDelete />
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="flex gap-3">
          {" "}
          <button className="border-lightgray6 border font-medium px-10 text-gray-dark py-1 text-sm rounded-lg">
            Discard
          </button>{" "}
          <button
            className="px-12 text-sm font-medium py-1 bg-darkblue2 text-white rounded-lg"
            type="submit"
            onClick={() => handleSubmit}
          >
            Save
          </button>{" "}
        </div>
      </form>
    </div>
  );
}

export default AdvisorSettings;
