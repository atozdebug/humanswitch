import React from 'react'

const Settings = () => {
    return (
        <div>
            <div className="bg-gray-100 min-h-screen " >

    

                <div className=" p-8 bg-[#F6F8FA]">

                
                    <div className="">
                        <ul className="links flex gap-3 border-t border-b border-[#E2E4E9] my-3 py-4">
                            <li><a href="" className="text-sm font-medium flex items-center justify-center gap-1"> <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.5 3.99475C2.50137 3.79778 2.58018 3.60926 2.71938 3.46991C2.85859 3.33056 3.04704 3.25157 3.244 3.25H16.756C17.167 3.25 17.5 3.58375 17.5 3.99475V16.0052C17.4986 16.2022 17.4198 16.3907 17.2806 16.5301C17.1414 16.6694 16.953 16.7484 16.756 16.75H3.244C3.04661 16.7498 2.85737 16.6712 2.71787 16.5316C2.57836 16.392 2.5 16.2026 2.5 16.0052V3.99475ZM4 4.75V15.25H16V4.75H4ZM5.5 6.25H10V10.75H5.5V6.25ZM7 7.75V9.25H8.5V7.75H7ZM5.5 12.25H14.5V13.75H5.5V12.25ZM11.5 6.25H14.5V7.75H11.5V6.25ZM11.5 9.25H14.5V10.75H11.5V9.25Z" fill="#868C98" />
                            </svg>
                                Profile </a></li>
                            <li><a href="" className="text-sm font-medium flex items-center justify-center gap-1 hover:bg-bg-clr "><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.25 3.25H16.75C16.9489 3.25 17.1397 3.32902 17.2803 3.46967C17.421 3.61032 17.5 3.80109 17.5 4V16C17.5 16.1989 17.421 16.3897 17.2803 16.5303C17.1397 16.671 16.9489 16.75 16.75 16.75H3.25C3.05109 16.75 2.86032 16.671 2.71967 16.5303C2.57902 16.3897 2.5 16.1989 2.5 16V4C2.5 3.80109 2.57902 3.61032 2.71967 3.46967C2.86032 3.32902 3.05109 3.25 3.25 3.25ZM16 9.25H4V15.25H16V9.25ZM16 7.75V4.75H4V7.75H16ZM11.5 12.25H14.5V13.75H11.5V12.25Z" fill="#868C98" />
                            </svg>
                                Change Password </a></li>
                            <li><a href="" className="text-sm font-medium flex items-center justify-center gap-1 "> <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 17.5H4C3.80109 17.5 3.61032 17.421 3.46967 17.2803C3.32902 17.1397 3.25 16.9489 3.25 16.75V3.25C3.25 3.05109 3.32902 2.86032 3.46967 2.71967C3.61032 2.57902 3.80109 2.5 4 2.5H16C16.1989 2.5 16.3897 2.57902 16.5303 2.71967C16.671 2.86032 16.75 3.05109 16.75 3.25V16.75C16.75 16.9489 16.671 17.1397 16.5303 17.2803C16.3897 17.421 16.1989 17.5 16 17.5ZM15.25 16V4H4.75V16H15.25ZM7 7.75H13V9.25H7V7.75ZM7 10.75H13V12.25H7V10.75Z" fill="#868C98" />
                            </svg>
                                Invoice History </a></li>
                            <li><a href="" className="text-sm font-medium flex items-center justify-center gap-1 "> <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.5 8.5C14.5 7.30653 14.0259 6.16193 13.182 5.31802C12.3381 4.47411 11.1935 4 10 4C8.80653 4 7.66193 4.47411 6.81802 5.31802C5.97411 6.16193 5.5 7.30653 5.5 8.5V14.5H14.5V8.5ZM16 15.0002L16.3 15.4C16.3418 15.4557 16.3672 15.522 16.3735 15.5913C16.3797 15.6607 16.3666 15.7304 16.3354 15.7927C16.3043 15.855 16.2564 15.9074 16.1971 15.944C16.1379 15.9806 16.0696 16 16 16H4C3.93036 16 3.86209 15.9806 3.80285 15.944C3.74361 15.9074 3.69573 15.855 3.66459 15.7927C3.63345 15.7304 3.62026 15.6607 3.62652 15.5913C3.63277 15.522 3.65821 15.4557 3.7 15.4L4 15.0002V8.5C4 6.9087 4.63214 5.38258 5.75736 4.25736C6.88258 3.13214 8.4087 2.5 10 2.5C11.5913 2.5 13.1174 3.13214 14.2426 4.25736C15.3679 5.38258 16 6.9087 16 8.5V15.0002ZM8.125 16.75H11.875C11.875 17.2473 11.6775 17.7242 11.3258 18.0758C10.9742 18.4275 10.4973 18.625 10 18.625C9.50272 18.625 9.02581 18.4275 8.67417 18.0758C8.32254 17.7242 8.125 17.2473 8.125 16.75Z" fill="#868C98" />
                            </svg>
                                Notification Settings </a></li>
                            <li><a href="" className="text-sm font-medium flex items-center justify-center gap-1"> <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.25 0.5L11.7235 2.21C11.8762 2.25766 12.0096 2.35286 12.1043 2.48172C12.199 2.61057 12.2501 2.76633 12.25 2.92625V4.25H13.75C13.9489 4.25 14.1397 4.32902 14.2803 4.46967C14.421 4.61032 14.5 4.80109 14.5 5V11C14.5 11.1989 14.421 11.3897 14.2803 11.5303C14.1397 11.671 13.9489 11.75 13.75 11.75L11.335 11.7507C11.0448 12.1332 10.6922 12.4707 10.285 12.7482L6.25 15.5L2.215 12.749C1.60939 12.3361 1.11381 11.7815 0.771355 11.1334C0.428896 10.4854 0.249924 9.76348 0.25 9.0305V2.92625C0.25009 2.76646 0.301215 2.61087 0.395922 2.48216C0.490628 2.35346 0.623966 2.25837 0.7765 2.21075L6.25 0.5ZM6.25 2.0705L1.75 3.4775V9.0305C1.74989 9.48967 1.85519 9.94274 2.05777 10.3548C2.26036 10.7669 2.55483 11.1269 2.9185 11.4072L3.06025 11.5093L6.25 13.685L9.0865 11.75H5.5C5.30109 11.75 5.11032 11.671 4.96967 11.5303C4.82902 11.3897 4.75 11.1989 4.75 11V5C4.75 4.80109 4.82902 4.61032 4.96967 4.46967C5.11032 4.32902 5.30109 4.25 5.5 4.25H10.75V3.4775L6.25 2.0705ZM6.25 8V10.25H13V8H6.25ZM6.25 6.5H13V5.75H6.25V6.5Z" fill="#868C98" />
                            </svg>

                                Privacy & Security</a></li>
                            <li><a href="" className="text-sm font-medium flex items-center justify-center gap-1"> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.75 3.5H15.5V5H14V14.75C14 14.9489 13.921 15.1397 13.7803 15.2803C13.6397 15.421 13.4489 15.5 13.25 15.5H2.75C2.55109 15.5 2.36032 15.421 2.21967 15.2803C2.07902 15.1397 2 14.9489 2 14.75V5H0.5V3.5H4.25V1.25C4.25 1.05109 4.32902 0.860322 4.46967 0.71967C4.61032 0.579018 4.80109 0.5 5 0.5H11C11.1989 0.5 11.3897 0.579018 11.5303 0.71967C11.671 0.860322 11.75 1.05109 11.75 1.25V3.5ZM12.5 5H3.5V14H12.5V5ZM5.75 7.25H7.25V11.75H5.75V7.25ZM8.75 7.25H10.25V11.75H8.75V7.25ZM5.75 2V3.5H10.25V2H5.75Z" fill="#868C98" />
                            </svg>
                                Delete Account</a></li>
                        </ul>
                    </div>
                    <div className="">
                        {/* ----------------------------------------------------------------- */}
                        <div className="grid cols-2">
                            <div className="">
                                <form

                                    className="form-2 flex flex-col max-w-md m-auto justify-center">
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
                                            htmlFor="password" >
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
                                            htmlFor="password" >
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
                                            htmlFor="confirmPassword">
                                            Confirm New Password<span className="text-span-clr">*</span>
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
                                    Discard  </button>

                                    <button className="rounded  mt-5 bg-button-clr hover:bg-purple-700 py-2.5 px-4 text-white font-semibold min-w-[168px] ml-3"
          >{" "}  Apply Changes</button>
                                    </div>
                                </form>

                                <form

        className="form-3 flex flex-col max-w-md m-auto my-5"
      >
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
            Receive a one-time verification code via SMS to enter during login.
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
            <h2 className="font-medium text-sm text-start">Email Code</h2>
            <p className="font-normal text-xs text-start">
            Get a temporary verification code sent to your email for added security.
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
            <h2 className="font-medium text-sm text-start">Authenticator App</h2>
            <p className="font-normal text-xs text-start">
            Use an authenticator app to generate time-based verification codes for login.
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
          className="rounded w-full mt-5 bg-button-clr hover:bg-purple-700 py-2.5 px-4 text-white font-semibold"
          type="submit"
        >
          {" "}
          Enable 2FA Security{" "}
        </button>
      </form>
                            </div>








                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Settings
