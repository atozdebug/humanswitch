const ForgetPasswordFirst = ({setStep}:any) => {
    return (
      <div className="Register">
        <h5 className="text-xl flex justify-center gap-5 header font-semibold  ">
          {" "}
          <span>
            {" "}
            <img src="/assets/images/Icon.png" className="borders-[#000000]" />
          </span>{" "}
        
        </h5>
        <h2 className="text-3xl font-semibold  mt-8 mb-3">
         Forgot Password?
        </h2>
        <p className="font-normal">
        No worries, we’ll send you reset instructions.
        </p>
  
        <div className="form-info mt-4">
          <label
            className="block text-gray-700 text-sm font-medium mb-2"
            htmlFor="email"
          >
            Email*
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Enter your email"
          ></input>
          <div className="password my-3">
            
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
  
  export default ForgetPasswordFirst