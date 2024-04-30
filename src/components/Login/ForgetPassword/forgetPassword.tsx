import ForgetPasswordFirst from "./forgetPasswordFirst"
import ForgetPasswordSecond from "./forgetPasswordSecond"
import { useState } from "react"
import ForgetPasswordThird from "./forgetPasswordThird"
const ForgetPassword = () => {
    const [step, setStep] = useState<number>(1)
  return (
   <>
   {step===1 ?
   <ForgetPasswordFirst setStep={setStep}/>:
   step===2 ?
   <ForgetPasswordSecond setStep={setStep} />:
   <ForgetPasswordThird setStep={setStep} />
}
   </>
  )
}

export default ForgetPassword