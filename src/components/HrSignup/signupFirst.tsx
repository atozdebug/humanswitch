const SignupOne = ({ handleSubmit, register, onSubmit, errors }: any) => {
  return (
    <div className="main bg-[url(../assets/images/Pattern.png)] bg-no-repeat bg-top px-4">
      <div className="form flex flex-col max-w-md m-auto justify-center py-10 min-h-vhcalc135px">
        <h1 className="flex justify-center text-center pb-4">
          <img src="/assets/images/plus.png" width={"88px"} height={"88px"} />
        </h1>
        <h2 className="text-main-heading text-2xl font-medium text-center mb-1">
          Welcome to HumanSwitch.ai
        </h2>
        <p className="gray-dark text-center my-0">
          Use your work email for a better experience
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className=" pt-6">
          {/* -------------------------------------------------------------- */}
          <div>
            <label
              className="block text-heading text-sm font-medium mb-2"
              htmlFor="Email"
            >
              Email<span className="text-span-clr ">*</span>
            </label>
            <div className="relative">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-1/2 translate-y-n50 left-3"
              >
                <path
                  d="M3.25 3.75H16.75C16.9489 3.75 17.1397 3.82902 17.2803 3.96967C17.421 4.11032 17.5 4.30109 17.5 4.5V15.5C17.5 15.6989 17.421 15.8897 17.2803 16.0303C17.1397 16.171 16.9489 16.25 16.75 16.25H3.25C3.05109 16.25 2.86032 16.171 2.71967 16.0303C2.57902 15.8897 2.5 15.6989 2.5 15.5V4.5C2.5 4.30109 2.57902 4.11032 2.71967 3.96967C2.86032 3.82902 3.05109 3.75 3.25 3.75ZM16 6.9285L10.054 12.2535L4 6.912V14.75H16V6.9285ZM4.38325 5.25L10.0457 10.2465L15.6265 5.25H4.38325Z"
                  fill="#868C98"
                />
              </svg>
              <input
                className={`pl-10 shadow appearance-none border  ${
                  errors.email ? "border-red-600" : "border-slate-300"
                } rounded-[10px] w-full py-2.5 pr-2.5 text-input-text leading-tight focus:outline-none focus:shadow-outline`}
                id="email"
                type="email"
                placeholder="hello@humanswitch.ai"
                {...register("email")}
              />
            </div>
            {errors.email && (
              <p className="text-[#F04438] text-sm mt-2">
                {errors.email.message}
              </p>
            )}
          </div>
          {/* ------------------------------------------------------------- */}
          {/* <label
            className="block text-heading text-sm font-medium mb-2"
            htmlFor="email"
          >
            Email*
          </label>
          <input
            className={`shadow appearance-none border  rounded w-full py-2 px-3 text-input-text leading-tight focus:outline-none focus:shadow-outline ${
              errors.email ? "border-[#F04438]" : "border-slate-300"
            }`}
            id="email"
            type="text"
            placeholder="hello@humanswitch.ai"
            {...register("email")}
          />
          {errors?.email && (
            <p className="text-red-500 text-sm mt-2">
              {errors?.email?.message}
            </p>
          )} */}
          <label className="flex items-center space-x-2 mt-4">
            <input
              type="checkbox"
              className={`form-checkbox rounded text-heading font-medium text-sm border focus:ring focus:ring-blue-300  ${
                errors.agreeTerms ? "border-red-500" : ""
              }`}
              {...register("agreeTerms")}
            />
            <span className="text-gray-dark text-sm">
              I agree to the{" "}
              <a
                href="/terms-and-conditions"
                className="text-main-heading underline font-semibold"
              >
                {" "}
                Terms & Conditions{" "}
              </a>
              and{" "}
              <a
                href="/privacy-policy"
                className="text-main-heading font-semibold underline"
              >
                {" "}
                Privacy Policy
              </a>
              .
            </span>
          </label>
          {errors.agreeTerms && (
            <p className="text-red-500 text-sm mt-2">
              You must agree to the Terms & Conditions and Privacy Policy.
            </p>
          )}
          <button
            type="submit"
            className="rounded-[10px] w-full mt-6 bg-blue-600 hover:bg-purple-700 shadow-md py-2.5 px-2.5 text-white font-semibold"
          >
            Continue with email
          </button>
          <div className="flex items-center justify-between my-6">
            <hr className="border-gray w-1/2"></hr>
            <p className="my-0 text-grayMedium1 px-5">OR</p>
            <hr className="border-gray w-1/2"></hr>
          </div>
          <button className="rounded-[10px] w-full font-semibold text-base border bg-transparent border-slate-300 outline-none py-2.5 px-2.5 text-main-heading flex justify-center gap-5 drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400">
            {" "}
            <span className="img-size">
              {" "}
              <img src="/assets/images/google.png" />
            </span>{" "}
            Sign in with Google
          </button>

          <div className="font-normal mt-6 text-sm text-center">
            <a href="" className="text-gray-dark text-center">
              Already have an account?{" "}
              <span className="text-main-heading font-semibold">Login</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupOne;
