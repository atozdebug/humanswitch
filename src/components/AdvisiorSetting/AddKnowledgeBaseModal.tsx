import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import CloseIcon from "@mui/icons-material/Close";
import SettingsIcon from "@mui/icons-material/Settings";
import Dropzone from "react-dropzone";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";

import UrlandFileCard from "./UrlandFileCard";
import UploadCard from "./UploadCard";
import LinkUpload from "./LinkUpload";
interface AddKnowledgeBaseModalProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
interface Image {
  url: string;
  name: string;
}
const AddKnowledgeBaseModal: React.FC<AddKnowledgeBaseModalProps> = ({
  isModalOpen,
  setIsModalOpen,
}) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "none",
    borderRadius: "12px",
    boxShadow: 24,
    color: "black",
    // p: 2,
  };
  const [selectedType, setSelectedType] = useState<string>("URL");
  const [imageUrl, setImageURL] = useState([]);
  console.log("🚀 ~ file: AddKnowledgeBaseModal.tsx:38 ~ imageUrl:", imageUrl);
  const [links, setLinks] = useState([]);
  console.log("🚀 ~ file: AddKnowledgeBaseModal.tsx:39 ~ links:", links);
  const [images, setImages] = useState<Image[]>([]);

  function handleclose() {
    setIsModalOpen(false);
    return isModalOpen;
  }
 
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        ariaDescribedby="transition-modal-description"
        open={isModalOpen}
        onClose={handleclose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={isModalOpen}>
          <Box sx={style}>
            <div className="flex justify-between p-4 ">
              <div className="flex gap-4">
                <span className=" flex items-center justify-center rounded-[50%] border h-[37px] w-[37px] text-center">
                  <SettingsIcon className="text-gray-dark !w-5 !h-5" />
                </span>
                <div className="flex flex-col gap-1 ">
                  <h4 className="text-sm font-medium text-darkgray3">
                    Add Knowledge Base
                  </h4>
                  <p className="text-xs font-normal text-gray-dark">
                    Your bot will answer based on the added knowledge base.
                  </p>
                </div>
              </div>
              <CloseIcon
                className="!w-4 !h-4 text-gray-dark cursor-pointer"
                onClick={() => setIsModalOpen(false)}
              />
            </div>
            <hr />
            <div className="p-4 flex flex-col gap-3">
              <h4 className="font-medium text-main-heading text-base">
                {" "}
                Choose one of the following:
              </h4>
              <div className="flex gap-4 ">
                <UrlandFileCard
                  type={"URL"}
                  subHeading={"Add a url for the content"}
                  setSelectedType={setSelectedType}
                  selectedType={selectedType}
                />
                <UrlandFileCard
                  type={"File"}
                  subHeading={"Upload .pdf files."}
                  setSelectedType={setSelectedType}
                  selectedType={selectedType}
                />
              </div>
              <div>
                {selectedType === "File" ? (
                  images.length === 0 ? (
                    <Dropzone
                      onDrop={(acceptedFiles) => {
                        // let imageFileUrl = [];
                        // const file = acceptedFiles[0];
                        acceptedFiles.map((element) => {
                          console.log(
                            "🚀 ~ file: AddKnowledgeBaseModal.tsx:111 ~ acceptedFiles.forEach ~ element:",
                            element.name
                          );
                          // imageFileUrl.push(URL.createObjectURL(element));

                          setImages((prevImages) => [
                            ...prevImages,
                            {
                              url: URL.createObjectURL(element),
                              name: element.name,
                            },
                          ]);
                        });
                        // setImageURL(imageFileUrl);

                        console.log(
                          "🚀 ~ file: AddKnowledgeBaseModal.tsx:108 ~ acceptedFiles:",
                          acceptedFiles
                        );

                        // setModalOpen(false);
                      }}
                    >
                      {({ getRootProps, getInputProps }) => (
                        <div
                          {...getRootProps()}
                          className="flex cursor-pointer flex-col gap-3 items-center justify-center rounded-lg border-2 border-dashed p-12"
                        >
                          <input {...getInputProps()} />
                          <CloudUploadOutlinedIcon className="text-gray-dark" />
                          <div className="text-center flex flex-col gap-1">
                            <p className="text-sm font-medium text-main-heading">
                              Choose a file or drag & drop it here.
                            </p>
                            <p className="text-xs font-medium text-grayMedium1">
                              JPEG, PNG, PDF, and MP4 formats, up to 50 MB.
                            </p>
                          </div>
                          <button className="border px-4 py-1 text-sm font-medium text-gray-dark rounded-md">
                            Browse File
                          </button>
                        </div>
                      )}
                    </Dropzone>
                  ) : (
                    <UploadCard data={images} setImages={setImages} />
                  )
                ) : (
                  <LinkUpload setLinks={setLinks} links={links} />
                )}
              </div>
            </div>
            <hr />
            <div className="flex justify-between gap-4 p-4">
              <button
                className="border py-2 text-sm font-medium w-full rounded-lg"
                onClick={() =>
                  selectedType === "File" ? setImageURL([]) : setLinks([])
                }
              >
                Discard
              </button>
              <button className=" w-full text-sm font-medium py-1 bg-darkblue2 text-white rounded-lg">
                Save and Proceed
              </button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default AddKnowledgeBaseModal;
