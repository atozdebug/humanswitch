const SignupOne = ({setStep}:any) => {
  return (
   <div className="main ">
    <div className="nav-header flex items-center content-center  justify-between">
    <div className="logo">
        <h1><span>
          {" "}
          <img src="/assets/images/Group2.png" />
        </span>{" "}</h1>

    </div>
    <nav aria-label="Page navigation example">
  <ul className="inline-flex -space-x-px text-sm">
    <li>
      <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
    </li>
    <li>
      <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
    </li>
    <li>
      <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
    </li>
    
    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
  </ul>
</nav>
<div className="border-color: inherit;">crose</div>
</div>
<hr className="border-color: gray;"></hr>
<div className="form flex flex-col max-w-md m-auto my-5">
    <h1 className="text-center flex justify-center"><img src="/assets/images/plus.png" /></h1>
    <h2 className="text-gray-dark text-2xl font-medium">Welcome to HumanSwitch.ai</h2>
    <p className="gray-dark">Use your work email for a better experience</p>
    <div className="">
    <label
          className="block text-heading text-sm font-medium mb-2"
          htmlFor="email">Email*</label>
        <input className="shadow appearance-none border border-slate-300 rounded w-full py-2 px-3 text-input-text leading-tight focus:outline-none focus:shadow-outline"
          id="email" type="text" placeholder="hello@humanswitch.ai"></input>
           <label className="flex items-center space-x-2 my-5">
        <input type="checkbox" className="form-checkbox rounded text-heading font-medium text-sm border-2 border-blue-500 focus:ring focus:ring-blue-300" />
        <span className="text-heading">I agree to the <a href="/terms-and-conditions" className="text-heading underline font-semibold">Terms & Conditions</a> and <a href="/privacy-policy" className="text-heading font-semibold underline">Privacy Policy</a>.</span>
    </label>
    <button className="rounded w-full mt-5 bg-purple hover:bg-purple-700 py-2 px-4 text-white font-semibold"
   onClick={()=>setStep((prev:number)=>prev+1)}>
            {" "}  Continue with email</button>
            <div className="flex items-center justify-between my-5">
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

      <div className="font-normal my-5">
        <a href="" className="text-gray-500">
        Already have an account?{" "}
          <span className="text-gray-dark font-semibold">Login</span>
        </a>
      </div>
    </div>

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

export default SignupOne