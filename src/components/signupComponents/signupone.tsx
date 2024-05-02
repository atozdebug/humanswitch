const SignupOne = ({setStep}:any) => {
  return (
   <div className="main ">
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
      <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white   rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"><span className="text-border font-medium text-xs mr-3 flex  justify-items-center active">1</span> Personal</a>
    </li>
    <li>
      <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"><img src="/assets/images/arrow-right-s-line.png" /></a>
    </li>
    <li>
      <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"><span className="text-border font-medium text-xs mr-3 flex justify-items-center">2</span> Role</a>
    </li>
    <li>
      <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"><img src="/assets/images/arrow-right-s-line.png" /></a>
    </li>
    <li>
      <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"> <span className="text-border font-medium text-xs mr-3 flex justify-items-center">3</span> Position</a>
    </li>
    
  </ul>
</nav>
<h1 className="text-center flex justify-center"><img src="/assets/images/croose.png" /></h1>
</div>
<hr className="border-color: gray;"></hr>
<div className="form flex flex-col max-w-md m-auto justify-center">
    <h1 className="text-center flex justify-center text-center"><img src="/assets/images/plus.png" /></h1>
    <h2 className="text-gray-dark text-2xl font-medium text-center" >Welcome to HumanSwitch.ai</h2>
    <p className="gray-dark text-center">Use your work email for a better experience</p>
    <div className="">
    <label
          className="block text-heading text-sm font-medium mb-2"
          htmlFor="email">Email <span className="text-span-clr">*</span>  </label>
        <input className="shadow appearance-none border border-slate-300 rounded w-full py-2 px-3 text-input-text leading-tight focus:outline-none focus:shadow-outline"
          id="email" type="text" placeholder="hello@humanswitch.ai"></input>
           <label className="flex items-center space-x-2 mt-5">
        <input type="checkbox" className="form-checkbox rounded text-heading font-medium text-sm border-2 border-blue-500 focus:ring focus:ring-blue-300" />
        <span className="text-heading">I agree to the <a href="/terms-and-conditions" className="text-heading underline font-semibold">Terms & Conditions</a> and <a href="/privacy-policy" className="text-heading font-semibold underline">Privacy Policy</a>.</span>
    </label>
    <button className="rounded w-full mt-5 bg-purple bg-dark-purple hover:bg-dark-purple-700 py-2.5 px-4 text-white font-semibold"
   onClick={()=>setStep((prev:number)=>prev+1)}>
            {" "}  Continue with email</button>
            <div className="flex items-center justify-between my-5">
        <hr className="border-gray w-40"></hr>
        <p>or</p>
        <hr className="border-gray w-40"></hr>
      </div>
      <button className="rounded w-full font-semibold text-base border bg-transparent border-slate-300 outline-none py-2.5 px-4 text-black flex justify-center gap-5  drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400">
        {" "}
        <span className="img-size">
          {" "}
          <img src="/assets/images/google.png" />
        </span>{" "}Sign in with Google</button>

      <div className="font-normal my-5 text-sm text-center">
        <a href="" className="text-gray-500 text-center">
        Already have an account?{" "}
          <span className="text-gray-dark font-semibold">Login</span>
        </a>
      </div>
    </div>

</div>
<div className="footer flex items-center content-center  justify-between">
    <div> © 2024 HumanSwitch.ai</div>
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