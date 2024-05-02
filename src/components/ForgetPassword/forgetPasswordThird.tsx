const ForgetPasswordThird = ({ backStep }: any) => {
  return (
    <div className="login-form">
      <h5 className="text-xl flex justify-center gap-5 header font-semibold  ">
        {" "}
        <span>
          {" "}
          <img
            src="/assets/images/Featured icon.png"
            className="borders-[#000000]"
          />
        </span>{" "}
      </h5>
      <h2 className="text-3xl font-semibold  mt-8 mb-3 text-center">
        Password reset
      </h2>
      <p className="font-normal text-center">
        Your password has been successfully reset.
      </p>
      <p className="font-normal text-center">
        Click below to log in magically.
      </p>

      <div className="form-info flex flex-col justify-between items-center mt-4">
        <button className="rounded w-full my-5 bg-purple-500 hover:bg-purple-700 py-2 px-4 text-white font-semibold">
          <a href="/login">Continue</a>
        </button>

        <button
          onClick={backStep}
          className="flex gap-5 mt-3 text-sm font-semibold"
        >
          <img src="/assets/images/arrow-left.png" />
          Back
        </button>
      </div>
    </div>
  );
};

export default ForgetPasswordThird;
