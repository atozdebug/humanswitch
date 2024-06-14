import React, { useState } from "react";
import { Form } from "react-hook-form";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AddKnowledgeBaseModal from "../../components/AdvisiorSetting/AddKnowledgeBaseModal";

function AdvisorSettings() {
  const [botTitle, setBotTitle] = useState<string>("");

  const [welcomeMessage, setwelcomeMessage] = useState<string>("");
  console.log(
    "🚀 ~ file: AdvisorSettings.tsx:8 ~ AdvisorSettings ~ welcomeMessage:",
    welcomeMessage
  );
  const [greeting, setgreeting] = useState<string>("");

  const [action, setaction] = useState<string>("");
  const [question, setquestion] = useState<string>("");

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    <div className="p-6 bg-lightgray  w-full ">
      <form className="rounded-[20px] bg-white w-full p-4 flex flex-col gap-4">
        <div>
          <label
            for="botTitle"
            className=" text-sm  text-darkgray3 font-medium"
          >
            Bot Title
          </label>
          <br />

          <input
            type="text"
            name="botTitle"
            id="botTitle"
            value={botTitle}
            onChange={(e) => setBotTitle(e.target.value)}
            className="w-full border-[#eceef2] rounded-xl outline-none resize-none mt-2 text-sm font-normal"
            placeholder="Enter here..."
            required
          />
        </div>
        <div>
          <label for="welcome" className=" text-sm  text-darkgray3 font-medium">
            Welcome Message
          </label>
          <br />

          <textarea
            name="welcome"
            id="welcome"
            value={welcomeMessage}
            onChange={(e) => setwelcomeMessage(e.target.value)}
            className="w-full border-[#eceef2] rounded-xl outline-none resize-none  h-24 mt-2 text-sm"
            placeholder="Enter here..."
            required
          />
        </div>
        <div>
          <label
            for="greeting"
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
            value={greeting}
            onChange={(e) => setgreeting(e.target.value)}
            required
          />
        </div>
        <div>
          <label
            for="botEngine"
            className=" text-sm  text-darkgray3 font-medium"
          >
            Bot Engine
          </label>
          <br />

          <select
            // type="text"
            id="botEngine"
            name="botEngine"
            className="w-full border-[#eceef2] rounded-xl outline-none resize-none mt-2 text-sm"
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
          <label for="action" className=" text-sm  text-darkgray3 font-medium">
            Call to Action
          </label>
          <br />

          <input
            type="text"
            id="action"
            name="action"
            className="w-full border-[#eceef2] rounded-xl outline-none resize-none mt-2 text-sm"
            placeholder="Enter here..."
            value={action}
            onChange={(e) => setaction(e.target.value)}
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
            for="questions"
            className=" text-sm  text-darkgray3 font-medium"
          >
            Quick Questions
          </label>
          <br />

          <input
            type="text"
            id="questions"
            name="questions"
            className="w-full border-[#eceef2] rounded-xl outline-none resize-none mt-2 text-sm"
            placeholder="Enter here..."
            value={question}
            onChange={(e) => setquestion(e.target.value)}
            required
          />
        </div>
        <div className="flex gap-3">
          {" "}
          <button className="border-lightgray6 border font-medium px-10 text-gray-dark py-1 text-sm rounded-lg">
            Discard
          </button>{" "}
          <button
            className="px-12 text-sm font-medium py-1 bg-darkblue2 text-white rounded-lg"
            type="submit"
            onClick={handleSubmit}
          >
            Save
          </button>{" "}
        </div>
      </form>
    </div>
  );
}

export default AdvisorSettings;
