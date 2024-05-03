import { useState, useRef, useEffect } from "react";
const DashBoard = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [addClass1, setAddClass1] = useState<any>(false);
  const [addClass2, setAddClass2] = useState<any>(false);
  const [addClass3, setAddClass3] = useState<any>(false);

  const section2Ref = useRef(null);

  const [isActive, setIsActive] = useState(false);
  const [step, setStep] = useState(1);
  const [stepsTick, setStepsTick] = useState<any>([]);
  const toggleActive = () => {
    setIsActive(!isActive);
  };

  const observerCallback = (entries: any) => {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });

    if (section2Ref.current) observer.observe(section2Ref.current);

    return () => {
      if (section2Ref.current) observer.unobserve(section2Ref.current);
    };
  }, []);

  const handleNext = () => {
    setStep((prev) => prev + 1);
    setStepsTick((prev: any) => [...prev, step]);
  };

  const handlePrev = () => {
    setStep((prev) => prev - 1);
    const newList = [...stepsTick];
    newList.pop();
    setStepsTick(newList);
  };

  console.log("ticks   ", stepsTick);
  console.log("ddggdgdd ", stepsTick.includes(1));
  return (
    <>
      <header className="bg-white shadow-md relative">
        <nav
          className="mx-auto flex  items-center justify-between px-6 py-4 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-12 w-auto"
                src="assets/images/Logo.png"
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-8 text-nowrap items-center">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Link 1
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Link 2
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Link 3
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg bg-gradient1 w-full py-2 px-4 text-center align-middle font-sans text-sm font-bold text-white focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            >
              Let's Talk
            </a>
          </div>
        </nav>
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-10"></div>
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-12 w-auto"
                  src="assets/images/Logo.png"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <div className="-mx-3">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      aria-controls="disclosure-1"
                      aria-expanded="false"
                    >
                      Product
                      <svg
                        className="h-5 w-5 flex-none"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <div className="mt-2 space-y-2" id="disclosure-1">
                      <a
                        href="#"
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Analytics
                      </a>
                      <a
                        href="#"
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Engagement
                      </a>
                      <a
                        href="#"
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Security
                      </a>
                      <a
                        href="#"
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Integrations
                      </a>
                      <a
                        href="#"
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Automations
                      </a>
                      <a
                        href="#"
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Watch demo
                      </a>
                      <a
                        href="#"
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Contact sales
                      </a>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Features
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Marketplace
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Company
                  </a>
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="full-div">
        <div className="full-div-inner">
          <div className="chapter-outer flex gap-0 h-vw-calc140px">
            <div className="col-left p-4 bg-lightblue w-full lg:max-w-350px max-w-300px overflow-y-auto">
              <div className="profile-name flex items-center gap-3 p-4 bg-white rounded-lg">
                <img
                  src="assets/images/Logo-favicon.png"
                  alt=""
                  className="w-12 h-12 object-contain"
                />
                <p>
                  <span className="font-bold">Welcome Back!</span>
                  <br />
                  <span>John Doe</span>
                </p>
              </div>
              <div
                className={`Chapter-names mt-6 relative after:content-[''] after:absolute after:left-5 after:top-0 after:border-dashed after:border-mediumblue after:h-full after:border after:z-0 ${
                  isActive ? "active" : ""
                }`}
              >
                <div
                  className={`flex gap-3 mb-3 chapteritem relative z-10 ${
                    step == 1 ? "" : "items-center"
                  } ${isActive ? "items-start" : "items-center"}`}
                >
                  <div
                    className={`w-10 min-w-10 h-10 inline-flex items-center justify-center rounded-md ${
                      stepsTick.includes(2) || step == 2
                        ? "bg-g-success"
                        : "bg-gradient1"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      width="512"
                      height="512"
                      x="0"
                      y="0"
                      viewBox="0 0 64 64"
                      className={`w-4 h-4 text-white ${
                        stepsTick.includes(2) || step == 2 ? "" : "hidden"
                      }`}
                    >
                      <g transform="matrix(1.0699999999999992,0,0,1.0699999999999992,-2.239650142192822,-2.2399999332427853)">
                        <path
                          fill="currentColor"
                          d="M59.39 11.24a5.49 5.49 0 0 0-7.77 0L21.78 41.08l-9.41-9.41a5.49 5.49 0 0 0-7.77 0 5.49 5.49 0 0 0 0 7.77l13.33 13.32a5.49 5.49 0 0 0 7.77 0L59.4 19a5.49 5.49 0 0 0-.01-7.76z"
                          opacity="1"
                          data-original="currentColor"
                        ></path>
                      </g>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      width="512"
                      height="512"
                      x="0"
                      y="0"
                      viewBox="0 0 512 512.002"
                      className={`w-4 h-4 text-white ${
                        stepsTick.includes(2) || step == 2 ? "hidden" : ""
                      }`}
                    >
                      <g transform="matrix(0.98,0,0,0.98,49.27163876531441,5.12004028320311)">
                        <path
                          d="M210.352 246.633c33.882 0 63.222-12.153 87.195-36.13 23.973-23.972 36.125-53.304 36.125-87.19 0-33.876-12.152-63.211-36.129-87.192C273.566 12.152 244.23 0 210.352 0c-33.887 0-63.22 12.152-87.192 36.125s-36.129 53.309-36.129 87.188c0 33.886 12.156 63.222 36.133 87.195 23.977 23.969 53.313 36.125 87.188 36.125zM426.129 393.703c-.692-9.976-2.09-20.86-4.149-32.351-2.078-11.579-4.753-22.524-7.957-32.528-3.308-10.34-7.808-20.55-13.37-30.336-5.774-10.156-12.555-19-20.165-26.277-7.957-7.613-17.699-13.734-28.965-18.2-11.226-4.44-23.668-6.69-36.976-6.69-5.227 0-10.281 2.144-20.043 8.5a2711.03 2711.03 0 0 1-20.879 13.46c-6.707 4.274-15.793 8.278-27.016 11.903-10.949 3.543-22.066 5.34-33.039 5.34-10.972 0-22.086-1.797-33.047-5.34-11.21-3.622-20.296-7.625-26.996-11.899-7.77-4.965-14.8-9.496-20.898-13.469-9.75-6.355-14.809-8.5-20.035-8.5-13.313 0-25.75 2.254-36.973 6.7-11.258 4.457-21.004 10.578-28.969 18.199-7.605 7.281-14.39 16.12-20.156 26.273-5.558 9.785-10.058 19.992-13.371 30.34-3.2 10.004-5.875 20.945-7.953 32.524-2.059 11.476-3.457 22.363-4.149 32.363A438.821 438.821 0 0 0 0 423.949c0 26.727 8.496 48.363 25.25 64.32 16.547 15.747 38.441 23.735 65.066 23.735h246.532c26.625 0 48.511-7.984 65.062-23.734 16.758-15.946 25.254-37.586 25.254-64.325-.004-10.316-.351-20.492-1.035-30.242zm0 0"
                          fill="currentColor"
                          opacity="1"
                          data-original="currentColor"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-md">Strategy</p>
                    <p
                      className={`w-full leading-relaxed md:text-base text-sm ${
                        step == 1 ? "" : " h-0 overflow-hidden"
                      } ${isActive ? "" : "h-0 overflow-hidden"}`}
                    >
                      Defining a sharp vision that embraces both business
                      success and social responsibility.
                    </p>
                  </div>
                </div>
                <div
                  className={`flex gap-3 mb-3 chapteritem relative z-10 ${
                    step == 2 ? "" : "items-center"
                  }`}
                >
                  <div
                    className={`w-10 min-w-10 h-10 inline-flex items-center justify-center rounded-md ${
                      stepsTick.includes(3) || step == 3
                        ? "bg-g-success"
                        : "bg-gradient1"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      width="512"
                      height="512"
                      x="0"
                      y="0"
                      viewBox="0 0 64 64"
                      className={`w-4 h-4 text-white ${
                        stepsTick.includes(3) || step == 3 ? "" : "hidden"
                      }`}
                    >
                      <g transform="matrix(1.0699999999999992,0,0,1.0699999999999992,-2.239650142192822,-2.2399999332427853)">
                        <path
                          fill="currentColor"
                          d="M59.39 11.24a5.49 5.49 0 0 0-7.77 0L21.78 41.08l-9.41-9.41a5.49 5.49 0 0 0-7.77 0 5.49 5.49 0 0 0 0 7.77l13.33 13.32a5.49 5.49 0 0 0 7.77 0L59.4 19a5.49 5.49 0 0 0-.01-7.76z"
                          opacity="1"
                          data-original="currentColor"
                        ></path>
                      </g>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      width="512"
                      height="512"
                      x="0"
                      y="0"
                      viewBox="0 0 512 512.002"
                      className={`w-4 h-4 text-white ${
                        stepsTick.includes(3) || step == 3 ? "hidden" : ""
                      }`}
                    >
                      <g transform="matrix(0.98,0,0,0.98,49.27163876531441,5.12004028320311)">
                        <path
                          d="M210.352 246.633c33.882 0 63.222-12.153 87.195-36.13 23.973-23.972 36.125-53.304 36.125-87.19 0-33.876-12.152-63.211-36.129-87.192C273.566 12.152 244.23 0 210.352 0c-33.887 0-63.22 12.152-87.192 36.125s-36.129 53.309-36.129 87.188c0 33.886 12.156 63.222 36.133 87.195 23.977 23.969 53.313 36.125 87.188 36.125zM426.129 393.703c-.692-9.976-2.09-20.86-4.149-32.351-2.078-11.579-4.753-22.524-7.957-32.528-3.308-10.34-7.808-20.55-13.37-30.336-5.774-10.156-12.555-19-20.165-26.277-7.957-7.613-17.699-13.734-28.965-18.2-11.226-4.44-23.668-6.69-36.976-6.69-5.227 0-10.281 2.144-20.043 8.5a2711.03 2711.03 0 0 1-20.879 13.46c-6.707 4.274-15.793 8.278-27.016 11.903-10.949 3.543-22.066 5.34-33.039 5.34-10.972 0-22.086-1.797-33.047-5.34-11.21-3.622-20.296-7.625-26.996-11.899-7.77-4.965-14.8-9.496-20.898-13.469-9.75-6.355-14.809-8.5-20.035-8.5-13.313 0-25.75 2.254-36.973 6.7-11.258 4.457-21.004 10.578-28.969 18.199-7.605 7.281-14.39 16.12-20.156 26.273-5.558 9.785-10.058 19.992-13.371 30.34-3.2 10.004-5.875 20.945-7.953 32.524-2.059 11.476-3.457 22.363-4.149 32.363A438.821 438.821 0 0 0 0 423.949c0 26.727 8.496 48.363 25.25 64.32 16.547 15.747 38.441 23.735 65.066 23.735h246.532c26.625 0 48.511-7.984 65.062-23.734 16.758-15.946 25.254-37.586 25.254-64.325-.004-10.316-.351-20.492-1.035-30.242zm0 0"
                          fill="currentColor"
                          opacity="1"
                          data-original="currentColor"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-md">Clientele</p>
                    <p
                      className={`w-full leading-relaxed md:text-base text-sm ${
                        step == 2 ? "" : " h-0 overflow-hidden"
                      }`}
                    >
                      Defining a sharp vision that embraces both business
                      success and social responsibility.
                    </p>
                  </div>
                </div>
                <div
                  className={`flex gap-3 mb-3 chapteritem relative z-10 ${
                    step == 3 ? "" : "items-center"
                  }`}
                >
                  <div
                    className={`w-10 min-w-10 h-10 inline-flex items-center justify-center rounded-md ${
                      stepsTick.includes(4) || step == 4
                        ? "bg-g-success"
                        : "bg-gradient1"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      width="512"
                      height="512"
                      x="0"
                      y="0"
                      viewBox="0 0 64 64"
                      className={`w-4 h-4 text-white ${
                        stepsTick.includes(4) || step == 4 ? "" : "hidden"
                      }`}
                    >
                      <g transform="matrix(1.0699999999999992,0,0,1.0699999999999992,-2.239650142192822,-2.2399999332427853)">
                        <path
                          fill="currentColor"
                          d="M59.39 11.24a5.49 5.49 0 0 0-7.77 0L21.78 41.08l-9.41-9.41a5.49 5.49 0 0 0-7.77 0 5.49 5.49 0 0 0 0 7.77l13.33 13.32a5.49 5.49 0 0 0 7.77 0L59.4 19a5.49 5.49 0 0 0-.01-7.76z"
                          opacity="1"
                          data-original="currentColor"
                        ></path>
                      </g>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      width="512"
                      height="512"
                      x="0"
                      y="0"
                      viewBox="0 0 512 512.002"
                      className={`w-4 h-4 text-white ${
                        stepsTick.includes(4) || step == 4 ? "hidden" : ""
                      }`}
                    >
                      <g transform="matrix(0.98,0,0,0.98,49.27163876531441,5.12004028320311)">
                        <path
                          d="M210.352 246.633c33.882 0 63.222-12.153 87.195-36.13 23.973-23.972 36.125-53.304 36.125-87.19 0-33.876-12.152-63.211-36.129-87.192C273.566 12.152 244.23 0 210.352 0c-33.887 0-63.22 12.152-87.192 36.125s-36.129 53.309-36.129 87.188c0 33.886 12.156 63.222 36.133 87.195 23.977 23.969 53.313 36.125 87.188 36.125zM426.129 393.703c-.692-9.976-2.09-20.86-4.149-32.351-2.078-11.579-4.753-22.524-7.957-32.528-3.308-10.34-7.808-20.55-13.37-30.336-5.774-10.156-12.555-19-20.165-26.277-7.957-7.613-17.699-13.734-28.965-18.2-11.226-4.44-23.668-6.69-36.976-6.69-5.227 0-10.281 2.144-20.043 8.5a2711.03 2711.03 0 0 1-20.879 13.46c-6.707 4.274-15.793 8.278-27.016 11.903-10.949 3.543-22.066 5.34-33.039 5.34-10.972 0-22.086-1.797-33.047-5.34-11.21-3.622-20.296-7.625-26.996-11.899-7.77-4.965-14.8-9.496-20.898-13.469-9.75-6.355-14.809-8.5-20.035-8.5-13.313 0-25.75 2.254-36.973 6.7-11.258 4.457-21.004 10.578-28.969 18.199-7.605 7.281-14.39 16.12-20.156 26.273-5.558 9.785-10.058 19.992-13.371 30.34-3.2 10.004-5.875 20.945-7.953 32.524-2.059 11.476-3.457 22.363-4.149 32.363A438.821 438.821 0 0 0 0 423.949c0 26.727 8.496 48.363 25.25 64.32 16.547 15.747 38.441 23.735 65.066 23.735h246.532c26.625 0 48.511-7.984 65.062-23.734 16.758-15.946 25.254-37.586 25.254-64.325-.004-10.316-.351-20.492-1.035-30.242zm0 0"
                          fill="currentColor"
                          opacity="1"
                          data-original="currentColor"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-md">Budget/ROI</p>
                    <p
                      className={`w-full leading-relaxed md:text-base text-sm ${
                        step == 3 ? "" : " h-0 overflow-hidden"
                      }`}
                    >
                      Defining a sharp vision that embraces both business
                      success and social responsibility.
                    </p>
                  </div>
                </div>
                <div
                  className={`flex gap-3 mb-3 chapteritem relative z-10 ${
                    step == 4 ? "" : "items-center"
                  }`}
                >
                  <div
                    className={`w-10 min-w-10 h-10 inline-flex items-center justify-center rounded-md ${
                      stepsTick.includes(5) || step == 5
                        ? "bg-g-success"
                        : "bg-gradient1"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      width="512"
                      height="512"
                      x="0"
                      y="0"
                      viewBox="0 0 64 64"
                      className={`w-4 h-4 text-white ${
                        stepsTick.includes(5) || step == 5 ? "" : "hidden"
                      }`}
                    >
                      <g transform="matrix(1.0699999999999992,0,0,1.0699999999999992,-2.239650142192822,-2.2399999332427853)">
                        <path
                          fill="currentColor"
                          d="M59.39 11.24a5.49 5.49 0 0 0-7.77 0L21.78 41.08l-9.41-9.41a5.49 5.49 0 0 0-7.77 0 5.49 5.49 0 0 0 0 7.77l13.33 13.32a5.49 5.49 0 0 0 7.77 0L59.4 19a5.49 5.49 0 0 0-.01-7.76z"
                          opacity="1"
                          data-original="currentColor"
                        ></path>
                      </g>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      width="512"
                      height="512"
                      x="0"
                      y="0"
                      viewBox="0 0 512 512.002"
                      className={`w-4 h-4 text-white ${
                        stepsTick.includes(5) || step == 5 ? "hidden" : ""
                      }`}
                    >
                      <g transform="matrix(0.98,0,0,0.98,49.27163876531441,5.12004028320311)">
                        <path
                          d="M210.352 246.633c33.882 0 63.222-12.153 87.195-36.13 23.973-23.972 36.125-53.304 36.125-87.19 0-33.876-12.152-63.211-36.129-87.192C273.566 12.152 244.23 0 210.352 0c-33.887 0-63.22 12.152-87.192 36.125s-36.129 53.309-36.129 87.188c0 33.886 12.156 63.222 36.133 87.195 23.977 23.969 53.313 36.125 87.188 36.125zM426.129 393.703c-.692-9.976-2.09-20.86-4.149-32.351-2.078-11.579-4.753-22.524-7.957-32.528-3.308-10.34-7.808-20.55-13.37-30.336-5.774-10.156-12.555-19-20.165-26.277-7.957-7.613-17.699-13.734-28.965-18.2-11.226-4.44-23.668-6.69-36.976-6.69-5.227 0-10.281 2.144-20.043 8.5a2711.03 2711.03 0 0 1-20.879 13.46c-6.707 4.274-15.793 8.278-27.016 11.903-10.949 3.543-22.066 5.34-33.039 5.34-10.972 0-22.086-1.797-33.047-5.34-11.21-3.622-20.296-7.625-26.996-11.899-7.77-4.965-14.8-9.496-20.898-13.469-9.75-6.355-14.809-8.5-20.035-8.5-13.313 0-25.75 2.254-36.973 6.7-11.258 4.457-21.004 10.578-28.969 18.199-7.605 7.281-14.39 16.12-20.156 26.273-5.558 9.785-10.058 19.992-13.371 30.34-3.2 10.004-5.875 20.945-7.953 32.524-2.059 11.476-3.457 22.363-4.149 32.363A438.821 438.821 0 0 0 0 423.949c0 26.727 8.496 48.363 25.25 64.32 16.547 15.747 38.441 23.735 65.066 23.735h246.532c26.625 0 48.511-7.984 65.062-23.734 16.758-15.946 25.254-37.586 25.254-64.325-.004-10.316-.351-20.492-1.035-30.242zm0 0"
                          fill="currentColor"
                          opacity="1"
                          data-original="currentColor"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-md">Employees</p>
                    <p
                      className={`w-full leading-relaxed md:text-base text-sm ${
                        step == 4 ? "" : " h-0 overflow-hidden"
                      }`}
                    >
                      Defining a sharp vision that embraces both business
                      success and social responsibility.
                    </p>
                  </div>
                </div>
                <div
                  className={`flex gap-3 mb-3 chapteritem relative z-10 ${
                    step == 5 ? "" : "items-center"
                  }`}
                >
                  <div
                    className={`w-10 min-w-10 h-10 inline-flex items-center justify-center rounded-md ${
                      stepsTick.includes(6) || step == 6
                        ? "bg-g-success"
                        : "bg-gradient1"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      width="512"
                      height="512"
                      x="0"
                      y="0"
                      viewBox="0 0 64 64"
                      className={`w-4 h-4 text-white ${
                        stepsTick.includes(6) || step == 6 ? "" : "hidden"
                      }`}
                    >
                      <g transform="matrix(1.0699999999999992,0,0,1.0699999999999992,-2.239650142192822,-2.2399999332427853)">
                        <path
                          fill="currentColor"
                          d="M59.39 11.24a5.49 5.49 0 0 0-7.77 0L21.78 41.08l-9.41-9.41a5.49 5.49 0 0 0-7.77 0 5.49 5.49 0 0 0 0 7.77l13.33 13.32a5.49 5.49 0 0 0 7.77 0L59.4 19a5.49 5.49 0 0 0-.01-7.76z"
                          opacity="1"
                          data-original="currentColor"
                        ></path>
                      </g>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      width="512"
                      height="512"
                      x="0"
                      y="0"
                      viewBox="0 0 512 512.002"
                      className={`w-4 h-4 text-white ${
                        stepsTick.includes(6) || step == 6 ? "hidden" : ""
                      }`}
                    >
                      <g transform="matrix(0.98,0,0,0.98,49.27163876531441,5.12004028320311)">
                        <path
                          d="M210.352 246.633c33.882 0 63.222-12.153 87.195-36.13 23.973-23.972 36.125-53.304 36.125-87.19 0-33.876-12.152-63.211-36.129-87.192C273.566 12.152 244.23 0 210.352 0c-33.887 0-63.22 12.152-87.192 36.125s-36.129 53.309-36.129 87.188c0 33.886 12.156 63.222 36.133 87.195 23.977 23.969 53.313 36.125 87.188 36.125zM426.129 393.703c-.692-9.976-2.09-20.86-4.149-32.351-2.078-11.579-4.753-22.524-7.957-32.528-3.308-10.34-7.808-20.55-13.37-30.336-5.774-10.156-12.555-19-20.165-26.277-7.957-7.613-17.699-13.734-28.965-18.2-11.226-4.44-23.668-6.69-36.976-6.69-5.227 0-10.281 2.144-20.043 8.5a2711.03 2711.03 0 0 1-20.879 13.46c-6.707 4.274-15.793 8.278-27.016 11.903-10.949 3.543-22.066 5.34-33.039 5.34-10.972 0-22.086-1.797-33.047-5.34-11.21-3.622-20.296-7.625-26.996-11.899-7.77-4.965-14.8-9.496-20.898-13.469-9.75-6.355-14.809-8.5-20.035-8.5-13.313 0-25.75 2.254-36.973 6.7-11.258 4.457-21.004 10.578-28.969 18.199-7.605 7.281-14.39 16.12-20.156 26.273-5.558 9.785-10.058 19.992-13.371 30.34-3.2 10.004-5.875 20.945-7.953 32.524-2.059 11.476-3.457 22.363-4.149 32.363A438.821 438.821 0 0 0 0 423.949c0 26.727 8.496 48.363 25.25 64.32 16.547 15.747 38.441 23.735 65.066 23.735h246.532c26.625 0 48.511-7.984 65.062-23.734 16.758-15.946 25.254-37.586 25.254-64.325-.004-10.316-.351-20.492-1.035-30.242zm0 0"
                          fill="currentColor"
                          opacity="1"
                          data-original="currentColor"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-md">Market</p>
                    <p
                      className={`w-full leading-relaxed md:text-base text-sm ${
                        step == 5 ? "" : " h-0 overflow-hidden"
                      }`}
                    >
                      Defining a sharp vision that embraces both business
                      success and social responsibility.
                    </p>
                  </div>
                </div>
                <div
                  className={`flex gap-3 mb-3 chapteritem relative z-10 ${
                    step == 6 ? "" : "items-center"
                  }`}
                >
                  <div
                    className={`w-10 min-w-10 h-10 inline-flex items-center justify-center rounded-md ${
                      stepsTick.includes(7) || step == 7
                        ? "bg-g-success"
                        : "bg-gradient1"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      width="512"
                      height="512"
                      x="0"
                      y="0"
                      viewBox="0 0 64 64"
                      className={`w-4 h-4 text-white ${
                        stepsTick.includes(7) || step == 7 ? "" : "hidden"
                      }`}
                    >
                      <g transform="matrix(1.0699999999999992,0,0,1.0699999999999992,-2.239650142192822,-2.2399999332427853)">
                        <path
                          fill="currentColor"
                          d="M59.39 11.24a5.49 5.49 0 0 0-7.77 0L21.78 41.08l-9.41-9.41a5.49 5.49 0 0 0-7.77 0 5.49 5.49 0 0 0 0 7.77l13.33 13.32a5.49 5.49 0 0 0 7.77 0L59.4 19a5.49 5.49 0 0 0-.01-7.76z"
                          opacity="1"
                          data-original="currentColor"
                        ></path>
                      </g>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      width="512"
                      height="512"
                      x="0"
                      y="0"
                      viewBox="0 0 512 512.002"
                      className={`w-4 h-4 text-white ${
                        stepsTick.includes(7) || step == 7 ? "hidden" : ""
                      }`}
                    >
                      <g transform="matrix(0.98,0,0,0.98,49.27163876531441,5.12004028320311)">
                        <path
                          d="M210.352 246.633c33.882 0 63.222-12.153 87.195-36.13 23.973-23.972 36.125-53.304 36.125-87.19 0-33.876-12.152-63.211-36.129-87.192C273.566 12.152 244.23 0 210.352 0c-33.887 0-63.22 12.152-87.192 36.125s-36.129 53.309-36.129 87.188c0 33.886 12.156 63.222 36.133 87.195 23.977 23.969 53.313 36.125 87.188 36.125zM426.129 393.703c-.692-9.976-2.09-20.86-4.149-32.351-2.078-11.579-4.753-22.524-7.957-32.528-3.308-10.34-7.808-20.55-13.37-30.336-5.774-10.156-12.555-19-20.165-26.277-7.957-7.613-17.699-13.734-28.965-18.2-11.226-4.44-23.668-6.69-36.976-6.69-5.227 0-10.281 2.144-20.043 8.5a2711.03 2711.03 0 0 1-20.879 13.46c-6.707 4.274-15.793 8.278-27.016 11.903-10.949 3.543-22.066 5.34-33.039 5.34-10.972 0-22.086-1.797-33.047-5.34-11.21-3.622-20.296-7.625-26.996-11.899-7.77-4.965-14.8-9.496-20.898-13.469-9.75-6.355-14.809-8.5-20.035-8.5-13.313 0-25.75 2.254-36.973 6.7-11.258 4.457-21.004 10.578-28.969 18.199-7.605 7.281-14.39 16.12-20.156 26.273-5.558 9.785-10.058 19.992-13.371 30.34-3.2 10.004-5.875 20.945-7.953 32.524-2.059 11.476-3.457 22.363-4.149 32.363A438.821 438.821 0 0 0 0 423.949c0 26.727 8.496 48.363 25.25 64.32 16.547 15.747 38.441 23.735 65.066 23.735h246.532c26.625 0 48.511-7.984 65.062-23.734 16.758-15.946 25.254-37.586 25.254-64.325-.004-10.316-.351-20.492-1.035-30.242zm0 0"
                          fill="currentColor"
                          opacity="1"
                          data-original="currentColor"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-md">Compliance</p>
                    <p
                      className={`w-full leading-relaxed md:text-base text-sm ${
                        step == 6 ? "" : " h-0 overflow-hidden"
                      }`}
                    >
                      Defining a sharp vision that embraces both business
                      success and social responsibility.
                    </p>
                  </div>
                </div>
                <div
                  className={`flex gap-3 mb-3 chapteritem relative z-10 ${
                    step == 7 ? "" : "items-center"
                  }`}
                >
                  <div
                    className={`w-10 min-w-10 h-10 inline-flex items-center justify-center rounded-md ${
                      stepsTick.includes(8) || step == 8
                        ? "bg-g-success"
                        : "bg-gradient1"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      width="512"
                      height="512"
                      x="0"
                      y="0"
                      viewBox="0 0 64 64"
                      className={`w-4 h-4 text-white ${
                        stepsTick.includes(8) || step == 8 ? "" : "hidden"
                      }`}
                    >
                      <g transform="matrix(1.0699999999999992,0,0,1.0699999999999992,-2.239650142192822,-2.2399999332427853)">
                        <path
                          fill="currentColor"
                          d="M59.39 11.24a5.49 5.49 0 0 0-7.77 0L21.78 41.08l-9.41-9.41a5.49 5.49 0 0 0-7.77 0 5.49 5.49 0 0 0 0 7.77l13.33 13.32a5.49 5.49 0 0 0 7.77 0L59.4 19a5.49 5.49 0 0 0-.01-7.76z"
                          opacity="1"
                          data-original="currentColor"
                        ></path>
                      </g>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      width="512"
                      height="512"
                      x="0"
                      y="0"
                      viewBox="0 0 512 512.002"
                      className={`w-4 h-4 text-white ${
                        stepsTick.includes(8) || step == 8 ? "hidden" : ""
                      }`}
                    >
                      <g transform="matrix(0.98,0,0,0.98,49.27163876531441,5.12004028320311)">
                        <path
                          d="M210.352 246.633c33.882 0 63.222-12.153 87.195-36.13 23.973-23.972 36.125-53.304 36.125-87.19 0-33.876-12.152-63.211-36.129-87.192C273.566 12.152 244.23 0 210.352 0c-33.887 0-63.22 12.152-87.192 36.125s-36.129 53.309-36.129 87.188c0 33.886 12.156 63.222 36.133 87.195 23.977 23.969 53.313 36.125 87.188 36.125zM426.129 393.703c-.692-9.976-2.09-20.86-4.149-32.351-2.078-11.579-4.753-22.524-7.957-32.528-3.308-10.34-7.808-20.55-13.37-30.336-5.774-10.156-12.555-19-20.165-26.277-7.957-7.613-17.699-13.734-28.965-18.2-11.226-4.44-23.668-6.69-36.976-6.69-5.227 0-10.281 2.144-20.043 8.5a2711.03 2711.03 0 0 1-20.879 13.46c-6.707 4.274-15.793 8.278-27.016 11.903-10.949 3.543-22.066 5.34-33.039 5.34-10.972 0-22.086-1.797-33.047-5.34-11.21-3.622-20.296-7.625-26.996-11.899-7.77-4.965-14.8-9.496-20.898-13.469-9.75-6.355-14.809-8.5-20.035-8.5-13.313 0-25.75 2.254-36.973 6.7-11.258 4.457-21.004 10.578-28.969 18.199-7.605 7.281-14.39 16.12-20.156 26.273-5.558 9.785-10.058 19.992-13.371 30.34-3.2 10.004-5.875 20.945-7.953 32.524-2.059 11.476-3.457 22.363-4.149 32.363A438.821 438.821 0 0 0 0 423.949c0 26.727 8.496 48.363 25.25 64.32 16.547 15.747 38.441 23.735 65.066 23.735h246.532c26.625 0 48.511-7.984 65.062-23.734 16.758-15.946 25.254-37.586 25.254-64.325-.004-10.316-.351-20.492-1.035-30.242zm0 0"
                          fill="currentColor"
                          opacity="1"
                          data-original="currentColor"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-md">Partners/Suppliers</p>
                    <p
                      className={`w-full leading-relaxed md:text-base text-sm ${
                        step == 7 ? "" : " h-0 overflow-hidden"
                      }`}
                    >
                      Defining a sharp vision that embraces both business
                      success and social responsibility.
                    </p>
                  </div>
                </div>
                <div
                  className={`flex gap-3 mb-3 chapteritem relative z-10 ${
                    step == 8 ? "" : "items-center"
                  }`}
                >
                  <div
                    className={`w-10 min-w-10 h-10 inline-flex items-center justify-center rounded-md ${
                      stepsTick.includes(9) || step == 9
                        ? "bg-g-success"
                        : "bg-gradient1"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      width="512"
                      height="512"
                      x="0"
                      y="0"
                      viewBox="0 0 64 64"
                      className={`w-4 h-4 text-white ${
                        stepsTick.includes(9) || step == 9 ? "" : "hidden"
                      }`}
                    >
                      <g transform="matrix(1.0699999999999992,0,0,1.0699999999999992,-2.239650142192822,-2.2399999332427853)">
                        <path
                          fill="currentColor"
                          d="M59.39 11.24a5.49 5.49 0 0 0-7.77 0L21.78 41.08l-9.41-9.41a5.49 5.49 0 0 0-7.77 0 5.49 5.49 0 0 0 0 7.77l13.33 13.32a5.49 5.49 0 0 0 7.77 0L59.4 19a5.49 5.49 0 0 0-.01-7.76z"
                          opacity="1"
                          data-original="currentColor"
                        ></path>
                      </g>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      width="512"
                      height="512"
                      x="0"
                      y="0"
                      viewBox="0 0 512 512.002"
                      className={`w-4 h-4 text-white ${
                        stepsTick.includes(9) || step == 9 ? "hidden" : ""
                      }`}
                    >
                      <g transform="matrix(0.98,0,0,0.98,49.27163876531441,5.12004028320311)">
                        <path
                          d="M210.352 246.633c33.882 0 63.222-12.153 87.195-36.13 23.973-23.972 36.125-53.304 36.125-87.19 0-33.876-12.152-63.211-36.129-87.192C273.566 12.152 244.23 0 210.352 0c-33.887 0-63.22 12.152-87.192 36.125s-36.129 53.309-36.129 87.188c0 33.886 12.156 63.222 36.133 87.195 23.977 23.969 53.313 36.125 87.188 36.125zM426.129 393.703c-.692-9.976-2.09-20.86-4.149-32.351-2.078-11.579-4.753-22.524-7.957-32.528-3.308-10.34-7.808-20.55-13.37-30.336-5.774-10.156-12.555-19-20.165-26.277-7.957-7.613-17.699-13.734-28.965-18.2-11.226-4.44-23.668-6.69-36.976-6.69-5.227 0-10.281 2.144-20.043 8.5a2711.03 2711.03 0 0 1-20.879 13.46c-6.707 4.274-15.793 8.278-27.016 11.903-10.949 3.543-22.066 5.34-33.039 5.34-10.972 0-22.086-1.797-33.047-5.34-11.21-3.622-20.296-7.625-26.996-11.899-7.77-4.965-14.8-9.496-20.898-13.469-9.75-6.355-14.809-8.5-20.035-8.5-13.313 0-25.75 2.254-36.973 6.7-11.258 4.457-21.004 10.578-28.969 18.199-7.605 7.281-14.39 16.12-20.156 26.273-5.558 9.785-10.058 19.992-13.371 30.34-3.2 10.004-5.875 20.945-7.953 32.524-2.059 11.476-3.457 22.363-4.149 32.363A438.821 438.821 0 0 0 0 423.949c0 26.727 8.496 48.363 25.25 64.32 16.547 15.747 38.441 23.735 65.066 23.735h246.532c26.625 0 48.511-7.984 65.062-23.734 16.758-15.946 25.254-37.586 25.254-64.325-.004-10.316-.351-20.492-1.035-30.242zm0 0"
                          fill="currentColor"
                          opacity="1"
                          data-original="currentColor"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-md">Data/ICT</p>
                    <p
                      className={`w-full leading-relaxed md:text-base text-sm ${
                        step == 8 ? "" : " h-0 overflow-hidden"
                      }`}
                    >
                      Defining a sharp vision that embraces both business
                      success and social responsibility.
                    </p>
                  </div>
                </div>
                <div
                  className={`flex gap-3 mb-3 chapteritem relative z-10 ${
                    step == 9 ? "" : "items-center"
                  }`}
                >
                  <div
                    className={`w-10 min-w-10 h-10 inline-flex items-center justify-center rounded-md ${
                      stepsTick.includes(10) || step == 10
                        ? "bg-g-success"
                        : "bg-gradient1"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      width="512"
                      height="512"
                      x="0"
                      y="0"
                      viewBox="0 0 64 64"
                      className={`w-4 h-4 text-white ${
                        stepsTick.includes(10) || step == 10 ? "" : "hidden"
                      }`}
                    >
                      <g transform="matrix(1.0699999999999992,0,0,1.0699999999999992,-2.239650142192822,-2.2399999332427853)">
                        <path
                          fill="currentColor"
                          d="M59.39 11.24a5.49 5.49 0 0 0-7.77 0L21.78 41.08l-9.41-9.41a5.49 5.49 0 0 0-7.77 0 5.49 5.49 0 0 0 0 7.77l13.33 13.32a5.49 5.49 0 0 0 7.77 0L59.4 19a5.49 5.49 0 0 0-.01-7.76z"
                          opacity="1"
                          data-original="currentColor"
                        ></path>
                      </g>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      width="512"
                      height="512"
                      x="0"
                      y="0"
                      viewBox="0 0 512 512.002"
                      className={`w-4 h-4 text-white ${
                        stepsTick.includes(10) || step == 10 ? "hidden" : ""
                      }`}
                    >
                      <g transform="matrix(0.98,0,0,0.98,49.27163876531441,5.12004028320311)">
                        <path
                          d="M210.352 246.633c33.882 0 63.222-12.153 87.195-36.13 23.973-23.972 36.125-53.304 36.125-87.19 0-33.876-12.152-63.211-36.129-87.192C273.566 12.152 244.23 0 210.352 0c-33.887 0-63.22 12.152-87.192 36.125s-36.129 53.309-36.129 87.188c0 33.886 12.156 63.222 36.133 87.195 23.977 23.969 53.313 36.125 87.188 36.125zM426.129 393.703c-.692-9.976-2.09-20.86-4.149-32.351-2.078-11.579-4.753-22.524-7.957-32.528-3.308-10.34-7.808-20.55-13.37-30.336-5.774-10.156-12.555-19-20.165-26.277-7.957-7.613-17.699-13.734-28.965-18.2-11.226-4.44-23.668-6.69-36.976-6.69-5.227 0-10.281 2.144-20.043 8.5a2711.03 2711.03 0 0 1-20.879 13.46c-6.707 4.274-15.793 8.278-27.016 11.903-10.949 3.543-22.066 5.34-33.039 5.34-10.972 0-22.086-1.797-33.047-5.34-11.21-3.622-20.296-7.625-26.996-11.899-7.77-4.965-14.8-9.496-20.898-13.469-9.75-6.355-14.809-8.5-20.035-8.5-13.313 0-25.75 2.254-36.973 6.7-11.258 4.457-21.004 10.578-28.969 18.199-7.605 7.281-14.39 16.12-20.156 26.273-5.558 9.785-10.058 19.992-13.371 30.34-3.2 10.004-5.875 20.945-7.953 32.524-2.059 11.476-3.457 22.363-4.149 32.363A438.821 438.821 0 0 0 0 423.949c0 26.727 8.496 48.363 25.25 64.32 16.547 15.747 38.441 23.735 65.066 23.735h246.532c26.625 0 48.511-7.984 65.062-23.734 16.758-15.946 25.254-37.586 25.254-64.325-.004-10.316-.351-20.492-1.035-30.242zm0 0"
                          fill="currentColor"
                          opacity="1"
                          data-original="currentColor"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-md">
                      Customer Value & Social Impact
                    </p>
                    <p
                      className={`w-full leading-relaxed md:text-base text-sm ${
                        step == 9 ? "" : " h-0 overflow-hidden"
                      }`}
                    >
                      Defining a sharp vision that embraces both business
                      success and social responsibility.
                    </p>
                  </div>
                </div>
                <div
                  className={`flex gap-3 mb-0 chapteritem relative z-10 ${
                    step == 10 ? "" : "items-center"
                  }`}
                >
                  <div
                    className={`w-10 min-w-10 h-10 inline-flex items-center justify-center bg-gradient1 rounded-md`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      width="512"
                      height="512"
                      x="0"
                      y="0"
                      viewBox="0 0 512 512.002"
                      className="w-4 h-4 text-white"
                    >
                      <g transform="matrix(0.98,0,0,0.98,49.27163876531441,5.12004028320311)">
                        <path
                          d="M210.352 246.633c33.882 0 63.222-12.153 87.195-36.13 23.973-23.972 36.125-53.304 36.125-87.19 0-33.876-12.152-63.211-36.129-87.192C273.566 12.152 244.23 0 210.352 0c-33.887 0-63.22 12.152-87.192 36.125s-36.129 53.309-36.129 87.188c0 33.886 12.156 63.222 36.133 87.195 23.977 23.969 53.313 36.125 87.188 36.125zM426.129 393.703c-.692-9.976-2.09-20.86-4.149-32.351-2.078-11.579-4.753-22.524-7.957-32.528-3.308-10.34-7.808-20.55-13.37-30.336-5.774-10.156-12.555-19-20.165-26.277-7.957-7.613-17.699-13.734-28.965-18.2-11.226-4.44-23.668-6.69-36.976-6.69-5.227 0-10.281 2.144-20.043 8.5a2711.03 2711.03 0 0 1-20.879 13.46c-6.707 4.274-15.793 8.278-27.016 11.903-10.949 3.543-22.066 5.34-33.039 5.34-10.972 0-22.086-1.797-33.047-5.34-11.21-3.622-20.296-7.625-26.996-11.899-7.77-4.965-14.8-9.496-20.898-13.469-9.75-6.355-14.809-8.5-20.035-8.5-13.313 0-25.75 2.254-36.973 6.7-11.258 4.457-21.004 10.578-28.969 18.199-7.605 7.281-14.39 16.12-20.156 26.273-5.558 9.785-10.058 19.992-13.371 30.34-3.2 10.004-5.875 20.945-7.953 32.524-2.059 11.476-3.457 22.363-4.149 32.363A438.821 438.821 0 0 0 0 423.949c0 26.727 8.496 48.363 25.25 64.32 16.547 15.747 38.441 23.735 65.066 23.735h246.532c26.625 0 48.511-7.984 65.062-23.734 16.758-15.946 25.254-37.586 25.254-64.325-.004-10.316-.351-20.492-1.035-30.242zm0 0"
                          fill="currentColor"
                          opacity="1"
                          data-original="currentColor"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-md">Innovation</p>
                    <p
                      className={`w-full leading-relaxed md:text-base text-sm ${
                        step == 10 ? "" : " h-0 overflow-hidden"
                      }`}
                    >
                      Defining a sharp vision that embraces both business
                      success and social responsibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-right lg:max-w-calc350px max-w-calc300px w-full overflow-auto">
              {/* screen default */}
              <div
                className={`chapter-screendefault px-4 text-center h-full ${
                  isActive ? "hidden screen-default" : ""
                }`}
              >
                <div className="max-w-screen-lg mx-auto px-4 py-6 flex items-center justify-center h-full">
                  <div>
                    <h1 className="xl:text-7xl md:text-5xl text-3xl font-bold mb-10 leading-tight">
                      Welcome to{" "}
                      <span className="bg-gradient1 text-clip">
                        Advisory Report
                      </span>{" "}
                      Builder
                    </h1>
                    <p className="title pb-2 w-full leading-relaxed md:text-base text-sm">
                      Our streamlined questionnaire guides you through key
                      business aspects which are the 10 pillars of the report.
                    </p>
                    <p className="title pb-2 w-full leading-relaxed md:text-base text-sm">
                      Your responses on each pillar enable us to craft
                      personalised analysis reports swiftly, offering actionable
                      insights. Rest assured, your information is securely
                      stored.
                    </p>
                    <p className="title pb-8 w-full leading-relaxed md:text-base text-sm">
                      You may submit your responses at any point of time during
                      filling the questionnaire and generate a report. However,
                      it is best suggested to provide details to get accurate
                      report.{" "}
                    </p>
                    <button
                      onClick={toggleActive}
                      className="mx-auto flex select-none items-center gap-3 rounded-lg bg-gradient1 py-4 px-6 text-center align-middle font-sans text-lg font-bold text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                      data-ripple-light="true"
                    >
                      Let's Start
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 512 512"
                        strokeWidth="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5"
                      >
                        <path
                          d="M256 0C114.837 0 0 114.837 0 256s114.837 256 256 256 256-114.837 256-256S397.163 0 256 0zm79.083 271.083L228.416 377.749A21.275 21.275 0 0 1 213.333 384a21.277 21.277 0 0 1-15.083-6.251c-8.341-8.341-8.341-21.824 0-30.165L289.835 256l-91.584-91.584c-8.341-8.341-8.341-21.824 0-30.165s21.824-8.341 30.165 0l106.667 106.667c8.341 8.341 8.341 21.823 0 30.165z"
                          fill="currentColor"
                          opacity="1"
                          data-original="currentColor"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              {/* screen 1 */}
              <div
                className={`chapter-screen1 h-full ${
                  step == 1 ? "screen1" : "hidden"
                } ${isActive ? "" : "hidden"}`}
              >
                <div className="header-title pt-6 text-center border-s border-white">
                  <h2 className="xl:text-5xl md:text-4xl text-2xl mb-6 font-bold xl:leading-normal leading-normal bg-gradient1 text-clip">
                    Strategy
                  </h2>
                </div>
                <div className="chapterContent max-w-screen-lg mx-auto pb-12 pt-8">
                  <div className="questions-form">
                    <div className="form-item mb-6">
                      <div className="flex gap-2 items-center justify-between mb-2">
                        <p className="mb-0 flex gap-2 leading-normal items-center">
                          Industry
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="16"
                            height="16"
                            x="0"
                            y="0"
                            viewBox="0 0 45.999 45.999"
                            xmlSpace="preserve"
                          >
                            <g>
                              <path
                                d="M39.264 6.736c-8.982-8.981-23.545-8.982-32.528 0-8.982 8.982-8.981 23.545 0 32.528 8.982 8.98 23.545 8.981 32.528 0 8.981-8.983 8.98-23.545 0-32.528zM25.999 33a3 3 0 1 1-6 0V21a3 3 0 1 1 6 0v12zm-3.053-17.128c-1.728 0-2.88-1.224-2.844-2.735-.036-1.584 1.116-2.771 2.879-2.771 1.764 0 2.88 1.188 2.917 2.771-.001 1.511-1.152 2.735-2.952 2.735z"
                                fill="#18CBB8"
                                opacity="1"
                                data-original="#18CBB8"
                              ></path>
                            </g>
                          </svg>
                        </p>
                        <span className="bg-lightblue py-1 leading-tight px-3 text-xs rounded-md">
                          Short sentence
                        </span>
                      </div>
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        What Industry is your comapny in?
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="about"
                          name="about"
                          className="bg-white border border-lightblue text-gray-900 text-sm rounded-lg focus:ring-mediumblue focus:border-mediumblue block w-full p-2.5 min-h-62px"
                        ></textarea>
                      </div>
                    </div>
                    <div className="form-item mb-6">
                      <div className="flex gap-2 items-center justify-between mb-2">
                        <p className="mb-0 flex gap-2 leading-normal items-center">
                          Industry
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="16"
                            height="16"
                            x="0"
                            y="0"
                            viewBox="0 0 45.999 45.999"
                            xmlSpace="preserve"
                          >
                            <g>
                              <path
                                d="M39.264 6.736c-8.982-8.981-23.545-8.982-32.528 0-8.982 8.982-8.981 23.545 0 32.528 8.982 8.98 23.545 8.981 32.528 0 8.981-8.983 8.98-23.545 0-32.528zM25.999 33a3 3 0 1 1-6 0V21a3 3 0 1 1 6 0v12zm-3.053-17.128c-1.728 0-2.88-1.224-2.844-2.735-.036-1.584 1.116-2.771 2.879-2.771 1.764 0 2.88 1.188 2.917 2.771-.001 1.511-1.152 2.735-2.952 2.735z"
                                fill="#18CBB8"
                                opacity="1"
                                data-original="#18CBB8"
                              ></path>
                            </g>
                          </svg>
                        </p>
                        <span className="bg-lightblue py-1 leading-tight px-3 text-xs rounded-md">
                          Short sentence
                        </span>
                      </div>
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        What Industry is your comapny in?
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="about"
                          name="about"
                          className="bg-white border border-lightblue text-gray-900 text-sm rounded-lg focus:ring-mediumblue focus:border-mediumblue block w-full p-2.5 min-h-62px"
                        ></textarea>
                      </div>
                    </div>
                    <div className="submit-form"></div>
                  </div>
                </div>
              </div>
              {/* screen 2 */}
              <div
                className={`chapter-screen2 h-full ${
                  step == 2 ? "screen2" : "hidden"
                }`}
              >
                <div className="header-title pt-6 text-center border-s border-white">
                  <h2 className="xl:text-5xl md:text-4xl text-2xl mb-6 font-bold xl:leading-normal leading-normal bg-gradient1 text-clip">
                    Clientele
                  </h2>
                </div>
                <div className="chapterContent max-w-screen-lg mx-auto pb-12 pt-8">
                  <div className="questions-form">
                    <div className="form-item mb-6">
                      <div className="flex gap-2 items-center justify-between mb-2">
                        <p className="mb-0 flex gap-2 leading-normal items-center">
                          Industry
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="16"
                            height="16"
                            x="0"
                            y="0"
                            viewBox="0 0 45.999 45.999"
                            xmlSpace="preserve"
                          >
                            <g>
                              <path
                                d="M39.264 6.736c-8.982-8.981-23.545-8.982-32.528 0-8.982 8.982-8.981 23.545 0 32.528 8.982 8.98 23.545 8.981 32.528 0 8.981-8.983 8.98-23.545 0-32.528zM25.999 33a3 3 0 1 1-6 0V21a3 3 0 1 1 6 0v12zm-3.053-17.128c-1.728 0-2.88-1.224-2.844-2.735-.036-1.584 1.116-2.771 2.879-2.771 1.764 0 2.88 1.188 2.917 2.771-.001 1.511-1.152 2.735-2.952 2.735z"
                                fill="#18CBB8"
                                opacity="1"
                                data-original="#18CBB8"
                              ></path>
                            </g>
                          </svg>
                        </p>
                        <span className="bg-lightblue py-1 leading-tight px-3 text-xs rounded-md">
                          Short sentence
                        </span>
                      </div>
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        What Industry is your comapny in?
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="about"
                          name="about"
                          className="bg-white border border-lightblue text-gray-900 text-sm rounded-lg focus:ring-mediumblue focus:border-mediumblue block w-full p-2.5 min-h-62px"
                        ></textarea>
                      </div>
                    </div>
                    <div className="form-item mb-6">
                      <div className="flex gap-2 items-center justify-between mb-2">
                        <p className="mb-0 flex gap-2 leading-normal items-center">
                          Industry
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="16"
                            height="16"
                            x="0"
                            y="0"
                            viewBox="0 0 45.999 45.999"
                            xmlSpace="preserve"
                          >
                            <g>
                              <path
                                d="M39.264 6.736c-8.982-8.981-23.545-8.982-32.528 0-8.982 8.982-8.981 23.545 0 32.528 8.982 8.98 23.545 8.981 32.528 0 8.981-8.983 8.98-23.545 0-32.528zM25.999 33a3 3 0 1 1-6 0V21a3 3 0 1 1 6 0v12zm-3.053-17.128c-1.728 0-2.88-1.224-2.844-2.735-.036-1.584 1.116-2.771 2.879-2.771 1.764 0 2.88 1.188 2.917 2.771-.001 1.511-1.152 2.735-2.952 2.735z"
                                fill="#18CBB8"
                                opacity="1"
                                data-original="#18CBB8"
                              ></path>
                            </g>
                          </svg>
                        </p>
                        <span className="bg-lightblue py-1 leading-tight px-3 text-xs rounded-md">
                          Short sentence
                        </span>
                      </div>
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        What Industry is your comapny in?
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="about"
                          name="about"
                          className="bg-white border border-lightblue text-gray-900 text-sm rounded-lg focus:ring-mediumblue focus:border-mediumblue block w-full p-2.5 min-h-62px"
                        ></textarea>
                      </div>
                    </div>
                    <div className="submit-form"></div>
                  </div>
                </div>
              </div>
              {/* screen 3 */}
              <div
                className={`chapter-screen3 h-full ${
                  step == 3 ? "screen3" : "hidden"
                }`}
              >
                <div className="header-title pt-6 text-center border-s border-white">
                  <h2 className="xl:text-5xl md:text-4xl text-2xl mb-6 font-bold xl:leading-normal leading-normal bg-gradient1 text-clip">
                    Budget/ROI
                  </h2>
                </div>
                <div className="chapterContent max-w-screen-lg mx-auto pb-12 pt-8">
                  <div className="questions-form">
                    <div className="form-item mb-6">
                      <div className="flex gap-2 items-center justify-between mb-2">
                        <p className="mb-0 flex gap-2 leading-normal items-center">
                          Industry
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="16"
                            height="16"
                            x="0"
                            y="0"
                            viewBox="0 0 45.999 45.999"
                            xmlSpace="preserve"
                          >
                            <g>
                              <path
                                d="M39.264 6.736c-8.982-8.981-23.545-8.982-32.528 0-8.982 8.982-8.981 23.545 0 32.528 8.982 8.98 23.545 8.981 32.528 0 8.981-8.983 8.98-23.545 0-32.528zM25.999 33a3 3 0 1 1-6 0V21a3 3 0 1 1 6 0v12zm-3.053-17.128c-1.728 0-2.88-1.224-2.844-2.735-.036-1.584 1.116-2.771 2.879-2.771 1.764 0 2.88 1.188 2.917 2.771-.001 1.511-1.152 2.735-2.952 2.735z"
                                fill="#18CBB8"
                                opacity="1"
                                data-original="#18CBB8"
                              ></path>
                            </g>
                          </svg>
                        </p>
                        <span className="bg-lightblue py-1 leading-tight px-3 text-xs rounded-md">
                          Short sentence
                        </span>
                      </div>
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        What Industry is your comapny in?
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="about"
                          name="about"
                          className="bg-white border border-lightblue text-gray-900 text-sm rounded-lg focus:ring-mediumblue focus:border-mediumblue block w-full p-2.5 min-h-62px"
                        ></textarea>
                      </div>
                    </div>
                    <div className="form-item mb-6">
                      <div className="flex gap-2 items-center justify-between mb-2">
                        <p className="mb-0 flex gap-2 leading-normal items-center">
                          Industry
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="16"
                            height="16"
                            x="0"
                            y="0"
                            viewBox="0 0 45.999 45.999"
                            xmlSpace="preserve"
                          >
                            <g>
                              <path
                                d="M39.264 6.736c-8.982-8.981-23.545-8.982-32.528 0-8.982 8.982-8.981 23.545 0 32.528 8.982 8.98 23.545 8.981 32.528 0 8.981-8.983 8.98-23.545 0-32.528zM25.999 33a3 3 0 1 1-6 0V21a3 3 0 1 1 6 0v12zm-3.053-17.128c-1.728 0-2.88-1.224-2.844-2.735-.036-1.584 1.116-2.771 2.879-2.771 1.764 0 2.88 1.188 2.917 2.771-.001 1.511-1.152 2.735-2.952 2.735z"
                                fill="#18CBB8"
                                opacity="1"
                                data-original="#18CBB8"
                              ></path>
                            </g>
                          </svg>
                        </p>
                        <span className="bg-lightblue py-1 leading-tight px-3 text-xs rounded-md">
                          Short sentence
                        </span>
                      </div>
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        What Industry is your comapny in?
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="about"
                          name="about"
                          className="bg-white border border-lightblue text-gray-900 text-sm rounded-lg focus:ring-mediumblue focus:border-mediumblue block w-full p-2.5 min-h-62px"
                        ></textarea>
                      </div>
                    </div>
                    <div className="submit-form"></div>
                  </div>
                </div>
              </div>
              {/* screen 4 */}
              <div
                className={`chapter-screen4 h-full ${
                  step == 4 ? "screen4" : "hidden"
                }`}
              >
                <div className="header-title pt-6 text-center border-s border-white">
                  <h2 className="xl:text-5xl md:text-4xl text-2xl mb-6 font-bold xl:leading-normal leading-normal bg-gradient1 text-clip">
                    Employees
                  </h2>
                </div>
                <div className="chapterContent max-w-screen-lg mx-auto pb-12 pt-8">
                  <div className="questions-form">
                    <div className="form-item mb-6">
                      <div className="flex gap-2 items-center justify-between mb-2">
                        <p className="mb-0 flex gap-2 leading-normal items-center">
                          Industry
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="16"
                            height="16"
                            x="0"
                            y="0"
                            viewBox="0 0 45.999 45.999"
                            xmlSpace="preserve"
                          >
                            <g>
                              <path
                                d="M39.264 6.736c-8.982-8.981-23.545-8.982-32.528 0-8.982 8.982-8.981 23.545 0 32.528 8.982 8.98 23.545 8.981 32.528 0 8.981-8.983 8.98-23.545 0-32.528zM25.999 33a3 3 0 1 1-6 0V21a3 3 0 1 1 6 0v12zm-3.053-17.128c-1.728 0-2.88-1.224-2.844-2.735-.036-1.584 1.116-2.771 2.879-2.771 1.764 0 2.88 1.188 2.917 2.771-.001 1.511-1.152 2.735-2.952 2.735z"
                                fill="#18CBB8"
                                opacity="1"
                                data-original="#18CBB8"
                              ></path>
                            </g>
                          </svg>
                        </p>
                        <span className="bg-lightblue py-1 leading-tight px-3 text-xs rounded-md">
                          Short sentence
                        </span>
                      </div>
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        What Industry is your comapny in?
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="about"
                          name="about"
                          className="bg-white border border-lightblue text-gray-900 text-sm rounded-lg focus:ring-mediumblue focus:border-mediumblue block w-full p-2.5 min-h-62px"
                        ></textarea>
                      </div>
                    </div>
                    <div className="form-item mb-6">
                      <div className="flex gap-2 items-center justify-between mb-2">
                        <p className="mb-0 flex gap-2 leading-normal items-center">
                          Industry
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="16"
                            height="16"
                            x="0"
                            y="0"
                            viewBox="0 0 45.999 45.999"
                            xmlSpace="preserve"
                          >
                            <g>
                              <path
                                d="M39.264 6.736c-8.982-8.981-23.545-8.982-32.528 0-8.982 8.982-8.981 23.545 0 32.528 8.982 8.98 23.545 8.981 32.528 0 8.981-8.983 8.98-23.545 0-32.528zM25.999 33a3 3 0 1 1-6 0V21a3 3 0 1 1 6 0v12zm-3.053-17.128c-1.728 0-2.88-1.224-2.844-2.735-.036-1.584 1.116-2.771 2.879-2.771 1.764 0 2.88 1.188 2.917 2.771-.001 1.511-1.152 2.735-2.952 2.735z"
                                fill="#18CBB8"
                                opacity="1"
                                data-original="#18CBB8"
                              ></path>
                            </g>
                          </svg>
                        </p>
                        <span className="bg-lightblue py-1 leading-tight px-3 text-xs rounded-md">
                          Short sentence
                        </span>
                      </div>
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        What Industry is your comapny in?
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="about"
                          name="about"
                          className="bg-white border border-lightblue text-gray-900 text-sm rounded-lg focus:ring-mediumblue focus:border-mediumblue block w-full p-2.5 min-h-62px"
                        ></textarea>
                      </div>
                    </div>
                    <div className="submit-form"></div>
                  </div>
                </div>
              </div>
              {/* screen 5 */}
              <div
                className={`chapter-screen5 h-full ${
                  step == 5 ? "screen5" : "hidden"
                }`}
              >
                <div className="header-title pt-6 text-center border-s border-white">
                  <h2 className="xl:text-5xl md:text-4xl text-2xl mb-6 font-bold xl:leading-normal leading-normal bg-gradient1 text-clip">
                    Market
                  </h2>
                </div>
                <div className="chapterContent max-w-screen-lg mx-auto pb-12 pt-8">
                  <div className="questions-form">
                    <div className="form-item mb-6">
                      <div className="flex gap-2 items-center justify-between mb-2">
                        <p className="mb-0 flex gap-2 leading-normal items-center">
                          Industry
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="16"
                            height="16"
                            x="0"
                            y="0"
                            viewBox="0 0 45.999 45.999"
                            xmlSpace="preserve"
                          >
                            <g>
                              <path
                                d="M39.264 6.736c-8.982-8.981-23.545-8.982-32.528 0-8.982 8.982-8.981 23.545 0 32.528 8.982 8.98 23.545 8.981 32.528 0 8.981-8.983 8.98-23.545 0-32.528zM25.999 33a3 3 0 1 1-6 0V21a3 3 0 1 1 6 0v12zm-3.053-17.128c-1.728 0-2.88-1.224-2.844-2.735-.036-1.584 1.116-2.771 2.879-2.771 1.764 0 2.88 1.188 2.917 2.771-.001 1.511-1.152 2.735-2.952 2.735z"
                                fill="#18CBB8"
                                opacity="1"
                                data-original="#18CBB8"
                              ></path>
                            </g>
                          </svg>
                        </p>
                        <span className="bg-lightblue py-1 leading-tight px-3 text-xs rounded-md">
                          Short sentence
                        </span>
                      </div>
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        What Industry is your comapny in?
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="about"
                          name="about"
                          className="bg-white border border-lightblue text-gray-900 text-sm rounded-lg focus:ring-mediumblue focus:border-mediumblue block w-full p-2.5 min-h-62px"
                        ></textarea>
                      </div>
                    </div>
                    <div className="form-item mb-6">
                      <div className="flex gap-2 items-center justify-between mb-2">
                        <p className="mb-0 flex gap-2 leading-normal items-center">
                          Industry
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="16"
                            height="16"
                            x="0"
                            y="0"
                            viewBox="0 0 45.999 45.999"
                            xmlSpace="preserve"
                          >
                            <g>
                              <path
                                d="M39.264 6.736c-8.982-8.981-23.545-8.982-32.528 0-8.982 8.982-8.981 23.545 0 32.528 8.982 8.98 23.545 8.981 32.528 0 8.981-8.983 8.98-23.545 0-32.528zM25.999 33a3 3 0 1 1-6 0V21a3 3 0 1 1 6 0v12zm-3.053-17.128c-1.728 0-2.88-1.224-2.844-2.735-.036-1.584 1.116-2.771 2.879-2.771 1.764 0 2.88 1.188 2.917 2.771-.001 1.511-1.152 2.735-2.952 2.735z"
                                fill="#18CBB8"
                                opacity="1"
                                data-original="#18CBB8"
                              ></path>
                            </g>
                          </svg>
                        </p>
                        <span className="bg-lightblue py-1 leading-tight px-3 text-xs rounded-md">
                          Short sentence
                        </span>
                      </div>
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        What Industry is your comapny in?
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="about"
                          name="about"
                          className="bg-white border border-lightblue text-gray-900 text-sm rounded-lg focus:ring-mediumblue focus:border-mediumblue block w-full p-2.5 min-h-62px"
                        ></textarea>
                      </div>
                    </div>
                    <div className="submit-form"></div>
                  </div>
                </div>
              </div>
              {/* screen 6 */}
              <div
                className={`chapter-screen6 h-full ${
                  step == 6 ? "screen6" : "hidden"
                }`}
              >
                <div className="header-title pt-6 text-center border-s border-white">
                  <h2 className="xl:text-5xl md:text-4xl text-2xl mb-6 font-bold xl:leading-normal leading-normal bg-gradient1 text-clip">
                    Compliance
                  </h2>
                </div>
                <div className="chapterContent max-w-screen-lg mx-auto pb-12 pt-8">
                  <div className="questions-form">
                    <div className="form-item mb-6">
                      <div className="flex gap-2 items-center justify-between mb-2">
                        <p className="mb-0 flex gap-2 leading-normal items-center">
                          Industry
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="16"
                            height="16"
                            x="0"
                            y="0"
                            viewBox="0 0 45.999 45.999"
                            xmlSpace="preserve"
                          >
                            <g>
                              <path
                                d="M39.264 6.736c-8.982-8.981-23.545-8.982-32.528 0-8.982 8.982-8.981 23.545 0 32.528 8.982 8.98 23.545 8.981 32.528 0 8.981-8.983 8.98-23.545 0-32.528zM25.999 33a3 3 0 1 1-6 0V21a3 3 0 1 1 6 0v12zm-3.053-17.128c-1.728 0-2.88-1.224-2.844-2.735-.036-1.584 1.116-2.771 2.879-2.771 1.764 0 2.88 1.188 2.917 2.771-.001 1.511-1.152 2.735-2.952 2.735z"
                                fill="#18CBB8"
                                opacity="1"
                                data-original="#18CBB8"
                              ></path>
                            </g>
                          </svg>
                        </p>
                        <span className="bg-lightblue py-1 leading-tight px-3 text-xs rounded-md">
                          Short sentence
                        </span>
                      </div>
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        What Industry is your comapny in?
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="about"
                          name="about"
                          className="bg-white border border-lightblue text-gray-900 text-sm rounded-lg focus:ring-mediumblue focus:border-mediumblue block w-full p-2.5 min-h-62px"
                        ></textarea>
                      </div>
                    </div>
                    <div className="form-item mb-6">
                      <div className="flex gap-2 items-center justify-between mb-2">
                        <p className="mb-0 flex gap-2 leading-normal items-center">
                          Industry
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="16"
                            height="16"
                            x="0"
                            y="0"
                            viewBox="0 0 45.999 45.999"
                            xmlSpace="preserve"
                          >
                            <g>
                              <path
                                d="M39.264 6.736c-8.982-8.981-23.545-8.982-32.528 0-8.982 8.982-8.981 23.545 0 32.528 8.982 8.98 23.545 8.981 32.528 0 8.981-8.983 8.98-23.545 0-32.528zM25.999 33a3 3 0 1 1-6 0V21a3 3 0 1 1 6 0v12zm-3.053-17.128c-1.728 0-2.88-1.224-2.844-2.735-.036-1.584 1.116-2.771 2.879-2.771 1.764 0 2.88 1.188 2.917 2.771-.001 1.511-1.152 2.735-2.952 2.735z"
                                fill="#18CBB8"
                                opacity="1"
                                data-original="#18CBB8"
                              ></path>
                            </g>
                          </svg>
                        </p>
                        <span className="bg-lightblue py-1 leading-tight px-3 text-xs rounded-md">
                          Short sentence
                        </span>
                      </div>
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        What Industry is your comapny in?
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="about"
                          name="about"
                          className="bg-white border border-lightblue text-gray-900 text-sm rounded-lg focus:ring-mediumblue focus:border-mediumblue block w-full p-2.5 min-h-62px"
                        ></textarea>
                      </div>
                    </div>
                    <div className="submit-form"></div>
                  </div>
                </div>
              </div>
              {/* screen 7 */}
              <div
                className={`chapter-screen7 h-full ${
                  step == 7 ? "screen7" : "hidden"
                }`}
              >
                <div className="header-title pt-6 text-center border-s border-white">
                  <h2 className="xl:text-5xl md:text-4xl text-2xl mb-6 font-bold xl:leading-normal leading-normal bg-gradient1 text-clip">
                    Partners/Suppliers
                  </h2>
                </div>
                <div className="chapterContent max-w-screen-lg mx-auto pb-12 pt-8">
                  <div className="questions-form">
                    <div className="form-item mb-6">
                      <div className="flex gap-2 items-center justify-between mb-2">
                        <p className="mb-0 flex gap-2 leading-normal items-center">
                          Industry
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="16"
                            height="16"
                            x="0"
                            y="0"
                            viewBox="0 0 45.999 45.999"
                            xmlSpace="preserve"
                          >
                            <g>
                              <path
                                d="M39.264 6.736c-8.982-8.981-23.545-8.982-32.528 0-8.982 8.982-8.981 23.545 0 32.528 8.982 8.98 23.545 8.981 32.528 0 8.981-8.983 8.98-23.545 0-32.528zM25.999 33a3 3 0 1 1-6 0V21a3 3 0 1 1 6 0v12zm-3.053-17.128c-1.728 0-2.88-1.224-2.844-2.735-.036-1.584 1.116-2.771 2.879-2.771 1.764 0 2.88 1.188 2.917 2.771-.001 1.511-1.152 2.735-2.952 2.735z"
                                fill="#18CBB8"
                                opacity="1"
                                data-original="#18CBB8"
                              ></path>
                            </g>
                          </svg>
                        </p>
                        <span className="bg-lightblue py-1 leading-tight px-3 text-xs rounded-md">
                          Short sentence
                        </span>
                      </div>
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        What Industry is your comapny in?
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="about"
                          name="about"
                          className="bg-white border border-lightblue text-gray-900 text-sm rounded-lg focus:ring-mediumblue focus:border-mediumblue block w-full p-2.5 min-h-62px"
                        ></textarea>
                      </div>
                    </div>
                    <div className="form-item mb-6">
                      <div className="flex gap-2 items-center justify-between mb-2">
                        <p className="mb-0 flex gap-2 leading-normal items-center">
                          Industry
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="16"
                            height="16"
                            x="0"
                            y="0"
                            viewBox="0 0 45.999 45.999"
                            xmlSpace="preserve"
                          >
                            <g>
                              <path
                                d="M39.264 6.736c-8.982-8.981-23.545-8.982-32.528 0-8.982 8.982-8.981 23.545 0 32.528 8.982 8.98 23.545 8.981 32.528 0 8.981-8.983 8.98-23.545 0-32.528zM25.999 33a3 3 0 1 1-6 0V21a3 3 0 1 1 6 0v12zm-3.053-17.128c-1.728 0-2.88-1.224-2.844-2.735-.036-1.584 1.116-2.771 2.879-2.771 1.764 0 2.88 1.188 2.917 2.771-.001 1.511-1.152 2.735-2.952 2.735z"
                                fill="#18CBB8"
                                opacity="1"
                                data-original="#18CBB8"
                              ></path>
                            </g>
                          </svg>
                        </p>
                        <span className="bg-lightblue py-1 leading-tight px-3 text-xs rounded-md">
                          Short sentence
                        </span>
                      </div>
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        What Industry is your comapny in?
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="about"
                          name="about"
                          className="bg-white border border-lightblue text-gray-900 text-sm rounded-lg focus:ring-mediumblue focus:border-mediumblue block w-full p-2.5 min-h-62px"
                        ></textarea>
                      </div>
                    </div>
                    <div className="submit-form"></div>
                  </div>
                </div>
              </div>
              {/* screen 8 */}
              <div
                className={`chapter-screen8 h-full ${
                  step == 8 ? "screen8" : "hidden"
                }`}
              >
                <div className="header-title pt-6 text-center border-s border-white">
                  <h2 className="xl:text-5xl md:text-4xl text-2xl mb-6 font-bold xl:leading-normal leading-normal bg-gradient1 text-clip">
                    Data/ICT
                  </h2>
                </div>
                <div className="chapterContent max-w-screen-lg mx-auto pb-12 pt-8">
                  <div className="questions-form">
                    <div className="form-item mb-6">
                      <div className="flex gap-2 items-center justify-between mb-2">
                        <p className="mb-0 flex gap-2 leading-normal items-center">
                          Industry
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="16"
                            height="16"
                            x="0"
                            y="0"
                            viewBox="0 0 45.999 45.999"
                            xmlSpace="preserve"
                          >
                            <g>
                              <path
                                d="M39.264 6.736c-8.982-8.981-23.545-8.982-32.528 0-8.982 8.982-8.981 23.545 0 32.528 8.982 8.98 23.545 8.981 32.528 0 8.981-8.983 8.98-23.545 0-32.528zM25.999 33a3 3 0 1 1-6 0V21a3 3 0 1 1 6 0v12zm-3.053-17.128c-1.728 0-2.88-1.224-2.844-2.735-.036-1.584 1.116-2.771 2.879-2.771 1.764 0 2.88 1.188 2.917 2.771-.001 1.511-1.152 2.735-2.952 2.735z"
                                fill="#18CBB8"
                                opacity="1"
                                data-original="#18CBB8"
                              ></path>
                            </g>
                          </svg>
                        </p>
                        <span className="bg-lightblue py-1 leading-tight px-3 text-xs rounded-md">
                          Short sentence
                        </span>
                      </div>
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        What Industry is your comapny in?
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="about"
                          name="about"
                          className="bg-white border border-lightblue text-gray-900 text-sm rounded-lg focus:ring-mediumblue focus:border-mediumblue block w-full p-2.5 min-h-62px"
                        ></textarea>
                      </div>
                    </div>
                    <div className="form-item mb-6">
                      <div className="flex gap-2 items-center justify-between mb-2">
                        <p className="mb-0 flex gap-2 leading-normal items-center">
                          Industry
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="16"
                            height="16"
                            x="0"
                            y="0"
                            viewBox="0 0 45.999 45.999"
                            xmlSpace="preserve"
                          >
                            <g>
                              <path
                                d="M39.264 6.736c-8.982-8.981-23.545-8.982-32.528 0-8.982 8.982-8.981 23.545 0 32.528 8.982 8.98 23.545 8.981 32.528 0 8.981-8.983 8.98-23.545 0-32.528zM25.999 33a3 3 0 1 1-6 0V21a3 3 0 1 1 6 0v12zm-3.053-17.128c-1.728 0-2.88-1.224-2.844-2.735-.036-1.584 1.116-2.771 2.879-2.771 1.764 0 2.88 1.188 2.917 2.771-.001 1.511-1.152 2.735-2.952 2.735z"
                                fill="#18CBB8"
                                opacity="1"
                                data-original="#18CBB8"
                              ></path>
                            </g>
                          </svg>
                        </p>
                        <span className="bg-lightblue py-1 leading-tight px-3 text-xs rounded-md">
                          Short sentence
                        </span>
                      </div>
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        What Industry is your comapny in?
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="about"
                          name="about"
                          className="bg-white border border-lightblue text-gray-900 text-sm rounded-lg focus:ring-mediumblue focus:border-mediumblue block w-full p-2.5 min-h-62px"
                        ></textarea>
                      </div>
                    </div>
                    <div className="submit-form"></div>
                  </div>
                </div>
              </div>
              {/* screen 9 */}
              <div
                className={`chapter-screen9 h-full ${
                  step == 9 ? "screen9" : "hidden"
                }`}
              >
                <div className="header-title pt-6 text-center border-s border-white">
                  <h2 className="xl:text-5xl md:text-4xl text-2xl mb-6 font-bold xl:leading-normal leading-normal bg-gradient1 text-clip">
                    Customer Value & Social Impact
                  </h2>
                </div>
                <div className="chapterContent max-w-screen-lg mx-auto pb-12 pt-8">
                  <div className="questions-form">
                    <div className="form-item mb-6">
                      <div className="flex gap-2 items-center justify-between mb-2">
                        <p className="mb-0 flex gap-2 leading-normal items-center">
                          Industry
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="16"
                            height="16"
                            x="0"
                            y="0"
                            viewBox="0 0 45.999 45.999"
                            xmlSpace="preserve"
                          >
                            <g>
                              <path
                                d="M39.264 6.736c-8.982-8.981-23.545-8.982-32.528 0-8.982 8.982-8.981 23.545 0 32.528 8.982 8.98 23.545 8.981 32.528 0 8.981-8.983 8.98-23.545 0-32.528zM25.999 33a3 3 0 1 1-6 0V21a3 3 0 1 1 6 0v12zm-3.053-17.128c-1.728 0-2.88-1.224-2.844-2.735-.036-1.584 1.116-2.771 2.879-2.771 1.764 0 2.88 1.188 2.917 2.771-.001 1.511-1.152 2.735-2.952 2.735z"
                                fill="#18CBB8"
                                opacity="1"
                                data-original="#18CBB8"
                              ></path>
                            </g>
                          </svg>
                        </p>
                        <span className="bg-lightblue py-1 leading-tight px-3 text-xs rounded-md">
                          Short sentence
                        </span>
                      </div>
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        What Industry is your comapny in?
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="about"
                          name="about"
                          className="bg-white border border-lightblue text-gray-900 text-sm rounded-lg focus:ring-mediumblue focus:border-mediumblue block w-full p-2.5 min-h-62px"
                        ></textarea>
                      </div>
                    </div>
                    <div className="form-item mb-6">
                      <div className="flex gap-2 items-center justify-between mb-2">
                        <p className="mb-0 flex gap-2 leading-normal items-center">
                          Industry
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="16"
                            height="16"
                            x="0"
                            y="0"
                            viewBox="0 0 45.999 45.999"
                            xmlSpace="preserve"
                          >
                            <g>
                              <path
                                d="M39.264 6.736c-8.982-8.981-23.545-8.982-32.528 0-8.982 8.982-8.981 23.545 0 32.528 8.982 8.98 23.545 8.981 32.528 0 8.981-8.983 8.98-23.545 0-32.528zM25.999 33a3 3 0 1 1-6 0V21a3 3 0 1 1 6 0v12zm-3.053-17.128c-1.728 0-2.88-1.224-2.844-2.735-.036-1.584 1.116-2.771 2.879-2.771 1.764 0 2.88 1.188 2.917 2.771-.001 1.511-1.152 2.735-2.952 2.735z"
                                fill="#18CBB8"
                                opacity="1"
                                data-original="#18CBB8"
                              ></path>
                            </g>
                          </svg>
                        </p>
                        <span className="bg-lightblue py-1 leading-tight px-3 text-xs rounded-md">
                          Short sentence
                        </span>
                      </div>
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        What Industry is your comapny in?
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="about"
                          name="about"
                          className="bg-white border border-lightblue text-gray-900 text-sm rounded-lg focus:ring-mediumblue focus:border-mediumblue block w-full p-2.5 min-h-62px"
                        ></textarea>
                      </div>
                    </div>
                    <div className="submit-form"></div>
                  </div>
                </div>
              </div>
              {/* screen 10 */}
              <div
                className={`chapter-screen10 h-full ${
                  step == 10 ? "screen10" : "hidden"
                }`}
              >
                <div className="header-title pt-6 text-center border-s border-white">
                  <h2 className="xl:text-5xl md:text-4xl text-2xl mb-6 font-bold xl:leading-normal leading-normal bg-gradient1 text-clip">
                    Innovation
                  </h2>
                </div>
                <div className="chapterContent max-w-screen-lg mx-auto pb-12 pt-8">
                  <div className="questions-form">
                    <div className="form-item mb-6">
                      <div className="flex gap-2 items-center justify-between mb-2">
                        <p className="mb-0 flex gap-2 leading-normal items-center">
                          Industry
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="16"
                            height="16"
                            x="0"
                            y="0"
                            viewBox="0 0 45.999 45.999"
                            xmlSpace="preserve"
                          >
                            <g>
                              <path
                                d="M39.264 6.736c-8.982-8.981-23.545-8.982-32.528 0-8.982 8.982-8.981 23.545 0 32.528 8.982 8.98 23.545 8.981 32.528 0 8.981-8.983 8.98-23.545 0-32.528zM25.999 33a3 3 0 1 1-6 0V21a3 3 0 1 1 6 0v12zm-3.053-17.128c-1.728 0-2.88-1.224-2.844-2.735-.036-1.584 1.116-2.771 2.879-2.771 1.764 0 2.88 1.188 2.917 2.771-.001 1.511-1.152 2.735-2.952 2.735z"
                                fill="#18CBB8"
                                opacity="1"
                                data-original="#18CBB8"
                              ></path>
                            </g>
                          </svg>
                        </p>
                        <span className="bg-lightblue py-1 leading-tight px-3 text-xs rounded-md">
                          Short sentence
                        </span>
                      </div>
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        What Industry is your comapny in?
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="about"
                          name="about"
                          className="bg-white border border-lightblue text-gray-900 text-sm rounded-lg focus:ring-mediumblue focus:border-mediumblue block w-full p-2.5 min-h-62px"
                        ></textarea>
                      </div>
                    </div>
                    <div className="form-item mb-6">
                      <div className="flex gap-2 items-center justify-between mb-2">
                        <p className="mb-0 flex gap-2 leading-normal items-center">
                          Industry
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="16"
                            height="16"
                            x="0"
                            y="0"
                            viewBox="0 0 45.999 45.999"
                            xmlSpace="preserve"
                          >
                            <g>
                              <path
                                d="M39.264 6.736c-8.982-8.981-23.545-8.982-32.528 0-8.982 8.982-8.981 23.545 0 32.528 8.982 8.98 23.545 8.981 32.528 0 8.981-8.983 8.98-23.545 0-32.528zM25.999 33a3 3 0 1 1-6 0V21a3 3 0 1 1 6 0v12zm-3.053-17.128c-1.728 0-2.88-1.224-2.844-2.735-.036-1.584 1.116-2.771 2.879-2.771 1.764 0 2.88 1.188 2.917 2.771-.001 1.511-1.152 2.735-2.952 2.735z"
                                fill="#18CBB8"
                                opacity="1"
                                data-original="#18CBB8"
                              ></path>
                            </g>
                          </svg>
                        </p>
                        <span className="bg-lightblue py-1 leading-tight px-3 text-xs rounded-md">
                          Short sentence
                        </span>
                      </div>
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        What Industry is your comapny in?
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="about"
                          name="about"
                          className="bg-white border border-lightblue text-gray-900 text-sm rounded-lg focus:ring-mediumblue focus:border-mediumblue block w-full p-2.5 min-h-62px"
                        ></textarea>
                      </div>
                    </div>
                    <div className="submit-form"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="chapterProgress border-t-2 border-lightblue">
            <div className="flex items-center">
              <div className="lg:max-w-350px max-w-300px w-full">
                <div className="flex item-center px-4 py-2">
                  <div
                    className={`button-start w-full text-right ${
                      isActive ? "hidden" : ""
                    }`}
                  >
                    <button
                      className="ms-auto flex select-none items-center gap-3 bg-white py-2 px-0 text-center text-md text-black  active:shadow-none focus:outline-0"
                      type="button"
                      data-ripple-light="true"
                    >
                      Start
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 512 512"
                        strokeWidth="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5"
                      >
                        <path
                          d="M256 0C114.837 0 0 114.837 0 256s114.837 256 256 256 256-114.837 256-256S397.163 0 256 0zm79.083 271.083L228.416 377.749A21.275 21.275 0 0 1 213.333 384a21.277 21.277 0 0 1-15.083-6.251c-8.341-8.341-8.341-21.824 0-30.165L289.835 256l-91.584-91.584c-8.341-8.341-8.341-21.824 0-30.165s21.824-8.341 30.165 0l106.667 106.667c8.341 8.341 8.341 21.823 0 30.165z"
                          fill="currentColor"
                          opacity="1"
                          data-original="currentColor"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div
                    className={`button-start w-full text-right ${
                      isActive ? "" : "hidden"
                    } ${step == 10 ? "disabled" : ""}`}
                  >
                    <button
                      className="ms-auto flex select-none items-center gap-3 bg-white py-2 px-0 text-center text-md text-black active:shadow-none focus:outline-0"
                      type="button"
                      data-ripple-light="true"
                      onClick={() => {
                        handleNext();
                      }}
                    >
                      Skip
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 512 512"
                        strokeWidth="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5"
                      >
                        <path
                          d="M256 0C114.837 0 0 114.837 0 256s114.837 256 256 256 256-114.837 256-256S397.163 0 256 0zm79.083 271.083L228.416 377.749A21.275 21.275 0 0 1 213.333 384a21.277 21.277 0 0 1-15.083-6.251c-8.341-8.341-8.341-21.824 0-30.165L289.835 256l-91.584-91.584c-8.341-8.341-8.341-21.824 0-30.165s21.824-8.341 30.165 0l106.667 106.667c8.341 8.341 8.341 21.823 0 30.165z"
                          fill="currentColor"
                          opacity="1"
                          data-original="currentColor"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="lg:max-w-calc350px max-w-calc300px w-full">
                <div className="flex gap-2 justify-between items-center px-4 py-2">
                  <div className="button-back w-full text-left">
                    <button
                      className={`me-auto flex select-none items-center gap-3 bg-white py-2 px-0 text-center text-md text-black  active:shadow-none focus:outline-0 ${
                        step == 1 ? "disabled" : ""
                      }`}
                      type="button"
                      data-ripple-light="true"
                      onClick={() => handlePrev()}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 512 512"
                        strokeWidth="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="rotate-180 h-5 w-5"
                      >
                        <path
                          d="M256 0C114.837 0 0 114.837 0 256s114.837 256 256 256 256-114.837 256-256S397.163 0 256 0zm79.083 271.083L228.416 377.749A21.275 21.275 0 0 1 213.333 384a21.277 21.277 0 0 1-15.083-6.251c-8.341-8.341-8.341-21.824 0-30.165L289.835 256l-91.584-91.584c-8.341-8.341-8.341-21.824 0-30.165s21.824-8.341 30.165 0l106.667 106.667c8.341 8.341 8.341 21.823 0 30.165z"
                          fill="currentColor"
                          opacity="1"
                          data-original="currentColor"
                        ></path>
                      </svg>
                      Back
                    </button>
                  </div>
                  <div className="dots-progress flex gap-1">
                    <span
                      className={`w-8 h-2 rounded ${
                        isActive ? "bg-gradient1" : "bg-lightblue"
                      } ${
                        stepsTick.includes(1) || step == 1 ? "" : "bg-lightblue"
                      }`}
                    ></span>
                    <span
                      className={`w-8 h-2 rounded ${
                        stepsTick.includes(2) || step == 2
                          ? "bg-gradient1"
                          : "bg-lightblue"
                      }`}
                    ></span>
                    <span
                      className={`w-8 h-2 rounded ${
                        stepsTick.includes(3) || step == 3
                          ? "bg-gradient1"
                          : "bg-lightblue"
                      }`}
                    ></span>
                    <span
                      className={`w-8 h-2 rounded ${
                        stepsTick.includes(4) || step == 4
                          ? "bg-gradient1"
                          : "bg-lightblue"
                      }`}
                    ></span>
                    <span
                      className={`w-8 h-2 rounded ${
                        stepsTick.includes(5) || step == 5
                          ? "bg-gradient1"
                          : "bg-lightblue"
                      }`}
                    ></span>
                    <span
                      className={`w-8 h-2 rounded ${
                        stepsTick.includes(6) || step == 6
                          ? "bg-gradient1"
                          : "bg-lightblue"
                      }`}
                    ></span>
                    <span
                      className={`w-8 h-2 rounded ${
                        stepsTick.includes(7) || step == 7
                          ? "bg-gradient1"
                          : "bg-lightblue"
                      }`}
                    ></span>
                    <span
                      className={`w-8 h-2 rounded ${
                        stepsTick.includes(8) || step == 8
                          ? "bg-gradient1"
                          : "bg-lightblue"
                      }`}
                    ></span>
                    <span
                      className={`w-8 h-2 rounded ${
                        stepsTick.includes(9) || step == 9
                          ? "bg-gradient1"
                          : "bg-lightblue"
                      }`}
                    ></span>
                    <span
                      className={`w-8 h-2 rounded ${
                        stepsTick.includes(10) || step == 10
                          ? "bg-gradient1"
                          : "bg-lightblue"
                      }`}
                    ></span>
                  </div>
                  <div
                    className={`button-next w-full text-right ${
                      step == 10 ? "hidden" : ""
                    } ${isActive ? "" : "disabled"}`}
                  >
                    <button
                      className="ms-auto flex select-none items-center gap-3 bg-white py-2 px-0 text-center text-md text-black  active:shadow-none focus:outline-0"
                      type="button"
                      data-ripple-light="true"
                      onClick={() => {
                        handleNext();
                      }}
                    >
                      Next
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 512 512"
                        strokeWidth="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5"
                      >
                        <path
                          d="M256 0C114.837 0 0 114.837 0 256s114.837 256 256 256 256-114.837 256-256S397.163 0 256 0zm79.083 271.083L228.416 377.749A21.275 21.275 0 0 1 213.333 384a21.277 21.277 0 0 1-15.083-6.251c-8.341-8.341-8.341-21.824 0-30.165L289.835 256l-91.584-91.584c-8.341-8.341-8.341-21.824 0-30.165s21.824-8.341 30.165 0l106.667 106.667c8.341 8.341 8.341 21.823 0 30.165z"
                          fill="currentColor"
                          opacity="1"
                          data-original="currentColor"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div
                    className={`button-submit w-full text-right ${
                      step == 10 ? "submit-final" : "hidden"
                    }`}
                  >
                    <button
                      className="ms-auto flex items-center gap-2 justify-center rounded-lg bg-gradient1 py-11px px-6 text-center align-middle font-sans text-sm font-bold text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:shadow-none focus:oulite-none"
                      type="button"
                      data-ripple-light="true"
                    >
                      Submit{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 512 512"
                        stroke-width="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5"
                      >
                        <path
                          d="M256 0C114.837 0 0 114.837 0 256s114.837 256 256 256 256-114.837 256-256S397.163 0 256 0zm79.083 271.083L228.416 377.749A21.275 21.275 0 0 1 213.333 384a21.277 21.277 0 0 1-15.083-6.251c-8.341-8.341-8.341-21.824 0-30.165L289.835 256l-91.584-91.584c-8.341-8.341-8.341-21.824 0-30.165s21.824-8.341 30.165 0l106.667 106.667c8.341 8.341 8.341 21.823 0 30.165z"
                          fill="currentColor"
                          opacity="1"
                          data-original="currentColor"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DashBoard;
