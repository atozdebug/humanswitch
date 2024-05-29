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
    const newPassword: any = e;
    checkPasswordRequirements(newPassword);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center w-full md:max-w-350px m-auto mt-8 md:mt-0"
    >
      <h2 className="text-main-heading text-2xl font-medium mb-1">
        Password Setup
      </h2>
      <p className="text-gray-dark text-sm">
        Set up a secure password to protect your account.
      </p>
      <hr className="my-5"></hr>
      <div>
        <label
          className="block text-heading text-sm font-medium mb-1"
          htmlFor="current_password"
        >
          Current Password<span className="text-span-clr">*</span>
        </label>
        <div className="relative">
          <span className="absolute h-2 w-4 inset-y-3 inset-x-3">
            <img src="/assets/images/lock-2-line.png" />
          </span>
          <input
            className={`lft-space appearance-none border minor-shadow ${
              errors.current_password ? "border-red-600" : "border-slate-300"
            } rounded-[10px] w-full py-2 pl-5 text-input-text leading-tight focus:outline-none focus:shadow-outline`}
            id="current_password"
            type={showCurrentPassword ? "text" : "password"}
            placeholder="🞄🞄🞄🞄🞄🞄🞄🞄🞄🞄🞄🞄🞄🞄"
            {...register("current_password")}
          />
          <span
            className="absolute h-4 w-4 inset-y-3 right-2"
            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
          >
            {showCurrentPassword ? (
              <img src="/assets/images/eye-line.png" />
            ) : (
              <VisibilityOffIcon className="pb-3 pr-2" />
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
          className="block text-heading text-sm font-medium mb-1 mt-3"
          htmlFor="new_password"
        >
          New Password<span className="text-span-clr">*</span>
        </label>
        <div className="relative">
          <span className="absolute h-2 w-4 inset-y-3 inset-x-3">
            <img src="/assets/images/lock-2-line.png" />
          </span>
          <input
            className={`lft-space appearance-none border minor-shadow ${
              errors.new_password ? "border-red-600" : "border-slate-300"
            } rounded-[10px] w-full py-2 pl-5 text-input-text leading-tight focus:outline-none focus:shadow-outline`}
            id="new_password"
            type={showNewPassword ? "text" : "password"}
            placeholder="🞄🞄🞄🞄🞄🞄🞄🞄🞄🞄🞄🞄🞄🞄"
            onChange={(e: any) => {
              handlePasswordChange(e.target.value);
              setValue("new_password", e.target.value, {
                shouldValidate: true,
              });
            }}
            // {...register("new_password")}
          />
          <span
            className="absolute h-2 w-4 inset-y-3 right-2"
            onClick={() => setShowNewPassword(!showNewPassword)}
          >
            {showNewPassword ? (
              <img src="/assets/images/eye-line.png" />
            ) : (
              <VisibilityOffIcon className="pb-3 pr-2" />
            )}
          </span>
          {errors.new_password && (
            <p className="text-[#F04438] text-sm mt-2">
              {errors.new_password.message}
            </p>
          )}
        </div>
      </div>

      <div className="my-3">
        <label
          className="block text-heading text-sm font-medium mb-1"
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
            className={`lft-space appearance-none border minor-shadow ${
              errors.confirm_password ? "border-red-600" : "border-slate-300"
            } rounded-[10px] w-full py-2 pl-5 text-input-text leading-tight focus:outline-none focus:shadow-outline`}
            id="confirm_password"
            type={showConfirmPassword ? "text" : "password"}
            {...register("confirm_password")}
            placeholder="🞄🞄🞄🞄🞄🞄🞄🞄🞄🞄🞄🞄🞄🞄"
          />
          <span
            className="absolute h-2 w-4 inset-y-3 right-2"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? (
              <img src="/assets/images/eye-line.png" />
            ) : (
              <VisibilityOffIcon className="pb-3 pr-2" />
            )}
          </span>
          {errors.confirm_password && (
            <p className="text-[#F04438] text-sm mt-2">
              {errors.confirm_password.message}
            </p>
          )}
        </div>
      </div>
      <div className="flex items-center justify-between mb-2 gap-2">
        <hr
          className={`border-2 ${
            passwordStrength > 0 ? "border-red-500" : "border-red-200"
          } w-1/3 `}
        ></hr>
        <hr
          className={`border-2 ${
            passwordStrength > 1 ? "border-orange-500" : "border-orange-200"
          } w-1/3`}
        ></hr>
        <hr
          className={`border-2 ${
            passwordStrength > 2 ? "border-green-500" : "border-green-200"
          } w-1/3`}
        ></hr>
      </div>
      <p className="text-xs text-gray-dark font-normal text-content ">
        Weak password. Must contain at least;
      </p>

      <ul className="p-0 text-xs text-gray-dark ">
        <li className="my-2 flex items-center font-normal text-xs">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className={`mr-1 ${passwordRequirements.uppercase ? "" : "hidden"}`}
          >
            <path
              d="M6 12C2.6862 12 0 9.3138 0 6C0 2.6862 2.6862 0 6 0C9.3138 0 12 2.6862 12 6C12 9.3138 9.3138 12 6 12ZM5.4018 8.4L9.6438 4.1574L8.7954 3.309L5.4018 6.7032L3.7044 5.0058L2.856 5.8542L5.4018 8.4Z"
              fill="#38C793"
            />
          </svg>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`mr-1 ${passwordRequirements.uppercase ? "hidden" : ""}`}
          >
            <path
              d="M6 12C2.6862 12 0 9.3138 0 6C0 2.6862 2.6862 0 6 0C9.3138 0 12 2.6862 12 6C12 9.3138 9.3138 12 6 12ZM6 5.1516L4.3032 3.4542L3.4542 4.3032L5.1516 6L3.4542 7.6968L4.3032 8.5458L6 6.8484L7.6968 8.5458L8.5458 7.6968L6.8484 6L8.5458 4.3032L7.6968 3.4542L6 5.1516Z"
              fill="#868C98"
            />
          </svg>
          At least 1 uppercase
        </li>
        <li className="mb-2 flex items-center font-normal text-xs">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className={`mr-1 ${passwordRequirements.number ? "" : "hidden"}`}
          >
            <path
              d="M6 12C2.6862 12 0 9.3138 0 6C0 2.6862 2.6862 0 6 0C9.3138 0 12 2.6862 12 6C12 9.3138 9.3138 12 6 12ZM5.4018 8.4L9.6438 4.1574L8.7954 3.309L5.4018 6.7032L3.7044 5.0058L2.856 5.8542L5.4018 8.4Z"
              fill="#38C793"
            />
          </svg>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`mr-1 ${passwordRequirements.number ? "hidden" : ""}`}
          >
            <path
              d="M6 12C2.6862 12 0 9.3138 0 6C0 2.6862 2.6862 0 6 0C9.3138 0 12 2.6862 12 6C12 9.3138 9.3138 12 6 12ZM6 5.1516L4.3032 3.4542L3.4542 4.3032L5.1516 6L3.4542 7.6968L4.3032 8.5458L6 6.8484L7.6968 8.5458L8.5458 7.6968L6.8484 6L8.5458 4.3032L7.6968 3.4542L6 5.1516Z"
              fill="#868C98"
            />
          </svg>
          At least 1 number
        </li>
        <li className="mb-2 flex items-center font-normal text-xs">
          {" "}
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className={`mr-1 ${passwordRequirements.minLength ? "" : "hidden"}`}
          >
            <path
              d="M6 12C2.6862 12 0 9.3138 0 6C0 2.6862 2.6862 0 6 0C9.3138 0 12 2.6862 12 6C12 9.3138 9.3138 12 6 12ZM5.4018 8.4L9.6438 4.1574L8.7954 3.309L5.4018 6.7032L3.7044 5.0058L2.856 5.8542L5.4018 8.4Z"
              fill="#38C793"
            />
          </svg>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`mr-1 ${passwordRequirements.minLength ? "hidden" : ""}`}
          >
            <path
              d="M6 12C2.6862 12 0 9.3138 0 6C0 2.6862 2.6862 0 6 0C9.3138 0 12 2.6862 12 6C12 9.3138 9.3138 12 6 12ZM6 5.1516L4.3032 3.4542L3.4542 4.3032L5.1516 6L3.4542 7.6968L4.3032 8.5458L6 6.8484L7.6968 8.5458L8.5458 7.6968L6.8484 6L8.5458 4.3032L7.6968 3.4542L6 5.1516Z"
              fill="#868C98"
            />
          </svg>
          At least 8 characters
        </li>
      </ul>
      <div className="flex gap-4">
        <button className="w-full rounded-[10px] bg-white border hover:bg-red-500 hover:border-red-500 py-2 px-4 hover:text-white text-gray-dark font-medium disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-dark">
          Discard
        </button>

        <button
          type="submit"
          className="w-full rounded-[10px] bg-blue-600 border border-blue-600 hover:bg-purple-700 hover:border-purple-700 py-2 px-4 hover:text-white text-white font-medium disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-dark"
        >
          Apply Changes
        </button>
      </div>
    </form>
  );
};

export default ChangePassword;
