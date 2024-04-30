import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="login-form">
      <h5 className="text-xl flex justify-center gap-5 header font-semibold  ">
        {" "}
        <span>
          {" "}
          <img src="/assets/images/Vector.png" className="borders-[#000000]" />
        </span>{" "}
        HumanSwitch
      </h5>
      <h2 className="text-3xl font-semibold  mt-8 mb-3">
        Log in to your account
      </h2>
      <p className="font-normal">
        welcome back please enter your details.
      </p>

      <div className="form-info mt-4">
        <label
          className="block text-gray-700 text-sm font-medium mb-2"
          htmlFor="Work email">Work email</label>
        <input className="shadow appearance-none border border-color: gray; rounded w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline"
          id="email" type="text" placeholder="Enter your email"></input>
        <div className="password my-3">
          <label
            className="block text-gray-700 text-sm font-medium mb-2"
            htmlFor="password"
          >
            Password*{" "}
          </label>
          <input
            className="shadow appearance-none border border-color: gray; rounded w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Create a password"
          ></input>
          <p className="text-gray-500 text-sm italic font-normal text-left mt-3">
          </p>
          <button className="rounded w-full mt-5 bg-purple hover:bg-purple-700 py-2 px-4 text-white font-semibold">
            {" "}
            Login
          </button>
          <Link
            to="/forgetpassword"
            className="flex justify-center gap-5 mt-3 text-sm font-semibold text-[#6941C6]"
          >
            Forgot password?
          </Link>
          <p className="mt-5">
        Having trouble? Contact us at {" "}
        <span className="text-purple font-semibold text-[#6941C6]">
          {" "}
          support@humanswitch.com
        </span>
      </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
