const SignupTwo = ({setStep}:any) => {
  return (
    <div className="main">
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
      <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white   rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"><span className="text-border font-medium text-xs mr-3">1</span> Personal</a>
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
<div className="text-start my-2">
<button className="px-4 py-2 text-heading border border-[#E2E4E9] font-semibold rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
    Back
</button>
</div>
<div className="form flex flex-col max-w-md m-auto my-5">
    <h1 className="text-center flex justify-center"><img src="/assets/images/Custom-icon.png" /></h1>
    <h2 className="text-gray-dark text-2xl font-medium">Personal Information</h2>
    <p className="gray-dark">Provide essential information to proceed.</p>
    <hr className="my-5"></hr>
    <div className="flex items-center content-center  justify-between mb-5 ">
      <div>
    <h1><img src="/assets/images/Custom-icon.png" /></h1>
    </div>
    <div>
      <h3 className="text-heading font-medium text-start">Upload Image:</h3>
      <p className="text-gray-dark font-normal text-start my-2">Min 400x400px, PNG or JPEG</p>
      <input type="file"id="image-upload"name="image-upload"accept="image/*"className="block w-full text-start  text-sm text-gray-900 bg-gray-50 rounded-lg cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"/>
    </div>
</div>
    <div className="">
    <label className="block text-heading text-sm font-medium mb-2" htmlFor="First Name">First Name*</label>
        <input className="shadow appearance-none border border-slate-300 rounded w-full py-2 px-3 text-input-text leading-tight focus:outline-none focus:shadow-outline"
          id="email" type="text" placeholder="James"></input>
          <div className="my-5">
          <label className="block text-heading text-sm font-medium mb-2" htmlFor="last Name">Last Name*</label>
        <input className="shadow appearance-none border border-slate-300 rounded w-full py-2 px-3 text-input-text leading-tight focus:outline-none focus:shadow-outline"
          id="email" type="text" placeholder="Brown"></input>
          </div>
          <div>
          <label className="block text-heading text-sm font-medium mb-2" htmlFor="Phone Number">Phone Number*</label>
        <input className="shadow appearance-none border border-slate-300 rounded w-full py-2 px-3 text-input-text leading-tight focus:outline-none focus:shadow-outline"
          id="email" type="text" placeholder="(555) 000-0000"></input>
          </div>
       
    <button className="rounded w-full mt-5 bg-purple hover:bg-purple-700 py-2 px-4 text-white font-semibold"
   onClick={()=>setStep((prev:number)=>prev+1)}>
            {" "}  Continue with emailass</button>
    

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

export default SignupTwo