import ForgetPasswordFirst from "../../components/ForgetPassword/forgetPasswordFirst";
import ForgetPasswordSecond from "../../components/ForgetPassword/forgetPasswordSecond";
import { useState } from "react";
import ForgetPasswordThird from "../../components/ForgetPassword/forgetPasswordThird";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schemaFirst = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid work email address")
    .required("Email is required"),
});

const schemaSecond = yup.object().shape({
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
    .min(8, "Password must be atleast 8 characters long")
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
  password: string;
  confirmPassword: string;
}
const defaultValues = {
  email: "",
  password: "",
  confirmPassword: "",
};

const ForgetPasswordPage = () => {
  const [step, setStep] = useState<number>(0);

  const schemas = (step: number) => {
    if (step === 0) {
      return yupResolver(schemaFirst);
    } else if (step === 1) {
      return yupResolver(schemaSecond);
    }
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData | any>({
    resolver: schemas(step),
    defaultValues,
  });

  const onSubmit: any = (data: FormData) => {
    console.log("Form data:", data);
    setStep((prev) => prev + 1);
  };

  const backStep = () => {
    setStep((prev) => prev - 1);
  };
  return (
    <>
      {step === 0 ? (
        <ForgetPasswordFirst
          backStep={backStep}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          register={register}
          errors={errors}
        />
      ) : step === 1 ? (
        <ForgetPasswordSecond
          backStep={backStep}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          register={register}
          errors={errors}
        />
      ) : (
        <ForgetPasswordThird backStep={backStep} />
      )}
    </>
  );
};

export default ForgetPasswordPage;
