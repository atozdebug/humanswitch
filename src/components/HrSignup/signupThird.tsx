const SignupThree = ({ handleSubmit, register, onSubmit, errors }: any) => {
  return (
    <div className="main min-h-vhcalc225px bg-[url(../assets/images/Pattern.png)] bg-no-repeat bg-top px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form-3 flex flex-col max-w-392px m-auto my-5"
      >
        <div className="flex items-center gap-2">
          <div>
            <h1 className="text-center flex justify-center">
              <img src="/assets/images/user-name.png" width={'88px'} height={'88px'} />
            </h1>
          </div>
          <div>
            <h2 className="text-main-heading text-2xl font-medium mb-1">
              Role Selection
            </h2>
            <p className="text-gray-dark">
              Choose your role within your company.
            </p>
          </div>
        </div>
        <hr className="my-6"></hr>
        <div
          className={`flex items-center content-center gap-14px justify-between border ${
            errors?.role ? "border-red-600" : "border-[#E2E4E9]"
          } p-4 rounded-xl`}
        >
          <div className="flex gap-14px items-center">
            <div>
              <h1 className="text-center flex justify-center">
                <img src="/assets/images/camra.png" width={40} height={40} />
              </h1>
            </div>
            <div>
              <h2 className="font-medium text-sm text-start text-main-heading">I’m an Admin</h2>
              <p className="font-normal text-xs text-start text-gray-dark">
                Join as an admin to access HumanSwitch
              </p>
            </div>
          </div>
          <div>
            <input
              id="default-radio-1"
              type="radio"
              value="Admin"
              name="default-radio"
              {...register("role")}
              className="min-w-[13px] text-blue-600 bg-gray-100  dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700"
            />
          </div>
        </div>

        <div
          className={`flex items-center content-center gap-14px justify-between border ${
            errors?.role ? "border-red-600" : "border-[#E2E4E9]"
          } p-4 rounded-xl mt-3`}
        >
          <div className="flex gap-14px items-center">
            <div>
              <h1 className="text-center flex justify-center">
                <img src="/assets/images/user.png" />
              </h1>
            </div>
            <div>
              <h2 className="font-medium text-sm text-start text-main-heading">I'm an Employee</h2>
              <p className="font-normal text-xs text-start text-gray-dark">
                Join as an employee to access HumanSwitch.
              </p>
            </div>
          </div>
          <div>
            <input
              id="default-radio-2"
              type="radio"
              value="Employee"
              name="default-radio"
              {...register("role")}
              className="min-w-[13px] text-blue-600 bg-gray-100   dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700"
            />
          </div>
        </div>
        {errors?.role && (
          <p className="text-red-500 text-sm mt-2">{errors?.role?.message}</p>
        )}
        <button
          className="rounded-lg w-full mt-5 bg-blue-600 hover:bg-purple-700 py-2.5 px-2.5 text-white font-semibold"
          type="submit"
        >
          {" "}
          Continue{" "}
        </button>
      </form>


    </div>
  );
};

export default SignupThree;
