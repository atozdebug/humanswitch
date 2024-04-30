const ForgetPasswordSecond = ({setStep}:any) => {
    return (
      <div className="Register">
        <h5 className="text-xl flex justify-center gap-5 header font-semibold  ">
          {" "}
          <span>
            {" "}
            <img src="/assets/images/Featured icon.png" className="borders-[#000000]" />
          </span>{" "}
        
        </h5>
        <h2 className="text-3xl font-semibold  mt-8 mb-3">
        Password reset
        </h2>
        <p className="font-normal">
        Your password has been successfully reset.
        </p>
        <p className="font-normal">
        Click below to log in magically.
        </p>
  
        <div className="form-info mt-4">
     
            <button className="rounded w-full mt-5 bg-purple-500 hover:bg-purple-700 py-2 px-4 text-white font-semibold"
            onClick={()=>setStep((prev:number)=>prev+1)}>
              {" "}
             Continue
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
     
    )
  }
  
  export default ForgetPasswordSecond