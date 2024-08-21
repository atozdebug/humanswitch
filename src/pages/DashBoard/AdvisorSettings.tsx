import React, { useEffect, useRef, useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AddKnowledgeBaseModal from "../../components/AdvisiorSetting/AddKnowledgeBaseModal";
import { IoMdAdd } from "react-icons/io";
import Dropzone from "react-dropzone";
import { HiUserCircle } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../services/store/store";
import {
  createAdvisor,
  getAdvisor,
  getImage,
  updateAdvisorImage
} from "../../services/slices/ai_advisor/setting";
import { LinkDocumentKnowledge } from "../../components/AdvisiorSetting/LinkDocumentKnowledge";
import { getDocuments } from "../../services/slices/knowledge_base/document";
import { getUrls } from "../../services/slices/knowledge_base/urls";
import { getFaqs } from "../../services/slices/knowledge_base/faq";
import { LinkUrlKnowledge } from "../../components/AdvisiorSetting/LinkUrlKnowledge";
import { LinkFaqKnowledge } from "../../components/AdvisiorSetting/LinkFaqKnowledge";

function AdvisorSettings() {
  const advisorDetails = useSelector(
    (state: RootState) => state.advisor?.getData
  );
  const loading = useSelector((state: RootState) => state.advisor?.loading);

  const allDocuments = useSelector(
    (state: RootState) => state.document?.getData
  );

  const allUrls = useSelector((state: RootState) => state.url?.getData);
  const allFaqs = useSelector((state: RootState) => state.faq?.getData);
  const imageData = useSelector((state: RootState) => state.advisor?.imageData);
  const initailValues = {
    bot_title: "",
    welcome_message: "",
    greeting_message: "",
    call_to_action: "",
    bot_engine: "",
    quick_questions: [],
    links: []
  };
  const [formData, setFormData] = useState(initailValues);
  const dispatch = useDispatch();
  const [action, setaction] = useState<string>("");
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState("");
  const [idCount, setIdCount] = useState(1);
  const [profileImage, setProfileImage] = useState("");
  const [isFocusInput, setIsFocusInput] = useState(false);
  const inputRef = useRef(null);
  const [selectedDocuments, setSelectedDocuments] = useState([]);
  const [selectedUrls, setSelectedUrls] = useState([]);
  const [selectedFaqs, setSelectedFaqs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  useEffect(() => {
    if (!advisorDetails) {
      dispatch(getAdvisor());
    } else {
      // Populate the form fields with the advisorDetails
      setFormData({
        bot_title: advisorDetails.bot_title || "",
        welcome_message: advisorDetails.welcome_message || "",
        greeting_message: advisorDetails.greeting_message || "",
        call_to_action: advisorDetails.call_to_actions || "",
        bot_engine: advisorDetails.bot_engine || "",
        quick_questions: advisorDetails.quick_quick_questions || [],
        links: []
      });
      setQuestions(advisorDetails.quick_questions || []);

      setSelectedDocuments(advisorDetails.knowledge_documents || []);
      setSelectedUrls(advisorDetails.knowledge_urls || []);
      setSelectedFaqs(advisorDetails.knowledge_faqs || []);
    }
  }, [dispatch, advisorDetails]);

  useEffect(() => {
    if (!allDocuments) {
      dispatch(getDocuments({ page: 1 }));
    }
  }, [dispatch, allDocuments]);

  useEffect(() => {
    if (!allUrls) {
      dispatch(getUrls({ page: 1 }));
    }
  }, [dispatch, allUrls]);

  useEffect(() => {
    if (!imageData) {
      dispatch(getImage());
    }
  }, [dispatch, imageData]);

  useEffect(() => {
    console.info("allFaqs", allFaqs);
    if (!allFaqs) {
      console.info("Enteered", allFaqs);
      dispatch(getFaqs({ page: 1 }));
    }
  }, [dispatch, allFaqs]);
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const selectedDocumentIds = selectedDocuments.map(doc => doc.id);
    const selectedFaqIds = selectedFaqs.map(faq => faq.id);
    const selectedUrlIds = selectedUrls.map(url => url.id);
    // Store the IDs in formData
    const updatedFormData = {
      ...formData,
      quick_questions: questions, // Assuming questions is already set
      knowledge_documents: selectedDocumentIds, // Store IDs as an array of strings
      knowledge_faqs: selectedFaqIds,
      knowledge_urls: selectedUrlIds
    };
    console.log(updatedFormData);
    const result = await dispatch(createAdvisor(updatedFormData));

    if (result.payload?.error) {
      alert(result.payload.error);
    }
  }

  const createNewQuestionFields = (index: number) => {
    // // @ts-ignore
    setQuestions(prevQuestions => [...prevQuestions, question]);

    setQuestion("");
    setIsFocusInput(true);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  function handleQuestionInput(e: React.ChangeEvent<HTMLInputElement>) {
    // // @ts-ignore
    // const qsn = [...question];
    // setquick_questions(qsn);
    setQuestion(e.target.value);
  }
  function handleEditInput(
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) {
    // Map through the questions and update the question at the specified index
    const updatedQuestions = questions.map((qsn, idx) => {
      if (idx === index) {
        return { ...qsn, question: e.target.value };
      }
      return qsn;
    });
    setQuestions(updatedQuestions);
  }

  async function uploadImage(image) {
    const formData = new FormData();
    formData.append("file", image);
    const result = await dispatch(updateAdvisorImage(formData));

    if (result.payload?.error) {
      alert(result.payload.error);
    }
  }

  function handleDeleteQuestion(index: number) {
    // Filter out the question at the specified index
    const filteredQsn = questions.filter((_, idx) => idx !== index);
    setQuestions(filteredQsn);
  }

  return (
    <div className="p-6 bg-lightgray  w-full ">
      <form
        className="rounded-[20px] bg-white w-full p-4 flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <div className="flex  gap-4 ">
          {/* */}
          {imageData &&
          typeof imageData === "string" &&
          imageData.trim() !== "" ? (
            <img src={imageData} alt="Advisor" className="!h-20 !w-20" />
          ) : (
            <HiUserCircle fill="#dee0e5" className="!h-20 !w-20" />
          )}
          <div className="flex flex-col gap-1 ">
            <h3 className="text-base font-medium text-main-heading">
              Upload Image
            </h3>
            <span className="text-sm font-normal text-gray-dark">
              Min 400x400px, PNG or JPEG
            </span>
            <Dropzone
              onDrop={acceptedFiles => {
                const file = acceptedFiles[0];

                // const imageFileUrl = URL.createObjectURL(file);
                // setProfileImage(imageFileUrl);
                uploadImage(file);
                // setImageURL(file);
                // setModalOpen(false);
              }}
            >
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()} className="">
                  <input {...getInputProps()} />

                  <button
                    className="border px-3 py-[2px] text-sm font-medium text-gray-dark rounded-md"
                    onClick={e => e.preventDefault()}
                  >
                    Upload{" "}
                  </button>
                </div>
              )}
            </Dropzone>
          </div>
        </div>

        <div>
          <label
            htmlFor="bot_title"
            className=" text-sm  text-darkgray3 font-medium"
          >
            Bot Title
          </label>
          <br />

          <input
            type="text"
            name="bot_title"
            id="bot_title"
            value={formData.bot_title}
            onChange={e =>
              setFormData({ ...formData, bot_title: e.target.value })
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
            value={formData.welcome_message}
            onChange={e =>
              setFormData({ ...formData, welcome_message: e.target.value })
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
            value={formData.greeting_message}
            onChange={e =>
              setFormData({ ...formData, greeting_message: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label
            htmlFor="bot_engine"
            className=" text-sm  text-darkgray3 font-medium"
          >
            Bot Engine
          </label>
          <br />

          <select
            id="bot_engine"
            name="bot_engine"
            className="w-full border-[#eceef2] rounded-xl outline-none resize-none mt-2 cursor-pointer text-sm"
            value={formData.bot_engine} // Bind the value to formData.botEngine
            onChange={e =>
              setFormData({ ...formData, bot_engine: e.target.value })
            } // Update formData on change
          >
            <option value="gpt-3.5-turbo">GPT 3.5 Turbo</option>
            <option value="gpt-4">GPT 4o</option>
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
            value={formData.call_to_action}
            onChange={e =>
              setFormData({ ...formData, call_to_action: e.target.value })
            }
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

          <div className="grid grid-cols-1 md:flex gap-2">
            <LinkDocumentKnowledge
              allDocuments={allDocuments}
              selectedDocuments={selectedDocuments}
              setSelectedDocuments={setSelectedDocuments}
            />

            <LinkUrlKnowledge
              allUrls={allUrls}
              selectedUrls={selectedUrls}
              setSelectedUrls={setSelectedUrls}
            />

            <LinkFaqKnowledge
              allFaqs={allFaqs}
              selectedFaqs={selectedFaqs}
              setSelectedFaqs={setSelectedFaqs}
            />
          </div>
        </div>

        {/* <button
          onClick={(e) => {
            e.preventDefault(), setIsModalOpen(!isModalOpen);
          }}
          className='flex items-center gap-2 border border-span-clr text-span-clr text-sm font-medium px-4 py-[6px] rounded-lg w-fit'
        >
          <AddCircleOutlineIcon className='w-[15px]' /> Add Knowledge Base
          Source
        </button>
        <AddKnowledgeBaseModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        /> */}

        <div>
          <label
            htmlFor="quick_questions"
            className=" text-sm  text-darkgray3 font-medium"
          >
            Quick Questions
          </label>
          <br />

          <div className="flex items-center justify-between gap-2 mt-2">
            <input
              type="text"
              id="quick_questions"
              name="quick_questions"
              className={`"w-full border-[#eceef2] rounded-xl outline-none  w-full  text-sm" ${
                isFocusInput ? "ring-darkblue2" : null
              }`}
              placeholder="Enter here..."
              ref={inputRef}
              // value={questions}
              onChange={e => handleQuestionInput(e)}
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

          {questions?.map((qsn, index) => (
            <div
              className="flex items-center justify-between gap-2 mt-2"
              key={index}
            >
              <input
                type="text"
                id="quick_questions"
                name="quick_questions"
                className="w-full border-[#eceef2] rounded-xl outline-none resize-none  text-sm"
                placeholder="Enter here..."
                value={qsn}
                onChange={e => handleEditInput(e, index)}
                required
              />
              {questions.length > 0 && (
                <span
                  className="border rounded-lg p-2 flex items-center cursor-pointer bg-darkblue2 text-white "
                  onClick={() => handleDeleteQuestion(index)}
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
          >
            Save
          </button>{" "}
        </div>
      </form>
    </div>
  );
}

export default AdvisorSettings;
