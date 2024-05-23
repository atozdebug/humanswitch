import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const SignupTwo = ({
  handleImageChange,
  handleSubmit,
  register,
  onSubmit,
  errors,
  setValue,
}: any) => {
  const [phone, setPhone] = useState<any>("");

  return (
    <div className="main">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form-2 flex flex-col max-w-md m-auto justify-center"
      >
        <h1 className="text-center flex justify-center">
          <img src="/assets/images/Custom-icon.png" />
        </h1>
        <h2 className="text-main-heading text-2xl font-medium text-center">
          Personal Information
        </h2>
        <p className="gray-dark text-center">
          Provide essential information to proceed.
        </p>
        <hr className="my-5"></hr>
        <div className="flex items-center content-center gap-10 mb-5 ">
          <div
            className={`${
              errors?.image ? "border rounded-full border-red-500" : ""
            }`}
          >
            <h1>
              <img src="/assets/images/Avatar1.png" />
            </h1>
          </div>
          <div>
            <h3 className="text-heading font-medium text-start">
              Upload Image:
            </h3>
            <p className="text-gray-dark font-normal text-start mt-1">
              Min 400x400px, PNG or JPEG
            </p>
            <input
              type="file"
              id="image-upload"
              accept="image/*"
              onChange={(e) => {
                handleImageChange(e);
                setValue("image", e.target.files);
              }}
              className="block w-full text-start  text-sm text-gray-900 bg-gray-50 rounded-lg cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            />
            {errors?.image && (
              <p className="text-red-500 text-sm mt-2">
                {errors?.image?.message}
              </p>
            )}
          </div>
        </div>

        <label
          className="block text-heading text-sm font-medium mb-2"
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
        <div className="my-5">
          <label
            className="block text-heading text-sm font-medium mb-2"
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
            className="block text-heading text-sm font-medium mb-2"
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
          />
          {errors?.phone_no && (
            <p className="text-red-500 text-sm mt-2">
              {errors?.phone_no?.message}
            </p>
          )}
        </div>

        <button
          className="rounded w-full mt-5 bg-green-500 hover:bg-purple-700 py-2.5 px-2.5 text-white font-semibold "
          type="submit"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default SignupTwo;
