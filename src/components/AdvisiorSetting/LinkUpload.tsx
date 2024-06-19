import React, { useState } from "react";
import LinkIcon from "@mui/icons-material/Link";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";

// interface Question {
//   id: number;
//   question: string;
// }

function LinkUpload({ setLinks, links }) {
  const [idCount, setIdCount] = useState(1);
  const [link, setLink] = useState("");
  console.log("🚀 ~ file: LinkUpload.tsx:12 ~ LinkUpload ~ link:", links);

  const createNewLinkFields = (id: number) => {
    // const newField = { id: null, selectServices: "", rate: "" };
    // @ts-ignore
    setLinks([...links, { id: id, link: link }]);
    setIdCount(idCount + 1);
    setLink("");
  };

  function handleLinkInput(e: React.ChangeEvent<HTMLInputElement>) {
    // @ts-ignore

    const qsn = [...links];

    setLinks(qsn);
    // console.log(
    //   "🚀 ~ file: AdvisorSettings.tsx:36 ~ handleQuestionInput ~ question:",
    //   qsn
    // );
    //
    setLink(e.target.value);
  }

  function handleEditLinkInput(
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) {
    const updateLinks = links.map((qsn) => {
      if (qsn.id === id) {
        return { ...qsn, link: e.target.value };
      }
      console.log(
        "🚀 ~ file: LinkUpload.tsx:48 ~ constupdateLinks:Question[]=links.map ~ qsn:",
        qsn
      );
      return qsn;
    });

    setLinks(updateLinks);
  }

  console.log(
    "🚀 ~ file: AdvisorSettings.tsx:40 ~ handleQuestionInput ~ questions:",
    link
  );

  function handleDeleteLink(id: number) {
    console.log(
      "🚀 ~ file: AdvisorSettings.tsx:56 ~ handleDeleteQuestion ~ id:",
      id
    );
    const filteredLink = links.filter((link) => link.id !== id);

    setLinks(filteredLink);
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex  gap-2 ">
        <div className="border rounded-lg flex gap-1 items-center px-2 w-full ">
          <LinkIcon className="rotate-[130deg] !h-[20px] !w-[20px]" />
          <input
            type="url"
            value={link}
            className="border-none rounded-lg outline-none focus-outline focus:ring-transparent w-full"
            placeholder="Enter here..."
            onChange={(e) => {
              handleLinkInput(e);
            }}
          />
        </div>

        {link !== "" && (
          <span
            className="border rounded-lg p-2 flex items-center cursor-pointer w-fit bg-darkblue2 text-white "
            onClick={() => createNewLinkFields(idCount)}
            // onClick={() => createNewQuestionFields(idCount)

            // }
          >
            <IoMdAdd />
          </span>
        )}
      </div>
      {links.map((link) => (
        <div className="flex gap-2" key={link.id}>
          <div className="border rounded-lg flex gap-1 items-center px-2 w-full ">
            <LinkIcon className="rotate-[130deg] !h-[20px] !w-[20px]" />
            <input
              type="url"
              value={link.link}
              className="border-none rounded-lg outline-none focus-outline focus:ring-transparent w-full"
              placeholder="Enter here..."
              onChange={(e) => {
                handleEditLinkInput(e, link.id);
              }}
            />
          </div>

          <span
            className="border rounded-lg p-2 flex items-center cursor-pointer bg-darkblue2 text-white "
            onClick={() => handleDeleteLink(link.id)}
          >
            <MdDelete />
          </span>
        </div>
      ))}
    </div>
  );
}

export default LinkUpload;
