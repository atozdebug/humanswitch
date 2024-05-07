import { useState } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const DeleteAccount = ({ handleSubmit, register, onSubmit, errors }: any) => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center max-w-md m-auto mt-20"
    >
      <h2 className="text-gray-dark text-2xl font-medium ">Delete Account</h2>
      <p className="gray-dark ">Manage the process of deleting account.</p>
      <hr className="my-5"></hr>

      <div className="error rounded-lg">
        <p className="bg-error p-3 flex items-center text-xs font-normal gap-3 ">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 14C4.6862 14 2 11.3138 2 8C2 4.6862 4.6862 2 8 2C11.3138 2 14 4.6862 14 8C14 11.3138 11.3138 14 8 14ZM7.4 9.8V11H8.6V9.8H7.4ZM7.4 5V8.6H8.6V5H7.4Z"
              fill="#DF1C41"
            />
          </svg>{" "}
          This action cannot be undone.
        </p>
      </div>
      <p className="text-sm text-gray-dark mt-5">
        All of your data, including your profile, posts, and personal
        information, will be permanently removed.
      </p>

      <p className="text-sm text-gray-dark mt-5">
        {" "}
        By entering your password, you confirm that you understand and accept
        the consequences of deleting your account.
      </p>

      <div className="my-5">
        <label
          className="block text-heading text-sm font-medium mb-2"
          htmlFor="passwordDelete"
        ></label>
        <div className="relative ">
          <span className="absolute h-2 w-4 inset-y-3 inset-x-3">
            <img src="/assets/images/lock-2-line.png" />
          </span>
          <input
            className={`lft-space shadow appearance-none border ${
              errors.passwordDelete ? "border-red-600" : "border-slate-300"
            } rounded w-full py-2 pl-5 text-input-text leading-tight focus:outline-none focus:shadow-outline`}
            id="passwordDelete"
            type={showCurrentPassword ? "text" : "password"}
            placeholder=".........."
            {...register("passwordDelete")}
          />
          <span
            className="absolute h-2 w-4 inset-y-3 right-2"
            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
          >
            {showCurrentPassword ? (
              <VisibilityOffIcon className="pb-3 pr-2" />
            ) : (
              <img src="/assets/images/eye-line.png" />
            )}
          </span>
          {errors.passwordDelete && (
            <p className="text-[#F04438] text-sm mt-2">
              {errors.passwordDelete.message}
            </p>
          )}
        </div>

        <div className="">
          {/* <button className="px-4 py-2.5 text-heading border border-[#E2E4E9] font-semibold rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 min-w-[168px]">
            Cancel{" "}
          </button> */}

          <button
            type="submit"
            className="rounded  mt-5 bg-red-code hover:bg-purple-700 py-2.5 px-4 text-white font-semibold min-w-[168px] ml-3"
          >
            {" "}
            Delete Account
          </button>
        </div>
      </div>
    </form>
  );
};

export default DeleteAccount;
