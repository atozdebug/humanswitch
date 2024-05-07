const SignupSixth = ({ formData }: any) => {
  return (
    <div>
      <div className="form flex flex-col max-w-md m-auto justify-center">
        <h1 className="flex justify-center text-center">
          <img src="/assets/images/check.png" />
        </h1>
        <h2 className="text-gray-dark text-2xl font-medium text-center">
          Onboarding Summary
        </h2>
        <p className="gray-dark text-center mb-3">
          Review and complete your account setup.
        </p>
        <div className="border p-4 rounded-[12px]">
          <div className="mt-4">
            <label className="lft-space-summery  text-xs font-medium">
              FULL NAME
            </label>
            <div className="relative">
              <span className="absolute  top-0.5 inset-x-0 max-w-10 max-h-10 summey-top-space ">
                <img className="max-w-{20px}" src="/assets/images/key1.png" />
              </span>
              <input
                className={`lft-space-summery text-sm font-medium appearance-none  rounded w-full  pd-bottom  pl-5 text-input-text leading-tight focus:outline-none focus:shadow-outline`}
                id="fname"
                type="full-nm"
                readOnly
                value={formData.first_name + " " + formData.last_name}
              />
              {/* <span className="absolute inset-y-3 right-2 summey-top-space">
                <img className="max-w-{20px}" src="/assets/images/key2.png" />
              </span> */}
            </div>
          </div>

          <hr className="my-4"></hr>
          <div className="">
            <label className="lft-space-summery  text-xs font-medium">
              USERNAME
            </label>
            <div className="relative">
              <span className="absolute  inset-y-2 inset-x-0  summey-top-space">
                <img className="max-w-{20px}" src="/assets/images/key3.png" />
              </span>
              <input
                className={`lft-space-summery text-sm font-medium appearance-none  rounded w-full  pd-bottom  pl-5 text-input-text leading-tight focus:outline-none focus:shadow-outline`}
                id="fname"
                type="full-nm"
                value="james@humanswitch.ai"
                readOnly
              />
              {/* <span className="absolute inset-y-3 right-2 summey-top-space ">
                <img className="max-w-{20px}" src="/assets/images/key2.png" />
              </span> */}
            </div>
          </div>

          <hr className="my-4"></hr>

          <div className="">
            <label className="lft-space-summery  text-xs font-medium">
              EMAIL ADDRESS
            </label>
            <div className="relative">
              <span className="absolute  inset-y-2 inset-x-0 max-w-10 max-h-10 summey-top-space">
                <img className="max-w-{20px}" src="/assets/images/key4.png" />
              </span>
              <input
                className={`lft-space-summery text-sm font-medium appearance-none rounded w-full  pd-bottom  pl-5 text-input-text leading-tight focus:outline-none focus:shadow-outline`}
                id="fname"
                type="full-nm"
                readOnly
                value={formData.email}
              />
              {/* <span className="absolute inset-y-3 right-2 summey-top-space">
                <img className="max-w-{20px}" src="/assets/images/key2.png" />
              </span> */}
            </div>
          </div>

          <hr className="my-4"></hr>

          <div className="">
            <label className="lft-space-summery  text-xs font-medium">
              TITLE
            </label>
            <div className="relative">
              <span className="absolute  inset-y-2 inset-x-0 max-w-10 max-h-10  summey-top-space">
                <img className="max-w-{20px}" src="/assets/images/key5.png" />
              </span>
              <input
                className={`lft-space-summery text-sm font-medium appearance-none  rounded w-full  pd-bottom  pl-5 text-input-text leading-tight focus:outline-none focus:shadow-outline`}
                id="fname"
                type="full-nm"
                readOnly
                value={formData.role}
              />
              {/* <span className="absolute inset-y-3 right-2 summey-top-space ">
                <img className="max-w-{20px}" src="/assets/images/key2.png" />
              </span> */}
            </div>
          </div>
          <hr className="my-4"></hr>
          <div className="">
            <label className="lft-space-summery  text-xs font-medium">
              DEPARTMENT
            </label>
            <div className="relative">
              <span className="absolute  inset-y-2 inset-x-0 max-w-10 max-h-10 summey-top-space">
                <img className="max-w-{20px}" src="/assets/images/key6.png" />
              </span>
              <input
                className={`lft-space-summery text-sm font-medium appearance-none  rounded w-full  pd-bottom  pl-5 text-input-text leading-tight focus:outline-none focus:shadow-outline`}
                id="fname"
                type="full-nm"
                readOnly
                value={formData.sector}
              />
              {/* <span className="absolute inset-y-3 right-2 max-w-10 max-h-10 summey-top-space">
                <img className="max-w-{20px}" src="/assets/images/key2.png" />
              </span> */}
            </div>
          </div>
        </div>

        <button
          className="rounded w-full mt-5 bg-bggreen-500 hover:bg-purple-700 py-2.5 px-2.5 text-white font-semibold"
          type="submit"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SignupSixth;
