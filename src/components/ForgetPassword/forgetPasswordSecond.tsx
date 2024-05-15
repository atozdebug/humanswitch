import { useEffect, useState } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const ForgetPasswordSecond = ({
  backStep,
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
    <div className="login-form flex flex-col justify-center max-h-vhcalc88px overflow-y-auto min-h-vhcalc88px p-8">
      <h5 className="text-xl flex justify-center gap-5 header font-semibold  ">
        {" "}
        <span>
          {" "}
          <img
            src="/assets/images/IconLock.png"
            className="borders-[#000000]"
          />
        </span>{" "}
      </h5>
      <h2 className="text-3xl font-semibold  mt-8 mb-3 text-center">
        Set new password
      </h2>
      <p className="font-normal text-center">
        Your new password must be different to
      </p>
      <p className="font-normal text-center">previously used passwords.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="form-info mt-4">
        <label
          className="block text-gray-700 text-sm font-medium mb-2"
          htmlFor="password"
        >
          Password*{" "}
        </label>
        <div className="relative">
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline${
              errors.password ? "border-[#F04438]" : ""
            }`}
            id="password"
            type={showNewPassword ? "text" : "password"}
            placeholder="Create a password"
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

        <label
          className="block text-gray-700 text-sm font-medium my-2"
          htmlFor="confirmPassword"
        >
          Confirm Password*{" "}
        </label>
        <div className="relative">
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline${
              errors.confirmPassword ? "border-[#F04438]" : ""
            }`}
            id="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            {...register("confirmPassword")}
            placeholder="Confirm your password"
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
        <div className="password flex flex-col justify-between items-center my-3">
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-5">
              <hr
                className={`border-4 ${
                  passwordStrength > 0 ? "border-red-500" : "border-red-200"
                } w-28 `}
              ></hr>
              <hr
                className={`border-4 ${
                  passwordStrength > 1
                    ? "border-orange-500"
                    : "border-orange-200"
                } w-28 mx-5`}
              ></hr>
              <hr
                className={`border-4 ${
                  passwordStrength > 2 ? "border-green-500" : "border-green-200"
                } w-28`}
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
          </div>
          <button
            type="submit"
            className="rounded w-full mt-5 bg-purple-500 hover:bg-purple-700 py-2 px-4 text-white font-semibold"
          >
            {" "}
            Reset Password
          </button>
          <button
            onClick={backStep}
            className="flex gap-5 mt-3 text-sm font-semibold"
          >
            <img src="/assets/images/arrow-left.png" />
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgetPasswordSecond;
