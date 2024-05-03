const Chatbot = () => {
    return (
        <div>
            <div className="bg-gray-100 min-h-screen " >

                <div className="bg-gray-800  h-full w-64 fixed top-0 left-0 overflow-y-auto border-r border-[#E2E4E9] flex justify-between flex-col lft-nav">

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

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 flex items-center justify-between">
                            <div className="flex items-center ">
                                <span className="text-lg font-semibold mb-4 bg-[#F6F8FA] p-2 rounded-full"><img src="/assets/images/equalizer-line.png" /> </span>
                                <div className="bg-gray-200 rounded-lg p-4">

                                    <h2 className="text-heading text-lg font-medium">chatbot</h2>
                                    <p>A short description of the chatbot and its capabilities</p>

                                </div>
                            </div>

                            <div className="bg-gray-200 rounded-lg p-4 flex justify-end">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>

                            </div>

                        </div>
                    </div>

                    <div className="main-sec">
                        <div className="bg-image">
                            <div className="absolute content-img">
                                <h2 className="font-semibold text-[32px]">HumanSwitch AI Advisor</h2>
                                <p className="text-base font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-3">
                            <div>
                                <div className="text-center">
                                    <img className="m-auto my-1" src="/assets/images/Chats-r.png" />
                                    <h2 className="font-semibold text-2xl">Examples</h2>
                                    <p className="bg-white p-4 mx-3 rounded-lg mt-6 text-sm font-normal">"Explain quantum computing insimple terms"</p>
                                </div>

                                <div className="text-center">
                                    <p className="bg-white p-4 mx-3 rounded-lg mt-6 text-sm font-normal">"Got any creative ideas for a 10year old's birthday?"</p>
                                </div>
                                <div className="text-center">
                                    <p className="bg-white p-4 mx-3 rounded-lg mt-6 text-sm font-normal">"How do I make an HTTP requestin Javascript?"</p>
                                </div>

                            </div>


                            <div className="">
                                <div>
                                    <div className="text-center">
                                        <img className="m-auto my-1 " src="/assets/images/Star-s.png" />
                                        <h2 className="font-semibold text-2xl">Capabilities</h2>
                                        <p className="bg-white p-4 mx-3 rounded-lg mt-6 text-sm font-normal">Remembers what user saidearlier in the conversation.</p>
                                    </div>

                                    <div className="text-center">
                                        <p className="bg-white p-4 mx-3 rounded-lg mt-6 text-sm font-normal">Allows user to provide follow-up corrections.</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="bg-white p-4 mx-3 rounded-lg mt-6 text-sm font-normal">Trained to decline inappropriate requests.</p>
                                    </div>

                                </div>
                            </div>
                            <div className="">
                                <div>
                                    <div className="text-center">
                                        <img className="m-auto my-1" src="/assets/images/ShieldWarning-r.png" />
                                        <h2 className="font-semibold text-2xl">Limitations</h2>
                                        <p className="bg-white p-4 mx-3 rounded-lg mt-6 text-sm font-normal">May occasionally generate incorrect information.</p>
                                    </div>

                                    <div className="text-center">
                                        <p className="bg-white p-4 mx-3 rounded-lg mt-6 text-sm font-normal">May occasionally produce harmful instructions or biased content.</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="bg-white p-4 mx-3 rounded-lg mt-6 text-sm font-normal">Limited knowledge of world andevents after 2021.</p>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="">

                        <div className="relative mt-5">
                            <div className="absolute top-0  "><img className="max-w-10 max-h-10 border-r border-[#E2E4E9] mt-1" src="/assets/images/actions-bar.png" /> </div>
                            <input type="text" placeholder="Ask me anything" className="border border-[#E2E4E9]   rounded-md py-2 lft-space2 focus:outline-none w-full focus:border-blue-500 placeholder-gray-500" />
                            <div className="absolute top-0 right-0  "><img className="max-w-10 max-h-10 border-l border-[#E2E4E9] mt-1" src="/assets/images/addon-button.png" /> </div>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default Chatbot
