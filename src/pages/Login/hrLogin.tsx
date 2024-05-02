const LoginHr = ({ setStep }: any) => {
  return (
    <div className="main my-2 px-5 mob">
      <div className="grid grid-cols-3 gap-4">
        <div className="...">
          <div className="flex justify-around items-center mob-view ">
            <div>
              <span className="text-center">
                <img src="/assets/images/Synergy.png" />
              </span>
            </div>
            <div>
              <p>
                Don't have an account?
                <button className="px-4 py-2.5 ml-2 text-heading border text-start my-2  border-[#E2E4E9] font-semibold rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                  Register
                </button>
              </p>
            </div>
          </div>
          <div className="form-2 flex flex-col max-w-md m-auto justify-center">
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
            <button className="rounded w-full font-semibold text-base border bg-transparent border-slate-300 outline-none py-2.5 px-4 text-black flex justify-center gap-5  drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400">
              {" "}
              <span className="img-size">
                {" "}
                <img src="/assets/images/google.png" />
              </span>{" "}
            </button>
            <div className="flex items-center justify-between my-5">
              <hr className="border-gray w-40"></hr>
              <p>or</p>
              <hr className="border-gray w-40"></hr>
            </div>
            <div>
              <label
                className="block text-heading text-sm font-medium mb-2"
                htmlFor="email"
              >
                {" "}
                Email Address <span className="text-span-clr">*</span>{" "}
              </label>
              <div className="relative">
                <span className="absolute inset-x-3  inset-y-3">
                  <img src="/assets/images/mail-line.png" />
                </span>
                <input
                  className="shadow appearance-none lft-space bg-transparent  border border-slate-300 rounded w-full py-2 px-3 text-input-text leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  placeholder="hello@humanswitch.ai"
                ></input>
              </div>
            </div>

            <div className="my-5">
              <label
                className="block text-heading text-sm font-medium mb-2"
                htmlFor="password"
              >
                Password<span className="text-span-clr">*</span>
              </label>
              <div className="relative">
                <span className="absolute inset-y-3 inset-x-3">
                  {" "}
                  <img src="/assets/images/lock-2-line.png" />
                </span>
                <input
                  className="lft-space shadow appearance-none border border-slate-300 rounded w-full py-2   pl-5 text-input-text leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder=".........."
                ></input>
                <span className="absolute inset-y-4  right-2 ">
                  {" "}
                  <img src="/assets/images/eye-line.png" />
                </span>
              </div>
            </div>

            <div>
              <input
                type="checkbox"
                className="form-checkbox text-indigo-600 border-transparent  border-none  relative space-top "
              />
              <span className="ml-2 text-heading font-normal text-sm">
                Checkbox Label
              </span>{" "}
              accordion
              <span className="float-right text-content text-sm font-medium ">
                <a href="" className="border-b">
                  Forgot password?
                </a>
              </span>
            </div>

            <button
              className="rounded w-full mt-5 bg-purple-500 hover:bg-purple-700 py-2.5 px-4 text-white font-semibold"
              onClick={() => setStep((prev: number) => prev + 1)}
            >
              {" "}
              Login
            </button>
          </div>
        </div>

        <div className="col-span-2 bg-[#F6F8FA] py-9">
          <div className="flex items-center justify-center center-box">
            <span className="text-center">
              <img src="/assets/images/img1.png" />
            </span>
          </div>

          <div>
            <h2 className="text-2xl my-2 font-medium text-center">
              Stay in Control of Your Time Off
            </h2>
            <p className="text-base font-normal text-center max-w-xl m-auto">
              Track your time off balance and manage requests with the Time Off
              widget, ensuring a stress-free experience.
            </p>
            <div className="text-8xl text-border-clr text-center">
              <span className="text-span-clr">.</span>
              <span className="light">.</span>
              <span className="">.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginHr;
