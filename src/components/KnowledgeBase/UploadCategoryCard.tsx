import React, { useState } from "react";
import LinkIcon from "@mui/icons-material/Link";
import NoteAddIcon from "@mui/icons-material/NoteAdd";

function UploadCategoryCard({
  type,
  subHeading,
  setSelectedType,
  selectedType,
}) {
  //   console.log("🚀 ~ file: uploadCategoryCard.tsx:12 ~ icon:", icon);
  const active = "border-d-[#6986fc]";
  const isSelected = selectedType === type;
  const [radioSelectd, setRadioSelected] = useState("");
  console.log(
    "🚀 ~ file: UrlandFileCard.tsx:8 ~ UrlandFileCard ~ radioSelectd:",
    radioSelectd
  );
  return (
    <div
      className={` ${
        isSelected && "border-[#6986fc]"
      } +  flex border w-full p-2 justify-between gap-4 rounded-lg items-center cursor-pointer`}
      onClick={() => {
        setSelectedType(type);
      }}
    >
      <div className="flex items-center gap-3 ">
        {type === "Youtube URL" ? (
          <span className="w-8 h-8 flex items-center rounded-[50%] border  justify-center">
            <LinkIcon className="rotate-[130deg] !h-[20px] !w-[20px]" />
          </span>
        ) : (
          <span className="w-8 h-8 flex items-center rounded-[50%] border justify-center">
            <NoteAddIcon
              className="!h-[18px] !w-[18px]"
              sx={{ stroke: "#38C793", fill: "#fff" }}
            />
            {/* {icon} */}
          </span>
        )}
        <div className="flex flex-col ">
          <h4 className="text-base font-medium text-main-heading"> {type}</h4>
          <p className="text-sm font-normal text-gray-dark"> {subHeading}</p>
        </div>
      </div>
      <input
        type="radio"
        name={selectedType}
        value={type}
        checked={isSelected}
        id=""
        onChange={(e) => {
          console.log(setRadioSelected(e.target.name));
        }}
        className="bg-none outline-none focus:ring-white checked:bg-auto border-[#d3d5d9] focus:ring-none cursor-pointer"
      />
    </div>
  );
}

export default UploadCategoryCard;
