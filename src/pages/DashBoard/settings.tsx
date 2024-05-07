import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PasswordIcon from "@mui/icons-material/Password";
import RestorePageIcon from "@mui/icons-material/RestorePage";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SecurityIcon from "@mui/icons-material/Security";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
// import LockIcon from "@mui/icons-material/Lock";
// import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
// import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate, useParams } from "react-router-dom";
import ChangePassword from "../../components/Settings/changePassword";
import PrivacySecurity from "../../components/Settings/privacySecurity";
import DeleteAccount from "../../components/Settings/deleteAccount";

const tabs = [
  {
    name: "Profile",
    icon: <AccountBoxIcon />,
  },
  {
    name: "Change Password",
    icon: <PasswordIcon />,
  },
  {
    name: "Invoice History",
    icon: <RestorePageIcon />,
  },
  {
    name: "Notification Settings",
    icon: <NotificationsIcon />,
  },
  {
    name: "Privacy & Security",
    icon: <SecurityIcon />,
  },
  {
    name: "Delete Account",
    icon: <DeleteForeverIcon />,
  },
];

// const menueList = [
//   {
//     name: "Change Password",
//     icon: <LockIcon />,
//   },
//   {
//     name: "2FA Security",
//     icon: <SecurityIcon />,
//   },
//   {
//     name: "Delete Account",
//     icon: <DeleteOutlineIcon />,
//   },
// ];

const Settings = () => {
  // const [selected, setSelected] = useState("Change Password");
  const { tab }: any = useParams();
  const navigate: any = useNavigate();
  const tabIndexMap: any = {
    profile: 0,
    "change-password": 1,
    "invoice-history": 2,
    "notification-settings": 3,
    "privacy-security": 4,
    "delete-account": 5,
  };

  const initialSelectedTab =
    tabIndexMap[tab] !== undefined ? tabIndexMap[tab] : 0;

  const [selectedTab, setSelectedTab] = useState(initialSelectedTab);

  // Handle tab change
  const handleChange = (_event: any, newValue: any) => {
    setSelectedTab(newValue);
    const tabName = Object.keys(tabIndexMap).find(
      (key: any) => tabIndexMap[key] === newValue
    );
    if (tabName) {
      navigate(`/settings/${tabName}`);
    }
  };

  return (
    <div>
      <div className="bg-gray-100 min-h-screen">
        <div className=" bg-[#F6F8FA]">
          <Tabs value={selectedTab} onChange={handleChange}>
            {tabs.map((tab, index) => (
              <Tab
                sx={{ paddingY: 0 }}
                key={index}
                label={tab.name}
                icon={tab.icon}
                iconPosition="start"
              />
            ))}
          </Tabs>

          <div className="flex">
            {/* <div>
              <Card
                variant="outlined"
                className="p-2 mr-8 flex flex-col justify-between"
                style={{ borderRadius: "12px" }}
              >
                <div className="font-semibold px-2 mb-2">Select Menu</div>
                <div>
                  {menueList.map((item) => {
                    const isActive = selected === item.name;
                    return (
                      <button
                        className={`flex w-[280px] items-center justify-between gap-8 p-2 mb-2 hover:bg-gray-200 rounded-lg ${
                          isActive ? "bg-gray-100" : ""
                        }`}
                        onClick={() => setSelected(item.name)}
                      >
                        <div className="flex items-center gap-2">
                          <div className={`${isActive && "text-[#375DFB]"}`}>
                            {item.icon}
                          </div>
                          <div className={`${isActive && "font-semibold"}`}>
                            {item.name}
                          </div>
                        </div>
                        <div>
                          <KeyboardArrowRightIcon className="border rounded-full" />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </Card>
            </div> */}
            {tab === "change-password" && <ChangePassword />}
            {tab === "privacy-security" && <PrivacySecurity />}
            {tab === "delete-account" && <DeleteAccount />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
