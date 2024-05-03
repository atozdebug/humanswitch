import React from 'react'

const Settings = () => {
    return (
        <div>
            <div className="bg-gray-100 min-h-screen " >

                <div className=" h-full w-64 fixed top-0 left-0 overflow-y-auto border-r border-[#E2E4E9] flex justify-between flex-col lft-nav">

                    <div className="py-4 px-6">
                        <h1 className="text-xl font-semibold"><img src="/assets/images/sidebar-logo.png" /></h1>

                        <h5 className="font-medium text-xs text-input-text pl-4">MAIN</h5>
                        <ul className="mt-6">


                            <li className="top px-2 py-2 hover:bg-bg-clr hover:font-medium rounded-lg">
                                <a href="#" className=" text-gray-300 hover:bg-gray-700 flex items-center gap-2"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.75 3.25C16.9489 3.25 17.1397 3.32902 17.2803 3.46967C17.421 3.61032 17.5 3.80109 17.5 4V16C17.5 16.1989 17.421 16.3897 17.2803 16.5303C17.1397 16.671 16.9489 16.75 16.75 16.75H3.25C3.05109 16.75 2.86032 16.671 2.71967 16.5303C2.57902 16.3897 2.5 16.1989 2.5 16V4C2.5 3.80109 2.57902 3.61032 2.71967 3.46967C2.86032 3.32902 3.05109 3.25 3.25 3.25H16.75ZM9.25 10.75H4V15.25H9.25V10.75ZM16 10.75H10.75V15.25H16V10.75ZM9.25 4.75H4V9.25H9.25V4.75ZM16 4.75H10.75V9.25H16V4.75Z" fill="#525866" />
                                </svg>
                                    Dashboard</a>
                            </li>
                            <li className="px-2 py-2 hover:bg-bg-clr hover:font-medium rounded-lg">
                                <a href="#" className=" text-black hover:bg-gray-700 flex items-center gap-2"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.25 1.40725C9.4975 1.3855 9.74725 1.375 10 1.375C14.7633 1.375 18.625 5.23675 18.625 10C18.625 10.2528 18.6145 10.5025 18.5928 10.75H17.4633C17.0868 14.5398 13.8888 17.5 10 17.5C5.85775 17.5 2.5 14.1423 2.5 10C2.5 6.11125 5.46025 2.91325 9.25 2.5375V1.4065V1.40725ZM9.25 10.75V4.0465C7.73703 4.23901 6.35414 5.0004 5.38239 6.17591C4.41064 7.35143 3.92296 8.85285 4.01847 10.375C4.11397 11.8972 4.7855 13.3259 5.89656 14.3707C7.00762 15.4155 8.47484 15.9981 10 16C11.4615 16 12.8727 15.4666 13.9688 14.5C15.0649 13.5334 15.7707 12.2 15.9535 10.75H9.25ZM17.086 9.25C16.9141 7.62843 16.1913 6.11485 15.0382 4.96179C13.8852 3.80874 12.3716 3.08594 10.75 2.914V9.25H17.086Z" fill="#525866" />
                                </svg>
                                    My Reports</a>
                            </li>
                            <li className="px-2 py-2 hover:bg-bg-clr hover:font-medium rounded-lg">
                                <a href="#" className=" text-black hover:bg-gray-700 flex items-center gap-2"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.6275 14.4999C5.78245 14.0607 6.0698 13.6805 6.44995 13.4115C6.8301 13.1425 7.28432 12.998 7.75 12.998C8.21568 12.998 8.6699 13.1425 9.05005 13.4115C9.4302 13.6805 9.71755 14.0607 9.8725 14.4999H17.5V15.9999H9.8725C9.71755 16.439 9.4302 16.8193 9.05005 17.0883C8.6699 17.3573 8.21568 17.5017 7.75 17.5017C7.28432 17.5017 6.8301 17.3573 6.44995 17.0883C6.0698 16.8193 5.78245 16.439 5.6275 15.9999H2.5V14.4999H5.6275ZM10.1275 9.24989C10.2825 8.81074 10.5698 8.43046 10.9499 8.16148C11.3301 7.89249 11.7843 7.74805 12.25 7.74805C12.7157 7.74805 13.1699 7.89249 13.5501 8.16148C13.9302 8.43046 14.2175 8.81074 14.3725 9.24989H17.5V10.7499H14.3725C14.2175 11.189 13.9302 11.5693 13.5501 11.8383C13.1699 12.1073 12.7157 12.2517 12.25 12.2517C11.7843 12.2517 11.3301 12.1073 10.9499 11.8383C10.5698 11.5693 10.2825 11.189 10.1275 10.7499H2.5V9.24989H10.1275ZM5.6275 3.99988C5.78245 3.56073 6.0698 3.18046 6.44995 2.91148C6.8301 2.64249 7.28432 2.49805 7.75 2.49805C8.21568 2.49805 8.6699 2.64249 9.05005 2.91148C9.4302 3.18046 9.71755 3.56073 9.8725 3.99988H17.5V5.49988H9.8725C9.71755 5.93903 9.4302 6.31931 9.05005 6.58829C8.6699 6.85728 8.21568 7.00172 7.75 7.00172C7.28432 7.00172 6.8301 6.85728 6.44995 6.58829C6.0698 6.31931 5.78245 5.93903 5.6275 5.49988H2.5V3.99988H5.6275ZM7.75 5.49988C7.94891 5.49988 8.13968 5.42087 8.28033 5.28021C8.42098 5.13956 8.5 4.9488 8.5 4.74988C8.5 4.55097 8.42098 4.36021 8.28033 4.21955C8.13968 4.0789 7.94891 3.99988 7.75 3.99988C7.55109 3.99988 7.36032 4.0789 7.21967 4.21955C7.07902 4.36021 7 4.55097 7 4.74988C7 4.9488 7.07902 5.13956 7.21967 5.28021C7.36032 5.42087 7.55109 5.49988 7.75 5.49988ZM12.25 10.7499C12.4489 10.7499 12.6397 10.6709 12.7803 10.5302C12.921 10.3896 13 10.1988 13 9.99989C13 9.80097 12.921 9.61021 12.7803 9.46955C12.6397 9.3289 12.4489 9.24989 12.25 9.24989C12.0511 9.24989 11.8603 9.3289 11.7197 9.46955C11.579 9.61021 11.5 9.80097 11.5 9.99989C11.5 10.1988 11.579 10.3896 11.7197 10.5302C11.8603 10.6709 12.0511 10.7499 12.25 10.7499ZM7.75 15.9999C7.94891 15.9999 8.13968 15.9209 8.28033 15.7802C8.42098 15.6396 8.5 15.4488 8.5 15.2499C8.5 15.051 8.42098 14.8602 8.28033 14.7196C8.13968 14.5789 7.94891 14.4999 7.75 14.4999C7.55109 14.4999 7.36032 14.5789 7.21967 14.7196C7.07902 14.8602 7 15.051 7 15.2499C7 15.4488 7.07902 15.6396 7.21967 15.7802C7.36032 15.9209 7.55109 15.9999 7.75 15.9999Z" fill="#525866" />
                                </svg>
                                    AI Advisor</a>
                            </li>
                            <li className="px-2 py-2 hover:bg-bg-clr hover:font-medium rounded-lg">
                                <a href="#" className=" text-black hover:bg-gray-700 flex items-center gap-2"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.5 17.5C2.5 15.9087 3.13214 14.3826 4.25736 13.2574C5.38258 12.1321 6.9087 11.5 8.5 11.5C10.0913 11.5 11.6174 12.1321 12.7426 13.2574C13.8679 14.3826 14.5 15.9087 14.5 17.5H13C13 16.3065 12.5259 15.1619 11.682 14.318C10.8381 13.4741 9.69347 13 8.5 13C7.30653 13 6.16193 13.4741 5.31802 14.318C4.47411 15.1619 4 16.3065 4 17.5H2.5ZM8.5 10.75C6.01375 10.75 4 8.73625 4 6.25C4 3.76375 6.01375 1.75 8.5 1.75C10.9862 1.75 13 3.76375 13 6.25C13 8.73625 10.9862 10.75 8.5 10.75ZM8.5 9.25C10.1575 9.25 11.5 7.9075 11.5 6.25C11.5 4.5925 10.1575 3.25 8.5 3.25C6.8425 3.25 5.5 4.5925 5.5 6.25C5.5 7.9075 6.8425 9.25 8.5 9.25ZM14.713 12.0273C15.767 12.5019 16.6615 13.2709 17.2889 14.2418C17.9164 15.2126 18.2501 16.344 18.25 17.5H16.75C16.7502 16.633 16.4999 15.7844 16.0293 15.0562C15.5587 14.328 14.8878 13.7512 14.0972 13.3953L14.7123 12.0273H14.713ZM14.197 3.55975C14.9526 3.87122 15.5987 4.40015 16.0533 5.07942C16.5078 5.75869 16.7503 6.55768 16.75 7.375C16.7503 8.40425 16.3658 9.39642 15.6719 10.1566C14.978 10.9168 14.025 11.3901 13 11.4835V9.97375C13.5557 9.89416 14.0713 9.63851 14.471 9.24434C14.8707 8.85017 15.1335 8.33824 15.2209 7.7837C15.3082 7.22916 15.2155 6.66122 14.9563 6.16327C14.6971 5.66531 14.2851 5.26356 13.7808 5.017L14.197 3.55975Z" fill="#525866" />
                                </svg>
                                    Integrations</a> </li>
                            <li className="px-2 py-2 hover:bg-bg-clr hover:font-medium rounded-lg">
                                <a href="#" className=" text-black hover:bg-gray-700 flex items-center gap-2"> <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.5 17.5C2.5 15.9087 3.13214 14.3826 4.25736 13.2574C5.38258 12.1321 6.9087 11.5 8.5 11.5C10.0913 11.5 11.6174 12.1321 12.7426 13.2574C13.8679 14.3826 14.5 15.9087 14.5 17.5H13C13 16.3065 12.5259 15.1619 11.682 14.318C10.8381 13.4741 9.69347 13 8.5 13C7.30653 13 6.16193 13.4741 5.31802 14.318C4.47411 15.1619 4 16.3065 4 17.5H2.5ZM8.5 10.75C6.01375 10.75 4 8.73625 4 6.25C4 3.76375 6.01375 1.75 8.5 1.75C10.9862 1.75 13 3.76375 13 6.25C13 8.73625 10.9862 10.75 8.5 10.75ZM8.5 9.25C10.1575 9.25 11.5 7.9075 11.5 6.25C11.5 4.5925 10.1575 3.25 8.5 3.25C6.8425 3.25 5.5 4.5925 5.5 6.25C5.5 7.9075 6.8425 9.25 8.5 9.25ZM14.713 12.0273C15.767 12.5019 16.6615 13.2709 17.2889 14.2418C17.9164 15.2126 18.2501 16.344 18.25 17.5H16.75C16.7502 16.633 16.4999 15.7844 16.0293 15.0562C15.5587 14.328 14.8878 13.7512 14.0972 13.3953L14.7123 12.0273H14.713ZM14.197 3.55975C14.9526 3.87122 15.5987 4.40015 16.0533 5.07942C16.5078 5.75869 16.7503 6.55768 16.75 7.375C16.7503 8.40425 16.3658 9.39642 15.6719 10.1566C14.978 10.9168 14.025 11.3901 13 11.4835V9.97375C13.5557 9.89416 14.0713 9.63851 14.471 9.24434C14.8707 8.85017 15.1335 8.33824 15.2209 7.7837C15.3082 7.22916 15.2155 6.66122 14.9563 6.16327C14.6971 5.66531 14.2851 5.26356 13.7808 5.017L14.197 3.55975Z" fill="#525866" />
                                </svg>
                                    Users</a>
                            </li>

                        </ul>
                    </div>
                    {/* ------------------------------------------------------------- */}
                    <div className="bottom p-4 px-3">
                        <ul>
                            <li className="px-2 py-2">
                                <a href="#" className=" text-black hover:bg-gray-700 flex items-center gap-2 hover:bg-bg-clr hover:font-medium rounded-lg"> <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 11.5V13C8.80653 13 7.66193 13.4741 6.81802 14.318C5.97411 15.1619 5.5 16.3065 5.5 17.5H4C4 15.9087 4.63214 14.3826 5.75736 13.2574C6.88258 12.1321 8.4087 11.5 10 11.5ZM10 10.75C7.51375 10.75 5.5 8.73625 5.5 6.25C5.5 3.76375 7.51375 1.75 10 1.75C12.4862 1.75 14.5 3.76375 14.5 6.25C14.5 8.73625 12.4862 10.75 10 10.75ZM10 9.25C11.6575 9.25 13 7.9075 13 6.25C13 4.5925 11.6575 3.25 10 3.25C8.3425 3.25 7 4.5925 7 6.25C7 7.9075 8.3425 9.25 10 9.25ZM11.9462 15.109C11.8512 14.7088 11.8512 14.2919 11.9462 13.8917L11.2022 13.462L11.9522 12.163L12.6962 12.5927C12.9949 12.3099 13.3558 12.1013 13.75 11.9838V11.125H15.25V11.9838C15.649 12.1023 16.009 12.3138 16.3037 12.5927L17.0477 12.163L17.7977 13.462L17.0537 13.8917C17.1487 14.2917 17.1487 14.7083 17.0537 15.1083L17.7977 15.538L17.0477 16.837L16.3037 16.4072C16.0051 16.6901 15.6442 16.8987 15.25 17.0162V17.875H13.75V17.0162C13.3558 16.8987 12.9949 16.6901 12.6962 16.4072L11.9522 16.837L11.2022 15.538L11.9462 15.109ZM14.5 15.625C14.7984 15.625 15.0845 15.5065 15.2955 15.2955C15.5065 15.0845 15.625 14.7984 15.625 14.5C15.625 14.2016 15.5065 13.9155 15.2955 13.7045C15.0845 13.4935 14.7984 13.375 14.5 13.375C14.2016 13.375 13.9155 13.4935 13.7045 13.7045C13.4935 13.9155 13.375 14.2016 13.375 14.5C13.375 14.7984 13.4935 15.0845 13.7045 15.2955C13.9155 15.5065 14.2016 15.625 14.5 15.625Z" fill="#525866" />
                                </svg>
                                    My Account</a>
                            </li>
                            <li className="px-2 py-2">
                                <a href="#" className=" text-black hover:bg-gray-700 flex items-center gap-2 hover:bg-bg-clr hover:font-medium rounded-lg fill"> <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 4C8.4087 4 6.88258 4.63214 5.75736 5.75736C4.63214 6.88258 4 8.4087 4 10H6.25C6.64782 10 7.02936 10.158 7.31066 10.4393C7.59196 10.7206 7.75 11.1022 7.75 11.5V15.25C7.75 15.6478 7.59196 16.0294 7.31066 16.3107C7.02936 16.592 6.64782 16.75 6.25 16.75H4C3.60218 16.75 3.22064 16.592 2.93934 16.3107C2.65804 16.0294 2.5 15.6478 2.5 15.25V10C2.5 5.85775 5.85775 2.5 10 2.5C14.1423 2.5 17.5 5.85775 17.5 10V15.25C17.5 15.6478 17.342 16.0294 17.0607 16.3107C16.7794 16.592 16.3978 16.75 16 16.75H13.75C13.3522 16.75 12.9706 16.592 12.6893 16.3107C12.408 16.0294 12.25 15.6478 12.25 15.25V11.5C12.25 11.1022 12.408 10.7206 12.6893 10.4393C12.9706 10.158 13.3522 10 13.75 10H16C16 8.4087 15.3679 6.88258 14.2426 5.75736C13.1174 4.63214 11.5913 4 10 4ZM4 11.5V15.25H6.25V11.5H4ZM13.75 11.5V15.25H16V11.5H13.75Z" fill="#525866" />
                                </svg>
                                    Support</a>
                            </li>
                        </ul>
                        <div className="my-5">
                            <input type="checkbox" className="checkbox hidden" id="checkbox" />
                            <label htmlFor="checkbox" className="checkbox-label">
                                <div className="relative   rounded-lg min-w-28 light-dark"> <span> <img className="m-auto relative z-10" src="/assets/images/pill-content1.png" /></span></div>
                                <div className="light-dark m-auto">   <span> <img className="m-auto m-auto relative z-10" src="/assets/images/pill-content.png" /></span></div>

                                <span className="ball"></span>
                            </label>
                        </div>
                        {/* -------------------------------------------------------------- */}
                        {/* -------------------------------------------------------------- */}
                        <div className="flex justify-between p-2">
                            <div>   <img className="max-w-[40px]" src="/assets/images/avtar.png" /></div>
                            <div className="">
                                <div className="flex justify-between">
                                    <div > <p className="font-medium md:text-sm  ">Sophia Williams </p> </div><div><img src="/assets/images/Vector1.png" /></div>
                                </div>

                                <p className=" font-normal md:text-xs ">sophia@humanswitch.ai</p>
                            </div>
                            <div>   <img src="/assets/images/arrow-right-s-line.png" /></div>
                        </div>
                    </div>
                    {/*-------------------------------------------------------------------------------- */}

                </div>

                <div className="ml-64 p-8 bg-[#F6F8FA]">

                    <div className="bg-white rounded-lg shadow-md p-6">

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 ">
                            <div className="flex items-center ">
                                <span className="text-lg font-semibold mb-4 bg-[#F6F8FA] p-2 rounded-full"><img src="/assets/images/equalizer-line.png" /> </span>
                                <div className="bg-gray-200 rounded-lg p-4">

                                    <h2 className="text-heading text-lg font-medium">Settings Page</h2>
                                    <p>Manage your preferences and configure various options.</p>

                                </div>
                            </div>

                            <div className="bg-gray-200 rounded-lg p-4 flex justify-end">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>

                            </div>

                        </div>

                    </div>
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
                                    <button className="px-4 py-2.5 text-heading border border-[#E2E4E9] font-semibold rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                                    Discard  </button>

                                    <button className="rounded  mt-5 bg-button-clr hover:bg-purple-700 py-2.5 px-4 text-white font-semibold"
          onClick={() => setStep((prev: number) => prev + 1)}>{" "}  Apply Changes</button>
                                    </div>
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
