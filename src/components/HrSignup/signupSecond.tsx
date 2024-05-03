const SignupTwo = ({ handleSubmit, register, onSubmit, errors }: any) => {
  return (
    <div className="main">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form-2 flex flex-col max-w-md m-auto justify-center"
      >
        <h1 className="text-center flex justify-center">
          <img src="/assets/images/Custom-icon.png" />
        </h1>
        <h2 className="text-gray-dark text-2xl font-medium text-center">
          Personal Information
        </h2>
        <p className="gray-dark text-center">
          Provide essential information to proceed.
        </p>
        <hr className="my-5"></hr>
        <div className="flex items-center content-center  justify-between mb-5 ">
          <div
            className={`${
              errors?.profilePicture ? "border rounded-full border-red-500" : ""
            }`}
          >
            <h1>
              <img src="/assets/images/Custom-icon.png" />
            </h1>
          </div>
          <div>
            <h3 className="text-heading font-medium text-start">
              Upload Image:
            </h3>
            <p className="text-gray-dark font-normal text-start my-2">
              Min 400x400px, PNG or JPEG
            </p>
            <input
              type="file"
              id="image-upload"
              accept="image/*"
              {...register("profilePicture")}
              className="block w-full text-start  text-sm text-gray-900 bg-gray-50 rounded-lg cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            />
            {errors?.profilePicture && (
              <p className="text-red-500 text-sm mt-2">
                {errors?.profilePicture?.message}
              </p>
            )}
          </div>
        </div>

        <label
          className="block text-heading text-sm font-medium mb-2"
          htmlFor="firstName"
        >
          First Name*
        </label>
        <input
          className={`shadow appearance-none border  rounded w-full py-2 px-3 text-input-text leading-tight focus:outline-none focus:shadow-outline ${
            errors.firstName ? "border-[#F04438]" : "border-slate-300"
          }`}
          id="firstName"
          type="text"
          placeholder="James"
          {...register("firstName")}
        />
        {errors?.firstName && (
          <p className="text-red-500 text-sm mt-2">
            {errors?.firstName?.message}
          </p>
        )}
        <div className="my-5">
          <label
            className="block text-heading text-sm font-medium mb-2"
            htmlFor="lastName"
          >
            Last Name*
          </label>
          <input
            className={`shadow appearance-none border  rounded w-full py-2 px-3 text-input-text leading-tight focus:outline-none focus:shadow-outline ${
              errors.lastName ? "border-[#F04438]" : "border-slate-300"
            }`}
            id="lastName"
            type="text"
            placeholder="Brown"
            {...register("lastName")}
          />
          {errors?.lastName && (
            <p className="text-red-500 text-sm mt-2">
              {errors?.lastName?.message}
            </p>
          )}
        </div>
        <div>
          <label
            className="block text-heading text-sm font-medium mb-2"
            htmlFor="phoneNumber"
          >
            Phone Number*
          </label>
          <input
            className={`shadow appearance-none border  rounded w-full py-2 px-3 text-input-text leading-tight focus:outline-none focus:shadow-outline ${
              errors.phoneNumber ? "border-red-500" : "border-slate-300"
            }`}
            id="phoneNumber"
            type="number"
            placeholder="(555) 000-0000"
            {...register("phoneNumber")}
          />
          {errors?.phoneNumber && (
            <p className="text-red-500 text-sm mt-2">
              {errors?.phoneNumber?.message}
            </p>
          )}
        </div>

        <button
          className="rounded w-full mt-5 bg-purple-500 hover:bg-purple-700 py-2.5 px-4 text-white font-semibold"
          type="submit"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default SignupTwo;
