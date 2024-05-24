import { useState } from "react";

const SignupFour = ({
  handleImageChange,
  handleSubmit,
  register,
  onSubmit,
  errors,
  setValue,
}: any) => {
  const [profilePic, setProfilePic] = useState<any>(null);

  return (
    <div className="main min-h-vhcalc225px bg-[url(../assets/images/Pattern.png)] bg-no-repeat bg-top px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form-4 flex flex-col m-auto justify-center max-w-808"
      >
        <div className="max-w-md mx-auto">
          <div className="flex items-center gap-2">
            <div>
              <h1 className="text-center text-main-heading flex justify-center">
                <img
                  src="/assets/images/busi-info.png"
                  width={"88px"}
                  height={"88px"}
                />
              </h1>
            </div>
            <div>
              <h2 className="text-main-heading text-2xl font-medium mb-1">
                Business Information
              </h2>
              <p className="text-gray-dark">
                Enter general details about your business
              </p>
            </div>
          </div>
          <hr className="my-6"></hr>
          <div className="flex items-center content-center gap-4 mb-5 ">
            <div
              className={`border-4 rounded-full bg-white${
                errors?.businessImage ? " border-red-500" : "border-gray-400"
              }`}
              style={{ width: "76px", height: "76px", overflow: "hidden" }}
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
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-main-heading text-base font-medium text-start">
                  Business Logo:
                </h3>
                <p className="text-gray-dark text-sm font-normal text-start mt-1">
                  Min 400x400px, PNG or JPEG
                </p>
              </div>
              <div>
                <div className="relative flex mt-3">
                  <input
                    type="file"
                    id="image-upload"
                    accept="image/*"
                    onChange={(e: any) => {
                      handleImageChange(e);
                      const newProfilePic: any = e.target.files[0];
                      setProfilePic(URL.createObjectURL(newProfilePic));
                      setValue("businessImage", e.target.files);
                    }}
                    className="relative z-10 w-16 opacity-0 block"
                  />
                  <div className="text-gray-dark border absolute top-0 left-0 p-2 leading-5 rounded-lg text-sm">
                    Upload
                  </div>
                </div>
                {errors?.businessImage && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors?.businessImage?.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-5 pt-5">
          <div className="mt-5">
            <label
              className="text-main-heading text-sm font-medium mb-2 flex items-center"
              htmlFor="company_name"
            >
              Company Name<span className="text-span-clr">*</span>
              <img
                className="max-w-5 max-h-5 ml-2"
                src="/assets/images/Vector.png"
              />
            </label>
            <select
              id="company_name"
              {...register("company_name")}
              className={` border text-gray-text text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                errors?.company_name ? "border-red-600" : "border-[#E2E4E9]"
              }`}
            >
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
            {errors?.company_name && (
              <p className="text-red-500 text-sm mt-2">
                {errors?.company_name?.message}
              </p>
            )}
          </div>

          <div className="mt-5">
            <label
              className=" text-main-heading text-sm font-medium mb-2 flex items-center"
              htmlFor="industry"
            >
              Select Industry<span className="text-span-clr">*</span>
              <img
                className="max-w-5 max-h-5 ml-2"
                src="/assets/images/Vector.png"
              />
            </label>
            <select
              id="industry"
              {...register("industry")}
              className={` border text-gray-text text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                errors?.industry ? "border-red-600" : "border-[#E2E4E9]"
              }`}
            >
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
            {errors?.industry && (
              <p className="text-red-500 text-sm mt-2">
                {errors?.industry?.message}
              </p>
            )}
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-5">
          <div className="mt-5">
            <label
              className=" text-main-heading text-sm font-medium mb-2 flex items-center"
              htmlFor="sector"
            >
              Select Sector
              <img
                className="max-w-5 max-h-5 ml-2"
                src="/assets/images/Vector.png"
              />
            </label>
            <select
              id="sector"
              {...register("sector")}
              className={` border text-gray-text text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                errors?.sector ? "border-red-600" : "border-[#E2E4E9]"
              }`}
            >
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
            {errors?.sector && (
              <p className="text-red-500 text-sm mt-2">
                {errors?.sector?.message}
              </p>
            )}
          </div>
          <div className="mt-5">
            <label
              className=" text-main-heading text-sm font-medium mb-2 flex items-center"
              htmlFor="employees_count"
            >
              Select No. of Employees
              <img
                className="max-w-5 max-h-5 ml-2"
                src="/assets/images/Vector.png"
              />
            </label>
            <select
              id="employees_count"
              {...register("employees_count")}
              className={` border text-gray-text text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                errors?.employees_count ? "border-red-600" : "border-[#E2E4E9]"
              }`}
            >
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
            {errors?.employees_count && (
              <p className="text-red-500 text-sm mt-2">
                {errors?.employees_count?.message}
              </p>
            )}
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-5">
          <div className="mt-5">
            <label
              className=" text-main-heading text-sm font-medium mb-2 flex items-center"
              htmlFor="location"
            >
              No.of Locations
              <img
                className="max-w-5 max-h-5 ml-2"
                src="/assets/images/Vector.png"
              />
            </label>
            <select
              id="location"
              {...register("location")}
              className={` border text-gray-text text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                errors?.location ? "border-red-600" : "border-[#E2E4E9]"
              }`}
            >
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
            {errors?.location && (
              <p className="text-red-500 text-sm mt-2">
                {errors?.location?.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-5">
          <div className=" text-main-heading">
            <div className="mt-5 mb-2 text-main-heading">
              Do you work with partners?
            </div>
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <input
                  id="default-radio-1"
                  type="radio"
                  value="Yes"
                  name="default-radio"
                  {...register("partners")}
                  className="min-w-[13px] text-blue-600 bg-gray-100  dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700"
                />
                Yes
              </div>
              <div className="flex items-center gap-2">
                <input
                  id="default-radio-1"
                  type="radio"
                  value="No"
                  name="default-radio"
                  {...register("partners")}
                  className="min-w-[13px] text-blue-600 bg-gray-100  dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700"
                />
                No
              </div>
            </div>
            {errors?.partners && (
              <p className="text-red-500 text-sm mt-2">
                {errors?.partners?.message}
              </p>
            )}
          </div>
          <div className=" text-main-heading">
            <div className="mt-5 mb-2 text-main-heading">
              Do you work with strategic suppliers?
            </div>
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <input
                  id="default-radio-2"
                  type="radio"
                  value="Yes"
                  name="default-radio"
                  {...register("suppliers")}
                  className="min-w-[13px] text-blue-600 bg-gray-100  dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700"
                />
                Yes
              </div>
              <div className="flex items-center gap-2">
                <input
                  id="default-radio-2"
                  type="radio"
                  value="No"
                  name="default-radio"
                  {...register("suppliers")}
                  className="min-w-[13px] text-blue-600 bg-gray-100  dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700"
                />
                No
              </div>
            </div>
            {errors?.suppliers && (
              <p className="text-red-500 text-sm mt-2">
                {errors?.suppliers?.message}
              </p>
            )}
          </div>
        </div>
        <button
          className="rounded-[10px] w-full max-w-392px mx-auto mt-9 bg-blue-600 hover:bg-purple-700 py-2.5 px-2.5 text-white font-semibold"
          type="submit"
        >
          Continue
        </button>
        <div className="font-normal my-5 text-sm text-center">
          <a href="" className="text-gray-500 text-center">
            Want to fill in later?{" "}
            <span className="text-gray-dark font-semibold border-b border-slate-700">
              Skip this step
            </span>
          </a>
        </div>
      </form>
    </div>
  );
};

export default SignupFour;
