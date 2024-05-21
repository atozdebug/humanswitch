const SignupFour = ({ handleSubmit, register, onSubmit, errors }: any) => {
  return (
    <div className="main">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form-4 flex flex-col max-w-md m-auto justify-center"
      >
        <h1 className="text-center text-main-heading flex justify-center">
          <img src="/assets/images/key-icon.png" />
        </h1>
        <h2 className="text-gray-dark text-2xl font-medium text-center">
          Business Information
        </h2>
        <p className="gray-dark text-center">
          Enter general details about your business
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
              Business Logo:
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

        <div className="my-5">
          <label
            className="text-heading text-sm font-medium mb-2 flex items-center"
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

        <div className="">
          <label
            className=" text-heading text-sm font-medium mb-2 flex items-center"
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

        <div className="my-5">
          <label
            className=" text-heading text-sm font-medium mb-2 flex items-center"
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

        <div className="">
          <label
            className=" text-heading text-sm font-medium mb-2 flex items-center"
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

        <div className="mt-5">
          <label
            className=" text-heading text-sm font-medium mb-2 flex items-center"
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
        <div className="flex justify-between">
          <div>
            <div className="mt-5">Do you work with partners?</div>
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <input
                  id="default-radio-1"
                  type="radio"
                  value="Admin"
                  name="default-radio"
                  {...register("role")}
                  className="min-w-[13px] text-blue-600 bg-gray-100  dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700"
                />
                Yes
              </div>
              <div className="flex items-center gap-2">
                <input
                  id="default-radio-1"
                  type="radio"
                  value="Admin"
                  name="default-radio"
                  {...register("role")}
                  className="min-w-[13px] text-blue-600 bg-gray-100  dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700"
                />
                No
              </div>
            </div>
          </div>
          <div>
            <div className="mt-5">Do you work with strategic suppliers?</div>
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <input
                  id="default-radio-1"
                  type="radio"
                  value="Admin"
                  name="default-radio"
                  {...register("role")}
                  className="min-w-[13px] text-blue-600 bg-gray-100  dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700"
                />
                Yes
              </div>
              <div className="flex items-center gap-2">
                <input
                  id="default-radio-1"
                  type="radio"
                  value="Admin"
                  name="default-radio"
                  {...register("role")}
                  className="min-w-[13px] text-blue-600 bg-gray-100  dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700"
                />
                No
              </div>
            </div>
          </div>
        </div>
        <button
          className="rounded-[10px] w-full mt-5 bg-bggreen-500 hover:bg-purple-700 py-2.5 px-2.5 text-white font-semibold"
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
