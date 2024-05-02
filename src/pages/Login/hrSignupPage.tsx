import { useState } from "react";
import SignupOne from "../../components/HrSignup/signupFirst";
import SignupTwo from "../../components/HrSignup/signupSecond";
import SignupThree from "../../components/HrSignup/signupThird";
import SignupFour from "../../components/HrSignup/signupFourth";
import SignupFive from "../../components/HrSignup/signupFifth";

const SignupPage = () => {
  const [step, setStep] = useState<number>(1);
  const header = [
    {
      id: 1,
      name: "Personal",
    },
    {
      id: 2,
      name: "Role",
    },
    {
      id: 3,
      name: "Position",
    },
    {
      id: 4,
      name: "Password",
    },
    {
      id: 5,
      name: "Summary",
    },
  ];
  console.log(step);
  return (
    <>
      <div className="nav-header flex items-center content-center  justify-between">
        <div className="logo-head">
          <h1>
            <span>
              {" "}
              <img src="/assets/images/Logo.png" />
            </span>{" "}
          </h1>
        </div>

        <div className="flex text-sm">
          {header.map(() => (
            <div className="flex">
              <a className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span className="text-border font-medium text-xs mr-3 flex  justify-items-center active">
                  1
                </span>
                Personal
              </a>

              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <img src="/assets/images/arrow-right-s-line.png" />
              </a>
            </div>
          ))}
        </div>

        <h1 className="text-center flex justify-center">
          <img src="/assets/images/croose.png" />
        </h1>
      </div>
      <hr className="border-color: gray;"></hr>
      {step > 1 && (
        <div className="text-start my-2 back-btnn">
          <button
            className="px-4 py-2.5 text-heading border border-[#E2E4E9] font-semibold rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            onClick={() => setStep((prev: number) => prev - 1)}
          >
            Back
          </button>
        </div>
      )}
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
      <div className="footer flex items-center content-center  justify-between">
        <div> © 2024 HumanSwitch.ai</div>
        <div className="">
          <select
            id="country"
            name="country"
            className="block text-gray-dark font-normal  mt-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300"
          >
            <option value="">Select a country</option>
            <option value="us">United States</option>
            <option value="ca">Canada</option>
            <option value="gb">United Kingdom</option>
            <option value="au">Australia</option>
            <option value="fr">France</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
