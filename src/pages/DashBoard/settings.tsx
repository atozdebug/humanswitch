import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PasswordIcon from "@mui/icons-material/Password";
import RestorePageIcon from "@mui/icons-material/RestorePage";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SecurityIcon from "@mui/icons-material/Security";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Card } from "@mui/material";
import { useState } from "react";
import LockIcon from "@mui/icons-material/Lock";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const tabs = [
  {
    name: "Profile",
    icon: <AccountBoxIcon />,
  },
  {
    name: "Change Password",
    icon: <PasswordIcon />,
  },
  {
    name: "Invoice History",
    icon: <RestorePageIcon />,
  },
  {
    name: "Notification Settings",
    icon: <NotificationsIcon />,
  },
  {
    name: "Privacy & Security",
    icon: <SecurityIcon />,
  },
  {
    name: "Delete Account",
    icon: <DeleteForeverIcon />,
  },
];

const menueList = [
  {
    name: "Change Password",
    icon: <LockIcon />,
  },
  {
    name: "2FA Security",
    icon: <SecurityIcon />,
  },
  {
    name: "Delete Account",
    icon: <DeleteOutlineIcon />,
  },
];

const Settings = () => {
  const [selected, setSelected] = useState("changePassword");
  return (
    <div>
      <div className="bg-gray-100 min-h-screen">
        <div className=" p-8 bg-[#F6F8FA]">
          <div className="flex gap-6 border-t border-b border-[#E2E4E9] my-3 py-4">
            {tabs.map((tab) => (
              <div className="flex justify-center items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  {tab.icon}
                </svg>
                <div>{tab.name}</div>
              </div>
            ))}
          </div>

          <div className="flex">
            <div>
              <Card
                variant="outlined"
                className="p-2 mr-8 flex flex-col justify-between"
                style={{ borderRadius: "12px" }}
              >
                <div className="font-semibold px-2 mb-2">Select Menu</div>
                <div>
                  {menueList.map((item) => (
                    <button
                      className="flex w-[280px] justify-between gap-8 p-2 mb-2 hover:bg-gray-200 rounded-lg"
                      onClick={() => setSelected(item.name)}
                    >
                      <div className="flex gap-2">
                        {item.icon}
                        {item.name}
                      </div>
                      <div>
                        <KeyboardArrowRightIcon />
                      </div>
                    </button>
                  ))}
                </div>
              </Card>
            </div>
            {selected === "Change Password" && (
              <form className="form-2 flex flex-col max-w-md">
                <h2 className="text-gray-dark text-2xl font-medium ">
                  Password Setup
                </h2>
                <p className="gray-dark">
                  Set up a secure password to protect your account.
                </p>
                <hr className="my-5"></hr>
                <div>
                  <label
                    className="block text-heading text-sm font-medium mb-2"
                    htmlFor="password"
                  >
                    Current Password<span className="text-span-clr">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute h-2 w-4 inset-y-3 inset-x-3">
                      <img src="/assets/images/lock-2-line.png" />
                    </span>
                    <input
                      className={`lft-space shadow appearance-none border  rounded w-full py-2 pl-5 text-input-text leading-tight focus:outline-none focus:shadow-outline`}
                      id="password"
                      type="password"
                      placeholder=".........."
                    />
                    <span className="absolute h-2 w-4 inset-y-3 right-2">
                      <img src="/assets/images/eye-line.png" />
                    </span>
                  </div>
                </div>

                <div>
                  <label
                    className="block text-heading text-sm font-medium mb-2"
                    htmlFor="password"
                  >
                    New Password<span className="text-span-clr">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute h-2 w-4 inset-y-3 inset-x-3">
                      <img src="/assets/images/lock-2-line.png" />
                    </span>
                    <input
                      className={`lft-space shadow appearance-none border  rounded w-full py-2 pl-5 text-input-text leading-tight focus:outline-none focus:shadow-outline`}
                      id="password"
                      type="password"
                      placeholder=".........."
                    />
                    <span className="absolute h-2 w-4 inset-y-3 right-2">
                      <img src="/assets/images/eye-line.png" />
                    </span>
                  </div>
                </div>

                <div className="my-5">
                  <label
                    className="block text-heading text-sm font-medium mb-2"
                    htmlFor="confirmPassword"
                  >
                    Confirm New Password
                    <span className="text-span-clr">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute h-2 w-4 inset-y-3 inset-x-3">
                      <img src="/assets/images/lock-2-line.png" />
                    </span>
                    <input
                      className={`lft-space shadow appearance-none border rounded w-full py-2   pl-5 text-input-text leading-tight focus:outline-none focus:shadow-outline`}
                      id="confirmPassword"
                      type="password"
                      placeholder=".........."
                    />
                    <span className="absolute h-2 w-4 inset-y-3 right-2">
                      <img src="/assets/images/eye-line.png" />
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-5">
                  <hr className="border-4 border-[#DF1C41] w-40 "></hr>
                  <hr className="border-4 border-gray w-40 mx-5"></hr>
                  <hr className="border-4 border-gray w-40"></hr>
                </div>
                <p className="text-sm font-normal text-content">
                  Weak password. Must contain at least;
                </p>

                <ul className="p-0 text-xs ">
                  <li className="my-2 flex items-center font-normal text-xs">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="max-w-3 max-h-3 mr-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    At least 1 uppercase
                  </li>
                  <li className="mb-2 flex items-center font-normal text-xs">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      className="max-w-3 max-h-3 mr-1"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    At least 1 number
                  </li>
                  <li className="mb-2 flex items-center font-normal text-xs">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      className="max-w-3 max-h-3 mr-1"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    At least 8 characters
                  </li>
                </ul>
                <div>
                  <button className="px-4 py-2.5 text-heading border border-[#E2E4E9] font-semibold rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 min-w-[168px]">
                    Discard{" "}
                  </button>

                  <button className="rounded  mt-5 bg-button-clr hover:bg-purple-700 py-2.5 px-4 text-white font-semibold min-w-[168px] ml-3">
                    Apply Changes
                  </button>
                </div>
              </form>
            )}
            {selected === "2FA Security" && (
              <form className="form-3 flex flex-col max-w-md">
                <h2 className="text-gray-dark text-2xl font-medium ">
                  2FA Security
                </h2>
                <p className="gray-dark ">
                  Enable two-factor authentication to your account.
                </p>
                <hr className="my-5"></hr>
                <div
                  className={`flex items-center content-center  justify-between border p-4 rounded-xl`}
                >
                  <div>
                    <h1 className="text-center flex justify-center">
                      <img src="/assets/images/camra.png" />
                    </h1>
                  </div>
                  <div>
                    <h2 className="font-medium text-sm text-start">SMS Code</h2>
                    <p className="font-normal text-xs text-start">
                      Receive a one-time verification code via SMS to enter
                      during login.
                    </p>
                  </div>
                  <div>
                    <input
                      id="default-radio-1"
                      type="radio"
                      value="Admin"
                      name="default-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100  dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700"
                    />
                  </div>
                </div>

                <div
                  className={`flex items-center content-center  justify-between border  p-4 rounded-xl mt-5`}
                >
                  <div>
                    <h1 className="text-center flex justify-center">
                      <img src="/assets/images/user.png" />
                    </h1>
                  </div>
                  <div>
                    <h2 className="font-medium text-sm text-start">
                      Email Code
                    </h2>
                    <p className="font-normal text-xs text-start">
                      Get a temporary verification code sent to your email for
                      added security.
                    </p>
                  </div>
                  <div>
                    <input
                      id="default-radio-2"
                      type="radio"
                      value="Employee"
                      name="default-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100   dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700"
                    />
                  </div>
                </div>
                <div
                  className={`flex items-center content-center  justify-between border  p-4 rounded-xl mt-5`}
                >
                  <div>
                    <h1 className="text-center flex justify-center">
                      <img src="/assets/images/user.png" />
                    </h1>
                  </div>
                  <div>
                    <h2 className="font-medium text-sm text-start">
                      Authenticator App
                    </h2>
                    <p className="font-normal text-xs text-start">
                      Use an authenticator app to generate time-based
                      verification codes for login.
                    </p>
                  </div>
                  <div>
                    <input
                      id="default-radio-2"
                      type="radio"
                      value="Employee"
                      name="default-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100   dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700"
                    />
                  </div>
                </div>
                <button
                  className="rounded w-full mt-5 bg-button-clr bg-purple-600  hover:bg-purple-700 py-2.5 px-4 text-white font-semibold"
                  type="submit"
                >
                  Enable 2FA Security{" "}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
