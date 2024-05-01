
const SignupFour = ({setStep}:any) => {
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
              <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white   rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"><span className="text-border font-medium text-xs mr-3 active">1</span> Personal</a>
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
        <button className="px-4 py-2.5 text-heading border border-[#E2E4E9] font-semibold rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        onClick={() => setStep((prev: number) => prev - 1)}>
          Back
        </button>
      </div>

      <div className="form-4 flex flex-col max-w-md m-auto justify-center">
        <h1 className="text-center flex justify-center"><img src="/assets/images/Custom-icon.png" /></h1>
        <h2 className="text-gray-dark text-2xl font-medium text-center">Personal Information</h2>
        <p className="gray-dark text-center">Provide essential information to proceed.</p>
        <hr className="my-5"></hr>

        <div>
          <label className="block text-heading text-sm font-medium mb-2 flex items-center " htmlFor="First Name">Select an option<span className="text-span-clr">* </span> <img className="max-w-5 max-h-5 ml-2" src="/assets/images/Vector.png" /> </label>
          <select id="countries" className="bg-gray-50 border border-[#E2E4E9] text-gray-text text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>e.g. Human Resources</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>

        <div className="my-5">
          <label className="block text-heading text-sm font-medium mb-2 flex items-center" htmlFor="First Name">Company Name<span className="text-span-clr">*</span><img className="max-w-5 max-h-5 ml-2" src="/assets/images/Vector.png" /></label>
          <select id="Company" className="bg-gray-50 border border-[#E2E4E9] text-gray-text text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>e.g. Human Resources</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>

        <div className="">
          <label className="block text-heading text-sm font-medium mb-2 flex items-center" htmlFor="First Name">Select Industry<span className="text-span-clr">*</span><img className="max-w-5 max-h-5 ml-2" src="/assets/images/Vector.png" /></label>
          <select id="Industry" className="bg-gray-50 border border-[#E2E4E9] text-gray-text text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Select Industry</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>

        <div className="my-5">
          <label className="block text-heading text-sm font-medium mb-2 flex items-center" htmlFor="First Name">Select Sector<img className="max-w-5 max-h-5 ml-2" src="/assets/images/Vector.png" /></label>
          <select id="Sector" className="bg-gray-50 border border-[#E2E4E9] text-gray-text text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Select Sector</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>

        <div className="">
          <label className="block text-heading text-sm font-medium mb-2 flex items-center" htmlFor="First Name">Select No. of Employees <img className="max-w-5 max-h-5 ml-2" src="/assets/images/Vector.png" /></label>
          <select id="Employees" className="bg-gray-50 border border-[#E2E4E9] text-gray-text text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Select No. of Employees</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>

        <div className="mt-5">
          <label className="block text-heading text-sm font-medium mb-2 flex items-center" htmlFor="First Name">Location <img className="max-w-5 max-h-5 ml-2" src="/assets/images/Vector.png" /></label>
          <select id="Location" className="bg-gray-50 border border-[#E2E4E9] text-gray-text text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Location</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>

        <button className="rounded w-full mt-5 bg-purple hover:bg-purple-700 py-2.5 px-4 text-white font-semibold"
          onClick={() => setStep((prev: number) => prev + 1)}>{" "}  Continue</button>
        <div className="font-normal my-5 text-sm text-center">
          <a href="" className="text-gray-500 text-center">
            Want to fill in later?{" "}<span className="text-gray-dark font-semibold">Skip this step</span>
          </a>
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

export default SignupFour