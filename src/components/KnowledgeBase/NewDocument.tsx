import React, { useState } from "react";
import UploadCategoryCard from "./UploadCategoryCard";
import UrlUpload from "./UrlUpload";
import ButtonsAndtoggle from "./ButtonsAndtoggle";
import ReactPlayer from "react-player/youtube";
import { FaCirclePlay } from "react-icons/fa6";

function NewDocument() {
  const [selectedType, setSelectedType] = useState<string>("Youtube URL");
  const [videoLink, setVideoLink] = useState<string>("");

  const uploadTypes = [
    {
      id: 1,

      heading: "Youtube URL",
      subHeading: "Add a url for the content",
    },
    {
      id: 2,

      heading: "File",
      subHeading: "Upload .pdf files.",
    },
    {
      id: 3,

      heading: "FAQ    ",
      subHeading: "Create an FAQ",
    },
  ];
  return (
    <div className="bg-lightgray  w-full px-8 py-6     ">
      <div className="">
        <h1 className=" text-darkgray3 text-lg">New Document </h1>
        <p className="text-sm text-gray-dark">
          Create and add a new support document to the knowledge base.
        </p>
      </div>

      <div className="rounded-lg bg-white shadow-lg p-6 mt-4 flex flex-col gap-8 ">
        <div className="rounded-lg   flex gap-4">
          {uploadTypes.map((item) => {
            return (
              <UploadCategoryCard
                key={item.id} // Assuming 'heading' is unique, add a key prop for better performance in lists
                type={item.heading}
                subHeading={item.subHeading}
                setSelectedType={setSelectedType}
                selectedType={selectedType}
              />
            );
          })}
        </div>
        {videoLink !== "" && (
          <ReactPlayer
            url={videoLink}
            playIcon={<FaCirclePlay />}
            height={200}
            width={380}
            style={{ borderRadius: "20px" }}
          />
        )}

        <UrlUpload setVideoLink={setVideoLink} videoLink={videoLink} />

        <ButtonsAndtoggle button1={"Discard"} button2={"Add Document"} />
      </div>
    </div>
  );
}

export default NewDocument;
