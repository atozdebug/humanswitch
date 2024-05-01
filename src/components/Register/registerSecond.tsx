const RegisterSecond = () => {
  return (
    <div className="login-form ">
      <h5 className="text-xl flex justify-center gap-5 header font-semibold  ">
        {" "}
        <span>
          {" "}
          <img src="/assets/images/Group2.png" />
        </span>{" "}
        HumanSwitch
      </h5>
      <h2 className="text-3xl font-semibold  mt-8 mb-3">
        Welcome to HumanSwitch
      </h2>
      <p className="font-normal">
        You're setting up an account <br></br>for{" "}
        <a href="" className="text-purple-500 font-semibold">
          mehak@humanswitch.com
        </a>
        
      </p>

      <div className="form-info">
        <label
          className="block text-gray-700 text-sm font-medium mb-2 "
          htmlFor="username" >Name*
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"type="text"placeholder="Enter your name" ></input>
        <div className="password my-3">
          <label
            className="block text-gray-700 text-sm font-medium mb-2"
            htmlFor="password"
          >
            Password*{" "}
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Create a password"
          ></input>
          <p className="text-gray-500 text-sm italic font-normal text-left mt-3">
            Must be at least 8 characters.
          </p>
          <button className="rounded w-full mt-5 bg-purple hover:bg-purple-700 py-2 px-4 text-white font-semibold">
            {" "}  Create Account</button>
          <a href="" className="flex justify-center gap-5 mt-3 text-sm font-semibold">
            <span>
              {" "}
              <img src="/assets/images/arrow-left.png" />
            </span>{" "}
            Back to home
          </a>
        </div>
      </div>
    </div>
  )
}

export default RegisterSecond