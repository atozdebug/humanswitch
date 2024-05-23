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
import SignupSixth from "../../components/HrSignup/signupSixth";
import { useDispatch } from "react-redux";
import { userSignUp } from "../../services/slices/auth/signUp";
import { useNavigate } from "react-router-dom";
import {
  sendEmailVerification,
  verifyEmailOtp,
} from "../../services/slices/auth/authentication";
import toast from "react-hot-toast";

const header = [
  {
    id: 1,
    name: "Welcome",
  },
  {
    id: 2,
    name: "Email Verification",
  },
  {
    id: 3,
    name: "Personal",
  },
  {
    id: 4,
    name: "Role",
  },
  {
    id: 5,
    name: "Business",
  },
  {
    id: 6,
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
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),
  phone_no: yup.string().required("Phone number is required"),
  image: yup
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
  company_name: yup.string().required("Please select a Company Name"),
  industry: yup.string().required("Please select an Industry"),
  sector: yup.string().required("Please select a Sector"),
  employees_count: yup.string().required("Please select Total Employees"),
  location: yup.string().required("Please select a Location"),
  partners: yup.string().required("Please select if you work with partners"),
  suppliers: yup.string().required("Please select if you work with suppliers"),
  businessImage: yup
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

const schemaFifth = yup.object().shape({
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Z])/,
      "Password must contain at least one uppercase letter"
    )
    .matches(/^(?=.*[0-9])/, "Password must contain at least one number")
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

const schemaSixth = yup.object().shape({
  otp: yup.string().required("OTP is required"),
});

interface FormData {
  email: string;
  agreeTerms: boolean;
  image: Blob;
  businessImage: Blob;
  first_name: string;
  last_name: string;
  phone_no: string;
  role: string;
  company_name: string;
  industry: string;
  sector: string;
  employees_count: string;
  location: string;
  password: string;
  confirmPassword: string;
  partners: string;
  suppliers: string;
  otp: string;
}
const defaultValues = {
  email: "",
  agreeTerms: false,
  businessImage: null,
  image: null,
  first_name: "",
  last_name: "",
  phone_no: "",
  role: "",
  company_name: "",
  industry: "",
  sector: "",
  employees_count: "",
  location: "",
  password: "",
  confirmPassword: "",
  partners: "",
  suppliers: "",
  otp: "",
};

const SignupPage = () => {
  const navigate: any = useNavigate();
  const dispatch: any = useDispatch();
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<any>(defaultValues);

  const schemas = () => {
    if (step === 1) {
      return yupResolver(schemaFirst);
    } else if (step === 2) {
      return yupResolver(schemaSixth);
    } else if (step === 3) {
      return yupResolver(schemaSecond);
    } else if (step === 4) {
      return yupResolver(schemaThird);
    } else if (step === 5) {
      return yupResolver(schemaFourth);
    } else if (step === 6) {
      return yupResolver(schemaFifth);
    }
  };

  const [imageFile, setImageFile] = useState(null);
  const [businessImageFile, setBusinessImageFile] = useState(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file: any = e.target.files && e.target.files[0];
    if (step === 3) {
      setImageFile(file);
    } else {
      setBusinessImageFile(file);
    }
    console.log(file);
  };

  const {
    register,
    handleSubmit,
    // reset,
    setValue,
    formState: { errors },
  } = useForm<FormData | any>({
    resolver: schemas(),
    defaultValues,
  });

  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState(false);

  const onSubmit: any = (data: FormData) => {
    console.log("Form data9999999999999999999:", data);
    try {
      setFormData(data);
      console.log(step);
      if (step === 1) {
        console.log("Step 1");
        const toastId = toast.loading("Sending Mail...");
        dispatch(sendEmailVerification({ email: data.email }))
          .unwrap()
          .then(() => {
            setStep(2); // Move to OTP verification step
            toast.dismiss(toastId);
          })
          .catch((error: any) => {
            console.error("Error sending OTP:", error);
          });
      } else if (step === 2) {
        console.log(otp);
        // Handle OTP verification logic here
        if (otp.length === 6) {
          dispatch(verifyEmailOtp({ email: formData.email, otp }))
            .unwrap()
            .then(() => {
              setStep(3);
            })
            .catch((error: any) => {
              console.error("Invalid OTP:", error);
              setOtpError(true);
            });
        } else {
          setOtpError(true);
        }
      } else if (step >= 3 && step <= 5) {
        setStep((prev) => prev + 1);
      } else if (step === 6) {
        const formData: any = new FormData();
        formData.append("image", imageFile);
        formData.append("business_image", businessImageFile);
        formData.append("email", data.email);
        formData.append("first_name", data.first_name);
        formData.append("last_name", data.last_name);
        formData.append("phone_no", data.phone_no);
        formData.append("role", data.role);
        formData.append("company_name", data.company_name);
        formData.append("industry", data.industry);
        formData.append("sector", data.sector);
        formData.append("employees_count", data.employees_count);
        formData.append("location", data.location);
        formData.append("password", data.password);
        formData.append("partners", data.partners);
        formData.append("suppliers", data.suppliers);

        dispatch(userSignUp(formData))
          .unwrap()
          .then(() => navigate("/loginhr"));
      }
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  console.log("Form", formData);

  return (
    <>
      <div className="nav-header flex items-center content-center  justify-between">
        <div className="logo-head min-w-[123px] mr-6">
          <h1>
            <span>
              {" "}
              <img className="w-[123px]" src="/assets/images/Logo1.png" />
            </span>{" "}
          </h1>
        </div>

        <div className="flex text-sm">
          {header.map((item, index) => (
            <div className="flex" key={index}>
              <div
                onClick={() => setStep(item.id)}
                className={`flex items-center justify-center px-3 py-2 mx-2 gap-2 rounded-lg text-gray-500 dark:bg-gray-800  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
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
              {item.id < 6 && (
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
        <SignupSixth
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          otp={otp}
          setOtp={setOtp}
          otpError={otpError}
          setOtpError={setOtpError}
          setValue={setValue}
        />
      ) : step === 3 ? (
        <SignupTwo
          handleImageChange={handleImageChange}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          register={register}
          errors={errors}
          setValue={setValue}
        />
      ) : step === 4 ? (
        <SignupThree
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          register={register}
          errors={errors}
        />
      ) : step === 5 ? (
        <SignupFour
          handleImageChange={handleImageChange}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          register={register}
          errors={errors}
          setValue={setValue}
        />
      ) : (
        <SignupFive
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          register={register}
          errors={errors}
          setValue={setValue}
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
