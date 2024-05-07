const PrivacySecurity = () => {
  return (
    <form className="flex flex-col justify-center max-w-md m-auto mt-20">
      <h2 className="text-gray-dark text-2xl font-medium ">2FA Security</h2>
      <p className="gray-dark ">
        Enable two-factor authentication to your account.
      </p>
      <hr className="my-5"></hr>
      <div
        className={`flex items-center content-center  justify-between border p-4 rounded-xl`}
      >
        <div>
          <h1 className="text-center flex justify-center">
            <img src="/assets/images/camra.png" />
          </h1>
        </div>
        <div>
          <h2 className="font-medium text-sm text-start">SMS Code</h2>
          <p className="font-normal text-xs text-start">
            Receive a one-time verification code via SMS to enter during login.
          </p>
        </div>
        <div>
          <input
            id="default-radio-1"
            type="radio"
            value="Admin"
            name="default-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100  dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700"
          />
        </div>
      </div>

      <div
        className={`flex items-center content-center  justify-between border  p-4 rounded-xl mt-5`}
      >
        <div>
          <h1 className="text-center flex justify-center">
            <img src="/assets/images/user.png" />
          </h1>
        </div>
        <div>
          <h2 className="font-medium text-sm text-start">Email Code</h2>
          <p className="font-normal text-xs text-start">
            Get a temporary verification code sent to your email for added
            security.
          </p>
        </div>
        <div>
          <input
            id="default-radio-2"
            type="radio"
            value="Employee"
            name="default-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100   dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700"
          />
        </div>
      </div>
      <div
        className={`flex items-center content-center  justify-between border  p-4 rounded-xl mt-5`}
      >
        <div>
          <h1 className="text-center flex justify-center">
            <img src="/assets/images/user.png" />
          </h1>
        </div>
        <div>
          <h2 className="font-medium text-sm text-start">Authenticator App</h2>
          <p className="font-normal text-xs text-start">
            Use an authenticator app to generate time-based verification codes
            for login.
          </p>
        </div>
        <div>
          <input
            id="default-radio-2"
            type="radio"
            value="Employee"
            name="default-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100   dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700"
          />
        </div>
      </div>
      <button
        className="rounded w-full mt-5 bg-button-clr bg-purple-600  hover:bg-purple-700 py-2.5 px-4 text-white font-semibold"
        type="submit"
      >
        Enable 2FA Security{" "}
      </button>
    </form>
  );
};

export default PrivacySecurity;
