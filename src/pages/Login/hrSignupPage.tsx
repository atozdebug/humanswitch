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

        toast.promise(
          dispatch(sendEmailVerification({ email: data.email }))
            .unwrap()
            .then(() => {
              setStep(2); // Move to OTP verification step
            })
            .catch((error: any) => {
              console.error("Error sending OTP:", error);
            }),
          {
            loading: "Sending Email...",
            success: "Email Sent!",
            error: "Error while sending email",
          }
        );
      } else if (step === 2) {
        console.log(otp);
        // Handle OTP verification logic here
        if (otp.length === 6) {
          dispatch(verifyEmailOtp({ email: formData.email, otp }))
            .unwrap()
            .then((res: any) => {
              if (res.success === "true") {
                toast.success("OTP verified succcessfully");
                setStep(3);
              } else {
                toast.error("Invalid OTP");
              }
              setOtp("");
            })
            .catch((error: any) => {
              console.error("Invalid OTP:", error);
              toast.error("Invalid OTP");
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
      <div className="nav-header flex items-center justify-center relative md:!px-44px !px-4">
        <div className="logo-head min-w-[123px] mr-6 absolute top-1/2 translate-y-n50 left-11 lg:block hidden">
          <h1 className="">
            <span>
              {" "}
              <img className="" src="/assets/images/Logo1.png" width={'136px'} />
            </span>{" "}
          </h1>
        </div>

        <div className="flex text-sm lg:flex-nowrap flex-wrap justify-center">
          {header.map((item, index) => (
            <div className="flex" key={index}>
              <div
                onClick={() => setStep(item.id)}
                className={`flex items-center justify-center py-2 gap-2 rounded-lg text-gray-500 dark:bg-gray-800  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
              >
                <div
                  className={`flex justify-center items-center border rounded-full h-5 w-5 ${
                    item.id < step
                      ? "bg-green-400 text-white"
                      : `${step === item.id ? "bg-blue-600 text-white" : ""}`
                  }`}
                >
                  {item.id < step ? (
                    // <DoneIcon
                    //   className=""
                    //   style={{ height: "20px" }}
                    // />
                    <>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z" fill="#38C793"/>
                      <path d="M15.1817 7.2726L8.8187 13.6365L5 9.8178L6.2726 8.5452L8.8187 11.0913L13.9091 6L15.1817 7.2726Z" fill="white"/>
                    </svg>
                    </>
                    

                  ) : (
                    item.id
                  )}
                </div>
                <div
                  className={`${
                    step === item.id ? "font-medium text-black" : ""
                  }`}
                >
                  {item.name}
                </div>
              </div>
              {item.id < 6 && (
                <div className="flex items-center justify-center mx-4 min-w-4">
                  <img src="/assets/images/arrow-right-s-line.png" width={'20px'} height={'20px'} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* <div className="h-10 w-10"></div> */}
      </div>
      <hr className="border-color: gray;"></hr>
      {step > 1 && (
        <div className="text-start back-btnn md:px-44px px-4 py-6 bg-[url(../assets/images/Pattern.png)] bg-no-repeat bg-top">
          <button
            className="px-3 flex py-2 justify-center rounded-[10px] items-center gap-2 text-gray-dark border border-[#E2E4E9] font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
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
      <div className="xl:px-[44px] px-4 w-full mx-auto footer flex items-center content-center justify-between">
        <div>© 2024 HumanSwitch.ai</div>
        <div className="flex gap-0 items-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 17.5C5.85775 17.5 2.5 14.1422 2.5 10C2.5 5.85775 5.85775 2.5 10 2.5C14.1422 2.5 17.5 5.85775 17.5 10C17.5 14.1422 14.1422 17.5 10 17.5ZM8.2825 15.7502C7.54256 14.1807 7.1139 12.4827 7.02025 10.75H4.0465C4.19244 11.9042 4.67044 12.9911 5.42243 13.8788C6.17441 14.7664 7.16801 15.4166 8.2825 15.7502ZM8.5225 10.75C8.63575 12.5792 9.1585 14.2975 10 15.814C10.8642 14.2574 11.3691 12.5271 11.4775 10.75H8.5225ZM15.9535 10.75H12.9797C12.8861 12.4827 12.4574 14.1807 11.7175 15.7502C12.832 15.4166 13.8256 14.7664 14.5776 13.8788C15.3296 12.9911 15.8076 11.9042 15.9535 10.75ZM4.0465 9.25H7.02025C7.1139 7.51734 7.54256 5.81926 8.2825 4.24975C7.16801 4.58341 6.17441 5.23356 5.42243 6.12122C4.67044 7.00888 4.19244 8.09583 4.0465 9.25ZM8.52325 9.25H11.4767C11.3686 7.47295 10.864 5.74265 10 4.186C9.13576 5.74259 8.63092 7.47289 8.5225 9.25H8.52325ZM11.7175 4.24975C12.4574 5.81926 12.8861 7.51734 12.9797 9.25H15.9535C15.8076 8.09583 15.3296 7.00888 14.5776 6.12122C13.8256 5.23356 12.832 4.58341 11.7175 4.24975Z" fill="#868C98"/>
          </svg>
          <select
            id="country"
            name="country"
            className="block text-gray-dark text-sm font-normal mt-0 border-0 !bg-transparent focus:!border-0 focus:ring-0"
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
