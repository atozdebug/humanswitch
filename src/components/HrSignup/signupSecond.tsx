import { useState } from "react";
import PhoneInput from "react-phone-input-2";

import "react-phone-input-2/lib/bootstrap.css";

const SignupTwo = ({
  handleImageChange,
  handleSubmit,
  register,
  onSubmit,
  errors,
  setValue,
  trigger,
}: any) => {
  const [phone, setPhone] = useState<any>("");
  const [profilePic, setProfilePic] = useState<any>(null);

  return (
    <div className="main min-h-vhcalc225px bg-[url(../assets/images/Pattern.png)] bg-no-repeat bg-top px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form-2 pb-10 flex flex-col max-w-md m-auto justify-center "
      >
        <div className="flex items-center gap-2">
          <div>
            <h1 className="text-center flex justify-center">
              <img
                src="/assets/images/Custom-icon.png"
                width={"88px"}
                height={"88px"}
              />
            </h1>
          </div>
          <div>
            <h2 className="text-main-heading text-2xl font-medium mb-1">
              Personal Information
            </h2>
            <p className="text-gray-dark">
              Provide essential information to proceed.
            </p>
          </div>
        </div>
        <hr className="my-6"></hr>
        <div className="flex items-start content-center gap-5 mb-6">
          <div
            className={`border-4 rounded-full bg-white${
              errors?.image ? " border-red-500" : "border-gray-400"
            }`}
            style={{ width: "128px", height: "128px", overflow: "hidden" }}
          >
            {profilePic ? (
              <img
                src={profilePic}
                alt="Profile"
                className="rounded-full"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <img
                src="/assets/images/avatarpic.jpg"
                alt="Profile"
                className="rounded-full"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            )}
          </div>
          <div>
            <h3 className="text-main-heading font-medium text-start">
              Upload Image:
            </h3>
            <p className="text-gray-dark font-normal text-start mt-1">
              Min 400x400px, PNG or JPEG
            </p>
            <div className="relative flex mt-3">
              <input
                type="file"
                id="image-upload"
                accept="image/*"
                onChange={async (e: any) => {
                  handleImageChange(e);
                  const newProfilePic: any = e.target.files[0];
                  setProfilePic(URL.createObjectURL(newProfilePic));
                  setValue("image", e.target.files, { shouldValidate: true });
                  await trigger("image");
                }}
                className="relative z-10 w-20 opacity-0 block"
              />
              <div className="border absolute top-0 left-0 p-2 leading-5 text-gray-dark rounded-lg text-sm">
                Upload
              </div>
            </div>
            {errors?.image && (
              <p className="text-red-500 text-sm mt-2">
                {errors?.image?.message}
              </p>
            )}
          </div>
        </div>

        <label
          className="block text-main-heading text-sm font-medium mb-2"
          htmlFor="first_name"
        >
          First Name*
        </label>
        <input
          className={`shadow appearance-none border  rounded-[10px] w-full py-2.5 px-2.5 text-input-text leading-tight focus:outline-none focus:shadow-outline ${
            errors.first_name ? "border-[#F04438]" : "border-slate-300"
          }`}
          id="first_name"
          type="text"
          placeholder="James"
          {...register("first_name")}
        />
        {errors?.first_name && (
          <p className="text-red-500 text-sm mt-2">
            {errors?.first_name?.message}
          </p>
        )}
        <div className="my-3">
          <label
            className="block text-main-heading text-sm font-medium mb-2"
            htmlFor="last_name"
          >
            Last Name*
          </label>
          <input
            className={`shadow appearance-none border  rounded-[10px] w-full py-2.5 px-2.5 text-input-text leading-tight focus:outline-none focus:shadow-outline ${
              errors.last_name ? "border-[#F04438]" : "border-slate-300"
            }`}
            id="last_name"
            type="text"
            placeholder="Brown"
            {...register("last_name")}
          />
          {errors?.last_name && (
            <p className="text-red-500 text-sm mt-2">
              {errors?.last_name?.message}
            </p>
          )}
        </div>
        <div>
          <label
            className="block text-main-heading text-sm font-medium mb-2"
            htmlFor="phone_no"
          >
            Phone Number*
          </label>

          <PhoneInput
            country={"us"}
            enableSearch={true}
            value={phone}
            onChange={(phone) => {
              setPhone(phone);
              setValue("phone_no", phone);
            }}
            placeholder="+1 (545) 674-3543"
            inputStyle={{
              paddingTop: 8,
              paddingBottom: 8,
              width: "100%",
              border: 0,
              boxShadow:
                "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
              color: "black",
              background: "#fff",
              borderRadius: "10px",
              height: "40px",
            }}
            buttonStyle={{
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px",
            }}
            containerStyle={{
              border: "1px solid #e5e7eb",
              borderRadius: "10px",
              boxShadow:
                "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
            }}
            inputProps={{
              id: "mobile",
              name: "mobile",
              required: true,
            }}
          />
          {errors?.phone_no && (
            <p className="text-red-500 text-sm mt-2">
              {errors?.phone_no?.message}
            </p>
          )}
        </div>

        <button
          className="rounded-lg w-full mt-6 bg-blue-600 hover:bg-purple-700 py-2.5 px-2.5 text-white font-semibold "
          type="submit"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default SignupTwo;
