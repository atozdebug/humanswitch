import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../services/slices/dashboard/getUser";
import { updateProfile } from "../../services/slices/dashboard/updateProfile";
import toast from "react-hot-toast";
import {
  generateSecret,
  sendEmailVerification,
  sendQRVerification,
  verifyEmailOtp,
  verifyQROtp2FA,
} from "../../services/slices/auth/authentication";
import { Dialog, DialogActions, DialogContent, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";
import OTPInput from "../HrLogin/Otp";

const methods = [
  {
    name: "SMS Code",
    description:
      "Receive a one-time verification code via SMS to enter during login.",
    image: "/assets/images/camra.png",
  },
  {
    name: "Email Code",
    description:
      "Get a temporary verification code sent to your email for added security.",
    image: "/assets/images/user.png",
  },
  {
    name: "Authenticator App",
    description:
      "Use an authenticator app to generate time-based verification codes for login.",
    image: "/assets/images/user.png",
  },
];

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PrivacySecurity = ({ handleSubmit, onSubmit, errors, setValue }: any) => {
  const user = localStorage.getItem("user");
  const dispatch: any = useDispatch();
  const userData = useSelector((state: any) => state.getUser.data);
  useEffect(() => {
    dispatch(getUser(user))
      .unwrap()
      .then((res: any) => {
        setChecked(res?.security || "");
        setIsDisabled(true);
      });
  }, [dispatch]);

  const [checked, setChecked] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [securityType, setSecurityType] = useState("");
  const [otp, setOtp] = useState("");
  const [open, setOpen] = useState(false);
  const [qrCode, setQrCode] = useState<any>(null);
  const [otpError, setOtpError] = useState(false);
  const [step, setStep] = useState(0);

  const enableAuthentication = (state: any) => {
    const formData: any = new FormData();

    if (state === "enabled") {
      if (checked === "SMS Code") {
        setSecurityType(checked);
      } else if (checked === "Email Code") {
        setSecurityType(checked);
        dispatch(generateSecret({ email: userData.email }))
          .unwrap()
          .then(() => {
            toast.promise(
              dispatch(sendEmailVerification({ email: userData.email }))
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
      } else if (checked === "Authenticator App") {
        setSecurityType(checked);
        dispatch(generateSecret({ email: userData.email }))
          .unwrap()
          .then(() => {
            dispatch(sendQRVerification({ email: userData.email }))
              .unwrap()
              .then((res: any) => {
                setQrCode(`data:image/jpeg;base64,${res?.qr_code}`);
                setOpen(true);
              });
          });
      }
    } else {
      formData.append("security", "none");
      dispatch(updateProfile(formData))
        .unwrap()
        .then(() => {
          toast.success("2FA Disabled Successfully");
          dispatch(getUser(user))
            .unwrap()
            .then(() => {
              setIsDisabled(true);
              setChecked("");
            });
        });
    }
  };

  const handleVerifyOtps = (type: any) => {
    const formData: any = new FormData();
    formData.append("security", checked);
    if (otp === "") {
      setOtpError(true);
    } else if (type === "Email Code") {
      dispatch(verifyEmailOtp({ email: userData.email, otp }))
        .unwrap()
        .then(() => {
          dispatch(updateProfile(formData))
            .unwrap()
            .then(() => {
              toast.success("2FA Enabled Successfully");
              handleClose();
              dispatch(getUser(user))
                .unwrap()
                .then(() => {
                  setIsDisabled(true);
                });
            });
        });
    } else if (type === "Authenticator App") {
      dispatch(verifyQROtp2FA({ email: userData.email, otp }))
        .unwrap()
        .then(() => {
          dispatch(updateProfile(formData))
            .unwrap()
            .then(() => {
              toast.success("2FA Enabled Successfully");
              handleClose();
              dispatch(getUser(user))
                .unwrap()
                .then(() => {
                  setStep(0);
                  setIsDisabled(true);
                });
            });
        });
    }
  };

  const handleClose = () => {
    setOpen(false);
    setOtp("");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center max-w-md m-auto mt-6"
    >
      <h2 className="text-gray-dark text-2xl font-medium ">2FA Security</h2>
      <p className="gray-dark ">
        Enable two-factor authentication to your account.
      </p>
      <hr className="my-5"></hr>
      {methods.map((method, index) => (
        <div
          key={index}
          className={`flex items-center content-center justify-between border ${
            errors?.method ? "border-red-600" : "border-[#E2E4E9]"
          } p-4 mb-4 rounded-xl`}
        >
          <div>
            <h1 className="text-center flex justify-center">
              <img src={method.image} />
            </h1>
          </div>
          <div>
            <h2 className="font-medium text-sm text-start">{method.name}</h2>
            <p className="font-normal text-xs text-start">
              {method.description}
            </p>
          </div>
          <div>
            <input
              id="default-radio-1"
              type="radio"
              value={method.name}
              checked={checked === method.name}
              name="default-radio"
              onChange={(e: any) => {
                setChecked(e.target.value);
                setIsDisabled(false);
                setValue("method", e.target.value);
              }}
              className="w-4 h-4 text-blue-600 bg-gray-100  dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700"
            />
          </div>
        </div>
      ))}
      {errors?.method && (
        <p className="text-red-500 text-sm mt-2">{errors?.method?.message}</p>
      )}
      <button
        className="rounded w-full disabled:bg-gray-400 mt-5 bg-button-clr bg-purple-600  hover:bg-purple-700 py-2.5 px-4 text-white font-semibold"
        type="submit"
        disabled={isDisabled}
        onClick={() => {
          enableAuthentication("enabled");
        }}
      >
        Enable 2FA Security
      </button>
      <button
        className="rounded w-full mt-5 disabled:bg-gray-400 bg-button-clr bg-red-600  hover:bg-red-700 py-2.5 px-4 text-white font-semibold"
        onClick={() => {
          setIsDisabled(true);
          setChecked(userData.security || "");
        }}
      >
        Cancel
      </button>
      <button
        className="rounded w-full mt-5 disabled:bg-gray-400 bg-button-clr bg-red-600  hover:bg-red-700 py-2.5 px-4 text-white font-semibold"
        onClick={() => {
          enableAuthentication("disabled");
        }}
      >
        Disable 2FA Security
      </button>
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
    </form>
  );
};

export default PrivacySecurity;
