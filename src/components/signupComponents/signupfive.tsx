const SignupFive = ({setStep}:any) => {
  return (
    <div className="main">
      <div className="nav-header flex items-center content-center  justify-between">
        <div className="logo-head">
          <h1><span>
            {" "}
            <img src="/assets/images/Logo.png" />
          </span>{" "}</h1>

        </div>
        <nav aria-label="Page navigation example">
          <ul className="inline-flex -space-x-px text-sm">
            <li>
              <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white   rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white "><span className="text-border font-medium text-xs mr-3 active">1</span> Personal</a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"><img src="/assets/images/arrow-right-s-line.png" /></a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"><span className="text-border font-medium text-xs mr-3">2</span> Role</a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"><img src="/assets/images/arrow-right-s-line.png" /></a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"> <span className="text-border font-medium text-xs mr-3">3</span> Position</a>
            </li>

          </ul>
        </nav>
        <h1 className="text-center flex justify-center"><img src="/assets/images/croose.png" /></h1>
      </div>
      <hr className="border-color: gray;"></hr>
      <div className="text-start my-2 back-btnn">
        <button className="px-4 py-2.5 text-heading border border-[#E2E4E9] font-semibold rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" onClick={() => setStep((prev: number) => prev - 1)}
        >
          Back
        </button>
      </div>
      <div className="form-2 flex flex-col max-w-md m-auto justify-center">
        <h1 className="text-center flex justify-center"><img src="/assets/images/Custom-lock.png" /></h1>
        <h2 className="text-gray-dark text-2xl font-medium text-center">Password Setup</h2>
        <p className="gray-dark text-center">Set up a secure password to protect your account.</p>
        <hr className="my-5"></hr>
        <div>
          <label className="block text-heading text-sm font-medium mb-2" htmlFor="password">Create a Password<span className="text-span-clr">*</span></label>
          <div className="relative">
            <span className="absolute inset-y-4 inset-x-3"> <img src="/assets/images/lock-2-line.png" /></span>
            <input className="lft-space shadow appearance-none border border-slate-300 rounded w-full py-2   pl-5 text-input-text leading-tight focus:outline-none focus:shadow-outline"
              id="email" type="password" placeholder=".........."></input>
            <span className="absolute inset-y-4  right-2 "> <img src="/assets/images/eye-line.png" /></span>
          </div>

        </div>

        <div className="my-5">
          <label className="block text-heading text-sm font-medium mb-2" htmlFor="password">Confirm Password<span className="text-span-clr">*</span></label>
          <div className="relative">
            <span className="absolute inset-y-4 inset-x-3"> <img src="/assets/images/lock-2-line.png" /></span>
            <input className="lft-space shadow appearance-none border border-slate-300 rounded w-full py-2   pl-5 text-input-text leading-tight focus:outline-none focus:shadow-outline"
              id="email" type="password" placeholder=".........."></input>
            <span className="absolute inset-y-4  right-2 "> <img src="/assets/images/eye-line.png" /></span>
          </div>
        </div>
        <div className="flex items-center justify-between mb-5">
            <hr className="border-4 border-[#DF1C41] w-40 "></hr>
            <hr className="border-4 border-gray w-40 mx-5"></hr>
            <hr className="border-4 border-gray w-40"></hr>
          </div>
        <p className="text-sm font-normal text-content">Weak password. Must contain at least;</p>
        
        <ul className="p-0 text-xs ">
          <li className="my-2 flex items-center font-normal text-xs"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="max-w-3 max-h-3 mr-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>At least 1 uppercase</li>
            <li className="mb-2 flex items-center font-normal text-xs"> <svg xmlns="http://www.w3.org/2000/svg" fill="none"  className="max-w-3 max-h-3 mr-1" viewBox="0 0 24 24" stroke="currentColor" >
            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>At least 1 number</li>
          <li className="mb-2 flex items-center font-normal text-xs"> <svg xmlns="http://www.w3.org/2000/svg" fill="none"  className="max-w-3 max-h-3 mr-1" viewBox="0 0 24 24" stroke="currentColor" >
            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>At least 8 characters</li>
        </ul>

        <button className="rounded w-full mt-5 bg-purple hover:bg-purple-700 py-2.5 px-4 text-white font-semibold"
            onClick={() => setStep((prev: number) => prev + 1)}>{" "}  Continue</button>
      </div>

      <div className="footer flex items-center content-center  justify-between">
        <div>
          © 2024 HumanSwitch.ai
        </div>
        <div className="">
          <select id="country" name="country" className="block text-gray-dark font-normal  mt-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300">
            <option value="">Select a country</option>
            <option value="us">United States</option>
            <option value="ca">Canada</option>
            <option value="gb">United Kingdom</option>
            <option value="au">Australia</option>
            <option value="fr">France</option>

          </select>
        </div>

      </div>

    </div>
  )
}

export default SignupFive