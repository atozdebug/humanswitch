import React, { useState } from "react";
import Dropzone from "react-dropzone";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";

function FileUpload({ setImages, images }) {
  console.log("🚀 ~ file: FileUpload.tsx:7 ~ FileUpload ~ images:", images);
  return (
    <div>
      {" "}
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

            setImages((prevImages: any) => [
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
    </div>
  );
}

export default FileUpload;
