const RegisterFirst = ({ setStep }:any) => {
  return (
    <div className="login-form">
      <h5 className="text-xl flex justify-center gap-5 header font-semibold  ">
        {" "}
        <span>
          {" "}
          <img src="/assets/images/Group2.png" />
        </span>{" "}
        HumanSwitch
      </h5>
      <h2 className="text-3xl font-semibold mt-8 mb-3">
        Welcome to HumanSwitch
      </h2>
      <p className="font-normal">Use your work email for a better experience</p>
      <div className="my-6">
        <label className="block w-full pb-1 text-sm font-medium text-gray-500 border-color: gray; text-align: start; transition-all duration-200 ease-in-out group-focus-within:text-blue-400 lable-lft">
          Focus outline
        </label>
        <input
          id="1"
          type="text"
          placeholder="Enter your work email"
          className="peer h-10 w-full rounded-md border border-slate-300   px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400"
        />
        <button
          className="rounded w-full mt-5 bg-purple hover:bg-purple-700 py-2 px-4 text-white font-semibold"
          onClick={() => setStep(false)}>
          {" "}
          Continue with email
        </button>
      </div>
      <div className="flex items-center justify-between mb-8">
        <hr className="border-gray w-40"></hr>
        <p>or</p>
        <hr className="border-gray w-40"></hr>
      </div>

      <button className="rounded w-full font-semibold text-base border bg-transparent border-slate-300 outline-none py-2 px-4 text-black flex justify-center gap-5  drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400">
        {" "}
        <span className="img-size">
          {" "}
          <img src="/assets/images/google.png" />
        </span>{" "}
        Sign in with Google
      </button>

      <div className="font-normal mt-8">
        <a href="" className="text-gray-500">
          Don’t have an account?{" "}
          <span className="text-purple font-semibold">Login</span>
        </a>
      </div>

      <p className="mt-5">
        Having trouble? Contact us at {" "}
        <span className="text-purple font-semibold text-[#6941C6]">
          {" "}
          support@humanswitch.com
        </span>
      </p>
    </div>
  );
};

export default RegisterFirst;
