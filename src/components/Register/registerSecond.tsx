import { UseFormHandleSubmit, UseFormRegister, FieldErrors } from 'react-hook-form';

interface RegisterFirstProps {
    handleSubmit: UseFormHandleSubmit<FormData>;
    onSubmit: (data: FormData) => void;
    register: UseFormRegister<FormData>;
    errors: FieldErrors<FormData>;
}
const RegisterSecond:React.FC<RegisterFirstProps> = ({ handleSubmit, onSubmit, register, errors }:any) => {
  return (
    <div className="login-form ">
      <h5 className="text-xl flex justify-center gap-5 header font-semibold  ">
        {" "}
        <span>
          {" "}
          <img src="/assets/images/Group2.png" />
        </span>{" "}
        HumanSwitch
      </h5>
      <h2 className="text-3xl font-semibold  mt-8 mb-3">
        Welcome to HumanSwitch
      </h2>
      <p className="font-normal">
        You're setting up an account <br></br>for{" "}
        <a href="" className="text-purple-500 font-semibold">
          mehak@humanswitch.com
        </a>
        
      </p>

      {/* <div className="form-info">
        <label
          className="block text-gray-700 text-sm font-medium mb-2 "
          htmlFor="username" >Name*
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"type="text"placeholder="Enter your name" ></input>
        <div className="password my-3">
          <label
            className="block text-gray-700 text-sm font-medium mb-2"
            htmlFor="password"
          >
            Password*{" "}
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Create a password"
          ></input>
          <p className="text-gray-500 text-sm italic font-normal text-left mt-3">
            Must be at least 8 characters.
          </p>
          <button className="rounded w-full mt-5 bg-purple hover:bg-purple-700 py-2 px-4 text-white font-semibold">
            {" "}  Create Account</button>
          <a href="" className="flex justify-center gap-5 mt-3 text-sm font-semibold">
            <span>
              {" "}
              <img src="/assets/images/arrow-left.png" />
            </span>{" "}
            Back to home
          </a>
        </div>
      </div> */}
      <form onSubmit={handleSubmit(onSubmit)} className="form-info">
            <div>
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="username">
                    Name*
                </label>
                <input
                    id="username"
                    type="text"
                    placeholder="Enter your name"
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.username ? 'border-[#F04438]':''}`}
                    {...register('username')}
                />
                {/* Display validation error message for the username field */}
                {errors.username && <p className="text-[#F04438] text-sm mt-2">{errors.username.message}</p>}
            </div>

            <div className="password my-3">
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="password">
                    Password*
                </label>
                <input
                    id="password"
                    type="password"
                    placeholder="Create a password"
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'border-[#F04438]':''}`}
                    {...register('password')}
                />
                {/* Display validation error message for the password field */}
                {errors.password && <p className="text-[#F04438] text-sm mt-2">{errors.password.message}</p>}

                <button
                    type="submit"
                    className="rounded w-full mt-5 bg-purple hover:bg-purple-700 py-2 px-4 text-white font-semibold"
                >
                    Create Account
                </button>

                <a href="#" className="flex justify-center gap-5 mt-3 text-sm font-semibold">
                    <span>
                        <img src="/assets/images/arrow-left.png" alt="Back to home" />
                    </span>
                    Back to home
                </a>
            </div>
        </form>
    </div>
  )
}

export default RegisterSecond