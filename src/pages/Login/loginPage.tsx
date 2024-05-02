import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid work email address")
    .required("Email is required"),
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
});

interface FormData {
  email: string;
  password: string;
}
const defaultValues = {
  email: "",
  password: "",
};
const LoginPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues,
  });

  // Function to handle form submission
  const onSubmit: any = (data: FormData) => {
    console.log("Form data:", data);
    //reset()
    // Implement your form submission logic here
  };
  return (
    <div className="login-form">
      <h5 className="text-xl flex justify-center gap-5 header font-semibold  ">
        <span>
          <img src="/assets/images/Vector.png" className="borders-[#000000]" />
        </span>
        HumanSwitch
      </h5>
      <h2 className="text-3xl font-semibold  mt-8 mb-3">
        Log in to your account
      </h2>
      <p className="font-normal">welcome back please enter your details.</p>

      <div className="form-info mt-4">
        <label
          className="block text-gray-700 text-sm font-medium mb-2"
          htmlFor="Work email"
        >
          Work email
        </label>
        <input
          className="shadow appearance-none border border-color: gray; rounded w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="text"
          placeholder="Enter your email"
        ></input>
        <div className="password my-3">
          <label
            className="block text-gray-700 text-sm font-medium mb-2"
            htmlFor="password"
          >
            Password*{" "}
          </label>
          <input
            className="shadow appearance-none border border-color: gray; rounded w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Create a password"
          ></input>
          <p className="text-gray-500 text-sm italic font-normal text-left mt-3"></p>
          <button className="rounded w-full mt-5 bg-purple hover:bg-purple-700 py-2 px-4 text-white font-semibold">
            Login
          </button>
          <Link
            to="/forgetpassword"
            className="flex justify-center gap-5 mt-3 text-sm font-semibold text-[#6941C6]"
          >
            Forgot password?
          </Link>
          <p className="mt-5">
            Having trouble? Contact us at{" "}
            <span className=" font-semibold text-[#6941C6]">
              {" "}
              support@humanswitch.com
            </span>
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="form-info mt-4">
        <div>
          <label
            className="block text-gray-700 text-sm font-medium mb-2"
            htmlFor="email"
          >
            Work email
          </label>
          <input
            id="email"
            type="text"
            placeholder="Enter your email"
            className={`shadow appearance-none border border-color: gray; rounded w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline ${
              errors.email ? "border-[#F04438]" : ""
            }`}
            {...register("email")}
          />

          {errors.email && (
            <p className="text-red-500 text-sm mt-2">
              {errors?.email?.message}
            </p>
          )}
        </div>

        <div className="password my-3">
          <label
            className="block text-gray-700 text-sm font-medium mb-2"
            htmlFor="password"
          >
            Password*
          </label>
          <input
            id="password"
            type="password"
            placeholder="Create a password"
            className={`shadow appearance-none border border-color: gray; rounded w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline ${
              errors.password ? "border-[#F04438]" : ""
            }`}
            {...register("password")}
          />

          {errors?.password && (
            <p className="text-red-500 text-sm mt-2">
              {errors?.password?.message}
            </p>
          )}
          <button
            type="submit"
            className="rounded w-full mt-5 bg-purple hover:bg-purple-700 py-2 px-4 text-white font-semibold"
          >
            Login
          </button>
          <Link
            to="/forgetpassword"
            className="flex justify-center gap-5 mt-3 text-sm font-semibold text-[#6941C6]"
          >
            Forgot password?
          </Link>
          <p className="mt-5">
            Having trouble? Contact us at{" "}
            <span className=" font-semibold text-[#6941C6]">
              support@humanswitch.com
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
