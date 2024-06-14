import React from "react";
import LinkIcon from "@mui/icons-material/Link";
import NoteAddIcon from "@mui/icons-material/NoteAdd";

function UrlandFileCard({ type, subHeading }) {
  return (
    <div className="flex border w-full p-2 justify-between gap-4 rounded-lg items-center">
      <div className="flex items-center gap-3 ">
        {type === "URL" ? (
          <span className="w-8 h-8 flex items-center rounded-[50%] border  justify-center">
            <LinkIcon className="rotate-[130deg] !h-[20px] !w-[20px]" />
          </span>
        ) : (
          <span className="w-8 h-8 flex items-center rounded-[50%] border justify-center">
            <NoteAddIcon
              className="!h-[18px] !w-[18px]"
              sx={{ stroke: "#38C793", fill: "#fff" }}
            />
          </span>
        )}
        <div className="flex flex-col ">
          <h4 className="text-base font-medium text-main-heading">{type}</h4>
          <p className="text-sm font-normal text-gray-dark">{subHeading}</p>
        </div>
      </div>
      <input type="radio" name={type} id="" />
    </div>
  );
}

export default UrlandFileCard;
