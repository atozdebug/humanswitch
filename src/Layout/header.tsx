import SmartToyIcon from "@mui/icons-material/SmartToy";
import { useLocation } from "react-router-dom";

const headers = [
  {
    path: "/dashboard",
    name: "Dashboard",
    description: "Dashboard Page",
  },
  {
    path: "/reports",
    name: "Reports",
    description: "Reports Page",
  },
  {
    path: "/chatbot",
    name: "ChatBot",
    description: "A short description of the chatbot and its capabilities",
  },
  {
    path: "/integrations",
    name: "Integrations",
    description: "Integrations Page",
  },
  {
    path: "/users",
    name: "Users",
    description: "Users Page",
  },
  {
    path: "/settings",
    name: "Settings",
    description: "Settings Page",
  },
];

const Header = () => {
  const location = useLocation();

  const getBasePath = (pathname: any) => {
    const parts = pathname.split("/");
    return `/${parts[1]}`;
  };

  const title = headers.find(
    (header) => header.path === getBasePath(location.pathname)
  );

  return (
    <div className="bg-white shadow-sm py-4">
      <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 flex items-center justify-between">
        <div className="flex justify-center items-center ml-6">
          <span className="bg-[#F6F8FA] p-2 rounded-full">
            <SmartToyIcon />
          </span>
          <div className="px-4">
            <h2 className="text-heading text-lg font-medium">{title?.name}</h2>
            <p>{title?.description}</p>
          </div>
        </div>

        <div className=" rounded-lg p-4 mr-6 flex justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
