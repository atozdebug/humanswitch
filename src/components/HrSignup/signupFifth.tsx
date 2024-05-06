const SignupFive = ({ handleSubmit, register, onSubmit, errors }: any) => {
  return (
    <div className="main">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form-2 flex flex-col max-w-md m-auto justify-center"
      >
        <h1 className="text-center flex justify-center">
          <img src="/assets/images/Custom-lock.png" />
        </h1>
        <h2 className="text-gray-dark text-2xl font-medium text-center">
          Password Setup
        </h2>
        <p className="gray-dark text-center">
          Set up a secure password to protect your account.
        </p>
        <hr className="my-5"></hr>
        <div>
          <label
            className="block text-heading text-sm font-medium mb-2"
            htmlFor="password"
          >
            Create a Password<span className="text-span-clr">*</span>
          </label>
          <div className="relative">
            <span className="absolute h-2 w-4 inset-y-3 inset-x-3">
              <img src="/assets/images/lock-2-line.png" />
            </span>
            <input
              className={`lft-space shadow appearance-none border ${
                errors.password ? "border-red-600" : "border-slate-300"
              } rounded w-full py-2 pl-5 text-input-text leading-tight focus:outline-none focus:shadow-outline`}
              id="password"
              type="password"
              placeholder=".........."
              {...register("password")}
            />
            <span className="absolute h-2 w-4 inset-y-3 right-2">
              <img src="/assets/images/eye-line.png" />
            </span>
            {errors.password && (
              <p className="text-[#F04438] text-sm mt-2">
                {errors.password.message}
              </p>
            )}
          </div>
        </div>

        <div className="my-5">
          <label
            className="block text-heading text-sm font-medium mb-2"
            htmlFor="confirmPassword"
          >
            Confirm Password<span className="text-span-clr">*</span>
          </label>
          <div className="relative">
            <span className="absolute h-2 w-4 inset-y-3 inset-x-3">
              <img src="/assets/images/lock-2-line.png" />
            </span>
            <input
              className={`lft-space shadow appearance-none border ${
                errors.confirmPassword ? "border-red-600" : "border-slate-300"
              } rounded w-full py-2   pl-5 text-input-text leading-tight focus:outline-none focus:shadow-outline`}
              id="confirmPassword"
              type="password"
              {...register("confirmPassword")}
              placeholder=".........."
            />
            <span className="absolute h-2 w-4 inset-y-3 right-2">
              <img src="/assets/images/eye-line.png" />
            </span>
            {errors.confirmPassword && (
              <p className="text-[#F04438] text-sm mt-2">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
        </div>
        <div className="flex items-center justify-between mb-5">
          <hr className="border-4 border-[#DF1C41] w-40 "></hr>
          <hr className="border-4 border-gray w-40 mx-5"></hr>
          <hr className="border-4 border-gray w-40"></hr>
        </div>
        <p className="text-sm font-normal text-content">
          Weak password. Must contain at least;
        </p>

        <ul className="p-0 text-xs ">
          <li className="my-2 flex items-center font-normal text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="max-w-3 max-h-3 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            At least 1 uppercase
          </li>
          <li className="mb-2 flex items-center font-normal text-xs">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="max-w-3 max-h-3 mr-1"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            At least 1 number
          </li>
          <li className="mb-2 flex items-center font-normal text-xs">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="max-w-3 max-h-3 mr-1"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            At least 8 characters
          </li>
        </ul>

        <button
          className="rounded w-full mt-5 bg-purple-500 hover:bg-purple-700 py-2.5 px-4 text-white font-semibold"
          type="submit"
        >
          {" "}
          Continue
        </button>
      </form>
    </div>
  );
};

export default SignupFive;
