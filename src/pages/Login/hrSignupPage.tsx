import { useState } from "react";
import SignupOne from "../../components/HrSignup/signupFirst";
import SignupTwo from "../../components/HrSignup/signupSecond";
import SignupThree from "../../components/HrSignup/signupThird";
import SignupFour from "../../components/HrSignup/signupFourth";
import SignupFive from "../../components/HrSignup/signupFifth";
import DoneIcon from "@mui/icons-material/Done";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const header = [
  {
    id: 1,
    name: "Welcome",
  },
  {
    id: 2,
    name: "Personal",
  },
  {
    id: 3,
    name: "Role",
  },
  {
    id: 4,
    name: "About Company",
  },
  {
    id: 5,
    name: "Password",
  },
];

const schemaFirst = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid work email address")
    .required("Email is required"),
  agreeTerms: yup
    .boolean()
    .oneOf(
      [true],
      "You must agree to the Terms & Conditions and Privacy Policy."
    )
    .required("You must agree to the Terms & Conditions and Privacy Policy."),
});

const schemaSecond = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  phoneNumber: yup
    .number()
    .integer("Phone number must be an integer")
    .required("Phone number is required")
    .typeError("Phone number must be a number")
    .test(
      "len",
      "Phone number must be between 10 and 15 digits",
      function (val) {
        if (val === undefined || val === null) {
          return false;
        }
        const phoneString = val.toString();
        return phoneString.length >= 10 && phoneString.length <= 15;
      }
    ),
  profilePicture: yup
    .mixed()
    .required("Profile picture is required")
    .test(
      "fileType",
      "Only image files are allowed (jpeg, jpg, png, gif).",
      function (file: any) {
        if (!file) {
          return false;
        }

        const fileObj = file[0];
        const supportedFormats = [
          "image/jpeg",
          "image/jpg",
          "image/png",
          "image/gif",
        ];
        return supportedFormats.includes(fileObj?.type);
      }
    )
    .test("fileSize", "File size must be less than 2MB.", function (file: any) {
      if (!file) {
        return false;
      }

      const fileObj = file[0];
      return fileObj?.size <= 2 * 1024 * 1024;
    }),
});

const schemaThird = yup.object().shape({
  role: yup.string().required("Please select a role"),
});

const schemaFourth = yup.object().shape({
  companyName: yup.string().required("Please select a Company Name"),
  industry: yup.string().required("Please select an Industry"),
  sector: yup.string().required("Please select a Sector"),
  totalEmployees: yup.string().required("Please select Total Employees"),
  location: yup.string().required("Please select a Location"),
});

const schemaFifth = yup.object().shape({
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])/,
      "Password must contain at least one lowercase letter"
    )
    .matches(
      /^(?=.*[A-Z])/,
      "Password must contain at least one uppercase letter"
    )
    .matches(/^(?=.*[0-9])/, "Password must contain at least one number")
    .matches(
      /^(?=.*[\W_])/,
      "Password must contain at least one special character"
    )
    .min(8, "Password must be atleast 8 characters long"),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .test(
      "password-match",
      "Confirm password must match password",
      function (value) {
        // Get the password value from the parent form object
        const { password } = this.parent;

        // Check if confirmPassword matches password
        return value === password;
      }
    ),
});

interface FormData {
  email: string;
  agreeTerms: boolean;
  profilePicture: Blob;
  firstName: string;
  lastName: string;
  phoneNumber: number;
  role: string;
  companyName: string;
  industry: string;
  sector: string;
  totalEmployees: string;
  location: string;
  password: string;
  confirmPassword: string;
}
const defaultValues = {
  email: "",
  agreeTerms: false,
  profilePicture: null,
  firstName: "",
  lastName: "",
  phoneNumber: 0,
  role: "",
  companyName: "",
  industry: "",
  sector: "",
  totalEmployees: "",
  location: "",
  password: "",
  confirmPassword: "",
};

const SignupPage = () => {
  const [step, setStep] = useState<number>(1);

  const schemas = () => {
    if (step === 1) {
      return yupResolver(schemaFirst);
    } else if (step === 2) {
      return yupResolver(schemaSecond);
    } else if (step === 3) {
      return yupResolver(schemaThird);
    } else if (step === 4) {
      return yupResolver(schemaFourth);
    } else if (step === 5) {
      return yupResolver(schemaFifth);
    }
  };

  console.log(step);

  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm<FormData | any>({
    resolver: schemas(),
    defaultValues,
  });

  const onSubmit: any = (data: FormData) => {
    console.log("Form data:", data);
    try {
      if (step < 5) {
        setStep((prev) => prev + 1);
      }
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

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
          {header.map((item, index) => (
            <div className="flex" key={index}>
              <div
                onClick={() => setStep(item.id)}
                className={`flex items-center justify-center px-3 py-2 mx-2 gap-2 rounded-lg text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
              >
                <div
                  className={`flex justify-center items-center border rounded-full h-6 w-6 ${
                    item.id < step
                      ? "bg-green-400"
                      : `${step === item.id ? "bg-blue-600 text-white" : ""}`
                  }`}
                >
                  {item.id < step ? (
                    <DoneIcon
                      className="text-black"
                      style={{ height: "16px" }}
                    />
                  ) : (
                    item.id
                  )}
                </div>
                <div
                  className={`${
                    step === item.id ? "font-bold text-black" : ""
                  }`}
                >
                  {item.name}
                </div>
              </div>
              {item.id < 5 && (
                <div className="flex items-center justify-center">
                  <img src="/assets/images/arrow-right-s-line.png" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="h-10 w-10"></div>
      </div>
      <hr className="border-color: gray;"></hr>
      {step > 1 && (
        <div className="text-start my-2 back-btnn">
          <button
            className="px-3 flex py-2 justify-center items-center gap-2 text-heading border border-[#E2E4E9] font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            onClick={() => setStep((prev: number) => prev - 1)}
          >
            <div className="rotate-180">
              <img src="/assets/images/arrow-right-s-line.png" />
            </div>
            Back
          </button>
        </div>
      )}
      {step === 1 ? (
        <SignupOne
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          register={register}
          errors={errors}
        />
      ) : step === 2 ? (
        <SignupTwo
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          register={register}
          errors={errors}
        />
      ) : step === 3 ? (
        <SignupThree
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          register={register}
          errors={errors}
        />
      ) : step === 4 ? (
        <SignupFour
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          register={register}
          errors={errors}
        />
      ) : (
        <SignupFive
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          register={register}
          errors={errors}
        />
      )}
      <div className="footer flex items-center content-center justify-between">
        <div>© 2024 HumanSwitch.ai</div>
        <div className="">
          <select
            id="country"
            name="country"
            className="block text-gray-dark font-normal  mt-1"
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