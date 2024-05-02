const ForgetPasswordSecond = ({
  backStep,
  handleSubmit,
  register,
  onSubmit,
  errors,
}: any) => {
  return (
    <div className="login-form">
      <h5 className="text-xl flex justify-center gap-5 header font-semibold  ">
        {" "}
        <span>
          {" "}
          <img
            src="/assets/images/IconLock.png"
            className="borders-[#000000]"
          />
        </span>{" "}
      </h5>
      <h2 className="text-3xl font-semibold  mt-8 mb-3 text-center">
        Set new password
      </h2>
      <p className="font-normal text-center">
        Your new password must be different to
      </p>
      <p className="font-normal text-center">previously used passwords.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="form-info mt-4">
        <label
          className="block text-gray-700 text-sm font-medium mb-2"
          htmlFor="password"
        >
          Password*{" "}
        </label>
        <input
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline${
            errors.password ? "border-[#F04438]" : ""
          }`}
          id="password"
          type="password"
          placeholder="Create a password"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-[#F04438] text-sm mt-2">
            {errors.password.message}
          </p>
        )}

        <label
          className="block text-gray-700 text-sm font-medium my-2"
          htmlFor="confirmPassword"
        >
          Confirm Password*{" "}
        </label>

        <input
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline${
            errors.confirmPassword ? "border-[#F04438]" : ""
          }`}
          id="confirmPassword"
          type="password"
          {...register("confirmPassword")}
          placeholder="Confirm your password"
        />
        {errors.confirmPassword && (
          <p className="text-[#F04438] text-sm mt-2">
            {errors.confirmPassword.message}
          </p>
        )}

        <div className="password flex flex-col justify-between items-center my-3">
          {/* <div className="mt-3">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox rounded-full border-2 border-blue-500 text-blue-500 focus:ring focus:ring-blue-300"
              />
              <p className="text-[475467]">
                Password must be at least 8 characters long
              </p>
            </label>
          </div>
          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox rounded-full border-2 border-blue-500 text-blue-500 focus:ring focus:ring-blue-300"
              />
              <p className="text-[475467]">
                Must contain one special character
              </p>
            </label>
          </div> */}

          <button
            type="submit"
            className="rounded w-full mt-5 bg-purple  hover:bg-purple-700 py-2 px-4 text-white font-semibold"
          >
            {" "}
            Reset Password
          </button>
          <button
            onClick={backStep}
            className="flex gap-5 mt-3 text-sm font-semibold"
          >
            <img src="/assets/images/arrow-left.png" />
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgetPasswordSecond;
