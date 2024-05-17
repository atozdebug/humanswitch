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
  const [mailSent, setMailSent] = useState(false);
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
    const formData: any = new FormData();
    formData.append("email", data.email);
    dispatch(sendResetMail(formData))
      .unwrap()
      .then((res: any) => {
        if (res.success === "true") {
          setMailSent(true);
        } else if (res.success === "false") {
          toast.error(res.message);
        }
      });
  };

  return (
    <>
      {mailSent ? (
        <div>Mail have been sent to help you out with password reset</div>
      ) : (
        <div className="login-form flex flex-col justify-center max-h-vhcalc88px overflow-y-auto min-h-vhcalc88px p-8">
          <h5 className="text-xl flex justify-center gap-5 header font-semibold  ">
            <span>
              <img
                src="/assets/images/Icon.png"
                className="borders-[#000000]"
              />
            </span>{" "}
          </h5>
          <h2 className="text-3xl font-semibold  mt-8 mb-3 text-center">
            Forgot Password?
          </h2>
          <p className="font-normal text-center">
            No worries, we’ll send you reset instructions.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="form-info mt-4">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="email"
            >
              Email*
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
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
            <div className="password flex flex-col justify-between items-center my-3">
              <button
                type="submit"
                className="rounded w-full mt-5 bg-purple-500 hover:bg-purple-700 py-2.5 px-4 text-white font-semibold"
              >
                Reset Password
              </button>
              <button className="mt-3 text-sm font-semibold">
                <a className="flex gap-5" href="/loginhr">
                  <img src="/assets/images/arrow-left.png" />
                  Back to login
                </a>
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ForgetPasswordPage;
