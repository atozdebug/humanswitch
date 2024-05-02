import RegisterFirst from "../../components/Register/registerFirst";
import RegisterSecond from "../../components/Register/registerSecond";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const schema1 = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid work email address")
    .required("Email is required"),
});

const schema2 = yup.object().shape({
  username: yup.string().required("Please enter your name"),
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
  username: string;
  password: string;
}
const defaultValues = {
  email: "",
  username: "",
  password: "",
};
const RegisterPage: React.FC = () => {
  const [step, setStep] = useState<boolean>(true);
  const schemas = (step: boolean) => {
    if (step) {
      return yupResolver(schema1);
    } else {
      return yupResolver(schema2);
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

  // Function to handle form submission
  const onSubmit: any = (data: FormData) => {
    console.log("Form data:", data);
    setStep(false);
    //reset()
    // Implement your form submission logic here
  };
  return (
    <>
      {step ? (
        <RegisterFirst
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          register={register}
          errors={errors}
        />
      ) : (
        <RegisterSecond
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          register={register}
          errors={errors}
        />
      )}
    </>
  );
};

export default RegisterPage;
