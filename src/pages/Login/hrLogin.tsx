import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../services/slices/auth/login";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { DialogContent } from "@mui/material";
import OTPInput from "../../components/HrLogin/Otp";
import { useGoogleLogin } from "@react-oauth/google";
import {
  generateSecret,
  sendEmailVerification,
  sendQRVerification,
  verifyEmail,
  verifyQROtp,
} from "../../services/slices/auth/authentication";
import toast from "react-hot-toast";
import {
  googleLogin,
  googleLoginCheck,
} from "../../services/slices/auth/googleLogin";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid work email address")
    .required("Email is required"),
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
    toast.dismiss();
    setEmail(data.email);
    setPassword(data.password);
    dispatch(userLogin(data))
      .unwrap()
      .then((res: any) => {
        if (res.error) {
          toast.error(res.error);
        }
        if (res.security === "SMS Code") {
          setSecurityType(res.security);
        } else if (res.security === "Email Code") {
          setSecurityType(res.security);
          dispatch(generateSecret({ email: data.email }))
            .unwrap()
            .then(() => {
              toast.promise(
                dispatch(sendEmailVerification({ email: data.email }))
                  .unwrap()
                  .then(() => {
                    setOpen(true);
                  }),
                {
                  loading: "Sending Email...",
                  success: "Email Sent!",
                  error: "Error while sending email",
                }
              );
            });
        } else if (res.security === "Authenticator App") {
          setSecurityType(res.security);
          dispatch(generateSecret({ email: data.email }))
            .unwrap()
            .then(() => {
              dispatch(sendQRVerification({ email: data.email }))
                .unwrap()
                .then((res: any) => {
                  setQrCode(`data:image/jpeg;base64,${res?.qr_code}`);
                  setOpen(true);
                });
            });
        } else if (res.security === "none") {
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

  const [user, setUser] = useState<any>([]);

  console.log("user", user);

  const login = useGoogleLogin({
    onSuccess: (codeResponse: any) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      dispatch(googleLogin(user))
        .unwrap()
        .then((response: any) => {
          dispatch(googleLoginCheck(response))
            .unwrap()
            .then((res: any) => {
              console.log("response", response);
              if (res.redirect !== "/signup") {
                if (res.error) {
                  toast.error(res.error);
                }
                if (res.security === "SMS Code") {
                  setSecurityType(res.security);
                } else if (res.security === "Email Code") {
                  setSecurityType(res.security);
                  dispatch(generateSecret({ email: response.email }))
                    .unwrap()
                    .then(() => {
                      toast.promise(
                        dispatch(
                          sendEmailVerification({ email: response.email })
                        )
                          .unwrap()
                          .then(() => {
                            setOpen(true);
                          }),
                        {
                          loading: "Sending Email...",
                          success: "Email Sent!",
                          error: "Error while sending email",
                        }
                      );
                    });
                } else if (res.security === "Authenticator App") {
                  setSecurityType(res.security);
                  dispatch(generateSecret({ email: response.email }))
                    .unwrap()
                    .then(() => {
                      dispatch(sendQRVerification({ email: response.email }))
                        .unwrap()
                        .then((res: any) => {
                          setQrCode(`data:image/jpeg;base64,${res?.qr_code}`);
                          setOpen(true);
                        });
                    });
                } else if (res.security === "none") {
                  res.access_token && existingData
                    ? navigate("/pillars")
                    : navigate("/dashboard");
                }
              } else {
                localStorage.setItem("googleUser", JSON.stringify(response));
                navigate("/signup");
              }
            });
        })
        .catch((err: any) => console.log(err));
    }
  }, [user]);

  return (
    <div className="main min-h-vhcalc225px bg-[url(../assets/images/Pattern.png)] bg-no-repeat bg-top">
      <div className="nav-header flex items-center justify-center relative md:!px-44px !px-4 bg-white">
        <div className="logo-head min-w-[123px] mr-6 absolute top-1/2 translate-y-n50 left-11 lg:block hidden">
          <h1 className="">
            <span>
              <img
                className=""
                src="/assets/images/Logo1.png"
                width={"136px"}
              />
            </span>{" "}
          </h1>
        </div>

        <div className="flex text-sm lg:flex-nowrap flex-wrap justify-center"></div>

        {/* <div className="h-10 w-10"></div> */}
      </div>
      <hr className="border-color: gray;"></hr>
      {/* <div className="grid grid-cols-3 gap-4"> */}
      <div className="form flex flex-col max-w-md m-auto justify-center py-10 min-h-vhcalc135px px-4">
        <div className="...">
          {/* <div className="flex justify-around items-center mob-view ">
            <span>
              <img
                className="text-center h-10 w-10"
                src="/assets/images/Synergy.png"
              />
            </span>

            <div>
              Don't have an account?
              <span className="float-right text-content text-sm font-medium ">
                <a href="/signup" className="border-b">
                  Register
                </a>
              </span>
            </div>
          </div> */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="form-2 flex flex-col max-w-md m-auto justify-center"
          >
            <h1 className="text-center flex justify-center mb-4">
              <img
                src="/assets/images/Custom-lock.png"
                height={88}
                width={88}
              />
            </h1>
            <h2 className="text-main-heading text-2xl font-medium text-center mb-1">
              Login to your account
            </h2>
            <p className="text-gray-dark text-center mb-6">
              Enter your details to login.
            </p>
            {/* <hr className="my-6"></hr> */}

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
                  className={`appearance-none lft-space bg-transparent  border rounded-[10px] w-full py-2 px-3 text-input-text leading-tight focus:outline-none focus:shadow-outline ${
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
                  className={`lft-space appearance-none border rounded-[10px] w-full py-2 pl-5 text-input-text leading-tight focus:outline-none focus:shadow-outline ${
                    errors.password ? "border-[#F04438]" : "border-slate-300"
                  }`}
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="🞄🞄🞄🞄🞄🞄🞄🞄🞄🞄🞄🞄🞄🞄"
                  {...register("password")}
                />
                <span
                  className="absolute h-2 w-4 inset-y-3 right-2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <img src="/assets/images/eye-line.png" />
                  ) : (
                    <VisibilityOffIcon className="pb-3 pr-2" />
                  )}
                </span>
                {errors?.password && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors?.password?.message}
                  </p>
                )}
              </div>
            </div>
            {/* <div onClick={() => setOpen(true)}>dddd</div> */}
            <label>
              <input
                type="checkBox"
                {...register("checkBox")}
                className="form-checkbox text-indigo-600 border border-slate-300 rounded relative space-top "
              />
              <span className="ml-2 text-main-heading font-normal text-sm ">
                Keep me logged in
              </span>{" "}
              <span className="float-right text-content text-sm font-medium text-gray-dark underline">
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
              className="rounded-[10px] w-full mt-5 bg-blue-600 hover:bg-purple-700 py-2.5 px-4 text-white font-semibold"
            >
              Login
            </button>
            <div className="flex items-center justify-between my-6">
              <hr className="border-gray w-1/2"></hr>
              <p className="my-0 text-grayMedium1 px-5">OR</p>
              <hr className="border-gray w-1/2"></hr>
            </div>
            <button
              onClick={() => login()}
              type="button"
              className="rounded-[10px] w-full font-medium text-sm border bg-transparent border-slate-300 outline-none py-2.5 px-4 text-black flex justify-center gap-2 items-center drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400"
            >
              {" "}
              <span className="img-size">
                {" "}
                <img src="/assets/images/google.png" width={15} height={15} />
              </span>{" "}
              Sign in with Google
            </button>
          </form>
        </div>

        {/* <div className="col-span-2 bg-[#F6F8FA] py-9">
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
        </div> */}
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
            : step === 1 && "Kindly enter the authentication OTP"}
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
            step === 1 && (
              <>
                <div className="w-full flex justify-center">
                  <OTPInput
                    otp={otp}
                    setOtp={setOtp}
                    setOtpError={setOtpError}
                  />
                </div>
                {otpError && (
                  <div className="mt-4 text-sm text-red-600">
                    *Kindly Enter OTP before submitting
                  </div>
                )}
              </>
            )
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
