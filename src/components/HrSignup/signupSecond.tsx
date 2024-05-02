const SignupTwo = ({ setStep }: any) => {
  return (
    <div className="main">
      <div className="text-start my-2 back-btnn">
        <button
          className="px-4 py-2.5 text-heading border border-[#E2E4E9] font-semibold rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          onClick={() => setStep((prev: number) => prev - 1)}
        >
          Back
        </button>
      </div>
      <div className="form-2 flex flex-col max-w-md m-auto justify-center">
        <h1 className="text-center flex justify-center">
          <img src="/assets/images/Custom-icon.png" />
        </h1>
        <h2 className="text-gray-dark text-2xl font-medium text-center">
          Personal Information
        </h2>
        <p className="gray-dark text-center">
          Provide essential information to proceed.
        </p>
        <hr className="my-5"></hr>
        <div className="flex items-center content-center  justify-between mb-5 ">
          <div>
            <h1>
              <img src="/assets/images/Custom-icon.png" />
            </h1>
          </div>
          <div>
            <h3 className="text-heading font-medium text-start">
              Upload Image:
            </h3>
            <p className="text-gray-dark font-normal text-start my-2">
              Min 400x400px, PNG or JPEG
            </p>
            <input
              type="file"
              id="image-upload"
              name="image-upload"
              accept="image/*"
              className="block w-full text-start  text-sm text-gray-900 bg-gray-50 rounded-lg cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            />
          </div>
        </div>
        <div className="">
          <label
            className="block text-heading text-sm font-medium mb-2"
            htmlFor="First Name"
          >
            First Name<span className="text-span-clr">*</span>
          </label>
          <input
            className="shadow appearance-none border border-slate-300 rounded w-full py-2 px-3 text-input-text leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="James"
          ></input>
          <div className="my-5">
            <label
              className="block text-heading text-sm font-medium mb-2"
              htmlFor="last Name"
            >
              Last Name<span className="text-span-clr">*</span>
            </label>
            <input
              className="shadow appearance-none border border-slate-300 rounded w-full py-2 px-3 text-input-text leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Brown"
            ></input>
          </div>
          <div>
            <label
              className="block text-heading text-sm font-medium mb-2"
              htmlFor="Phone Number"
            >
              Phone Number<span className="text-span-clr">*</span>
            </label>
            <input
              className="shadow appearance-none border border-slate-300 rounded w-full py-2 px-3 text-input-text leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="(555) 000-0000"
            ></input>
          </div>

          <button
            className="rounded w-full mt-5 bg-purple hover:bg-purple-700 py-2.5 px-4 text-white font-semibold"
            onClick={() => setStep((prev: number) => prev + 1)}
          >
            {" "}
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupTwo;
