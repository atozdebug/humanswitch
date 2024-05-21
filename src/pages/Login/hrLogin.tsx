import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../services/slices/auth/login";
import { useState } from "react";
import Cookies from "js-cookie";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { DialogContent } from "@mui/material";
import OTPInput from "../../components/HrLogin/Otp";
import {
  generateSecret,
  sendEmailVerification,
  sendQRVerification,
  verifyEmail,
  verifyQROtp,
} from "../../services/slices/auth/authentication";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid work email address")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Z])/,
      "Password must contain at least one uppercase letter"
    )
    .matches(/^(?=.*[0-9])/, "Password must contain at least one number")
    .min(8, "Password must be atleast 8 characters long"),
  checkBox: yup
    .boolean()
    .required("You must agree to the Terms & Conditions and Privacy Policy."),
});

interface FormData {
  email: string;
  password: string;
  checkBox: boolean;
}
const defaultValues = {
  email: "",
  password: "",
  checkBox: false,
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const LoginHr = () => {
  const navigate: any = useNavigate();
  const dispatch: any = useDispatch();

  const existingData = Cookies.get("questionnaireData");

  const [showPassword, setShowPassword] = useState(false);
  const [otp, setOtp] = React.useState("");
  const [open, setOpen] = useState(false);
  const [otpError, setOtpError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [securityType, setSecurityType] = useState("");
  const [qrCode, setQrCode] = useState<any>(null);
  const [step, setStep] = useState(0);

  console.log("-----------", qrCode);

  const handleClose = () => {
    setOpen(false);
  };

  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const onSubmit: any = (data: FormData) => {
    setEmail(data.email);
    setPassword(data.password);
    dispatch(userLogin(data))
      .unwrap()
      .then((res: any) => {
        if (res.security === "SMS Code") {
          setSecurityType(res.security);
        } else if (res.security === "Email Code") {
          setSecurityType(res.security);
          dispatch(generateSecret({ email: data.email }))
            .unwrap()
            .then(() => {
              dispatch(sendEmailVerification({ email: data.email }))
                .unwrap()
                .then(() => {
                  setOpen(true);
                });
            });
        } else if (res.security === "Authenticator App") {
          setSecurityType(res.security);
          dispatch(generateSecret({ email: data.email }))
            .unwrap()
            .then(() => {
              dispatch(sendQRVerification({ email: data.email }))
                .unwrap()
                .then((res: any) => {
                  console.log(res);
                  setQrCode(`data:image/jpeg;base64,${res?.qr_code}`);
                  setOpen(true);
                });
            });
        } else if (!res.security) {
          res.access_token && existingData
            ? navigate("/pillars")
            : navigate("/dashboard");
        }
      });
  };

  const handleVerifyOtps = (type: any) => {
    if (otp === "") {
      setOtpError(true);
    } else if (type === "Email Code") {
      dispatch(verifyEmail({ email, password, code: otp }))
        .unwrap()
        .then((res: any) => {
          res.access_token && existingData
            ? navigate("/pillars")
            : navigate("/dashboard");
        });
    } else if (type === "Authenticator App") {
      dispatch(verifyQROtp({ email, password, code: otp }))
        .unwrap()
        .then((res: any) => {
          res.access_token && existingData
            ? navigate("/pillars")
            : navigate("/dashboard");
        });
    }
  };

  return (
    <div className="main my-2 px-5 mob">
      <div className="grid grid-cols-3 gap-4">
        <div className="...">
          <div className="flex justify-around items-center mob-view ">
            <span>
              <img
                className="text-center h-10 w-10"
                src="/assets/images/Synergy.png"
              />
            </span>

            <div>
              Don't have an account?
              <span className="float-right text-content text-sm font-medium ">
                <a href="/signuphr" className="border-b">
                  Register
                </a>
              </span>
            </div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="form-2 flex flex-col max-w-md m-auto justify-center"
          >
            <h1 className="text-center flex justify-center">
              <img
                src="/assets/images/Custom-lock.png"
                height={200}
                width={200}
              />
            </h1>
            <h2 className="text-gray-dark text-2xl font-medium text-center">
              Password Setup
            </h2>
            <p className="gray-dark text-center">
              Set up a secure password to protect your account.
            </p>
            <hr className="my-5"></hr>
            <button className="rounded w-full font-semibold text-base border bg-transparent border-slate-300 outline-none py-2.5 px-4 text-black flex justify-center gap-5  drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400">
              {" "}
              <span className="img-size">
                {" "}
                <img src="/assets/images/google.png" />
              </span>{" "}
            </button>
            <div className="flex items-center justify-between my-5">
              <hr className="border-gray w-40"></hr>
              <p>or</p>
              <hr className="border-gray w-40"></hr>
            </div>
            <div>
              <label
                className="block text-heading text-sm font-medium mb-2"
                htmlFor="email"
              >
                Email Address <span className="text-span-clr">*</span>{" "}
              </label>
              <div className="relative">
                <span className="absolute h-2 w-4 inset-y-3 inset-x-3">
                  <img src="/assets/images/mail-line.png" />
                </span>
                <input
                  className={`shadow appearance-none lft-space bg-transparent  border rounded w-full py-2 px-3 text-input-text leading-tight focus:outline-none focus:shadow-outline ${
                    errors.email ? "border-[#F04438]" : " border-slate-300 "
                  }`}
                  id="email"
                  type="email"
                  placeholder="hello@humanswitch.ai"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors?.email?.message}
                  </p>
                )}
              </div>
            </div>

            <div className="my-5">
              <label
                className="block text-heading text-sm font-medium mb-2"
                htmlFor="password"
              >
                Password<span className="text-span-clr">*</span>
              </label>
              <div className="relative">
                <span className="absolute h-2 w-4 inset-y-3 inset-x-3">
                  <img src="/assets/images/lock-2-line.png" />
                </span>
                <input
                  className={`lft-space shadow appearance-none border  rounded w-full py-2   pl-5 text-input-text leading-tight focus:outline-none focus:shadow-outline ${
                    errors.password ? "border-[#F04438]" : "border-slate-300"
                  }`}
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder=".........."
                  {...register("password")}
                />
                <span
                  className="absolute h-2 w-4 inset-y-3 right-2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <VisibilityOffIcon className="pb-3 pr-2" />
                  ) : (
                    <img src="/assets/images/eye-line.png" />
                  )}
                </span>
                {errors?.password && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors?.password?.message}
                  </p>
                )}
              </div>
            </div>
            <div onClick={() => setOpen(true)}>dddd</div>
            <label>
              <input
                type="checkBox"
                {...register("checkBox")}
                className="form-checkbox text-indigo-600 border-transparent  border-none  relative space-top "
              />
              <span className="ml-2 text-heading font-normal text-sm">
                Checkbox Label
              </span>{" "}
              accordion
              <span className="float-right text-content text-sm font-medium ">
                <a href="/forgetpassword" className="border-b">
                  Forgot password?
                </a>
              </span>
              {errors.checkBox && (
                <p className="text-red-500 text-sm mt-2">
                  You must agree to the Terms & Conditions and Privacy Policy.
                </p>
              )}
            </label>

            <button
              type="submit"
              className="rounded w-full mt-5 bg-purple-500 hover:bg-purple-700 py-2.5 px-4 text-white font-semibold"
            >
              Login
            </button>
          </form>
        </div>

        <div className="col-span-2 bg-[#F6F8FA] py-9">
          <div className="flex items-center justify-center center-box">
            <span className="text-center h-96 w-96">
              <img src="/assets/images/widget.png" />
            </span>
          </div>

          <div>
            <h2 className="text-2xl my-2 font-medium text-center">
              Stay in Control of Your Time Off
            </h2>
            <p className="text-base font-normal text-center max-w-xl m-auto">
              Track your time off balance and manage requests with the Time Off
              widget, ensuring a stress-free experience.
            </p>
            <div className="text-8xl text-border-clr text-center">
              <span className="text-span-clr">.</span>
              <span className="light">.</span>
              <span className="">.</span>
            </div>
          </div>
        </div>
      </div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <div className="px-6 pt-6 text-xl text-center font-semibold">
          {securityType === "Email Code" &&
            "Kindly enter the authentication OTP sent to your Mail"}
          {securityType === "Authenticator App" && step === 0
            ? "Kindly scan this qr code on your authenticator app"
            : "Kindly enter the authentication OTP"}
        </div>
        <DialogContent>
          {securityType === "Email Code" && (
            <>
              <div className="w-full flex justify-center">
                <OTPInput otp={otp} setOtp={setOtp} setOtpError={setOtpError} />
              </div>
              {otpError && (
                <div className="mt-4 text-sm text-red-600">
                  *Kindly Enter OTP before submitting
                </div>
              )}
            </>
          )}
          {securityType === "Authenticator App" && step === 0 ? (
            <>
              <div className="flex justify-center items-center">
                {qrCode && (
                  <img src={qrCode} alt="qrCode" height={150} width={150} />
                )}
              </div>
            </>
          ) : (
            <>
              <div className="w-full flex justify-center">
                <OTPInput otp={otp} setOtp={setOtp} setOtpError={setOtpError} />
              </div>
              {otpError && (
                <div className="mt-4 text-sm text-red-600">
                  *Kindly Enter OTP before submitting
                </div>
              )}
            </>
          )}
        </DialogContent>
        <DialogActions>
          <button
            className="px-4 py-2 rounded-md hover:bg-gray-200 text-red-600"
            onClick={() => {
              if (step === 0) {
                handleClose();
              } else if (step === 1) {
                setStep((prev: any) => prev - 1);
              }
            }}
          >
            {step === 0 ? "Cancel" : "Back"}
          </button>
          <button
            className="px-4 py-2 rounded-md hover:bg-gray-200 mr-2"
            onClick={() => {
              if (securityType === "Email Code") {
                handleVerifyOtps("Email Code");
              } else if (securityType === "Authenticator App") {
                step === 0
                  ? setStep((prev: any) => prev + 1)
                  : handleVerifyOtps("Authenticator App");
              }
            }}
          >
            {securityType === "Email Code" ? (
              <div>Submit</div>
            ) : step === 0 ? (
              <div>Click to Enter OTP</div>
            ) : (
              <div>Submit</div>
            )}
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LoginHr;
