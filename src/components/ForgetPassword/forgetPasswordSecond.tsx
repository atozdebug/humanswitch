const ForgetPasswordSecond = ({setStep}:any) => {
    return (
      <div className="Register">
        <h5 className="text-xl flex justify-center gap-5 header font-semibold  ">
          {" "}
          <span>
            {" "}
            <img src="/assets/images/IconLock.png" className="borders-[#000000]" />
          </span>{" "}
        
        </h5>
        <h2 className="text-3xl font-semibold  mt-8 mb-3">
        Set new password
        </h2>
        <p className="font-normal">
        Your new password must be different to
        </p>
        <p className="font-normal">
       previously used passwords.
        </p>
  
        <div className="form-info mt-4">
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
          <div className="password my-3">
          <label
            className="block text-gray-700 text-sm font-medium mb-2"
            htmlFor="confirm-password"
          >
            Confirm Password*{" "}
          </label>
          
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirm-password"
            type="password"
            placeholder="Create a password"
          ></input>

            <div className="mt-3">
                <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox rounded-full border-2 border-blue-500 text-blue-500 focus:ring focus:ring-blue-300" />
                    <p className="text-[475467]">Password must be at least 8 characters long</p>
                </label>
            </div>
            <div>
                <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox rounded-full border-2 border-blue-500 text-blue-500 focus:ring focus:ring-blue-300" />
                    <p className="text-[475467]">Must contain one special character</p>
                </label>
            </div>


            <button className="rounded w-full mt-5 bg-purple-500 hover:bg-purple-700 py-2 px-4 text-white font-semibold"
            onClick={()=>setStep((prev:number)=>prev+1)}>
              {" "}
             Reset Password
            </button>
            <a
              href=""
              className="flex justify-center gap-5 mt-3 text-sm font-semibold"
            >
              <span>
                {" "}
                <img src="/assets/images/arrow-left.png" />
              </span>{" "}
              Back to log in
            </a>
          </div>
        </div>
      </div>
    )
  }
  
  export default ForgetPasswordSecond