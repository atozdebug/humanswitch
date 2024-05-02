import { useState } from "react";
import SignupOne from "./signupone";
import SignupTwo from "./signuptwo";
import SignupThree from "./signupthree";
import SignupFour from "./signupfour";
import SignupFive from "./signupfive";

const Signup = () => {
  const [step, setStep] = useState<number>(1);
  return (
    <>
      {step === 1 ? (
        <SignupOne setStep={setStep} />
      ) : step === 2 ? (
        <SignupTwo setStep={setStep} />
      ) : step === 3 ? (
        <SignupThree setStep={setStep} />
      ) : step === 4 ? (
        <SignupFour setStep={setStep} />
      ) : (
        <SignupFive setStep={setStep} />
      )}
    </>
  );
};

export default Signup;
