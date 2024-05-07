import DashboardIcon from "@mui/icons-material/Dashboard";
import AssessmentIcon from "@mui/icons-material/Assessment";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import TuneIcon from "@mui/icons-material/Tune";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import LightModeIcon from "@mui/icons-material/LightMode";
import VerifiedIcon from "@mui/icons-material/Verified";
import { useLocation } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";

let sideBarItems = [
  {
    name: "Dashboard",
    icon: <DashboardIcon />,
    navigateTo: "/dashboard",
  },
  {
    name: "My Reports",
    icon: <AssessmentIcon />,
    navigateTo: "/reports",
  },
  {
    name: "AI Advisor",
    icon: <FaceRetouchingNaturalIcon />,
    navigateTo: "/chatbot",
  },
  {
    name: "Integrations",
    icon: <TuneIcon />,
    navigateTo: "/integrations",
  },
  {
    name: "Users",
    icon: <PeopleAltIcon />,
    navigateTo: "/users",
  },
  {
    name: "Settings",
    icon: <SettingsIcon />,
    navigateTo: "/settings/profile",
  },
];

let bottomSidebarItems = [
  {
    name: "My Account",
    icon: <ManageAccountsIcon />,
    navigateTo: "/account",
  },
  {
    name: "Support",
    icon: <HeadsetMicIcon />,
    navigateTo: "/support",
  },
];

const SideBar = () => {
  const location = useLocation();
  const getBasePath = (pathname: any) => {
    const parts = pathname.split("/");
    return `/${parts[1]}`;
  };
  return (
    <div>
      <div className="bg-white relative h-full w-72 overflow-y-auto border-r border-[#E2E4E9] flex justify-between flex-col lft-nav">
        <div className="py-4">
          <div className="flex items-center gap-2 border-b pb-5 px-6">
            <div>
              <img
                src="/assets/images/Logo-favicon.png"
                height={40}
                width={40}
              />
            </div>
            <div className="flex flex-col justify-center">
              <text className="text-lg font-semibold">HumanSwitch.ai</text>
              <text className="text-sm">HR Management</text>
            </div>
          </div>

          <div className="mt-6">
            <div className="font-light px-6">MAIN</div>
            {sideBarItems.map((item) => {
              const basePath = getBasePath(location.pathname);
              const basePathMain = getBasePath(item.navigateTo);

              const isActive = basePathMain === basePath;
              return (
                <a
                  href={`${item.navigateTo}`}
                  className={`top  hover:bg-bg-clr hover:font-medium rounded-lg  flex items-center gap-2 my-2 relative ${
                    isActive
                      ? " font-semibold px-6"
                      : "py-2 mx-6 hover:bg-gray-200"
                  }`}
                >
                  {isActive && (
                    <div className="absolute top-2 -left-4">
                      <div className=" bg-[#375DFB] rounded-md px-2">.</div>
                    </div>
                  )}
                  <div
                    className={`flex w-full items-center  rounded-lg ${
                      isActive && "bg-gray-200 py-2"
                    }`}
                  >
                    <div className={`px-2 ${isActive && "text-[#375DFB]"}`}>
                      {item.icon}
                    </div>
                    <div>{item.name}</div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
        {/* ------------------------------------------------------------- */}
        <div className="bottom py-4 px-6">
          {bottomSidebarItems.map((item) => (
            <div className="top px-2 py-2 hover:bg-bg-clr hover:font-medium rounded-lg hover:bg-gray-200 flex items-center gap-2 my-2">
              {item.icon}
              {item.name}
            </div>
          ))}

          <div className="my-5">
            <input type="checkbox" className="checkbox hidden" id="checkbox" />
            <label htmlFor="checkbox" className="checkbox-label">
              <div className="relative rounded-lg min-w-28 bg-[#cee6ff]">
                <span>
                  <LightModeIcon className="m-auto relative z-10" />
                </span>
              </div>
              <div className="bg-[#cee6ff] m-auto">
                <span>
                  <NightsStayIcon className="m-auto relative z-10" />
                </span>
              </div>

              <span className="ball"></span>
            </label>
          </div>
          {/* -------------------------------------------------------------- */}
          {/* -------------------------------------------------------------- */}
          <div className="flex justify-between items-center p-2">
            <div>
              <img className="max-w-[40px]" src="/assets/images/Avatar.png" />
            </div>
            <div className="">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium md:text-sm">Sophia Williams </p>
                </div>
                <div>
                  <VerifiedIcon className="text-blue-600" />
                </div>
              </div>
              <p className=" font-normal md:text-xs ">sophia@humanswitch.ai</p>
            </div>
            <div>
              <img src="/assets/images/arrow-right-s-line.png" />
            </div>
          </div>
        </div>
        {/*-------------------------------------------------------------------------------- */}
      </div>
    </div>
  );
};

export default SideBar;
