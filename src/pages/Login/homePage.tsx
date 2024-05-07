import { useState, useRef, useEffect } from "react";
const HomePage = () => {
  const [activeSection, setActiveSection] = useState(null);

  const section2Ref = useRef(null);

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

  return (
    <>
      <section className="banner bg-lightblue py-10 flex items-center relative min-h-screen ">
        <img
          src="assets/images/circle.png"
          className="circle-shape absolute bottom-0 left-0"
        />
        <img
          className="absolute top-0 right-0 md:w-6/12 md:opacity-100 w-full opacity-20 h-full object-contain object-right-top"
          src="assets/images/banner-img.webp"
          alt=""
        />
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="col-banner-left relative col-span-2 md:text-left text-center">
              <img
                className="mb-6 md:ms-0 mx-auto"
                src="assets/images/Logo.png"
                width={"200px"}
              />
              <h1 className="xl:text-7xl md:text-5xl text-3xl font-bold mb-10 max-w-screen-md leading-tight">
                Build the future of your SME with the{" "}
                <span className="bg-gradient1 text-clip">
                  Human Centrix AI Model®
                </span>{" "}
                from HumanSwitch.ai
              </h1>
              <a href="/dashboard">
                <button
                  className="md:ms-0 mx-auto flex select-none items-center gap-3 rounded-lg bg-gradient1 py-4 px-6 text-center align-middle font-sans text-lg font-bold text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  data-ripple-light="true"
                >
                  Let's Start
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
              </a>
            </div>
            <div className="col-banner-right"></div>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-20 px-4 mx-auto">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <div className="md:order-1 order-last">
              <div className="col-inner md:text-left text-center">
                <h2 className="xl:text-5xl md:text-4xl text-2xl max-w-xl font-bold mb-6 leading-tight">
                  Why your SME shapes the future with our{" "}
                  <span className="bg-gradient1 text-clip">
                    Human Centrix AI
                  </span>{" "}
                  Business Model®
                </h2>
                <p className="title pb-2 w-full max-w-xl leading-relaxed md:text-base text-sm">
                  The small and medium-sized enterprise sector is the engine of
                  every economy. With over 25 years of experience as a tech
                  entrepreneur, and an established authority in AI, machine
                  learning, and related technologies,
                </p>
                <p className="title pb-2 w-full max-w-xl leading-relaxed md:text-base text-sm">
                  I, Rob Boeyink, have founded multiple tech companies aimed at
                  harnessing these advancements. At HumanSwitch.ai, we offer not
                  just a technology platform; we offer a future!
                </p>
                <p className="title pb-8 w-full max-w-xl leading-relaxed md:text-base text-sm">
                  We apply our registered Human Centrix AI Business Model®
                  within our own platform and assist your SME in seamlessly
                  integrating our model into your business processes, vision,
                  and strategy. This ensures technology that understands ethics
                  and human nuances, enhancing your team.
                </p>
                <a href="/dashboard">
                  <button
                    className="md:ms-0 mx-auto flex select-none items-center gap-3 rounded-lg bg-gradient1 py-4 px-6 text-center align-middle font-sans text-lg font-bold text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                  >
                    Let's Start
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
                </a>
              </div>
            </div>
            <div className="xl:ps-14 md:order-2">
              <img src="assets/images/image2.webp" alt="" width={"100%"} />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-lightblue">
        <div className="container py-20 px-4 mx-auto">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <div className="xl:pe-24">
              <img
                src="assets/images/infographic1.webp"
                alt=""
                width={"100%"}
              />
            </div>
            <div>
              <div className="col-inner md:text-left text-center">
                <h2 className="xl:text-5xl md:text-4xl text-2xl font-bold mb-6 max-w-md md:ms-0 mx-auto leading-tight">
                  Be <span className="bg-gradient1 text-clip">among</span> the
                  First
                </h2>
                <p className="title pb-8 w-full max-w-xl md:ms-0 mx-auto leading-relaxed md:text-base text-sm">
                  Register for Early Bird access and join an exclusive group of
                  50 SMEs in the EU who will be the first to use our
                  groundbreaking platform.{" "}
                </p>
                <form className="max-w-xl md:ms-0 mx-auto">
                  <div className="relative mb-4">
                    <div className="absolute inset-y-0 start-0 top-5 flex items-center  pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        width="512"
                        height="512"
                        x="0"
                        y="0"
                        viewBox="0 0 512 512.002"
                        className="w-4 h-4 text-mediumblue"
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
                    <input
                      type="text"
                      id="first-name-icon"
                      className="bg-white border border-white text-gray-900 text-sm rounded-lg focus:ring-mediumblue focus:border-mediumblue block w-full ms-6 p-2.5"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="relative mb-4">
                    <div className="absolute inset-y-0 start-0 top-5 flex items-center pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        width="512"
                        height="512"
                        x="0"
                        y="0"
                        viewBox="0 0 512 512.002"
                        className="w-4 h-4 text-mediumblue"
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
                    <input
                      type="text"
                      id="last-name-icon"
                      className="bg-white border border-white text-gray-900 text-sm rounded-lg focus:ring-mediumblue focus:border-mediumblue block w-full ms-6 p-2.5"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="relative mb-4">
                    <div className="absolute inset-y-0 start-0 top-5 flex items-center pointer-events-none">
                      <svg
                        className="w-4 h-4 text-mediumblue"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 16"
                      >
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="company-address-icon"
                      className="bg-white border border-white text-gray-900 text-sm rounded-lg focus:ring-mediumblue focus:border-mediumblue block w-full ms-6 p-2.5"
                      placeholder="Company Email"
                    />
                  </div>
                  <div className="relative mb-5">
                    <div className="absolute inset-y-0 start-0 top-5 flex items-center pointer-events-none">
                      <svg
                        className="w-4 h-4 text-mediumblue"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 16"
                      >
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="business-address-icon"
                      className="bg-white border border-white text-gray-900 text-sm rounded-lg focus:ring-mediumblue focus:border-mediumblue block w-full ms-6 p-2.5"
                      placeholder="Business Email"
                    />
                  </div>
                  <a href="/signuphr">
                    <button
                      className="flex items-center gap-2 justify-center rounded-lg bg-gradient1 w-full py-3 px-6 text-center align-middle font-sans text-sm font-bold text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                      data-ripple-light="true"
                    >
                      Register Now{" "}
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
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="section2"
        ref={section2Ref}
        className={`overflow-hidden relative ${
          activeSection === "section2" ? "animationAll" : ""
        }`}
      >
        <img
          src="assets/images/circle.png"
          className="circle-shape absolute bottom-0 left-0"
        />
        <div className="container mx-auto py-28 px-4">
          <div className="max-w-600 mx-auto">
            <div className="chapter-all relative pb-100 border border-dashed border-mediumgreen rounded-full md:block grid grid-cols-2 text-center gap-6">
              <div className="chapter-cs text-center w-32 h-32 absolute left-2/4 top-2/4 rounded-full bg-gradient1 py-3 px-3 text-sm font-bold text-white flex items-center justify-center chapter1">
                <span className="">
                  1.
                  <br />
                  Strategy
                </span>
              </div>
              <div className="chapter-cs text-center w-32 h-32 absolute left-2/4 top-2/4 rounded-full bg-gradient1 py-3 px-3 text-sm font-bold text-white flex items-center justify-center chapter2">
                <span className="">
                  2.
                  <br />
                  Clientele
                </span>
              </div>
              <div className="chapter-cs text-center w-32 h-32 absolute left-2/4 top-2/4 rounded-full bg-gradient1 py-3 px-3 text-sm font-bold text-white flex items-center justify-center chapter3">
                <span className="">
                  3.
                  <br />
                  Budget/ROI
                </span>
              </div>
              <div className="chapter-cs text-center w-32 h-32 absolute left-2/4 top-2/4 rounded-full bg-gradient1 py-3 px-3 text-sm font-bold text-white flex items-center justify-center chapter4">
                <span className="">
                  4.
                  <br />
                  Employees
                </span>
              </div>
              <div className="chapter-cs text-center w-32 h-32 absolute left-2/4 top-2/4 rounded-full bg-gradient1 py-3 px-3 text-sm font-bold text-white flex items-center justify-center chapter5">
                <span className="">
                  5.
                  <br />
                  Market
                </span>
              </div>
              <div className="chapter-cs w-32 h-32 absolute left-2/4 top-2/4 rounded-full bg-gradient1 py-3 px-3 text-center text-sm font-bold text-white flex items-center justify-center chapter6">
                <span className="">
                  6.
                  <br />
                  Compliance
                </span>
              </div>
              <div className="chapter-cs w-32 h-32 absolute left-2/4 top-2/4 rounded-full bg-gradient1 py-3 px-3 text-center text-sm font-bold text-white flex items-center justify-center chapter7">
                <span className="">
                  7.
                  <br />
                  Partners / Suppliers
                </span>
              </div>
              <div className="chapter-cs w-32 h-32 absolute left-2/4 top-2/4 rounded-full bg-gradient1 py-3 px-3 text-center text-sm font-bold text-white flex items-center justify-center chapter8">
                <span className="">
                  8.
                  <br />
                  Data/ICT
                </span>
              </div>
              <div className="chapter-cs w-32 h-32 absolute left-2/4 top-2/4 rounded-full bg-gradient1 py-3 px-3 text-center text-sm font-bold text-white flex items-center justify-center chapter9">
                <span className="">
                  9.
                  <br />
                  Customer Value & Social Impact
                </span>
              </div>
              <div className="chapter-cs w-32 h-32 absolute left-2/4 top-2/4 rounded-full bg-gradient1 py-3 px-3 text-center text-sm font-bold text-white flex items-center justify-center chapter10">
                <span className="">
                  10.
                  <br />
                  Innovation
                </span>
              </div>
              <div className="head-goal col-span-2 center-content absolute left-2/4 top-2/4 translate-x-n1/2 translate-y-n1/2 p-2 w-40 h-40 flex items-center justify-center bg-gradient1 rounded-full text-white text-2xl text-center font-bold">
                Our
                <br />
                Pillars
              </div>
            </div>
          </div>
        </div>
        <img
          src="assets/images/circle.png"
          className="circle-shape absolute top-0 right-0 rotate-180"
        />
      </section>
      <section className="bg-lightblue">
        <div className="container mx-auto py-20 px-4">
          <div className="text-center max-w-screen-md mx-auto">
            <h2 className="xl:text-5xl md:text-4xl text-2xl font-bold mb-10 leading-tight">
              What makes{" "}
              <span className="bg-gradient1 text-clip">HumanSwitch.ai</span>{" "}
              unique?
            </h2>
          </div>
          <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 text-center gap-6 items-center">
            <div className="col-item h-full uniqe-item">
              <div className="col-inner shadow-lg h-full p-6 rounded-xl bg-white hover:bg-gradient1 transition-all hover:transition-all hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  className="mx-auto mb-6"
                  width="50"
                  height="50"
                  x="0"
                  y="0"
                  viewBox="0 0 512 512"
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      d="M402 426c-16.753 0-31.124 10.356-37.071 25H330v30h34.929c5.947 14.644 20.318 25 37.071 25 22.056 0 40-17.944 40-40s-17.944-40-40-40zM472 341a39.736 39.736 0 0 0-18.256 4.427l-37.141-30.951A15.003 15.003 0 0 0 407 311h-77v30h71.569l32.565 27.138A39.805 39.805 0 0 0 432 381c0 22.056 17.944 40 40 40s40-17.944 40-40-17.944-40-40-40zM472 216c-16.753 0-31.124 10.356-37.071 25H330v30h104.929c5.947 14.644 20.318 25 37.071 25 22.056 0 40-17.944 40-40s-17.944-40-40-40zM416.603 197.523l37.141-30.951A39.724 39.724 0 0 0 472 171c22.056 0 40-17.944 40-40s-17.944-40-40-40-40 17.944-40 40c0 4.5.758 8.823 2.134 12.862L401.569 171H330v30h77c3.509 0 6.907-1.23 9.603-3.477zM402 86c22.056 0 40-17.944 40-40S424.056 6 402 6c-16.753 0-31.124 10.356-37.071 25H330v30h34.929c5.947 14.644 20.318 25 37.071 25zM150 256c0 57.897 47.103 105 105 105 16.095 0 31.353-3.645 45-10.145v-189.71c-13.647-6.5-28.905-10.145-45-10.145-57.897 0-105 47.103-105 105z"
                      fill="currentColor"
                      opacity="1"
                      data-original="currentColor"
                    ></path>
                    <path
                      d="M285 1h-60c-8.284 0-15 6.716-15 15v19.525a225.064 225.064 0 0 0-79.076 32.759l-13.81-13.809c-5.858-5.858-15.355-5.858-21.213 0L53.475 96.901c-5.858 5.857-5.858 15.355 0 21.213l13.809 13.81A225.064 225.064 0 0 0 34.525 211H15c-8.284 0-15 6.716-15 15v60c0 8.284 6.716 15 15 15h19.525a225.076 225.076 0 0 0 32.759 79.077l-13.81 13.81a14.999 14.999 0 0 0 0 21.211l42.427 42.427c5.858 5.858 15.355 5.858 21.213 0l13.81-13.809A225.082 225.082 0 0 0 210 476.475V496c0 8.284 6.716 15 15 15h60c8.284 0 15-6.716 15-15V383.278c-14.082 4.994-29.227 7.722-45 7.722-74.439 0-135-60.561-135-135s60.561-135 135-135c15.773 0 30.918 2.728 45 7.722V16c0-8.284-6.716-15-15-15z"
                      fill="currentColor"
                      opacity="1"
                      data-original="currentColor"
                      className=""
                    ></path>
                  </g>
                </svg>
                <h3 className="xl:text-2xl text-xl font-bold mb-3 leading-6">
                  Integration of our registered Human Centrix AI Business Model®
                </h3>
                <p className="mb-0 leading-relaxed md:text-base text-sm">
                  We help your SME effectively integrate our registered Human
                  Centrix AI Business Model® into your processes, vision, and
                  strategy, turning technology into a natural extension of your
                  team.
                </p>
              </div>
            </div>
            <div className="col-item h-full uniqe-item">
              <div className="col-inner shadow-lg h-full p-6 rounded-xl bg-white hover:bg-gradient1 transition-all hover:transition-all hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  className="mx-auto mb-6"
                  width="50"
                  height="50"
                  x="0"
                  y="0"
                  viewBox="0 0 512 512"
                  xmlSpace="preserve"
                >
                  <g>
                    <g transform="matrix(1.06,0,0,1.06,-15.360000000000014,-15.359994506835903)">
                      <path
                        fill-rule="evenodd"
                        d="m454.618 291.596-45.445-45.445h-48.602a21.465 21.465 0 0 0-3.566-14h55.066a6.978 6.978 0 0 1 4.949 2.051l47.496 47.496a21.725 21.725 0 0 1 9.665-2.254c12.05 0 21.818 9.768 21.818 21.818s-9.768 21.818-21.818 21.818-21.818-9.769-21.818-21.818a21.727 21.727 0 0 1 2.255-9.666zm-176.08 22.906.135-128.171c.01-13.117-10.72-23.855-23.835-23.863-13.111-.008-23.855 10.716-23.862 23.832l.018 184.926c-20.73-6.891-31.593-4.215-39.112 7.273-8.471 12.943-5.249 30.025 7.275 39.111 54.428 39.495 57.094 59.445 123.171 63.228 56.703 3.247 99.801-42.847 99.947-95.41l-.568-71.709c.011-13.116-10.719-23.854-23.834-23.861-13.111-.009-23.855 10.714-23.846 23.847.026-13.101-10.704-23.838-23.819-23.847-13.112-.008-23.855 10.715-23.851 23.847.022-13.102-10.711-23.837-23.824-23.847-13.109-.009-24.059 11.529-23.995 24.644zm83.742-118.615a7.472 7.472 0 0 0 7.472-7.472v-22.749a7.472 7.472 0 0 0-7.472-7.472c-22.401 0-33.64-27.139-17.801-42.978a7.473 7.473 0 0 0 0-10.568l-16.087-16.087a7.473 7.473 0 0 0-10.568 0c-15.839 15.839-42.978 4.599-42.978-17.802a7.472 7.472 0 0 0-7.472-7.472h-22.749a7.472 7.472 0 0 0-7.472 7.472c0 22.401-27.139 33.641-42.977 17.802a7.472 7.472 0 0 0-10.567 0l-16.087 16.087a7.473 7.473 0 0 0 0 10.568c15.839 15.839 4.599 42.978-17.802 42.978a7.472 7.472 0 0 0-7.472 7.472v22.749a7.472 7.472 0 0 0 7.472 7.472c22.401 0 33.641 27.139 17.802 42.977a7.473 7.473 0 0 0 0 10.568l16.087 16.087a7.472 7.472 0 0 0 10.567 0c6.578-6.578 15.094-8.492 22.808-6.882l-.004-42.01c-10.227-10.081-16.568-24.093-16.568-39.587 0-30.701 24.888-55.589 55.589-55.589s55.589 24.888 55.589 55.589c0 16.665-7.335 31.615-18.95 41.803l-.043 40.443c8.313-2.598 17.96-1.035 25.228 6.233a7.473 7.473 0 0 0 10.568 0l16.087-16.087a7.473 7.473 0 0 0 0-10.568c-15.84-15.839-4.601-42.977 17.8-42.977zM59.637 52.818c0 3.471-.812 6.752-2.254 9.666l45.445 45.445h48.602a21.465 21.465 0 0 0 3.566 14H99.929a6.98 6.98 0 0 1-4.949-2.051L47.484 72.383a21.73 21.73 0 0 1-9.666 2.254C25.768 74.637 16 64.868 16 52.818 16 40.769 25.768 31 37.818 31s21.819 9.769 21.819 21.818zM91.365 170.04c-2.917-8.616-11.07-14.818-20.671-14.818-12.05 0-21.818 9.768-21.818 21.818s9.768 21.818 21.818 21.818c9.601 0 17.754-6.202 20.671-14.818h36.882v-14zM59.636 301.261c0 12.05-9.768 21.818-21.818 21.818S16 313.311 16 301.261s9.768-21.818 21.818-21.818c3.471 0 6.752.812 9.665 2.254l47.496-47.496a6.976 6.976 0 0 1 4.949-2.05l55.065-.001a21.464 21.464 0 0 0-3.565 14h-48.602l-45.445 45.445a21.706 21.706 0 0 1 2.255 9.666zM452.363 52.818c0-12.05 9.769-21.818 21.818-21.818C486.231 31 496 40.769 496 52.818c0 12.05-9.769 21.819-21.819 21.819-3.471 0-6.752-.812-9.665-2.254l-47.496 47.496a6.976 6.976 0 0 1-4.949 2.05l-55.066.001a21.471 21.471 0 0 0 3.566-14h48.602l45.444-45.445a21.737 21.737 0 0 1-2.254-9.667zM420.635 170.04c2.917-8.616 11.07-14.818 20.671-14.818 12.05 0 21.818 9.768 21.818 21.818s-9.768 21.818-21.818 21.818c-9.601 0-17.754-6.202-20.671-14.818h-36.883v-14z"
                        clip-rule="evenodd"
                        fill="currentColor"
                        opacity="1"
                        data-original="currentColor"
                      ></path>
                    </g>
                  </g>
                </svg>
                <h3 className="xl:text-2xl text-xl font-bold mb-3 leading-6">
                  Democratization of AI Transformation
                </h3>
                <p className="mb-0 leading-relaxed md:text-base text-sm">
                  Scalable pricing models make advanced AI advice and AI
                  guidance accessible to all SMEs, regardless of size, ensuring
                  everyone has access to all functionalities.
                </p>
              </div>
            </div>
            <div className="col-item h-full uniqe-item">
              <div className="col-inner shadow-lg h-full p-6 rounded-xl bg-white hover:bg-gradient1 transition-all hover:transition-all hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  className="mx-auto mb-6"
                  width="50"
                  height="50"
                  x="0"
                  y="0"
                  viewBox="0 0 512 512"
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      fill-rule="evenodd"
                      d="M417.9 217.609h9.48l9.057 65.259-13.8 16.454-13.792-16.454 9.057-65.259zm-39.8-73.462a44.54 44.54 0 1 1 44.535 44.53 44.584 44.584 0 0 1-44.535-44.53zm-96.834 209.718L256 384l-25.274-30.139 14.4-103.752h21.742l14.4 103.752zM184.73 150.337A71.273 71.273 0 1 1 256 221.634a71.333 71.333 0 0 1-71.273-71.3zM84.621 217.609H94.1l9.057 65.259-13.8 16.454-13.8-16.454 9.057-65.259zm-39.795-73.462a44.535 44.535 0 1 1 44.535 44.53 44.581 44.581 0 0 1-44.535-44.53zm-4.161 189.289h66.578a145.536 145.536 0 0 1 59.041-76.983 82.683 82.683 0 0 0-54.759-37.435l9.057 65.26a8.6 8.6 0 0 1-1.912 6.692L95.9 318.09a8.5 8.5 0 0 1-13.077 0l-22.776-27.12a8.619 8.619 0 0 1-1.912-6.692l9.062-65.31A82.327 82.327 0 0 0 0 299.725v33.711h23.673a6.173 6.173 0 0 1-.04-.7v-42.773a8.534 8.534 0 1 1 17.068 0v42.769c0 .251-.016.5-.036.7zm354.013 99.475v-54.995c0-64.556-48.142-118.092-110.408-126.646l14.426 104a8.569 8.569 0 0 1-1.917 6.693l-34.24 40.805a8.5 8.5 0 0 1-13.078 0l-34.245-40.805a8.608 8.608 0 0 1-1.912-6.693l14.426-104c-62.271 8.554-110.413 62.09-110.413 126.646v55H163.4a8.362 8.362 0 0 1-1.942-5.384v-64.3a8.534 8.534 0 1 1 17.067 0v64.3a8.381 8.381 0 0 1-1.932 5.384H335.4a8.409 8.409 0 0 1-1.932-5.384v-64.3a8.536 8.536 0 1 1 17.072 0v64.3a8.362 8.362 0 0 1-1.942 5.384zM512 333.436v-33.711a82.331 82.331 0 0 0-67.2-80.757l9.067 65.31a8.583 8.583 0 0 1-1.917 6.692l-22.773 27.12a8.5 8.5 0 0 1-13.077 0l-22.763-27.12a8.567 8.567 0 0 1-1.922-6.692l9.057-65.26a82.662 82.662 0 0 0-54.754 37.435 145.585 145.585 0 0 1 59.041 76.983h66.581c-.02-.2-.046-.453-.046-.7v-42.773a8.534 8.534 0 1 1 17.067 0v42.769c0 .251-.009.5-.029.7z"
                      fill="currentColor"
                      opacity="1"
                      data-original="currentColor"
                    ></path>
                  </g>
                </svg>
                <h3 className="xl:text-2xl text-xl font-bold mb-3 leading-6">
                  Network of experts
                </h3>
                <p className="mb-0 leading-relaxed md:text-base text-sm">
                  Access to an ecosystem of top AI specialists for unparalleled
                  advice and support.
                </p>
              </div>
            </div>
            <div className="col-item h-full uniqe-item">
              <div className="col-inner shadow-lg h-full p-6 rounded-xl bg-white hover:bg-gradient1 transition-all hover:transition-all hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="50"
                  height="50"
                  className="mx-auto mb-6"
                  x="0"
                  y="0"
                  viewBox="0 0 32 32"
                  xmlSpace="preserve"
                >
                  <g transform="matrix(1.1199999999999992,0,0,1.1199999999999992,-1.9199999999999875,-1.920072669982897)">
                    <path
                      d="M12 18c0-2.206-1.794-4-4-4s-4 1.794-4 4 1.794 4 4 4 4-1.794 4-4z"
                      fill="currentColor"
                      opacity="1"
                      data-original="currentColor"
                    ></path>
                    <path
                      d="M11.034 22H4.966A2.965 2.965 0 0 0 2 24.958V29a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-4.042C14 23.328 12.67 22 11.034 22zM22 24.188V29a.999.999 0 0 0 1.707.707L25 28l1.293 1.707A1 1 0 0 0 28 29v-4.812a5.956 5.956 0 0 1-6 0zM25 14c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
                      fill="currentColor"
                      opacity="1"
                      data-original="currentColor"
                    ></path>
                    <path
                      d="M22.441 13.58C22.796 12.49 23 11.314 23 10a1 1 0 0 0-.684-.949L20 8.28V6c0-2.206-1.794-4-4-4s-4 1.794-4 4v2.28l-2.316.771A1 1 0 0 0 9 10c0 1.177.165 2.243.45 3.24C11.498 13.866 13 15.751 13 18c0 .234-.038.457-.069.683.329.313.672.622 1.038.926l1.39 1.16a.997.997 0 0 0 1.281 0l1.39-1.16c.347-.288.67-.581.984-.877a6 6 0 0 1 3.427-5.151zM14 6c0-1.103.897-2 2-2s2 .897 2 2v1.612l-1.684-.56a1.002 1.002 0 0 0-.632 0L14 7.611zm4.895 5.447-2 4a1.002 1.002 0 0 1-1.602.26l-2-2a1 1 0 1 1 1.414-1.414l1.019 1.019 1.38-2.76a1 1 0 1 1 1.79.895z"
                      fill="currentColor"
                      opacity="1"
                      data-original="currentColor"
                    ></path>
                  </g>
                </svg>
                <h3 className="xl:text-2xl text-xl font-bold mb-3 leading-6">
                  Trust and authority
                </h3>
                <p className="mb-0 leading-relaxed md:text-base text-sm">
                  We are proud to collaborate with the{" "}
                  <strong>European Enterprise Network</strong> of the EU, which
                  gives our platform a recognized status across Europe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-darkblue text-white">
        <div className="container mx-auto px-4 py-10">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-6 items-center text-center md:text-left">
            <div className="col-span-2">
              <h2 className="xl:text-5xl md:text-4xl text-2xl font-bold mb-4 leading-tight">
                Learn more and connect
              </h2>
              <p className="title pb-0 w-full leading-relaxed md:text-base text-sm">
                Discover more about our vision and your opportunities by
                connecting with me, Rob Boeyink{" "}
              </p>
            </div>
            <div className="col-span-1 text-center md:text-right">
              <a
                href="https://www.linkedin.com/in/robboeyink/"
                className="md:me-0 mx-auto inline-flex select-none items-center gap-3 rounded-lg bg-gradient1 py-4 px-6 text-center align-middle font-sans text-lg font-bold text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                data-ripple-light="true"
              >
                LinkedIn
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className="h-5 w-5"
                  x="0"
                  y="0"
                  viewBox="0 0 176 176"
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      d="M152 0H24A24 24 0 0 0 0 24v128a24 24 0 0 0 24 24h128a24 24 0 0 0 24-24V24a24 24 0 0 0-24-24zM60 139.28a3.71 3.71 0 0 1-3.71 3.72H40.48a3.71 3.71 0 0 1-3.72-3.72V73a3.72 3.72 0 0 1 3.72-3.72h15.81A3.72 3.72 0 0 1 60 73zM48.38 63a15 15 0 1 1 15-15 15 15 0 0 1-15 15zm94.26 76.54a3.41 3.41 0 0 1-3.42 3.42h-17a3.41 3.41 0 0 1-3.42-3.42v-31.05c0-4.64 1.36-20.32-12.13-20.32-10.45 0-12.58 10.73-13 15.55v35.86A3.42 3.42 0 0 1 90.3 143H73.88a3.41 3.41 0 0 1-3.41-3.42V72.71a3.41 3.41 0 0 1 3.41-3.42H90.3a3.42 3.42 0 0 1 3.42 3.42v5.78c3.88-5.83 9.63-10.31 21.9-10.31 27.18 0 27 25.38 27 39.32z"
                      data-name="Layer 2"
                      fill="currentColor"
                      opacity="1"
                      data-original="currentColor"
                    ></path>
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
