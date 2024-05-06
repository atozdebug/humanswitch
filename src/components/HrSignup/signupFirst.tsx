const SignupOne = ({ handleSubmit, register, onSubmit, errors }: any) => {
  return (
    <div className="main">
      <div className="form flex flex-col max-w-md m-auto justify-center">
        <h1 className="flex justify-center text-center">
          <img src="/assets/images/plus.png" />
        </h1>
        <h2 className="text-main-heading text-2xl font-medium text-center">
          Welcome to HumanSwitch.ai
        </h2>
        <p className="gray-dark text-center">
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
            <span className="absolute  inset-y-3 inset-x-3">
              <img src="/assets/images/mail-line.png" />
            </span>
            <input
              className={`lft-space shadow appearance-none border  ${
                errors.email ? "border-red-600" : "border-slate-300"
              } rounded-[10px] w-full py-2 pl-5 text-input-text leading-tight focus:outline-none focus:shadow-outline`}
              id="email"
              type="email"
              placeholder="hello@humanswitch.ai"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-[#F04438] text-sm mt-2">
                {errors.email.message}
              </p>
            )}
          </div>
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
            <span className="text-heading">
              I agree to the
              <a
                href="/terms-and-conditions"
                className="text-heading underline font-semibold"
              >
                Terms & Conditions
              </a>
              and
              <a
                href="/privacy-policy"
                className="text-heading font-semibold underline"
              >
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
            className="rounded-[10px] w-full mt-5 bg-bggreen hover:bg-bggreen-500 shadow-md  py-2.5 px-4 text-white font-semibold"
          >
            Continue with email
          </button>
          <div className="flex items-center justify-between my-6">
            <hr className="border-gray w-40"></hr>
            <p>or</p>
            <hr className="border-gray w-40"></hr>
          </div>
          <button className="rounded-[10px] w-full font-semibold text-base border bg-transparent border-slate-300 outline-none py-2.5 px-4 text-black flex justify-center gap-5  drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400">
            {" "}
            <span className="img-size">
              {" "}
              <img src="/assets/images/google.png" />
            </span>{" "}
            Sign in with Google
          </button>

          <div className="font-normal my-6 text-sm text-center">
            <a href="" className="text-gray-500 text-center">
              Already have an account?{" "}
              <span className="text-gray-dark font-semibold">Login</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupOne;
