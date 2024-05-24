import { useEffect, useState } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const SignupFive = ({
  handleSubmit,
  register,
  onSubmit,
  errors,
  setValue,
}: any) => {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [passwordRequirements, setPasswordRequirements] = useState({
    uppercase: false,
    number: false,
    minLength: false,
  });

  const [passwordStrength, setPasswordStrength] = useState(0);

  useEffect(() => {
    let strength = 0;
    if (passwordRequirements.uppercase) strength += 1;
    if (passwordRequirements.number) strength += 1;
    if (passwordRequirements.minLength) strength += 1;
    setPasswordStrength(strength);
  }, [passwordRequirements]);

  const checkPasswordRequirements = (value: string) => {
    console.log(value);
    const hasUppercase = /[A-Z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const hasMinLength = value.length >= 8;

    setPasswordRequirements({
      uppercase: hasUppercase,
      number: hasNumber,
      minLength: hasMinLength,
    });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    const newPassword: any = e;
    checkPasswordRequirements(newPassword);
  };

  return (
    <div className="main min-h-vhcalc225px bg-[url(../assets/images/Pattern.png)] bg-no-repeat bg-top px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form-2 flex flex-col max-w-md m-auto justify-center"
      >
        <div className="flex w-full justify-center mb-4">
          <img src="/assets/images/Custom-lock.png" width={88} height={88} />
        </div>
        <h2 className="text-main-heading text-2xl mb-1 font-medium text-center">
          Password Setup
        </h2>
        <p className="text-gray-dark text-center mb-0">
          Set up a secure password to protect your account.
        </p>
        <hr className="my-6"></hr>
        <div>
          <label
            className="block text-main-heading text-sm font-medium mb-2"
            htmlFor="password"
          >
            Create a Password<span className="text-span-clr">*</span>
          </label>
          <div className="relative">
            <span className="absolute h-2 w-4 inset-y-3 inset-x-3">
              <img src="/assets/images/lock-2-line.png" />
            </span>
            <input
              className={`lft-space shadow appearance-none border ${
                errors.password ? "border-red-600" : "border-slate-300"
              } rounded-[10px] w-full py-2.5 px-2.5text-input-text leading-tight focus:outline-none focus:shadow-outline`}
              id="password"
              type={showNewPassword ? "text" : "password"}
              placeholder="🞄🞄🞄🞄🞄🞄🞄🞄🞄🞄🞄🞄🞄🞄"
              onChange={(e: any) => {
                console.log(e);
                handlePasswordChange(e.target.value);
                setValue("password", e.target.value);
              }}
            />
            <span
              className="absolute h-2 w-4 inset-y-3 right-2"
              onClick={() => setShowNewPassword(!showNewPassword)}
            >
              {showNewPassword ? (
                <VisibilityOffIcon className="pb-3 pr-2" />
              ) : (
                <img src="/assets/images/eye-line.png" />
              )}
            </span>
            {errors.password && (
              <p className="text-[#F04438] text-sm mt-2">
                {errors.password.message}
              </p>
            )}
          </div>
        </div>

        <div className="my-3">
          <label
            className="block text-main-heading text-sm font-medium mb-2"
            htmlFor="confirmPassword"
          >
            Confirm Password<span className="text-span-clr">*</span>
          </label>
          <div className="relative">
            <span className="absolute h-2 w-4 inset-y-3 inset-x-3">
              <img src="/assets/images/lock-2-line.png" />
            </span>
            <input
              className={`lft-space shadow appearance-none border ${
                errors.confirmPassword ? "border-red-600" : "border-slate-300"
              } rounded-[10px] w-full py-2.5 px-2.5text-input-text leading-tight focus:outline-none focus:shadow-outline`}
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              {...register("confirmPassword")}
              placeholder="🞄🞄🞄🞄🞄🞄🞄🞄🞄🞄🞄🞄🞄🞄"
            />
            <span
              className="absolute h-2 w-4 inset-y-3 right-2"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <VisibilityOffIcon className="pb-3 pr-2" />
              ) : (
                <img src="/assets/images/eye-line.png" />
              )}
            </span>
            {errors.confirmPassword && (
              <p className="text-[#F04438] text-sm mt-2">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
        </div>
        <div className="flex items-center justify-between mb-2">
          <hr
            className={`border-2 ${
              passwordStrength > 0 ? "border-red-500" : "border-red-200"
            } w-1/3 `}
          ></hr>
          <hr
            className={`border-2 ${
              passwordStrength > 1 ? "border-orange-500" : "border-orange-200"
            } w-1/3 mx-5`}
          ></hr>
          <hr
            className={`border-2 ${
              passwordStrength > 2 ? "border-green-500" : "border-green-200"
            } w-1/3`}
          ></hr>
        </div>
        <p className="font-normal text-content text-gray-dark text-xs">
          Weak password. Must contain at least;
        </p>

        <ul className="p-0 text-xs text-gray-dark">
          <li className="my-2 flex items-center font-normal text-xs">
            <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" fill="none" className={`mr-1 ${passwordRequirements.uppercase ? "" : "hidden"}`}>
              <path d="M6 12C2.6862 12 0 9.3138 0 6C0 2.6862 2.6862 0 6 0C9.3138 0 12 2.6862 12 6C12 9.3138 9.3138 12 6 12ZM5.4018 8.4L9.6438 4.1574L8.7954 3.309L5.4018 6.7032L3.7044 5.0058L2.856 5.8542L5.4018 8.4Z" fill="#38C793" />
            </svg>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={`mr-1 ${passwordRequirements.uppercase ? "hidden" : ""}`}>
              <path d="M6 12C2.6862 12 0 9.3138 0 6C0 2.6862 2.6862 0 6 0C9.3138 0 12 2.6862 12 6C12 9.3138 9.3138 12 6 12ZM6 5.1516L4.3032 3.4542L3.4542 4.3032L5.1516 6L3.4542 7.6968L4.3032 8.5458L6 6.8484L7.6968 8.5458L8.5458 7.6968L6.8484 6L8.5458 4.3032L7.6968 3.4542L6 5.1516Z" fill="#868C98" />
            </svg>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={passwordRequirements.uppercase ? "green" : "#868C98"}
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="max-w-3 max-h-3 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg> */}
            At least 1 uppercase
          </li>
          <li className="mb-2 flex items-center font-normal text-xs">
            {" "}
            <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" fill="none" className={`mr-1 ${passwordRequirements.number ? "" : "hidden"}`}>
              <path d="M6 12C2.6862 12 0 9.3138 0 6C0 2.6862 2.6862 0 6 0C9.3138 0 12 2.6862 12 6C12 9.3138 9.3138 12 6 12ZM5.4018 8.4L9.6438 4.1574L8.7954 3.309L5.4018 6.7032L3.7044 5.0058L2.856 5.8542L5.4018 8.4Z" fill="#38C793" />
            </svg>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={`mr-1 ${passwordRequirements.number ? "hidden" : ""}`}>
              <path d="M6 12C2.6862 12 0 9.3138 0 6C0 2.6862 2.6862 0 6 0C9.3138 0 12 2.6862 12 6C12 9.3138 9.3138 12 6 12ZM6 5.1516L4.3032 3.4542L3.4542 4.3032L5.1516 6L3.4542 7.6968L4.3032 8.5458L6 6.8484L7.6968 8.5458L8.5458 7.6968L6.8484 6L8.5458 4.3032L7.6968 3.4542L6 5.1516Z" fill="#868C98" />
            </svg>

            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={passwordRequirements.number ? "green" : "#868C98"}
              className="max-w-3 max-h-3 mr-1"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg> */}
            At least 1 number
          </li>
          <li className="mb-2 flex items-center font-normal text-xs">
            {" "}
            <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" fill="none" className={`mr-1 ${passwordRequirements.minLength ? "" : "hidden"}`}>
              <path d="M6 12C2.6862 12 0 9.3138 0 6C0 2.6862 2.6862 0 6 0C9.3138 0 12 2.6862 12 6C12 9.3138 9.3138 12 6 12ZM5.4018 8.4L9.6438 4.1574L8.7954 3.309L5.4018 6.7032L3.7044 5.0058L2.856 5.8542L5.4018 8.4Z" fill="#38C793" />
            </svg>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={`mr-1 ${passwordRequirements.minLength ? "hidden" : ""}`}>
              <path d="M6 12C2.6862 12 0 9.3138 0 6C0 2.6862 2.6862 0 6 0C9.3138 0 12 2.6862 12 6C12 9.3138 9.3138 12 6 12ZM6 5.1516L4.3032 3.4542L3.4542 4.3032L5.1516 6L3.4542 7.6968L4.3032 8.5458L6 6.8484L7.6968 8.5458L8.5458 7.6968L6.8484 6L8.5458 4.3032L7.6968 3.4542L6 5.1516Z" fill="#868C98" />
            </svg>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={passwordRequirements.minLength ? "green" : "#868C98"}
              className="max-w-3 max-h-3 mr-1"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg> */}
            At least 8 characters
          </li>
        </ul>

        <button
          className="rounded-[10px] w-full mt-5 bg-blue-600 hover:bg-purple-700 py-2.5 px-2.5 text-white font-semibold"
          type="submit"
        >
          {" "}
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupFive;
