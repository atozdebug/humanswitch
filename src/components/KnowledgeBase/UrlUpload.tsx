import React from "react";

function UrlUpload({ setVideoLink, videoLink }) {
  return (
    <div className="flex flex-col">
      <div>
        <label htmlFor="link" className=" text-sm  text-darkgray3 font-medium">
          Youtube URL{" "}
          <span className="text-sm  text-gray-dark font-normal">
            (optional)
          </span>
        </label>
        <br />
        <div className="flex border rounded-xl items-center">
          <div className="text-sm px-2 text-lightgray8 py-2 border-r">
            https://
          </div>
          <hr />
          <input
            type="url"
            name="link"
            id="link"
            value={videoLink}
            onChange={(e) => setVideoLink(e.target.value)}
            className="w-full   border-none text-lightgray8  outline-none focus:ring-transparent rounded-xl resize-none  text-sm font-normal"
            placeholder="www.example.com"
            required
          />
        </div>
      </div>

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
    </div>
  );
}

export default UrlUpload;
