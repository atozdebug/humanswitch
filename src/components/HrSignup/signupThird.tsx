const SignupThree = ({ handleSubmit, register, onSubmit, errors }: any) => {
  return (
    <div className="main">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form-3 flex flex-col max-w-md m-auto my-5"
      >
        <h1 className="text-center flex justify-center">
          <img src="/assets/images/user-name.png" />
        </h1>
        <h2 className="text-main-heading text-2xl font-medium text-center">
          Role Selection
        </h2>
        <p className="gray-dark text-center">
          Choose your role within your company.
        </p>
        <hr className="my-5"></hr>
        <div
          className={`flex items-center content-center  justify-between border ${
            errors?.role ? "border-red-600" : "border-[#E2E4E9]"
          } p-4 rounded-xl`}
        >
          <div>
            <h1 className="text-center flex justify-center">
              <img src="/assets/images/camra.png" />
            </h1>
          </div>
          <div>
            <h2 className="font-medium text-sm text-start">I’m an Admin</h2>
            <p className="font-normal text-xs text-start">
              Join as an admin to access HumanSwitch
            </p>
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
          className={`flex items-center content-center  justify-between border ${
            errors?.role ? "border-red-600" : "border-[#E2E4E9]"
          } p-4 rounded-xl mt-5`}
        >
          <div>
            <h1 className="text-center flex justify-center">
              <img src="/assets/images/user.png" />
            </h1>
          </div>
          <div>
            <h2 className="font-medium text-sm text-start">I'm an Employee</h2>
            <p className="font-normal text-xs text-start">
              Join as an employee to access HumanSwitch.
            </p>
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
          className="rounded w-full mt-5 bg-purple-500 hover:bg-purple-700 py-2.5 px-4 text-white font-semibold"
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
