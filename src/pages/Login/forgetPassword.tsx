import ForgetPasswordFirst from "../../components/ForgetPassword/forgetPasswordFirst";
import ForgetPasswordSecond from "../../components/ForgetPassword/forgetPasswordSecond";
import { useState } from "react";
import ForgetPasswordThird from "../../components/ForgetPassword/forgetPasswordThird";

const ForgetPasswordPage = () => {
  const [step, setStep] = useState<number>(1);
  return (
    <>
      {step === 1 ? (
        <ForgetPasswordFirst setStep={setStep} />
      ) : step === 2 ? (
        <ForgetPasswordSecond setStep={setStep} />
      ) : (
        <ForgetPasswordThird setStep={setStep} />
      )}
    </>
  );
};

export default ForgetPasswordPage;
