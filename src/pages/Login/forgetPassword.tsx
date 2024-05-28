import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { sendResetMail } from "../../services/slices/auth/forgotPassword";
import { useState } from "react";
import toast from "react-hot-toast";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid work email address")
    .required("Email is required"),
});

interface FormData {
  email: string;
}
const defaultValues = {
  email: "",
};

const ForgetPasswordPage = () => {
  const dispatch: any = useDispatch();
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm<FormData | any>({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const onSubmit: any = (data: FormData) => {
    toast.dismiss();
    const formData: any = new FormData();
    formData.append("email", data.email);
    const toastId = toast.loading("Sending Mail...");
    dispatch(sendResetMail(formData))
      .unwrap()
      .then((res: any) => {
        toast.dismiss(toastId);
        if (res.success === "true") {
          toast.success(res.message);
        } else {
          toast.error(res.message);
        }
      });
  };

  return (
    <>
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
          <h5 className="text-xl flex justify-center gap-5 header font-semibold  ">
            <span>
              <img
                src="/assets/images/reset-icon.png"
                className=""
                width={88}
                height={88}
              />
            </span>{" "}
          </h5>
          <h2 className="text-2xl font-semibold mt-8 mb-1 text-center text-main-heading">
            Reset Password
          </h2>
          <p className="font-normal text-center text-gray-dark">
            No worries, we’ll send you reset instructions.
          </p>
          <hr className="my-6"></hr>
          <form onSubmit={handleSubmit(onSubmit)} className="form-info mt-0">
            <label
              className="block text-main-heading text-sm font-medium mb-2"
              htmlFor="email"
            >
              Email*
            </label>
            <input
              className={`shadow appearance-none border rounded-[10px] w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.email ? "border-[#F04438]" : ""
              }`}
              id="email"
              type="text"
              placeholder="Enter your email"
              {...register("email")}
            />
            {errors?.email && (
              <p className="text-red-500 text-sm mt-2">
                {errors.email.message}
              </p>
            )}
            <div className="password flex flex-col justify-between items-center my-0">
              <button
                type="submit"
                className="rounded-[10px] w-full mt-5 bg-blue-600 hover:bg-purple-700 py-2.5 px-4 text-white font-semibold"
              >
                Reset Password
              </button>
            </div>
            <h2 className="text-gray-dark text-sm mt-6 font-medium text-center mb-1">
              Don’t have access anymore?
            </h2>
            <p className="text-main-heading underline text-center mb-3">
              Try another method
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgetPasswordPage;
