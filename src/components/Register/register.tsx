import RegisterFirst from "./registerFirst";
import RegisterSecond from "./registerSecond";
import { useState } from "react";
const Register = () => {
  const [step, setStep] = useState<boolean>(true);
  return (
    <>
    {step ? 
    <RegisterFirst setStep={setStep} /> :
    <RegisterSecond />}
    </>
  );
};

export default Register;
