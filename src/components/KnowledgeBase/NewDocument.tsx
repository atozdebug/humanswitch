import React, { useState } from "react";
import UploadCategoryCard from "./UploadCategoryCard";
import UrlUpload from "./UrlUpload";
import ButtonsAndtoggle from "./ButtonsAndtoggle";
import ReactPlayer from "react-player/youtube";
import { FaCirclePlay } from "react-icons/fa6";
import FileUpload from "./FileUpload";
import UploadCard from "../AdvisiorSetting/UploadCard";
import Faqs from "./Faqs";

function NewDocument() {
  const [selectedType, setSelectedType] = useState<string>("Youtube URL");
  const [images, setImages] = useState([]);

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
    <div className="bg-lightgray  w-full sm:px-8 px-3 py-3 sm:py-6     ">
      <div className="">
        <h1 className=" text-darkgray3 text-lg">New Document </h1>
        <p className="text-sm text-gray-dark">
          Create and add a new support document to the knowledge base.
        </p>
      </div>

      <div className="rounded-lg bg-white shadow-lg p-4 sm:p-6 mt-4 flex  flex-col gap-8 ">
        <div className="rounded-lg  grid md:grid-cols-2 lg:grid-cols-3  gap-4">
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

        {selectedType === "Youtube URL" ? (
          <div>
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
            <ButtonsAndtoggle
              button1={"Discard"}
              discard={setVideoLink}
              button2={"Add Document"}
            />
          </div>
        ) : selectedType === "File" ? (
          <div className="flex flex-col gap-4">
            {images.length === 0 ? (
              <FileUpload images={images} setImages={setImages} />
            ) : (
              <UploadCard data={images} discard={setImages} />
            )}

            <div>
              <label
                htmlFor="welcome"
                className=" text-sm  text-darkgray3 font-medium"
              >
                Description
              </label>
              <br />

              <textarea
                name="description"
                id="description"
                // value={formData.welcomeMessage}
                // onChange={(e) =>
                //   setFormData({ ...formData, welcomeMessage: e.target.value })
                // }
                className="w-full border-[#eceef2] rounded-xl outline-none text-lightgray8   h-24 mt-2 text-sm"
                placeholder="Enter here..."
                required
              />
            </div>
            <ButtonsAndtoggle
              button1={"Discard"}
              discard={setImages}
              button2={"Add Document"}
            />
          </div>
        ) : (
          <div>
            <Faqs />
          </div>
        )}
      </div>
    </div>
  );
}

export default NewDocument;
