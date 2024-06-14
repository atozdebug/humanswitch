import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import CloseIcon from "@mui/icons-material/Close";
import SettingsIcon from "@mui/icons-material/Settings";

import Typography from "@mui/material/Typography";
import UrlandFileCard from "./UrlandFileCard";
interface AddKnowledgeBaseModalProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
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
                />
                <UrlandFileCard
                  type={"File"}
                  subHeading={"Upload .pdf files."}
                />
              </div>
              <div></div>
              <div className="flex justify-between gap-4 ">
                <button className="border py-2 text-sm font-medium w-full rounded-lg">
                  Discard
                </button>
                <button className=" w-full text-sm font-medium py-1 bg-darkblue2 text-white rounded-lg">
                  Save and Proceed
                </button>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default AddKnowledgeBaseModal;
