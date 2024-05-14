import { useEffect, useState } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const ChangePassword = ({
  handleSubmit,
  register,
  onSubmit,
  errors,
  setValue,
}: any) => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center max-w-md m-auto mt-6"
    >
      <h2 className="text-gray-dark text-2xl font-medium ">Password Setup</h2>
      <p className="gray-dark">
        Set up a secure password to protect your account.
      </p>
      <hr className="my-5"></hr>
      <div>
        <label
          className="block text-heading text-sm font-medium mb-2"
          htmlFor="current_password"
        >
          Current Password<span className="text-span-clr">*</span>
        </label>
        <div className="relative">
          <span className="absolute h-2 w-4 inset-y-3 inset-x-3">
            <img src="/assets/images/lock-2-line.png" />
          </span>
          <input
            className={`lft-space shadow appearance-none border ${
              errors.current_password ? "border-red-600" : "border-slate-300"
            } rounded w-full py-2 pl-5 text-input-text leading-tight focus:outline-none focus:shadow-outline`}
            id="current_password"
            type={showCurrentPassword ? "text" : "password"}
            placeholder=".........."
            {...register("current_password")}
          />
          <span
            className="absolute h-4 w-4 inset-y-3 right-2"
            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
          >
            {showCurrentPassword ? (
              <VisibilityOffIcon className="pb-3 pr-2" />
            ) : (
              <img src="/assets/images/eye-line.png" />
            )}
          </span>
          {errors.current_password && (
            <p className="text-[#F04438] text-sm mt-2">
              {errors.current_password.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          className="block text-heading text-sm font-medium mb-2 mt-4"
          htmlFor="new_password"
        >
          New Password<span className="text-span-clr">*</span>
        </label>
        <div className="relative">
          <span className="absolute h-2 w-4 inset-y-3 inset-x-3">
            <img src="/assets/images/lock-2-line.png" />
          </span>
          <input
            className={`lft-space shadow appearance-none border ${
              errors.new_password ? "border-red-600" : "border-slate-300"
            } rounded w-full py-2 pl-5 text-input-text leading-tight focus:outline-none focus:shadow-outline`}
            id="new_password"
            type={showNewPassword ? "text" : "password"}
            placeholder=".........."
            onChange={(e: any) => {
              console.log(e);
              handlePasswordChange(e.target.value);
              setValue("new_password", e.target.value);
            }}
            // {...register("new_password")}
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
          {errors.new_password && (
            <p className="text-[#F04438] text-sm mt-2">
              {errors.new_password.message}
            </p>
          )}
        </div>
      </div>

      <div className="my-5">
        <label
          className="block text-heading text-sm font-medium mb-2"
          htmlFor="confirm_password"
        >
          Confirm New Password
          <span className="text-span-clr">*</span>
        </label>
        <div className="relative">
          <span className="absolute h-2 w-4 inset-y-3 inset-x-3">
            <img src="/assets/images/lock-2-line.png" />
          </span>
          <input
            className={`lft-space shadow appearance-none border ${
              errors.confirm_password ? "border-red-600" : "border-slate-300"
            } rounded w-full py-2   pl-5 text-input-text leading-tight focus:outline-none focus:shadow-outline`}
            id="confirm_password"
            type={showConfirmPassword ? "text" : "password"}
            {...register("confirm_password")}
            placeholder=".........."
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
          {errors.confirm_password && (
            <p className="text-[#F04438] text-sm mt-2">
              {errors.confirm_password.message}
            </p>
          )}
        </div>
      </div>
      <div className="flex items-center justify-between mb-5">
        <hr
          className={`border-4 ${
            passwordStrength > 0 ? "border-red-500" : "border-red-200"
          } w-40 `}
        ></hr>
        <hr
          className={`border-4 ${
            passwordStrength > 1 ? "border-orange-500" : "border-orange-200"
          } w-40 mx-5`}
        ></hr>
        <hr
          className={`border-4 ${
            passwordStrength > 2 ? "border-green-500" : "border-green-200"
          } w-40`}
        ></hr>
      </div>
      <p className="text-sm font-normal text-content">
        Weak password. Must contain at least;
      </p>

      <ul className="p-0 text-xs ">
        <li className="my-2 flex items-center font-normal text-xs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={passwordRequirements.uppercase ? "green" : "none"}
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="max-w-3 max-h-3 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          At least 1 uppercase
        </li>
        <li className="mb-2 flex items-center font-normal text-xs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={passwordRequirements.number ? "green" : "none"}
            className="max-w-3 max-h-3 mr-1"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          At least 1 number
        </li>
        <li className="mb-2 flex items-center font-normal text-xs">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={passwordRequirements.minLength ? "green" : "none"}
            className="max-w-3 max-h-3 mr-1"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          At least 8 characters
        </li>
      </ul>
      <div>
        {/* <button
        
          className="px-4 py-2.5 text-heading border border-[#E2E4E9] font-semibold rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 min-w-[168px]"
        >
          Discard
        </button> */}

        <button
          type="submit"
          className="rounded mt-5 bg-purple-600 hover:bg-purple-700 py-2.5 px-4 text-white font-semibold min-w-[168px] ml-3"
        >
          Apply Changes
        </button>
      </div>
    </form>
  );
};

export default ChangePassword;
