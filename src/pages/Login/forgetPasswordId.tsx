import { useEffect, useState } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { resetPassword } from "../../services/slices/auth/forgotPassword";
import toast from "react-hot-toast";

const schema = yup.object().shape({
  password: yup
    .string()
    .required("Password is required")
    .matches(/^[^\s]*$/, "Password must not contain spaces")
    .matches(
      /^(?=.*[A-Z])/,
      "Password must contain at least one uppercase letter"
    )
    .matches(/^(?=.*[0-9])/, "Password must contain at least one number")
    .min(8, "Password must be atleast 8 characters long"),
  confirmPassword: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Z])/,
      "Password must contain at least one uppercase letter"
    )
    .matches(/^(?=.*[0-9])/, "Password must contain at least one number")
    .min(8, "Password must be atleast 8 characters long")
    .test(
      "password-match",
      "Confirm password must match password",
      function (value) {
        // Get the password value from the parent form object
        const { password } = this.parent;

        // Check if confirmPassword matches password
        return value === password;
      }
    ),
});

interface FormData {
  password: string;
  confirmPassword: string;
}
const defaultValues = {
  password: "",
  confirmPassword: "",
};

const ForgetPasswordId = () => {
  const dispatch: any = useDispatch();

  const {
    register,
    handleSubmit,
    setValue,
    // reset,
    formState: { errors },
  } = useForm<FormData | any>({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const getTokenFromUrl = () => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    return urlSearchParams.get("token");
  };

  // Call getTokenFromUrl to get the token
  const token = getTokenFromUrl();

  const [passwordReset, setPasswordReset] = useState(false);

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

  const onSubmit: any = (data: FormData) => {
    toast.dismiss();
    dispatch(resetPassword({ token, new_password: data.password }))
      .unwrap()
      .then((res: any) => {
        if (res?.success === "true") {
          setPasswordReset(true);
        } else if (res?.success === "false") {
          toast.error(res?.message);
        }
      });
  };

  return (
    <>
      {passwordReset ? (
        <div className="login-form flex flex-col justify-center max-h-vhcalc88px overflow-y-auto min-h-vhcalc88px p-8">
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
          <p className="font-normal text-center">Click below to log in.</p>

          <div className="form-info w-full flex flex-col justify-between items-center mt-4">
            <a href="/login">
              <button className="rounded w-full my-5 bg-purple-500 hover:bg-purple-700 py-2 px-4 text-white font-semibold">
                Continue
              </button>
            </a>
          </div>
        </div>
      ) : (
        <div className="login-form flex flex-col justify-center bg-[url(../assets/images/Pattern.png)] bg-no-repeat bg-top px-4">
          <div className="mt-8 text-sm font-semibold text-start md:px-44px px-4">
            <a
              className="px-3 inline-flex py-2 justify-center rounded-[10px] items-center gap-2 text-gray-dark border border-[#E2E4E9] font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
              href="/login"
            >
              <div className="rotate-180">
                <img src="/assets/images/arrow-right-s-line.png" />
              </div>
              Back to login
            </a>
          </div>
          <div className="max-w-392px mx-auto w-full pt-10 min-h-vhcalc225px flex justify-center flex-col">
            <h5 className="text-xl flex justify-center gap-5 header font-semibold  mb-4">
              {" "}
              <span>
                {" "}
                <img
                  src="/assets/images/neww-pass.png"
                  width={88}
                  height={88}
                />
              </span>{" "}
            </h5>
            <h2 className="text-2xl font-semibold text-main-heading mt-0 mb-1 text-center">
              Set new password
            </h2>
            <p className="font-normal text-center text-gray-dark">
              Your new password must be different to previously used passwords.
            </p>
            <hr className="my-6" />
            <form onSubmit={handleSubmit(onSubmit)} className="form-info mt-0">
              <label
                className="block text-main-heading text-sm font-medium mb-2"
                htmlFor="password"
              >
                Password*{" "}
              </label>
              <div className="relative">
                <input
                  className={`shadow appearance-none border border-slate-300 rounded-[10px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline${
                    errors.password ? "border-[#F04438]" : ""
                  }`}
                  id="password"
                  type={showNewPassword ? "text" : "password"}
                  placeholder="Create a password"
                  onChange={(e: any) => {
                    handlePasswordChange(e.target.value);
                    setValue("password", e.target.value, {
                      shouldValidate: true,
                    });
                  }}
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
                {errors.password && (
                  <p className="text-[#F04438] text-sm mt-2">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <label
                className="block text-main-heading text-sm font-medium mb-2 mt-3"
                htmlFor="confirmPassword"
              >
                Confirm Password*{" "}
              </label>
              <div className="relative">
                <input
                  className={`shadow appearance-none border border-slate-300 rounded-[10px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline${
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
                    <img src="/assets/images/eye-line.png" />
                  ) : (
                    <VisibilityOffIcon className="pb-3 pr-2" />
                  )}
                </span>
                {errors.confirmPassword && (
                  <p className="text-[#F04438] text-sm mt-2">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
              <div className="password flex flex-col justify-between items-center my-3">
                <div className="flex flex-col w-full">
                  <div className="flex items-center justify-between mb-5">
                    <hr
                      className={`border-2 ${
                        passwordStrength > 0
                          ? "border-red-500"
                          : "border-red-200"
                      } w-1/3 `}
                    ></hr>
                    <hr
                      className={`border-2 ${
                        passwordStrength > 1
                          ? "border-orange-500"
                          : "border-orange-200"
                      } w-1/3 mx-5`}
                    ></hr>
                    <hr
                      className={`border-2 ${
                        passwordStrength > 2
                          ? "border-green-500"
                          : "border-green-200"
                      } w-1/3`}
                    ></hr>
                  </div>
                  <p className="text-xs font-normal text-content text-gray-dark">
                    Weak password. Must contain at least;
                  </p>

                  <ul className="p-0 text-xs text-gray-dark">
                    <li className="my-2 flex items-center font-normal text-xs">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        className={`mr-1 ${
                          passwordRequirements.uppercase ? "" : "hidden"
                        }`}
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
                        className={`mr-1 ${
                          passwordRequirements.uppercase ? "hidden" : ""
                        }`}
                      >
                        <path
                          d="M6 12C2.6862 12 0 9.3138 0 6C0 2.6862 2.6862 0 6 0C9.3138 0 12 2.6862 12 6C12 9.3138 9.3138 12 6 12ZM6 5.1516L4.3032 3.4542L3.4542 4.3032L5.1516 6L3.4542 7.6968L4.3032 8.5458L6 6.8484L7.6968 8.5458L8.5458 7.6968L6.8484 6L8.5458 4.3032L7.6968 3.4542L6 5.1516Z"
                          fill="#868C98"
                        />
                      </svg>
                      {/* <svg
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
                    </svg> */}
                      At least 1 uppercase
                    </li>
                    <li className="mb-2 flex items-center font-normal text-xs">
                      {/* <svg
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
                    </svg> */}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        className={`mr-1 ${
                          passwordRequirements.number ? "" : "hidden"
                        }`}
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
                        className={`mr-1 ${
                          passwordRequirements.number ? "hidden" : ""
                        }`}
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
                      {/* <svg
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
                    </svg> */}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        className={`mr-1 ${
                          passwordRequirements.minLength ? "" : "hidden"
                        }`}
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
                        className={`mr-1 ${
                          passwordRequirements.minLength ? "hidden" : ""
                        }`}
                      >
                        <path
                          d="M6 12C2.6862 12 0 9.3138 0 6C0 2.6862 2.6862 0 6 0C9.3138 0 12 2.6862 12 6C12 9.3138 9.3138 12 6 12ZM6 5.1516L4.3032 3.4542L3.4542 4.3032L5.1516 6L3.4542 7.6968L4.3032 8.5458L6 6.8484L7.6968 8.5458L8.5458 7.6968L6.8484 6L8.5458 4.3032L7.6968 3.4542L6 5.1516Z"
                          fill="#868C98"
                        />
                      </svg>
                      At least 8 characters
                    </li>
                  </ul>
                </div>
                <button
                  type="submit"
                  className="rounded-[10px] w-full mt-5 bg-blue-600 hover:bg-purple-700 py-2 px-4 text-white font-medium"
                >
                  Reset Password
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ForgetPasswordId;
