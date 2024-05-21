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
import { useLocation, useNavigate } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleLogout,
  selectTheme,
} from "../services/slices/activity/activitySlice";
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
  {
    name: "Log Out",
    icon: <ManageAccountsIcon />,
    navigateTo: "/account",
  },
];

const SideBar = () => {
  const dispatch: any = useDispatch();
  const navigate: any = useNavigate();
  const isDark: any = useSelector((state: any) => state.activity.isDark);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleTheme = () => {
    dispatch(selectTheme(!isDark));
  };

  const location = useLocation();
  const getBasePath = (pathname: any) => {
    const parts = pathname.split("/");
    return `/${parts[1]}`;
  };

  const logout = async () => {
    localStorage.clear();
    navigate("/loginhr");
    await dispatch(handleLogout(true));
  };

  return (
    <div
      className={`max-h-100vh w-272px sidebar-main ${
        isSidebarOpen ? "menu-open" : "menu-closed"
      }`}
    >
      <div
        className={`${
          isDark ? "bg-black text-white" : "bg-white"
        }  relative h-full overflow-y-auto border-r border-[#E2E4E9] flex justify-between flex-col lft-nav`}
      >
        <div className="pt-0 pb-4">
          <div className="px-6">
            <div className="flex items-center justify-between border-b py-4">
              <div className="">
                <img
                  src="/assets/images/human-logo.png"
                  width={170}
                  height={59}
                />
              </div>
              <div
                className={`menu-bar cursor-pointer ${
                  isSidebarOpen ? "menu-bar-open" : "menu-bar-closed"
                }`}
                onClick={toggleSidebar}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="32"
                  height="32"
                  x="0"
                  y="0"
                  viewBox="0 0 384 384"
                  xmlSpace="preserve"
                  className={`${isSidebarOpen ? "hidden" : ""}`}
                >
                  <rect
                    width="384"
                    height="384"
                    rx="76.8"
                    ry="76.8"
                    fill="#375dfb"
                    shapeRendering="rounded"
                    transform="matrix(0.99,0,0,0.99,1.920000000000016,1.920000000000016)"
                  ></rect>
                  <g transform="matrix(0.6999999999999996,0,0,0.6999999999999996,57.600000000000165,91.5998001098634)">
                    <path
                      d="M368 154.668H16c-8.832 0-16-7.168-16-16s7.168-16 16-16h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zM368 32H16C7.168 32 0 24.832 0 16S7.168 0 16 0h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zM368 277.332H16c-8.832 0-16-7.168-16-16s7.168-16 16-16h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 0"
                      fill="#ffffff"
                      opacity="1"
                      data-original="#000000"
                    ></path>
                  </g>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="32"
                  height="32"
                  x="0"
                  y="0"
                  viewBox="0 0 22.88 22.88"
                  xmlSpace="preserve"
                  className={`${isSidebarOpen ? "" : "hidden"}`}
                >
                  <rect
                    width="22.88"
                    height="22.88"
                    rx="4.576"
                    ry="4.576"
                    fill="#375dfb"
                    shapeRendering="rounded"
                    transform="matrix(0.99,0,0,0.99,0.11439999580383287,0.11439999580383287)"
                  ></rect>
                  <g transform="matrix(0.6199999999999998,0,0,0.6199999999999998,4.347049638628961,4.347389466070457)">
                    <path
                      d="M.324 1.909a1.14 1.14 0 0 1 0-1.587 1.14 1.14 0 0 1 1.587 0l9.523 9.539L20.973.322a1.12 1.12 0 0 1 1.571 0 1.112 1.112 0 0 1 0 1.587l-9.523 9.524 9.523 9.539a1.112 1.112 0 0 1 0 1.587 1.12 1.12 0 0 1-1.571 0l-9.539-9.539-9.523 9.539a1.14 1.14 0 0 1-1.587 0c-.429-.444-.429-1.159 0-1.587l9.523-9.539L.324 1.909z"
                      fill="#ffffff"
                      data-original="#1e201d"
                      opacity="1"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>

          <div className="pt-20px">
            <div className="font-light px-20px">MAIN</div>
            {sideBarItems.map((item, index) => {
              const basePath = getBasePath(location.pathname);
              const basePathMain = getBasePath(item.navigateTo);

              const isActive = basePathMain === basePath;
              return (
                <a
                  key={index}
                  href={`${item.navigateTo}`}
                  className={`top px-2 hover:bg-bg-clr font-regular rounded-lg hover:text-main-heading text-gray-dark flex items-center gap-2 my-2 relative ${
                    isActive
                      ? " text-main-heading px-20px"
                      : "py-2 mx-20px hover:bg-lightgray "
                  }`}
                >
                  {isActive && (
                    <div className="absolute top-2 -left-4">
                      <div className=" bg-[#375DFB] rounded-md px-2">.</div>
                    </div>
                  )}
                  <div
                    className={`flex w-full items-center rounded-lg ${
                      isActive && "bg-lightgray text-main-heading py-2 px-2"
                    }`}
                  >
                    <div className={`px-2 ${isActive && "text-[#375DFB]"}`}>
                      {item.icon}
                    </div>
                    <div className="menu-item-text">{item.name}</div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
        {/* ------------------------------------------------------------- */}
        <div className="bottom pt-4 px-20px">
          {bottomSidebarItems.map((item, index) => (
            <div
              key={index}
              className="top px-20px py-2 hover:bg-lightgray rounded-lg hover:tex-main-heading flex items-center gap-2 my-2"
              onClick={() => logout()}
            >
              {item.icon}
              <div className="menu-item-text">{item.name}</div>
            </div>
          ))}

          <div className="my-5 day-night-btns">
            <input
              checked={isDark} // Use checked attribute for checkbox input
              onChange={toggleTheme}
              type="checkbox"
              className="checkbox hidden"
              id="checkbox"
            />
            <label
              htmlFor="checkbox"
              className="checkbox-label"
              style={{ backgroundColor: isDark ? "white" : "black" }}
            >
              <div className="relative rounded-lg min-w-28  text-center">
                <span>
                  <LightModeIcon
                    className={`m-auto relative z-10 ${
                      isDark ? "text-black" : ""
                    }`}
                  />
                </span>
              </div>
              <div className=" m-auto">
                <span>
                  <NightsStayIcon
                    className={`m-auto relative z-10 ${
                      isDark ? "text-white" : "text-white"
                    }`}
                  />
                </span>
              </div>

              <span
                className="ball"
                style={{ backgroundColor: isDark ? "black" : "white" }}
              ></span>
            </label>
          </div>
          {/* -------------------------------------------------------------- */}
          {/* -------------------------------------------------------------- */}
          <div className="flex justify-between items-center px-0 py-6 border-t">
            <div className="profile-imagee">
              <img className="max-w-[40px]" src="/assets/images/Avatar.png" />
            </div>
            <div className="profile-content">
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
