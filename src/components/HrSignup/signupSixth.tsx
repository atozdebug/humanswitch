import { useEffect } from "react";
import OTPInput from "../HrLogin/Otp";

const SignupSixth = ({
  handleSubmit,
  onSubmit,
  otp,
  setOtp,
  otpError,
  setOtpError,
  setValue,
}: any) => {
  useEffect(() => {
    setValue("otp", otp);
  }, [otp]);
  return (
    <div className="bg-[url(../assets/images/Pattern.png)] bg-no-repeat bg-top min-h-vhcalc225px px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form flex flex-col max-w-md m-auto justify-center mb-10 "
      >
        {/* <h1 className="flex justify-center text-center">
          <img src="/assets/images/check.png" />
        </h1>
        <h2 className="text-gray-dark text-2xl font-medium text-center">
          Onboarding Summary
        </h2>
        <p className="gray-dark text-center mb-3">
          Review and complete your account setup.
        </p>
        <div className="border p-4 rounded-[12px]">
          <div className="mt-4">
            <label className="lft-space-summery  text-xs font-medium">
              FULL NAME
            </label>
            <div className="relative">
              <span className="absolute  top-0.5 inset-x-0 max-w-10 max-h-10 summey-top-space ">
                <img className="max-w-{20px}" src="/assets/images/key1.png" />
              </span>
              <input
                className={`lft-space-summery text-sm font-medium appearance-none  rounded w-full  pd-bottom  pl-5 text-input-text leading-tight focus:outline-none focus:shadow-outline`}
                id="fname"
                type="full-nm"
                readOnly
                value={formData.first_name + " " + formData.last_name}
              />
            </div>
          </div>

          <hr className="my-4"></hr>
          <div className="">
            <label className="lft-space-summery  text-xs font-medium">
              USERNAME
            </label>
            <div className="relative">
              <span className="absolute  inset-y-2 inset-x-0  summey-top-space">
                <img className="max-w-{20px}" src="/assets/images/key3.png" />
              </span>
              <input
                className={`lft-space-summery text-sm font-medium appearance-none  rounded w-full  pd-bottom  pl-5 text-input-text leading-tight focus:outline-none focus:shadow-outline`}
                id="fname"
                type="full-nm"
                value="james@humanswitch.ai"
                readOnly
              />
            </div>
          </div>

          <hr className="my-4"></hr>

          <div className="">
            <label className="lft-space-summery  text-xs font-medium">
              EMAIL ADDRESS
            </label>
            <div className="relative">
              <span className="absolute  inset-y-2 inset-x-0 max-w-10 max-h-10 summey-top-space">
                <img className="max-w-{20px}" src="/assets/images/key4.png" />
              </span>
              <input
                className={`lft-space-summery text-sm font-medium appearance-none rounded w-full  pd-bottom  pl-5 text-input-text leading-tight focus:outline-none focus:shadow-outline`}
                id="fname"
                type="full-nm"
                readOnly
                value={formData.email}
              />
            </div>
          </div>

          <hr className="my-4"></hr>

          <div className="">
            <label className="lft-space-summery  text-xs font-medium">
              TITLE
            </label>
            <div className="relative">
              <span className="absolute  inset-y-2 inset-x-0 max-w-10 max-h-10  summey-top-space">
                <img className="max-w-{20px}" src="/assets/images/key5.png" />
              </span>
              <input
                className={`lft-space-summery text-sm font-medium appearance-none  rounded w-full  pd-bottom  pl-5 text-input-text leading-tight focus:outline-none focus:shadow-outline`}
                id="fname"
                type="full-nm"
                readOnly
                value={formData.role}
              />
            </div>
          </div>
          <hr className="my-4"></hr>
          <div className="">
            <label className="lft-space-summery  text-xs font-medium">
              DEPARTMENT
            </label>
            <div className="relative">
              <span className="absolute  inset-y-2 inset-x-0 max-w-10 max-h-10 summey-top-space">
                <img className="max-w-{20px}" src="/assets/images/key6.png" />
              </span>
              <input
                className={`lft-space-summery text-sm font-medium appearance-none  rounded w-full  pd-bottom  pl-5 text-input-text leading-tight focus:outline-none focus:shadow-outline`}
                id="fname"
                type="full-nm"
                readOnly
                value={formData.sector}
              />
            </div>
          </div>
        </div> */}
        <div className="flex flex-col justify-center text-center border rounded-20px p-4 bg-white">
          <h1 className="flex justify-center text-center mb-4">
            <img src="/assets/images/email-verify-icon.png" width={'88px'} height={'88px'} />
          </h1>
          <h2 className="text-main-heading text-2xl font-medium text-center mb-1">
            Email Verification Code
          </h2>
          <p className="text-gray-dark text-center mb-0">
            We have sent code to your mail
          </p>
          <hr className="my-6"></hr>
          <div className="w-full flex justify-center">
            <OTPInput otp={otp} setOtp={setOtp} setOtpError={setOtpError} />
          </div>
          {otpError && (
            <div className="mt-4 text-sm text-red-600">
              *Kindly Enter OTP before submitting
            </div>
          )}
          <button
            disabled={otpError || otp.length < 6}
            className="disabled:bg-blue-300 rounded-lg w-full mt-5 bg-blue-600 hover:bg-purple-700 py-2.5 px-2.5 text-white font-semibold"
            type="submit"
          >
            Continue
          </button>
          <h2 className="text-gray-dark text-sm mt-6 font-medium text-center mb-1">
            Experiencing issues receiving the code?
          </h2>
          <p className="text-main-heading underline text-center mb-3">Resend code</p>
        </div>
      </form>
    </div>
  );
};

export default SignupSixth;
