const methods = [
  {
    name: "SMS Code",
    description:
      "Receive a one-time verification code via SMS to enter during login.",
    image: "/assets/images/camra.png",
  },
  {
    name: "Email Code",
    description:
      "Get a temporary verification code sent to your email for added security.",
    image: "/assets/images/user.png",
  },
  {
    name: "Authenticator App",
    description:
      "Use an authenticator app to generate time-based verification codes for login.",
    image: "/assets/images/user.png",
  },
];

const PrivacySecurity = ({ handleSubmit, register, onSubmit, errors }: any) => {
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center max-w-md m-auto mt-6"
    >
      <h2 className="text-gray-dark text-2xl font-medium ">2FA Security</h2>
      <p className="gray-dark ">
        Enable two-factor authentication to your account.
      </p>
      <hr className="my-5"></hr>
      {methods.map((method, index) => (
        <div
          key={index}
          className={`flex items-center content-center justify-between border ${
            errors?.method ? "border-red-600" : "border-[#E2E4E9]"
          } p-4 mb-4 rounded-xl`}
        >
          <div>
            <h1 className="text-center flex justify-center">
              <img src={method.image} />
            </h1>
          </div>
          <div>
            <h2 className="font-medium text-sm text-start">{method.name}</h2>
            <p className="font-normal text-xs text-start">
              {method.description}
            </p>
          </div>
          <div>
            <input
              id="default-radio-1"
              type="radio"
              value={method.name}
              name="default-radio"
              {...register("method")}
              className="w-4 h-4 text-blue-600 bg-gray-100  dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700"
            />
          </div>
        </div>
      ))}
      {errors?.method && (
        <p className="text-red-500 text-sm mt-2">{errors?.method?.message}</p>
      )}
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
