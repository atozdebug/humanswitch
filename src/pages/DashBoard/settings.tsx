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
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

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

const schemaSecond = yup.object().shape({
  currentPassword: yup
    .string()
    .required("Current Password is required")
    .min(8, "Password must be atleast 8 characters long"),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])/,
      "Password must contain at least one lowercase letter"
    )
    .matches(
      /^(?=.*[A-Z])/,
      "Password must contain at least one uppercase letter"
    )
    .matches(/^(?=.*[0-9])/, "Password must contain at least one number")
    .matches(
      /^(?=.*[\W_])/,
      "Password must contain at least one special character"
    )
    .min(8, "Password must be atleast 8 characters long"),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .test(
      "password-match",
      "Confirm password must match password",
      function (value) {
        // Get the password value from the parent form object
        const { password } = this.parent;

        // Check if confirmPassword matches password
        return value === password;
      }
    ),
});

const schemaFifth = yup.object().shape({
  method: yup.string().required("Please select a way to enable 2FA"),
});

const schemaSixth = yup.object().shape({
  passwordDelete: yup
    .string()
    .required("Current Password is required")
    .min(8, "Password must be atleast 8 characters long"),
});

interface FormData {
  currentPassword: string;
  password: string;
  confirmPassword: string;
  method: string;
  passwordDelete: string;
}
const defaultValues = {
  currentPassword: "",
  password: "",
  confirmPassword: "",
  method: "",
  passwordDelete: "",
};

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

  const schemas = () => {
    if (selectedTab === 0) {
    } else if (selectedTab === 1) {
      return yupResolver(schemaSecond);
    } else if (selectedTab === 2) {
    } else if (selectedTab === 3) {
    } else if (selectedTab === 4) {
      return yupResolver(schemaFifth);
    } else if (selectedTab === 5) {
      return yupResolver(schemaSixth);
    }
  };

  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm<FormData | any>({
    resolver: schemas(),
    defaultValues,
  });

  const onSubmit: any = (data: FormData) => {
    console.log("Form data:", data);
    try {
    } catch (error) {
      console.error("Submission error:", error);
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
            {tab === "change-password" && (
              <ChangePassword
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
                register={register}
                errors={errors}
              />
            )}
            {tab === "privacy-security" && (
              <PrivacySecurity
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
                register={register}
                errors={errors}
              />
            )}
            {tab === "delete-account" && (
              <DeleteAccount
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
                register={register}
                errors={errors}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
