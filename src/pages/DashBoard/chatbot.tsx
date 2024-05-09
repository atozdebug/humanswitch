const Chatbot = () => {
  return (
    <div className="bg-gray-100 min-h-screen ">
      <div className="p-8 bg-[#F6F8FA]">
        <div className="main-sec">
          <div className="bg-image">
           
          </div>
          <div className=" text-center content-img mt-[-140px] mb-10">
              <h2 className="font-semibold text-[32px]">
                HumanSwitch AI Advisor
              </h2>
              <p className="text-base font-normal pt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

          <div className="grid grid-cols-3">
            <div>
              <div className="text-center">
                <img className="m-auto my-1 max-w-8 max-h-8" src="/assets/images/Chats-r.png" />
                <h2 className="font-semibold text-2xl">Examples</h2>
                <p className="bg-white p-4 mx-3 rounded-lg mt-6 text-sm font-normal">
                  "Explain quantum computing insimple terms"
                </p>
              </div>

              <div className="text-center">
                <p className="bg-white p-4 mx-3 rounded-lg mt-6 text-sm font-normal">
                  "Got any creative ideas for a 10year old's birthday?"
                </p>
              </div>
              <div className="text-center">
                <p className="bg-white p-4 mx-3 rounded-lg mt-6 text-sm font-normal">
                  "How do I make an HTTP requestin Javascript?"
                </p>
              </div>
            </div>

            <div className="">
              <div>
                <div className="text-center">
                  <img
                    className="m-auto my-1 max-w-8 max-h-8 "
                    src="/assets/images/Star-s.png"
                  />
                  <h2 className="font-semibold text-2xl">Capabilities</h2>
                  <p className="bg-white p-4 mx-3 rounded-lg mt-6 text-sm font-normal">
                    Remembers what user saidearlier in the conversation.
                  </p>
                </div>

                <div className="text-center">
                  <p className="bg-white p-4 mx-3 rounded-lg mt-6 text-sm font-normal">
                    Allows user to provide follow-up corrections.
                  </p>
                </div>
                <div className="text-center">
                  <p className="bg-white p-4 mx-3 rounded-lg mt-6 text-sm font-normal">
                    Trained to decline inappropriate requests.
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div>
                <div className="text-center">
                  <img
                    className="m-auto my-1 max-w-8 max-h-8"
                    src="/assets/images/ShieldWarning-r.png"
                  />
                  <h2 className="font-semibold text-2xl">Limitations</h2>
                  <p className="bg-white p-4 mx-3 rounded-lg mt-6 text-sm font-normal">
                    May occasionally generate incorrect information.
                  </p>
                </div>

                <div className="text-center">
                  <p className="bg-white p-4 mx-3 rounded-lg mt-6 text-sm font-normal">
                    May occasionally produce harmful instructions or biased
                    content.
                  </p>
                </div>
                <div className="text-center">
                  <p className="bg-white p-4 mx-3 rounded-lg mt-6 text-sm font-normal">
                    Limited knowledge of world andevents after 2021.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="relative mt-5">
            <div className="absolute top-0  ">
              <img
                className="max-w-10 max-h-10 border-r border-[#E2E4E9] mt-1"
                src="/assets/images/button-01.png"
              />{" "}
            </div>
            <input
              type="text"
              placeholder="Ask me anything"
              className="border border-[#E2E4E9]   rounded-md py-2 lft-space2 focus:outline-none w-full focus:border-blue-500 placeholder-gray-500"
            />
            <div className="absolute top-0 right-0  ">
              <img
                className="max-w-10 max-h-10 border-l border-[#E2E4E9] mt-1"
                src="/assets/images/addon-button.png"
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
