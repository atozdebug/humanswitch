const Profile = () => {
  return (
    <div className="flex">
      <div className="w-[400px] flex flex-col justify-center items-center pt-10 border-r-2">
        <div className="p-8 rounded-full bg-green-400 h-32 w-32"></div>
        <div className="mt-2">Name</div>
        <div className="mt-2">Email</div>
      </div>
      <div className="w-full items-center">
        <div className="flex justify-center mb-6 text-3xl font-semibold">
          Profile Settings
        </div>
        <div className="flex w-full justify-around">
          <div className="flex flex-col">
            <div>First Name</div>
            <input
              className={`shadow appearance-none border border-slate-300 rounded w-full py-2 pl-2 text-input-text leading-tight focus:outline-none focus:shadow-outline`}
              id="current_password"
              type={"text"}
              placeholder="John"
            />
            <div className="mt-6 flex flex-col">
              <div className="">Phone No</div>
              <input
                className={`shadow appearance-none border border-slate-300 rounded w-full py-2 pl-2 text-input-text leading-tight focus:outline-none focus:shadow-outline`}
                id="current_password"
                type={"text"}
                placeholder="9002033010"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div>Last Name</div>
            <input
              className={`shadow appearance-none border border-slate-300 rounded w-full py-2 pl-2 text-input-text leading-tight focus:outline-none focus:shadow-outline`}
              id="current_password"
              type={"text"}
              placeholder="Adams"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
