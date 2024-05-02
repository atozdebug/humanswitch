import { useState } from "react";
import SignupOne from "../../components/SignupComponents/signupFirst";
import SignupTwo from "../../components/SignupComponents/signupSecond";
import SignupThree from "../../components/SignupComponents/signupThird";
import SignupFour from "../../components/SignupComponents/signupFourth";
import SignupFive from "../../components/SignupComponents/signupFifth";

const SignupPage = () => {
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

export default SignupPage;
